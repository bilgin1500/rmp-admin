// Import globals
import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

// Import libraries
import { colors } from 'lib/globals';

const styles = {
  title: {
    display: 'block',
    marginBottom: 5,
    marginTop: 10,
    fontSize: 11,
    textTransform: 'uppercase',
    color: colors.base1
  }
};

const Label = props => (
  <label style={props.style && props.style}>
    <span style={styles.title}>{props.title}</span>
    {props.children}
  </label>
);

Label.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
  style: PropTypes.object
};

export default Radium(Label);
