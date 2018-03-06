// Import globals
import React from 'react';
import PropTypes from 'prop-types';
// Import components
import AlbumCreate from 'components/forms/AlbumCreate';
import AlbumSingle from 'components/forms/AlbumSingle';
// Import libraries
import { string } from 'lib/helpers';
import { colors } from 'lib/globals';

const styles = {
  wrapper: {
    display: 'inline-block',
    width: 'calc(100% - 130px)',
    verticalAlign: 'bottom'
  },
  sectionTitle: {
    color: colors.base1,
    fontSize: 17,
    lineHeight: '19px',
    margin: '25px 0 10px 0'
  },
  createNewTitle: {
    color: colors.base1,
    fontSize: 15,
    lineHeight: '15px',
    margin: '15px 0 10px 0'
  }
};

const AlbumsWrapper = props => (
  <div>
    <h3 style={styles.sectionTitle}>
      {string.toTitleCase(props.title)}
    </h3>
    {props.defaults &&
      props.defaults.map(album => (
        <AlbumSingle
          {...album}
          key={album.id}
          refType={props.refType}
          refId={props.refId}
        />
      ))}
    <h4 style={styles.createNewTitle}>Create new album</h4>
    <AlbumCreate refType={props.refType} refId={props.refId} />
  </div>
);

AlbumsWrapper.propTypes = {
  refType: PropTypes.string,
  refId: PropTypes.string,
  title: PropTypes.string,
  defaults: PropTypes.array
};

export default AlbumsWrapper;
