// Import globals
import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

// Import libraries
import { colors } from 'lib/globals';

const styles = {
  base: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(0,0,0,0.3)',
    color: colors.base1,
    cursor: 'pointer',
    fontFamily: '"Open Sans",sans-serif',
    fontSize: 11,
    letterSpacing: '0.03em',
    outline: 0,
    padding: '10px 15px',
    textTransform: 'uppercase',
    verticalAlign: 'middle',
    ':hover': {
      backgroundColor: 'rgba(0,0,0,0.05)'
    }
  },
  iconPadding: {
    padding: 5
  },
  disabled: {
    opacity: 0.5,
    cursor: 'default',
    ':hover': {
      backgroundColor: colors.base7
    }
  },
  submit: {
    backgroundColor: colors.base7,
    borderColor: colors.base7,
    color: colors.base8,
    ':hover': {
      backgroundColor: colors.base9
    }
  }
};

@Radium
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  static propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    disabled: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
      .isRequired,
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string,
    style: PropTypes.object
  };

  static defaultProps = {
    type: 'button',
    disabled: false
  };

  onClick(event) {
    this.props.onClick(event);
  }

  render() {
    return (
      <button
        type={this.props.type}
        name={this.props.name}
        style={[
          styles.base,
          styles[this.props.type && this.props.type],
          styles[this.props.disabled && 'disabled'],
          styles[typeof this.props.value === 'object' && 'iconPadding'],
          this.props.style && this.props.style
        ]}
        disabled={this.props.disabled}
        onClick={this.props.onClick}
        title={this.props.title}
      >
        {this.props.value}
      </button>
    );
  }
}

export default Button;
