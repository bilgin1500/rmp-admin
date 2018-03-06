// Import globals
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import Dragula from 'react-dragula';
import 'react-dragula/dist/dragula.css';
// Import components
import { Label } from 'components/forms/partials/';
import TrackCreate from 'components/forms/TrackCreate';
import TrackSingle from 'components/forms/TrackSingle';
// Import queries
import trackUpdate from 'graphql/trackUpdate.gql';
// Import libraries
import { string } from 'lib/helpers';
import { colors } from 'lib/globals';

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
  order: { width: 40 },
  name: { width: 'calc(100% - 198px)' },
  isSelected: { width: 40 }
};

class TracksWrapper extends Component {
  static propTypes = {
    albumId: PropTypes.string,
    title: PropTypes.string,
    defaults: PropTypes.array,
    saveTrack: PropTypes.func.isRequired
  };

  dragulaDecorator = componentBackingInstance => {
    if (componentBackingInstance) {
      const drake = Dragula([componentBackingInstance], {
        moves: function(el, container, handle) {
          return (
            handle.classList.contains('handle') ||
            handle.tagName == 'svg' ||
            handle.tagName == 'use'
          );
        }
      });
      drake.on('drop', () => {
        const children = [...drake.containers[0].childNodes];
        const newOrder = children.map(el => el.dataset.id);
        newOrder.map((val, i) => {
          console.log(val, i);
        });

        /*
            
          saveTrack({
            name: trackName,
            album_id: albumId,
            updated_by: config.CURRENT_USER,
            is_selected: trackIsSelected
          })
            .then(({ data }) => {
              this.handleSuccess(data, 'Track successfully saved');
              this.setState({ submitting: false });
            })
            .catch(error => {
              this.handleError(error);
            });


         */
      });
    }
  };

  render() {
    return (
      <div>
        {this.props.title &&
          <h3 style={styles.sectionTitle}>
            {string.toTitleCase(this.props.title)}
          </h3>}
        <Label
          title="Order"
          style={Object.assign({}, styles.column, styles.order)}
        />
        <Label
          title="Track Name"
          style={Object.assign({}, styles.column, styles.name)}
        />
        <Label
          title="On/Off"
          style={Object.assign({}, styles.column, styles.isSelected)}
        />
        {this.props.defaults &&
          <div className="container" ref={this.dragulaDecorator}>
            {this.props.defaults.map(track => (
              <TrackSingle
                {...track}
                key={track.id}
                albumId={this.props.albumId}
              />
            ))}
          </div>}
        <TrackCreate
          albumId={this.props.albumId}
          lastTrackNum={this.props.defaults ? this.props.defaults.length : 0}
        />
      </div>
    );
  }
}

export default compose(
  graphql(trackUpdate, {
    props: ({ ownProps, mutate }) => ({
      saveTrack: args =>
        mutate({
          variables: { id: ownProps.id, ...args }
        })
    })
  })
)(TracksWrapper);
