// Import globals
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, compose } from 'react-apollo';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import update from 'immutability-helper';
// Import components
import { Icon } from 'components/shared/';
import { Label, Text, Button, Checkbox } from 'components/forms/partials/';
import { toggleCheckBoxBg } from 'components/forms/partials/Checkbox';
import Accounts from 'components/forms/Accounts';
import Albums from 'components/forms/Albums';
// Import libraries
import { string } from 'lib/helpers';
import { config, colors } from 'lib/globals';
// Import queries
import artistById from 'graphql/artistById.gql';
import artistUpdate from 'graphql/artistUpdate.gql';
// Import notification
import { addNotif } from 'components/shared/Notification';

const styles = {
  wrapper: {
    display: 'inline-block',
    width: 'calc(100% - 155px)',
    verticalAlign: 'bottom'
  },
  pageTitle: {
    color: colors.base1,
    fontSize: 19,
    lineHeight: '37px',
    margin: 0
  },
  column: {
    display: 'inline-block',
    marginRight: 3,
    verticalAlign: 'bottom'
  },
  name: { width: 'calc(100% - 152px)' },
  isSelected: { width: 40 },
  isSelectedCheckBox: { width: '100%' },
  delete: { width: 40 },
  save: { width: 60 }
};

export class Artist extends Component {
  constructor(props) {
    super(props);
    this.state = { submitting: false };
    this.handleSave = this.handleSave.bind(this);
  }

  static propTypes = {
    id: PropTypes.string.isRequired,
    submit: PropTypes.func.isRequired,
    error: PropTypes.object,
    loading: PropTypes.bool,
    response: PropTypes.object,
    addNotification: PropTypes.func.isRequired
  };

  handleSave(event) {
    event.preventDefault();

    const { submitting } = this.state;
    const { submit, addNotification, response } = this.props;
    const artistName = this.artistName.Input.value;
    const artistIsSelected = this.artistIsSelected.Input.checked;

    if (!submitting && artistName) {
      this.setState({ submitting: true });

      submit({
        name: artistName,
        is_selected: artistIsSelected,
        updated_by: config.CURRENT_USER
      })
        .then(({ data }) => {
          const result = {
            type: 'success',
            title: 'Artist successfully saved',
            data: JSON.stringify(data)
          };
          this.setState({ submitting: false });
          addNotification(result);
        })
        .catch(error => {
          const result = {
            type: 'error',
            title: 'An error occured',
            data: JSON.stringify(error)
          };
          this.setState({ submitting: false });
          addNotification(result);
        });
    } else {
      this.artistName.Input.value = response.name;
      this.artistIsSelected.Input.checked = response.is_selected === 0
        ? false
        : true;
      toggleCheckBoxBg(this.artistIsSelected.Input);
    }
  }

  handleDelete(event) {
    event.preventDefault();
  }

  render() {
    const { id, error, response } = this.props;
    const { submitting } = this.state;

    if (error) {
      return <Redirect to={{ pathname: '/manage/artists/' }} />;
    }

    if (response) {
      return (
        <div>
          <Helmet title={string.toTitleCase(response.name)} />

          <h2 style={styles.pageTitle}>
            {string.toTitleCase(response.name)}
          </h2>

          <form onSubmit={this.handleSave} style={styles.wrapper}>
            <Label
              title="Name"
              style={Object.assign({}, styles.column, styles.name)}
            >
              <Text
                placeholder="Name of the artist"
                defaultValue={response.name}
                ref={input => (this.artistName = input)}
              />
            </Label>
            <Label
              title="On/Off"
              style={Object.assign({}, styles.column, styles.isSelected)}
            >
              <Checkbox
                defaultChecked={response.is_selected}
                ref={input => (this.artistIsSelected = input)}
                style={styles.isSelectedCheckBox}
              />
            </Label>
            <Button
              value={<Icon icon="ei-trash" />}
              onClick={this.handleDelete}
              style={Object.assign({}, styles.column, styles.delete)}
              disabled={response.is_selected}
            />
            <Button
              type="submit"
              value={submitting ? <Icon icon="ei-spinner-3" /> : 'Save'}
              disabled={submitting}
              onClick={this.handleSave}
              style={Object.assign({}, styles.column, styles.save)}
              title={`Created ${response.created_at} by ${response.created_by}.Updated ${response.updated_at} by ${response.updated_by}`}
            />
          </form>
          <Accounts
            defaults={response.accounts}
            refName={response.name}
            refType="artists"
            refId={id}
          />
          <Albums
            title="Albums"
            defaults={response.albums}
            refType="artists"
            refId={id}
          />
        </div>
      );
    }

    return <Icon icon="ei-spinner-3" />;
  }
}

export default compose(
  graphql(artistById, {
    options: props => {
      return {
        variables: { id: props.id },
        reducer: (previousResult, action) => {
          let nextResult;
          const opName = action.operationName;

          const findAlbumIndex = byThis =>
            previousResult.response.albums.findIndex(i => i.id == byThis);

          if (
            action.type === 'APOLLO_MUTATION_RESULT' &&
            (!opName.includes('Artist') &&
              (opName.includes('Create') || opName.includes('Delete')))
          ) {
            const returningData = action.result.data[opName];

            switch (opName) {
              case 'AlbumCreate':
                nextResult = {
                  response: { albums: { $push: [returningData] } }
                };
                break;
              case 'AlbumDelete':
                nextResult = {
                  response: {
                    albums: {
                      $splice: [[findAlbumIndex(returningData.id), 1]]
                    }
                  }
                };
                break;
              case 'AccountCreate':
                if (returningData.ref_type === 'albums') {
                  nextResult = {
                    response: {
                      albums: {
                        [findAlbumIndex(returningData.ref_id)]: {
                          accounts: {
                            [Array.isArray(
                              previousResult.response.albums[
                                findAlbumIndex(returningData.ref_id)
                              ].accounts
                            )
                              ? '$push'
                              : '$set']: [returningData]
                          }
                        }
                      }
                    }
                  };
                } else if (returningData.ref_type === 'artists') {
                  nextResult = {
                    response: { accounts: { $push: [returningData] } }
                  };
                }
                break;
              case 'AccountDelete':
                if (returningData.ref_type === 'albums') {
                  nextResult = {
                    response: {
                      albums: {
                        [findAlbumIndex(returningData.ref_id)]: {
                          accounts: {
                            $splice: [
                              [
                                previousResult.response.albums[
                                  [findAlbumIndex(returningData.ref_id)]
                                ].accounts.findIndex(
                                  i => i.id == returningData.id
                                ),
                                1
                              ]
                            ]
                          }
                        }
                      }
                    }
                  };
                } else if (returningData.ref_type === 'artists') {
                  nextResult = {
                    response: {
                      accounts: {
                        $splice: [
                          [
                            previousResult.response.accounts.findIndex(
                              i => i.id == returningData.id
                            ),
                            1
                          ]
                        ]
                      }
                    }
                  };
                }
                break;
              case 'TrackCreate':
                nextResult = {
                  response: {
                    albums: {
                      [findAlbumIndex(returningData.album_id)]: {
                        tracks: {
                          [Array.isArray(
                            previousResult.response.albums[
                              findAlbumIndex(returningData.album_id)
                            ].tracks
                          )
                            ? '$push'
                            : '$set']: [returningData]
                        }
                      }
                    }
                  }
                };
                break;
              case 'TrackDelete':
                nextResult = {
                  response: {
                    albums: {
                      [findAlbumIndex(returningData.album_id)]: {
                        tracks: {
                          $splice: [
                            [
                              previousResult.response.albums[
                                [findAlbumIndex(returningData.album_id)]
                              ].tracks.findIndex(i => i.id == returningData.id),
                              1
                            ]
                          ]
                        }
                      }
                    }
                  }
                };
                break;
            }

            return update(previousResult, nextResult);
          }

          return previousResult;
        }
      };
    },
    props: ({ data: { error, loading, response } }) => {
      return { error, loading, response };
    }
  }),
  graphql(artistUpdate, {
    props: ({ ownProps, mutate }) => ({
      submit: args =>
        mutate({
          variables: {
            id: ownProps.id,
            ...args
          }
        })
    })
  }),
  connect(
    state => ({ notifications: state.notifications }),
    dispatch => ({
      addNotification(notifObj) {
        dispatch(addNotif(notifObj));
      }
    })
  )
)(Artist);
