// Import globals
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';
import Radium from 'radium';
// Import components
import Icon from 'components/shared/Icon';
import { Button } from 'components/forms/partials/';
// Import libraries
import { config, colors } from 'lib/globals';
// Import queries
import accountCreate from 'graphql/accountCreate.gql';
// Import notification
import { addNotif } from 'components/shared/Notification';

const styles = {
  cardWrapper: {
    backgroundColor: colors.base6,
    marginBottom: 10
  },
  cardImage: {
    float: 'left',
    width: 100,
    height: 'auto',
    margin: 10
  },
  cardContent: {
    width: 'calc(100% - 120px)',
    marginLeft: 120,
    padding: 10
  },
  cardTitle: {
    marginTop: 0,
    marginBottom: 12,
    fontSize: 15,
    lineHeight: '17px',
    color: colors.base1
  },
  cardTitleLink: {
    color: colors.base1,
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline'
    }
  },
  cardText: {
    marginTop: 0,
    marginBottom: 3,
    fontSize: 11,
    lineHeight: '13px',
    color: colors.base1,
    maxWidth: 'calc(100% - 150px)'
  },
  cardAdd: {
    float: 'right'
  },
  noImage: {
    width: 100,
    height: 100,
    backgroundColor: 'rgba(0,0,0,0.2)'
  },
  noImageText: {
    fontSize: 9,
    lineHeight: '11px',
    textAlign: 'center',
    marginTop: 40,
    color: 'rgba(0,0,0,0.4)'
  },
  clear: { clear: 'both' }
};

class AccountSearchResultItem extends Component {
  constructor(props) {
    super(props);
    this.state = { submitting: false };
    this.handleCreate = this.handleCreate.bind(this);
  }

  static propTypes = {
    refId: PropTypes.string.isRequired,
    refType: PropTypes.string.isRequired,
    closeResults: PropTypes.func.isRequired,
    itemData: PropTypes.object.isRequired,
    account: PropTypes.string.isRequired,
    addNotification: PropTypes.func.isRequired,
    createAccount: PropTypes.func.isRequired
  };

  handleSuccess(data) {
    const response = {
      type: 'success',
      title: 'Account successfully added',
      data: JSON.stringify(data)
    };
    this.setState({ submitting: false });
    this.props.addNotification(response);
    this.props.closeResults();
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

  handleCreate(accountName, accountUuid) {
    const { createAccount, refId, refType } = this.props;

    if (accountName && accountUuid) {
      this.setState({ submitting: true });
      createAccount({
        name: accountName,
        uuid: accountUuid,
        ref_id: refId,
        ref_type: refType,
        created_by: config.CURRENT_USER
      })
        .then(({ data }) => {
          this.handleSuccess(data);
        })
        .catch(error => {
          this.handleError(error);
        });
    }
  }

  render() {
    const { account, itemData: { id, name, url, image, detail } } = this.props;

    return (
      <div style={styles.cardWrapper}>
        {image
          ? <img style={styles.cardImage} src={image} />
          : <div style={[styles.cardImage, styles.noImage]}>
              <p style={styles.noImageText}>No image available</p>
            </div>}
        <div style={styles.cardContent}>
          <Button
            type="submit"
            value={
              this.state.submitting
                ? <Icon icon="ei-spinner-3" />
                : 'Add to Accounts'
            }
            disabled={this.state.submitting}
            onClick={() => this.handleCreate(account, id)}
            style={styles.cardAdd}
          />
          <h5 style={styles.cardTitle}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.cardTitleLink}
            >
              {name}
            </a>
          </h5>
          <p
            style={styles.cardText}
            dangerouslySetInnerHTML={{ __html: detail }}
          />
        </div>
        <div style={styles.clear} />
      </div>
    );
  }
}

export default compose(
  graphql(accountCreate, {
    props: ({ mutate }) => ({
      createAccount: args =>
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
  ),
  Radium()
)(AccountSearchResultItem);
