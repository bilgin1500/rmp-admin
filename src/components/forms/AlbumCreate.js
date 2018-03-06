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
import albumCreate from 'graphql/albumCreate.gql';
// Import notification
import { addNotif } from 'components/shared/Notification';

const styles = {
  column: {
    display: 'inline-block',
    marginRight: 3,
    verticalAlign: 'bottom'
  },
  name: { width: 'calc(100% - 307px)' },
  releaseDate: { width: 152 },
  isSelected: { width: 40 },
  add: { width: 103 }
};

class AlbumCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { submitting: false };
    this.handleCreate = this.handleCreate.bind(this);
  }

  static propTypes = {
    refType: PropTypes.string,
    refId: PropTypes.string,
    addNotification: PropTypes.func.isRequired,
    createAlbum: PropTypes.func.isRequired,
    error: PropTypes.object
  };

  handleSuccess(data) {
    const response = {
      type: 'success',
      title: 'Album successfully created',
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

    const { createAlbum, refId } = this.props;
    const albumName = this.albumName.Input.value;
    const albumReleaseDate = this.albumReleaseDate.Input.value || null;
    const albumIsSelected = this.albumIsSelected.Input.checked;

    if (albumName) {
      this.setState({ submitting: true });
      createAlbum({
        name: albumName,
        release_date: albumReleaseDate,
        created_by: config.CURRENT_USER,
        artist_id: refId,
        is_selected: albumIsSelected
      })
        .then(({ data }) => {
          this.handleSuccess(data);
        })
        .catch(error => {
          this.handleError(error);
        });
    }

    document.getElementById('album-create').reset();
    toggleCheckBoxBg(this.albumIsSelected.Input);
  }

  render() {
    const { submitting } = this.state;

    return (
      <form id="album-create">
        <Text
          placeholder="Album's name"
          ref={input => (this.albumName = input)}
          style={Object.assign({}, styles.column, styles.name)}
        />
        <Text
          placeholder="Release date"
          ref={input => (this.albumReleaseDate = input)}
          style={Object.assign({}, styles.column, styles.releaseDate)}
        />
        <Checkbox
          ref={input => (this.albumIsSelected = input)}
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
  graphql(albumCreate, {
    props: ({ mutate }) => ({
      createAlbum: args =>
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
)(AlbumCreate);
