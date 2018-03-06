// Import globals
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
// Import components
import { Label, Button } from 'components/forms/partials/';
import AccountCreate from 'components/forms/AccountCreate';
import AccountSingle from 'components/forms/AccountSingle';
import AccountSearchResults from 'components/forms/AccountSearchResults';
// Import libraries
import { string } from 'lib/helpers';
import { colors, accounts } from 'lib/globals';

const styles = {
  wrapper: {
    display: 'inline-block'
  },
  innerWrapper: {
    position: 'absolute',
    backgroundColor: colors.base4,
    boxShadow: '0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)',
    zIndex: 1,
    padding: 10,
    marginTop: 3,
    left: 20,
    right: 20
  },
  sectionTitle: {
    color: colors.base1,
    fontSize: 15,
    lineHeight: '17px',
    margin: 0
  },
  sectionSubtitle: {
    color: colors.base1,
    fontSize: 14,
    lineHeight: '16px',
    margin: '15px 0'
  },
  sectionSubtitle2: {
    margin: '15px 0 10px 0',
    clear: 'both'
  },
  searchButton: {
    marginRight: 3,
    marginBottom: 3
  },
  toggle: { width: 155 },
  column: {
    display: 'inline-block',
    marginRight: 3,
    verticalAlign: 'bottom'
  },
  name: { width: 130 },
  uuid: { width: 'calc(100% - 240px)' },
  add: { width: 98 }
};

@Radium
export default class AccountsWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      search: { active: false, results: false, account: '' }
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.startSearch = this.startSearch.bind(this);
    this.stopSearch = this.stopSearch.bind(this);
    this.closeResults = this.closeResults.bind(this);
  }

  static propTypes = {
    refId: PropTypes.string.isRequired,
    refType: PropTypes.string.isRequired,
    refName: PropTypes.string.isRequired,
    defaults: PropTypes.array
  };

  toggleVisibility(event) {
    event.preventDefault();
    this.setState({ visible: !this.state.visible });
    this.closeResults();
  }

  startSearch(account) {
    this.setState({
      search: {
        ...this.state.search,
        processing: true,
        results: true,
        account: account
      }
    });
    this.stopSearch();
  }

  stopSearch() {
    setTimeout(() => {
      this.setState({
        search: { ...this.state.search, processing: false }
      });
    }, 1000);
  }

  closeResults() {
    this.setState({
      search: {
        ...this.state.search,
        results: false,
        account: '',
        processing: false
      }
    });
  }

  render() {
    const accountNumber = this.props.defaults ? this.props.defaults.length : 0;

    const SearchButtons = accounts.map(({ name, methods }, i) => {
      const accountName = name;
      return methods
        .filter(
          method =>
            method.slug === 'search' &&
            method.valid_for.indexOf(this.props.refType) != -1
        )
        .map(({ name }, j) => {
          return (
            <Button
              key={i + j}
              style={styles.searchButton}
              disabled={this.state.search.processing}
              value={name}
              onClick={() => this.startSearch(accountName)}
            />
          );
        });
    });

    return (
      <div style={styles.wrapper}>
        <Button
          style={styles.toggle}
          value={
            (this.state.visible ? 'Hide Accounts' : 'Show Accounts') +
              ' (' +
              accountNumber +
              ')'
          }
          onClick={this.toggleVisibility}
        />
        {this.state.visible &&
          <div style={styles.innerWrapper}>
            {this.props.refName &&
              <h3 style={styles.sectionTitle}>
                {`${string.toTitleCase(this.props.refName)}'s Accounts`}
              </h3>}
            <h4 style={styles.sectionSubtitle}>Account Search</h4>
            {SearchButtons}
            {this.state.search.results &&
              <AccountSearchResults
                refId={this.props.refId}
                refType={this.props.refType}
                refName={this.props.refName}
                account={this.state.search.account}
                closeResults={this.closeResults}
              />}
            <h4
              style={Object.assign(
                {},
                styles.sectionSubtitle,
                styles.sectionSubtitle2
              )}
            >
              Manual Management
            </h4>
            <Label
              title="Account Name"
              style={Object.assign({}, styles.column, styles.name)}
            />
            <Label
              title="Account's UUID"
              style={Object.assign({}, styles.column, styles.add)}
            />
            {this.props.defaults &&
              this.props.defaults.map(account => (
                <AccountSingle
                  {...account}
                  key={account.id}
                  refId={this.props.refId}
                  refType={this.props.refType}
                  refName={this.props.refName}
                />
              ))}
            <AccountCreate
              refId={this.props.refId}
              refType={this.props.refType}
            />
          </div>}
      </div>
    );
  }
}
