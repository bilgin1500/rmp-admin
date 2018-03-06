// Import globals
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

const styles = {
  base: {
    color: 'rgba(0,0,0,.7)',
    display: 'inline-block',
    fill: 'currentColor',
    height: 25,
    overflow: 'hidden',
    position: 'relative',
    top: '-0.0625em',
    verticalAlign: 'middle',
    width: 25
  }
};

export class Icon extends Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    style: PropTypes.object
  };

  shouldComponentUpdate(nextProps) {
    return nextProps.icon !== this.props.icon;
  }

  render() {
    return (
      <svg
        style={[styles.base, this.props.style && this.props.style]}
        aria-hidden="true"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <use xlinkHref={`#${this.props.icon}-icon`} />
      </svg>
    );
  }
}

export default Radium(Icon);
