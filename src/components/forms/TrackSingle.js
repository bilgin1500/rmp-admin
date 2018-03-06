// Import globals
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';
// Import components
import Icon from 'components/shared/Icon';
import { Text, Button, Checkbox } from 'components/forms/partials/';
// Import libraries
import { config, colors } from 'lib/globals';
// Import queries
import trackUpdate from 'graphql/trackUpdate.gql';
import trackDelete from 'graphql/trackDelete.gql';
// Import notification
import { addNotif } from 'components/shared/Notification';

const styles = {
  column: {
    display: 'inline-block',
    marginRight: 3,
    marginBottom: 3,
    verticalAlign: 'bottom'
  },
  move: {
    position: 'relative',
    cursor: 'row-resize',
    width: 40,
    height: 37
  },
  moveIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -12,
    marginTop: -12,
    color: colors.base1
  },
  name: { width: 'calc(100% - 198px)' },
  isSelected: { width: 40 },
  delete: { width: 40 },
  save: { width: 60 }
};

class TrackSingle extends Component {
  constructor(props) {
    super(props);
    this.state = { submitting: false };
    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    track_num: PropTypes.number,
    albumId: PropTypes.string,
    created_at: PropTypes.string,
    created_by: PropTypes.string,
    updated_at: PropTypes.string,
    updated_by: PropTypes.string,
    is_selected: PropTypes.bool,
    addNotification: PropTypes.func.isRequired,
    saveTrack: PropTypes.func.isRequired,
    deleteTrack: PropTypes.func.isRequired,
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
    const { name, albumId, is_selected, saveTrack } = this.props;
    const trackName = this.trackName.Input.value;
    const trackIsSelected = this.trackIsSelected.Input.checked;

    if (!submitting && trackName) {
      this.setState({ submitting: true });
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
    } else {
      this.trackName.Input.value = name;
      this.trackIsSelected.Input.value = is_selected;
    }
  }

  handleDelete() {
    const { submitting } = this.state;
    const { deleteTrack, id } = this.props;

    if (!submitting) {
      this.setState({ submitting: true });
      deleteTrack({ id: id })
        .then(({ data }) => {
          this.handleSuccess(data, 'Track successfully deleted');
        })
        .catch(error => {
          this.handleError(error);
        });
    }
  }

  render() {
    const {
      id,
      name,
      created_at,
      created_by,
      updated_at,
      updated_by,
      is_selected,
      albumId
    } = this.props;
    const { submitting } = this.state;

    return (
      <form
        onSubmit={this.handleSave}
        id={`track-${id}-update-in-album-${albumId}`}
        data-id={id}
      >
        <div
          className="handle"
          style={Object.assign({}, styles.column, styles.move)}
        >
          <Icon icon="ei-navicon" style={styles.moveIcon} />
        </div>
        <Text
          placeholder="Track name"
          defaultValue={name}
          ref={input => (this.trackName = input)}
          style={Object.assign({}, styles.column, styles.name)}
        />
        <Checkbox
          defaultChecked={is_selected}
          ref={input => (this.trackIsSelected = input)}
          style={Object.assign({}, styles.column, styles.isSelected)}
        />
        <Button
          value={<Icon icon="ei-trash" />}
          onClick={this.handleDelete}
          style={Object.assign({}, styles.column, styles.delete)}
          disabled={is_selected}
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
  graphql(trackUpdate, {
    props: ({ ownProps, mutate }) => ({
      saveTrack: args =>
        mutate({
          variables: { id: ownProps.id, ...args }
        })
    })
  }),
  graphql(trackDelete, {
    props: ({ ownProps, mutate }) => ({
      deleteTrack: args =>
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
)(TrackSingle);
