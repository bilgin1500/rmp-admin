// Import globals
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';
// Import components
import Icon from 'components/shared/Icon';
import { Text, Button, Select } from 'components/forms/partials/';
// Import libraries
import { config, colors, accounts } from 'lib/globals';
// Import queries
import accountCreate from 'graphql/accountCreate.gql';
// Import notification
import { addNotif } from 'components/shared/Notification';

const styles = {
  sectionTitle: {
    color: colors.base1,
    fontSize: 15,
    lineHeight: '17px',
    margin: '25px 0 10px 0'
  },
  column: {
    display: 'inline-block',
    marginRight: 3,
    verticalAlign: 'bottom'
  },
  name: { width: 130 },
  uuid: { width: 'calc(100% - 245px)' },
  add: { width: 103 }
};

class AccountCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { submitting: false };
    this.handleCreate = this.handleCreate.bind(this);
  }

  static propTypes = {
    refType: PropTypes.string,
    refId: PropTypes.string,
    addNotification: PropTypes.func.isRequired,
    createAccount: PropTypes.func.isRequired,
    error: PropTypes.object
  };

  handleSuccess(data) {
    const response = {
      type: 'success',
      title: 'Account successfully created',
      data: JSON.stringify(data)
    };
    this.setState({ submitting: false });
    this.props.addNotification(response);
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

  handleCreate() {
    const { createAccount, refId, refType } = this.props;
    const accountName = this.accountName.Input.value;
    const accountUuid = this.accountUuid.Input.value;

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

    document.getElementById(`acc-create-in-${refType}-${refId}`).reset();
  }

  render() {
    const { refType, refId } = this.props;
    const { submitting } = this.state;

    return (
      <form id={`acc-create-in-${refType}-${refId}`}>
        <Select
          options={accounts.map(a => a.name)}
          ref={input => (this.accountName = input)}
          style={Object.assign({}, styles.column, styles.name)}
        />
        <Text
          placeholder="Account's unique ID"
          ref={input => (this.accountUuid = input)}
          style={Object.assign({}, styles.column, styles.uuid)}
        />
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
  )
)(AccountCreate);
