// Import globals
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';
// Import components
import Icon from 'components/shared/Icon';
import { Label, Text, Button, Checkbox } from 'components/forms/partials/';
import Accounts from 'components/forms/Accounts';
import Tracks from 'components/forms/Tracks';
// Import libraries
import { config, colors } from 'lib/globals';
// Import queries
import albumUpdate from 'graphql/albumUpdate.gql';
import albumDelete from 'graphql/albumDelete.gql';
// Import notification
import { addNotif } from 'components/shared/Notification';

const styles = {
  wrapper: {
    display: 'inline-block',
    width: 'calc(100% - 155px)',
    verticalAlign: 'bottom'
  },
  albumTitle: {
    color: colors.base1,
    fontSize: 15,
    lineHeight: '15px',
    margin: '25px 0 10px 0'
  },
  column: {
    display: 'inline-block',
    marginRight: 3,
    verticalAlign: 'bottom'
  },
  name: { width: 'calc(100% - 307px)' },
  releaseDate: { width: 152 },
  isSelected: { width: 40 },
  isSelectedCheckBox: { width: '100%' },
  delete: { width: 40 },
  save: { width: 60 }
};

class AlbumSingle extends Component {
  constructor(props) {
    super(props);
    this.state = { submitting: false };
    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  static propTypes = {
    refType: PropTypes.string,
    refId: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    release_date: PropTypes.string,
    is_selected: PropTypes.bool,
    created_at: PropTypes.string,
    created_by: PropTypes.string,
    updated_at: PropTypes.string,
    updated_by: PropTypes.string,
    accounts: PropTypes.array,
    tracks: PropTypes.array,
    addNotification: PropTypes.func.isRequired,
    saveAlbum: PropTypes.func.isRequired,
    deleteAlbum: PropTypes.func.isRequired,
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
    const { name, refId, saveAlbum, is_selected, release_date } = this.props;
    const albumName = this.albumName.Input.value;
    const albumReleaseDate = this.albumReleaseDate.Input.value || null;
    const albumIsSelected = this.albumIsSelected.Input.checked;

    if (!submitting && albumName) {
      this.setState({ submitting: true });
      saveAlbum({
        name: albumName,
        release_date: albumReleaseDate,
        artist_id: refId,
        updated_by: config.CURRENT_USER,
        is_selected: albumIsSelected
      })
        .then(({ data }) => {
          this.handleSuccess(data, 'Album successfully saved');
          this.setState({ submitting: false });
        })
        .catch(error => {
          this.handleError(error);
        });
    } else {
      this.albumName.Input.value = name;
      this.albumReleaseDate.Input.value = release_date;
      // Bu yeterli değil:
      this.albumIsSelected.Input.value = is_selected;
    }
  }

  handleDelete() {
    const { submitting } = this.state;
    const { deleteAlbum, id } = this.props;

    if (!submitting) {
      this.setState({ submitting: true });
      deleteAlbum({ id: id })
        .then(({ data }) => {
          this.handleSuccess(data, 'Album successfully deleted');
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
      release_date,
      is_selected,
      created_at,
      created_by,
      updated_at,
      updated_by,
      accounts,
      tracks
    } = this.props;
    const { submitting } = this.state;

    return (
      <div>
        <h3 style={styles.albumTitle}>{name}</h3>
        <form
          onSubmit={this.handleSave}
          id={`album-${id}-update`}
          style={styles.wrapper}
        >
          <Label
            title="Album Name"
            style={Object.assign({}, styles.column, styles.name)}
          >
            <Text
              placeholder="Album's name"
              defaultValue={name}
              ref={input => (this.albumName = input)}
            />
          </Label>
          <Label
            title="Release Date"
            style={Object.assign({}, styles.column, styles.releaseDate)}
          >
            <Text
              placeholder="Release date"
              defaultValue={release_date}
              ref={input => (this.albumReleaseDate = input)}
            />
          </Label>
          <Label
            title="On/Off"
            style={Object.assign({}, styles.column, styles.isSelected)}
          >
            <Checkbox
              defaultChecked={is_selected}
              ref={input => (this.albumIsSelected = input)}
              style={styles.isSelectedCheckBox}
            />
          </Label>
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
        <Accounts
          defaults={accounts}
          refName={name}
          refType="albums"
          refId={id}
        />
        <Tracks defaults={tracks} albumId={id} />
      </div>
    );
  }
}

export default compose(
  graphql(albumUpdate, {
    props: ({ ownProps, mutate }) => ({
      saveAlbum: args =>
        mutate({
          variables: { id: ownProps.id, ...args }
        })
    })
  }),
  graphql(albumDelete, {
    props: ({ ownProps, mutate }) => ({
      deleteAlbum: args =>
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
)(AlbumSingle);
