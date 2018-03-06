// Import globals
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';
// Import components
import Icon from 'components/shared/Icon';
import { Text, Button, Select } from 'components/forms/partials/';
import AccountGetResults from 'components/forms/AccountGetResults';
// Import libraries
import { config, colors, accounts } from 'lib/globals';
// Import queries
import accountUpdate from 'graphql/accountUpdate.gql';
import accountDelete from 'graphql/accountDelete.gql';
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
    marginBottom: 3,
    verticalAlign: 'bottom',
    position: 'relative'
  },
  name: { width: 130 },
  uuid: { width: 'calc(100% - 245px)' },
  uuidShort: { width: 'calc(100% - 468px)' },
  delete: { width: 40 },
  save: { width: 60 },
  accActionButton: { width: 220 }
};

class AccountSingle extends Component {
  constructor(props) {
    super(props);
    this.state = { submitting: false, getting: false, account: '' };
    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  static propTypes = {
    refId: PropTypes.string.isRequired,
    refType: PropTypes.string.isRequired,
    refName: PropTypes.string.isRequired,
    id: PropTypes.string,
    name: PropTypes.string,
    uuid: PropTypes.string,
    created_at: PropTypes.string,
    created_by: PropTypes.string,
    updated_at: PropTypes.string,
    updated_by: PropTypes.string,
    addNotification: PropTypes.func.isRequired,
    saveAccount: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    error: PropTypes.object
  };

  handleSuccess(data, title) {
    const response = {
      type: 'success',
      title: title,
      data: JSON.stringify(data)
    };
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

  handleSave(event) {
    event.preventDefault();

    const { submitting } = this.state;
    const { saveAccount, refId, refType, name, uuid } = this.props;
    const accountName = this.accountName.Input.value;
    const accountUuid = this.accountUuid.Input.value;

    if (!submitting && accountName && accountUuid) {
      this.setState({ submitting: true });
      saveAccount({
        name: accountName,
        uuid: accountUuid,
        ref_id: refId,
        ref_type: refType,
        updated_by: config.CURRENT_USER
      })
        .then(({ data }) => {
          this.handleSuccess(data, 'Account successfully saved');
          this.setState({ submitting: false });
        })
        .catch(error => {
          this.handleError(error);
        });
    } else {
      this.accountName.Input.value = name;
      this.accountUuid.Input.value = uuid;
    }
  }

  handleDelete() {
    const { submitting } = this.state;
    const { deleteAccount, id } = this.props;

    if (!submitting) {
      this.setState({ submitting: true });
      deleteAccount({ id: id })
        .then(({ data }) => {
          this.handleSuccess(data, 'Account successfully deleted');
        })
        .catch(error => {
          this.handleError(error);
        });
    }
  }

  render() {
    const {
      refId,
      refType,
      refName,
      id,
      name,
      uuid,
      created_at,
      created_by,
      updated_at,
      updated_by
    } = this.props;
    const { submitting } = this.state;
    let isThereAnyAccountActionAvailable = false;

    const AccountActionButton = accounts
      .filter(account => account.name === name)
      .map(account => {
        return account.methods
          .filter(
            method =>
              method.slug === 'get' &&
              method.valid_for.indexOf(this.props.refType) != -1
          )
          .map(({ name, cronable }, i) => {
            isThereAnyAccountActionAvailable = true;
            return (
              <Button
                key={i}
                style={styles.accActionButton}
                disabled={cronable}
                value={name}
                onClick={() => {
                  this.setState({
                    ...this.state,
                    getting: true,
                    account: account.name
                  });
                }}
              />
            );
          });
      });

    return (
      <form onSubmit={this.handleSave} id={`acc-${id}-update-in-${refType}`}>
        <Select
          options={accounts.map(a => a.name)}
          defaultValue={name}
          ref={input => (this.accountName = input)}
          style={Object.assign({}, styles.column, styles.name)}
        />
        <Text
          placeholder="Account's unique ID"
          defaultValue={uuid}
          ref={input => (this.accountUuid = input)}
          style={Object.assign(
            {},
            styles.column,
            styles.uuid,
            isThereAnyAccountActionAvailable && styles.uuidShort
          )}
        />
        <div style={styles.column}>
          {AccountActionButton}
          {this.state.getting &&
            <AccountGetResults
              refId={refId}
              refType={refType}
              refName={refName}
              account={this.state.account}
              uuid={uuid}
              closeResults={this.closeResults}
            />}
        </div>
        <Button
          value={<Icon icon="ei-trash" />}
          onClick={this.handleDelete}
          style={Object.assign({}, styles.column, styles.delete)}
        />
        <Button
          type="submit"
          value={submitting ? <Icon icon="ei-spinner-3" /> : 'Save'}
          disabled={submitting}
          onClick={this.handleSave}
          style={Object.assign({}, styles.column, styles.save)}
          title={`Created ${created_at} by ${created_by}.Updated ${updated_at} by ${updated_by}`}
        />
      </form>
    );
  }
}

export default compose(
  graphql(accountUpdate, {
    props: ({ ownProps, mutate }) => ({
      saveAccount: args =>
        mutate({
          variables: { id: ownProps.id, ...args }
        })
    })
  }),
  graphql(accountDelete, {
    props: ({ ownProps, mutate }) => ({
      deleteAccount: args =>
        mutate({
          variables: { id: ownProps.id, ...args }
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
)(AccountSingle);
