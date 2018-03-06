// Import globals
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

// Import libraries
import { colors } from 'lib/globals';

const styles = {
  base: {
    backgroundColor: colors.base6,
    border: 0,
    color: colors.base1,
    display: 'block',
    fontFamily: 'monospace',
    fontSize: 13,
    lineHeight: '17px',
    outline: 0,
    padding: 10,
    width: '100%'
  }
};

@Radium class Text extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
    style: PropTypes.object
  };

  render() {
    return (
      <input
        type="text"
        name={this.props.name}
        defaultValue={this.props.defaultValue}
        placeholder={this.props.placeholder}
        style={[styles.base, this.props.style && this.props.style]}
        onChange={this.props.onChange}
        ref={input => this.Input = input}
      />
    );
  }
}

export default Text;
