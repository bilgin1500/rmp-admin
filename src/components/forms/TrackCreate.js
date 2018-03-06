// Import globals
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';
// Import components
import Icon from 'components/shared/Icon';
import { Text, Button, Checkbox } from 'components/forms/partials/';
import { toggleCheckBoxBg } from 'components/forms/partials/Checkbox';
// Import libraries
import { config } from 'lib/globals';
// Import queries
import trackCreate from 'graphql/trackCreate.gql';
// Import notification
import { addNotif } from 'components/shared/Notification';

const styles = {
  column: {
    display: 'inline-block',
    marginRight: 3,
    verticalAlign: 'bottom'
  },
  name: {
    width: 'calc(100% - 198px)',
    marginLeft: 43
  },
  isSelected: { width: 40 },
  add: { width: 103 }
};

class TrackCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { submitting: false };
    this.handleCreate = this.handleCreate.bind(this);
  }

  static propTypes = {
    albumId: PropTypes.string,
    lastTrackNum: PropTypes.number,
    addNotification: PropTypes.func.isRequired,
    createTrack: PropTypes.func.isRequired,
    error: PropTypes.object
  };

  handleSuccess(data) {
    const response = {
      type: 'success',
      title: 'Track successfully created',
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

  handleCreate(event) {
    event.preventDefault();

    const { createTrack, albumId, lastTrackNum } = this.props;
    const trackName = this.trackName.Input.value;
    const trackIsSelected = this.trackIsSelected.Input.checked;

    if (trackName) {
      this.setState({ submitting: true });
      createTrack({
        name: trackName,
        album_id: albumId,
        track_num: lastTrackNum + 1,
        is_selected: trackIsSelected,
        created_by: config.CURRENT_USER
      })
        .then(({ data }) => {
          this.handleSuccess(data);
        })
        .catch(error => {
          this.handleError(error);
        });
    }

    document.getElementById(`track-create-in-album-${albumId}`).reset();
    toggleCheckBoxBg(this.trackIsSelected.Input);
  }

  render() {
    const { albumId } = this.props;
    const { submitting } = this.state;

    return (
      <form id={`track-create-in-album-${albumId}`}>
        <Text
          placeholder="Track name"
          ref={input => (this.trackName = input)}
          style={Object.assign({}, styles.column, styles.name)}
        />
        <Checkbox
          ref={input => (this.trackIsSelected = input)}
          style={Object.assign({}, styles.column, styles.isSelected)}
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
  graphql(trackCreate, {
    props: ({ mutate }) => ({
      createTrack: args =>
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
)(TrackCreate);
