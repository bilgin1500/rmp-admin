// Import globals
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

// Import components
import List from 'components/pages/List';
import ArtistSingle from 'components/forms/ArtistSingle';
import ArtistCreate from 'components/forms/ArtistCreate';

class Manage extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object
  };
  render() {
    const { type, typeId } = this.props.match.params;
    const { search } = this.props.location;

    if (type && !typeId) {
      return <List type={type} filter={search} />;
      // https://stackoverflow.com/questions/18082/validate-decimal-numbers-in-javascript-isnumeric
    } else if (type && !isNaN(parseFloat(typeId)) && isFinite(typeId)) {
      return <ArtistSingle id={typeId} />;
    } else if (type && typeId === 'add') {
      return <ArtistCreate />;
    } else {
      return (
        <div>
          <Helmet title="Manage" />
          <h2>Manage Home</h2>
          <p>Manage the database</p>
        </div>
      );
    }
  }
}

export default Manage;
