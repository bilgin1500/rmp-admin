// Import globals
import React from 'react';
import Radium from 'radium';

// Import libraries
import { colors } from 'lib/globals';

const styles = {
  copyright: {
    color: colors.base5,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 'x-small'
  }
};

const Footer = () => (
  <footer><p style={styles.copyright}>©2017 Rolakosta</p></footer>
);

export default Radium(Footer);
