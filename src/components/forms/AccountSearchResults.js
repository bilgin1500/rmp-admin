// Import globals
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';
import Radium from 'radium';
// Import components
import Icon from 'components/shared/Icon';
import AccountSearchResultItem from 'components/forms/AccountSearchResultItem';
// Import queries
import searchAccounts from 'graphql/searchAccounts.gql';
// Import notification
import { addNotif } from 'components/shared/Notification';
// Import libraries
import { colors } from 'lib/globals';

const styles = {
  sectionWrapper: {
    height: 200,
    overflow: 'scroll'
  },
  sectionSubtitle: {
    color: colors.base1,
    fontSize: 14,
    lineHeight: '16px',
    margin: '15px 0',
    float: 'left'
  },
  sectionText: {
    fontSize: 13,
    lineHeight: '15px',
    marginTop: 0,
    color: colors.base1
  },
  closeButton: {
    display: 'block',
    marginTop: 15,
    fontSize: 11,
    color: colors.base1,
    float: 'right',
    cursor: 'pointer',
    ':hover': {
      color: colors.base2
    }
  },
  clear: { clear: 'both' }
};

class AccountSearchResults extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    refId: PropTypes.string.isRequired,
    refType: PropTypes.string.isRequired,
    refName: PropTypes.string.isRequired,
    account: PropTypes.string.isRequired,
    closeResults: PropTypes.func.isRequired,
    addNotification: PropTypes.func.isRequired,
    error: PropTypes.object,
    loading: PropTypes.bool,
    response: PropTypes.array
  };

  render() {
    const {
      refId,
      refType,
      refName,
      error,
      loading,
      response,
      account,
      closeResults
    } = this.props;
    let responseTitle = `Searching ${account} for ${refName}`;
    let responseBody;

    if (response) {
      if (response.length > 0) {
        responseTitle = `Found ${response.length} accounts for ${refName} on ${account}`;
        responseBody = (
          <div style={response.length > 3 ? styles.sectionWrapper : null}>
            {response.map(item =>
              <AccountSearchResultItem
                key={item.id}
                refId={refId}
                refType={refType}
                itemData={item}
                account={account}
                closeResults={closeResults}
              />
            )}
          </div>
        );
      } else {
        responseBody = (
          <p style={styles.sectionText}>Sorry, no results found.</p>
        );
      }
    }

    if (error) {
      responseTitle = 'Ooops! Something went wrong.';
      responseBody = (
        <p style={styles.sectionText}>
          {JSON.stringify(error)}
        </p>
      );
    }

    if (loading) {
      responseBody = <Icon icon="ei-spinner-3" />;
    }

    if (response || loading || error) {
      return (
        <div>
          <h4 style={styles.sectionSubtitle}>
            {responseTitle}
          </h4>
          <a onClick={closeResults} style={styles.closeButton}>
            <Icon icon="ei-close-o" />
          </a>
          <div style={styles.clear} />
          {responseBody}
        </div>
      );
    }

    return null;
  }
}

export default compose(
  graphql(searchAccounts, {
    props: ({ data: { error, loading, response } }) => {
      return { error, loading, response };
    },
    options: props => {
      return {
        variables: {
          account: props.account,
          keyword: props.refName,
          type: props.refType
        }
      };
    }
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
)(AccountSearchResults);
