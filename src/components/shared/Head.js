// Import globals
import React from 'react';
import Helmet from 'react-helmet';
import Radium, { Style } from 'radium';
import postcssJs from 'postcss-js';
import autoprefixer from 'autoprefixer';

// Import libraries
import { colors } from 'lib/globals';

const prefixer = postcssJs.sync([autoprefixer]);

const styles = prefixer({
  '*': { boxSizing: 'border-box' },
  body: {
    '-moz-osx-font-smoothing': 'grayscale',
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: colors.base1,
    fontFamily: '"Open Sans",sans-serif',
    fontSize: '100%',
    fontSmoothing: 'antialiased',
    padding: 30,
  },
});

const Head = () => (
  <div>
    <Style rules={styles} />
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title="Dashboard"
      titleTemplate="%s | RMP Admin"
      link={[
        {
          rel: 'style',
          href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700&amp;subset=latin-ext',
        },
      ]}
    />
  </div>
);

export default Radium(Head);
