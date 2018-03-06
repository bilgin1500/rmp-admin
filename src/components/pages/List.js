// Import globals
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Radium from 'radium';
import qs from 'query-string';
import { graphql, compose } from 'react-apollo';
import { Link as ReactRouterLink } from 'react-router-dom';
const Link = Radium(ReactRouterLink);
// Import components
import Icon from 'components/shared/Icon';
import Button from 'components/forms/partials/Button';
// Import libraries
import { config, colors } from 'lib/globals';
import { string } from 'lib/helpers';
// Import queries
import artistsPaged from 'graphql/artistsPaged.gql';

// Styles of the list view
const styles = {
  header: {
    marginBottom: 20
  },
  pageTitle: {
    color: colors.base1,
    float: 'left',
    fontSize: 19,
    lineHeight: '37px',
    margin: 0
  },
  pagination: {
    float: 'right'
  },
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0
  },
  column: {
    display: 'inline-block',
    fontSize: 15,
    lineHeight: '17px',
    padding: 5,
    verticalAlign: 'top'
  },
  columnId: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    fontSize: 11,
    opacity: 0.5,
    textAlign: 'right',
    width: 50
  },
  columnName: {
    fontWeight: 700,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: 'calc(100% - 60px)'
  },
  listLink: {
    color: colors.base1,
    display: 'block',
    ':hover': {
      backgroundColor: colors.base2
    }
  },
  nothingFound: {
    fontSize: 15,
    lineHeight: '17px',
    color: colors.base1
  },
  cf: {
    clear: 'both',
    content: '',
    display: 'block'
  }
};

const ListWrapper = props => (
  <div>
    <Helmet title={string.toTitleCase(props.type)} />
    <Header {...props} />
    <div>
      {props.loading
        ? <Icon icon="ei-spinner-3" />
        : props.pageInfo.rowCount > 0
            ? <List {...props} />
            : <p style={styles.nothingFound}>Nothing found</p>}
    </div>
  </div>
);

const Header = props => (
  <div style={styles.header}>
    <h2 style={styles.pageTitle}>
      {string.toTitleCase(props.type)}
      {' '}
      {!props.loading &&
        props.pageInfo.rowCount > 0 &&
        <span>({props.pageInfo.rowCount})</span>}
    </h2>
    {!props.loading &&
      props.pageInfo.pageCount > 1 &&
      <Pagination {...props} />}
    <div style={styles.cf} />
  </div>
);

const Pagination = props => (
  <div style={styles.pagination}>
    <Button
      name="pagePrev"
      value={<Icon icon="ei-chevron-left" />}
      onClick={() => props.loadPage(props.pageInfo.page - 1)}
    />
    {props.pageInfo.page} / {props.pageInfo.pageCount}
    <Button
      name="pageNext"
      value={<Icon icon="ei-chevron-right" />}
      onClick={() => props.loadPage(props.pageInfo.page + 1)}
    />
  </div>
);

const List = props => (
  <ul style={styles.list}>
    {props.artists.map(listItem => (
      <li key={listItem.id}>
        <Link
          style={styles.listLink}
          to={{
            pathname: '/manage/' + props.type + '/' + listItem.id
          }}
        >
          <div style={[styles.column, styles.columnId]}>
            {listItem.id}
          </div>
          {listItem.name &&
            <div style={[styles.column, styles.columnName]}>
              {listItem.name}
            </div>}
        </Link>
      </li>
    ))}
  </ul>
);

Header.propTypes = List.propTypes = Pagination.propTypes = ListWrapper.propTypes = {
  type: PropTypes.oneOf(['artists', 'albums']).isRequired,
  filter: PropTypes.string,
  error: PropTypes.object,
  loading: PropTypes.bool,
  pageInfo: PropTypes.object,
  artists: PropTypes.array,
  loadPage: PropTypes.func
};

// Wrap with higher order functions using Apollo's compose
// see http://dev.apollodata.com/react/api.html#compose
export default compose(
  graphql(artistsPaged, {
    skip: props => props.type !== 'artists',
    options: props => {
      const isSelected = parseInt(qs.parse(props.filter).isSelected);

      return {
        variables: {
          query: { isSelected: isSelected },
          pageSize: config.ITEMS_PER_PAGE
        },
        fetchPolicy: 'cache-and-network'
      };
    },
    props: ({
      data: { error, loading, response: { pageInfo, artists } = {}, fetchMore }
    }) => {
      return {
        error,
        loading,
        pageInfo,
        artists,
        loadPage(page) {
          if (page > 0 && page <= pageInfo.pageCount) {
            return fetchMore({
              variables: {
                page: page
              },
              updateQuery: (previousResult, { fetchMoreResult }) => {
                return {
                  response: {
                    pageInfo: fetchMoreResult.response.pageInfo,
                    artists: fetchMoreResult.response.artists
                  }
                };
              }
            });
          }
        }
      };
    }
  }),
  Radium()
)(ListWrapper);
