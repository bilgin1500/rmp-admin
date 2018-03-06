// Import globals
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';
// Import components
import Icon from 'components/shared/Icon';
import { Label, Text, Button, Checkbox } from 'components/forms/partials/';
import { toggleCheckBoxBg } from 'components/forms/partials/Checkbox';
// Import libraries
import { config, colors } from 'lib/globals';
// Import queries
import artistCreate from 'graphql/artistCreate.gql';
// Import notification
import { addNotif } from 'components/shared/Notification';

const styles = {
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
  name: { width: 'calc(100% - 115px)' },
  isSelected: { width: 40 },
  isSelectedCheckBox: { width: '100%' },
  add: { width: 60 }
};

class ArtistCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { submitting: false };
    this.handleCreate = this.handleCreate.bind(this);
  }

  static propTypes = {
    addNotification: PropTypes.func.isRequired,
    createArtist: PropTypes.func.isRequired,
    error: PropTypes.object
  };

  handleSuccess(data) {
    const response = {
      type: 'success',
      title: 'Artist successfully created',
      data: JSON.stringify(data)
    };
    this.setState({ submitting: false });
    this.props.addNotification(response);
    window.location.href = '/#/manage/artist/' + data.ArtistCreate.id;
  }

  handleError(error) {
    const response = {
      type: 'error',
      title: 'An error occured',
      data: JSON.stringify(error)
    };
    this.setState({ submitting: false });
    this.props.addNotification(response);
  }

  handleCreate(event) {
    event.preventDefault();

    const { createArtist } = this.props;
    const artistName = this.artistName.Input.value;
    const artistIsSelected = this.artistIsSelected.Input.checked;

    if (artistName) {
      this.setState({ submitting: true });
      createArtist({
        name: artistName,
        created_by: config.CURRENT_USER,
        is_selected: artistIsSelected
      })
        .then(({ data }) => {
          this.handleSuccess(data);
        })
        .catch(error => {
          this.handleError(error);
        });
    }

    document.getElementById('artist-create').reset();
    toggleCheckBoxBg(this.artistIsSelected.Input);
  }

  render() {
    const { submitting } = this.state;

    return (
      <form id="artist-create">

        <h2 style={styles.pageTitle}>Add new artist</h2>

        <Label
          title="Name"
          style={Object.assign({}, styles.column, styles.name)}
        >
          <Text
            placeholder="Name of the artist"
            ref={input => (this.artistName = input)}
          />
        </Label>
        <Label
          title="On/Off"
          style={Object.assign({}, styles.column, styles.isSelected)}
        >
          <Checkbox
            ref={input => (this.artistIsSelected = input)}
            style={styles.isSelectedCheckBox}
          />
        </Label>

        <Button
          type="submit"
          value={submitting ? <Icon icon="ei-spinner-3" /> : 'Add'}
          disabled={submitting}
          onClick={this.handleCreate}
          style={Object.assign({}, styles.column, styles.add)}
        />
      </form>
    );
  }
}

export default compose(
  graphql(artistCreate, {
    props: ({ mutate }) => ({
      createArtist: args =>
        mutate({
          variables: { ...args }
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
)(ArtistCreate);
