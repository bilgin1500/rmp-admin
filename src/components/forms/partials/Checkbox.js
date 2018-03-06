// Import globals
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

// Import libraries
import { colors } from 'lib/globals';

const styles = {
  base: {
    WebkitAppearance: 'none',
    backgroundColor: colors.base6,
    border: 'none',
    borderRadius: 0,
    boxShadow: 'none',
    color: colors.base1,
    display: 'block',
    height: 37,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    outline: 0,
    position: 'relative',
    width: 37,
    cursor: 'pointer'
  },
  checked: {
    backgroundColor: colors.base7
  }
};

export const toggleCheckBoxBg = checkbox => {
  checkbox.style.backgroundColor = checkbox.checked
    ? colors.base7
    : colors.base6;
};

@Radium class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  static propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func,
    defaultChecked: PropTypes.bool,
    style: PropTypes.object
  };

  handleChange(event) {
    if (this.props.onChange) this.props.onChange();
    toggleCheckBoxBg(event.target);
    event.target.defaultChecked = !event.target.checked;
  }

  render() {
    return (
      <input
        type="checkbox"
        name={this.props.name}
        style={[
          styles.base,
          this.props.style && this.props.style,
          this.props.defaultChecked && styles.checked
        ]}
        defaultChecked={this.props.defaultChecked}
        onChange={this.handleChange}
        ref={input => (this.Input = input)}
      />
    );
  }
}

export default Checkbox;
