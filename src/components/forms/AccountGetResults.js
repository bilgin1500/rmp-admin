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
import getAccountContent from 'graphql/getAccountContent.gql';
// Import notification
import { addNotif } from 'components/shared/Notification';
// Import libraries
import { colors } from 'lib/globals';

const styles = {
  sectionWrapper: {
    height: 300,
    width: 300,
    left: 0,
    padding: 10,
    position: 'absolute',
    backgroundColor: colors.base5,
    boxShadow: '0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)'
  },
  sectionSubtitle: {
    color: colors.base1,
    fontSize: 14,
    lineHeight: '16px',
    margin: '0 0 15px 0',
    float: 'left'
  },
  sectionText: {
    fontSize: 13,
    lineHeight: '15px',
    marginTop: 0,
    color: colors.base1,
    wordBreak: 'break-word'
  },
  closeButton: {
    display: 'block',
    fontSize: 11,
    color: colors.base1,
    float: 'right',
    cursor: 'pointer',
    ':hover': {
      color: colors.base2
    }
  },
  resultsWrapper: {
    height: 200,
    overflow: 'scroll'
  },
  clear: { clear: 'both' }
};

class AccountGetResults extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    refId: PropTypes.string.isRequired,
    refType: PropTypes.string.isRequired,
    refName: PropTypes.string.isRequired,
    account: PropTypes.string.isRequired,
    uuid: PropTypes.string.isRequired,
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
      error,
      loading,
      response,
      account,
      closeResults
    } = this.props;
    let responseOutput;

    if (response) {
      if (response.length > 0) {
        responseOutput = (
          <div style={response.length > 3 ? styles.resultsWrapper : null}>
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
        responseOutput = (
          <p style={styles.sectionText}>Sorry, no results found.</p>
        );
      }
    }

    if (response || loading || error) {
      return (
        <div style={styles.sectionWrapper}>
          <h4 style={styles.sectionSubtitle}>Search Results</h4>
          <a onClick={closeResults} style={styles.closeButton}>
            <Icon icon="ei-close-o" />
          </a>
          <div style={styles.clear} />
          {error &&
            <p style={styles.sectionText}>
              {JSON.stringify(error)}
            </p>}
          {loading && <Icon icon="ei-spinner-3" />}
          {!loading && responseOutput}
        </div>
      );
    }

    return null;
  }
}

export default compose(
  graphql(getAccountContent, {
    props: ({ data: { error, loading, response } }) => {
      return { error, loading, response };
    },
    options: props => {
      return {
        variables: {
          account: props.account,
          uuid: props.uuid,
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
)(AccountGetResults);
