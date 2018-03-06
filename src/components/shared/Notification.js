// Import globals
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Radium from 'radium';
// Import libraries
import { config, colors } from 'lib/globals';

const styles = {
  wrapper: {
    position: 'fixed',
    right: '-100%',
    top: 20,
    padding: 15,
    maxWidth: 400,
    textAlign: 'center',
    zIndex: 10,
    opacity: 0,
    backgroundColor: 'rgba(0,0,0,0.25)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(0,0,0,0.4)',
    transition: '.25s cubic-bezier(0.89, 0.01, 0.5, 1.1)',
    transform: 'translatez(0)'
  },
  title: {
    color: 'rgba(0,0,0,0.8)',
    margin: 0,
    fontSize: 15,
    lineHeight: '17px',
    fontWeight: 700
  },
  message: {
    color: 'rgba(0,0,0,0.8)',
    margin: '10px 0 0',
    fontSize: 13,
    lineHeight: '15px'
  },
  active: {
    right: 20,
    opacity: 0.7
  },
  success: {
    backgroundColor: colors.base7,
    borderColor: colors.base7
  },
  error: {
    backgroundColor: colors.base10,
    borderColor: colors.base10
  }
};

export const ADD_NOTIF = 'ADD_NOTIF';

export function addNotif(notifObj) {
  return { type: ADD_NOTIF, notifObj };
}

export function notifReducer(state = [], action) {
  switch (action.type) {
    case ADD_NOTIF:
      return [...state, action.notifObj];
    default:
      return state;
  }
}

@connect(state => ({ notification: state.notifications.slice(-1)[0] }))
@Radium
class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }

  static propTypes = {
    notification: PropTypes.object
  };

  static defaultProps = {
    notification: {}
  };

  show() {
    this.setState({ active: true });
    this.dismissTimeout = setTimeout(() => {
      this.hide();
    }, 2000);
  }

  hide() {
    this.setState({ active: false });
    clearTimeout(this.dismissTimeout);
  }

  componentWillReceiveProps(nextProps) {
    if (config.CONSOLELOG_ACTIONS) {
      console.log(nextProps.notification.data);
    }

    if (this.state.active) {
      this.hide();
      setTimeout(() => {
        this.show();
      }, 250);
    } else {
      this.show();
    }
  }

  render() {
    const notification = this.props.notification;

    if (Object.getOwnPropertyNames(notification).length !== 0) {
      return (
        <div
          style={[
            styles.wrapper,
            this.state.active && styles.active,
            notification.type && styles[notification.type]
          ]}
        >
          <h2 style={styles.title}>{notification.title}</h2>
          {notification.message &&
            <p style={styles.message}>{notification.message}</p>}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Notification;
