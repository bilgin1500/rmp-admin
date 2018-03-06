// Import globals
import Radium from 'radium';
import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
const Link = Radium(ReactRouterLink); //https://github.com/FormidableLabs/radium/issues/398

// Import libraries
import { colors } from 'lib/globals';

// Import components
import Navigation from 'components/shared/Navigation';

const headingStyles = {
  wrapper: {
    backgroundColor: colors.base2,
    color: colors.base1,
    padding: 20,
    textAlign: 'center'
  },
  title: {
    fontSize: 25,
    lineHeight: '100%',
    margin: '0 0 3px 0'
  },
  titleLink: {
    color: colors.base1,
    textDecoration: 'none',
    ':hover': {
      color: colors.bas3
    }
  },
  subtitle: {
    fontSize: 13,
    fontStyle: 'italic',
    margin: 0,
    opacity: 0.5
  }
};

const Header = () => (
  <header>
    <div style={headingStyles.wrapper}>
      <h1 style={headingStyles.title}>
        <Link to="/" style={headingStyles.titleLink}>
          Rola Music Project
        </Link>
      </h1>
      <p style={headingStyles.subtitle}>Crawler & Manager</p>
    </div>
    <Navigation />
  </header>
);

export default Radium(Header);
