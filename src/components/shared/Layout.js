// Import globals
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

// Import libraries
import { colors } from 'lib/globals';

// Import components
import { Head, Header, Footer, Notification } from 'components/shared/';

// Import assets
import icons from 'evil-icons/assets/sprite.svg';

// Styles
const styles = {
  wrapper: {
    margin: '0 auto',
    maxWidth: 880,
    width: '90%'
  },
  main: {
    backgroundColor: colors.base5,
    padding: 20,
    position: 'relative'
  },
  svg: {
    height: 0,
    overflow: 'hidden',
    position: 'absolute',
    width: 0
  }
};

@Radium class Layout extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
      PropTypes.element
    ]).isRequired
  };

  render() {
    return (
      <div style={styles.wrapper}>
        <Head />
        <Header />
        <main style={styles.main}>
          {this.props.children}
        </main>
        <Footer />
        <Notification />
        {<div style={styles.svg} dangerouslySetInnerHTML={{ __html: icons }} />}
      </div>
    );
  }
}

export default Layout;
