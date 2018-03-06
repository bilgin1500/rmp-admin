// Import globals
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

// Import libraries
import { colors } from 'lib/globals';
import { string } from 'lib/helpers';

const styles = {
  base: {
    WebkitAppearance: 'inherit',
    backgroundColor: colors.base6,
    backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAA+dJREFUeJzt3FmolVUYxvHnf5yHzLIEI0GhAwkplEQSDVBeiCAFFYFB1EXYRVRQFNFAQoQXEUUjFEU0UTRgFIIgRUUYoYSQQYKCgpAkWeY8ddEnrAMmDnuftc/+/r/Lw9lrPet91znfHta3E0mSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJElSC5FkXu0QI8Dc2gG6YRD4DjiW5KHaYXoUwHLgGLAyybTagTppIrC6WdyxJI/XDtRjAFYcrw/wSpKB2qE6bTzwZbHI5fnvstB2AC8WdXk+fVyXscBnxWJXpI8XewoGgNeLejybFtRjDPBhsegX0oJFn8Ao4O3isvhUWlSHUcA7xSZ4NX14zTuJMcAHRfMfrR2ohgHgjWITvJlkVO1Qw2As8GnR/AdqB6ppAHip2ATvJhldO1QXDXkinOTe2oF6AcBzxSb4KMmY2qG6oHwpfDTJ3bUD9RKAZ4pN8HmScbVDddBk4JtmbYeTLK0dqFc9WWyCr5KMrx2oA84FfmjWdCjJrbUD9bpHik2wOsnE2oHOwvnAT81aDiRZUjvQSHF/sQm+TjK5dqAzcCHwc7OGfUkW1Q400iwrNsH3SabUDnQaZgC/NNn3JLmxdqCR6i7gaFPIH5OcVzvQKbgY+K3JvDvJtbUDjXRLgcNNQdcnuaB2oJOYBWxusu5KsqB2oH5xC3CoKeyGJNNrBzqBQWBrk3Fnkvm1A/WbJcCBpsC/JrmodqDCHGB7k21HPPnUNYuAfU2hNyWZWTtQknnAjibT9iRzagfqdzcAe5qCb04yq2KW+cDOJsu2JIMVs7TKNcDfTeG3JrmkQoYFwK4mw5YksytkaLWrigZsT3LpMM59HbC7xy5FrXRF8S/49ySXDcOcC4G9zZwbk8wYhjl1EnOLJ2F/JLm8i3MtBvb3+MvRVipfhv2Z5MouzHEzcLCZY1367Nx+PxgEtjUN+ivJ1R0c+/bi3ci1SaZ2cGx10GxgS9Oof5Jc34Ex7wSONGN+m+ScDoypLpoJbGoatjfJwrMY657iw6g1SSZ1KKO6bAawsWnc/iSLz2CM+4qPo1clmdDhjOqy6cCGpoEHk9x0Go99uGj+yvTX+cRWmQasK87j3XYKj3miaP7H6c8Tyq0yFVjbNPRIkjv+5/dg6Mnk99Lf9yi0yhSa7yfgxGfyYei9CW+lHXcptcokYM3xJidZ1vx8AHi5aP5radd9iq0yAVhVbIIHGXp/YlvvVG6VccAXRdP9roIWGgt8UjT/6dj81hkNvJ/ksdpBVI9/9ZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSRp+/wJPMulcOghsLAAAAABJRU5ErkJggg==")',
    backgroundPosition: '93%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 20,
    border: 0,
    borderRadius: 0,
    color: colors.base1,
    fontFamily: 'monospace',
    fontSize: 12,
    height: 37,
    outline: 0,
    padding: '5px 35px 5px 10px',
    verticalAlign: 'middle',
    width: '100%'
  }
};

@Radium class Select extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    baseOption: PropTypes.string,
    baseValue: PropTypes.string,
    name: PropTypes.string,
    options: PropTypes.array,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
    style: PropTypes.object
  };

  static defaultProps = {
    baseOption: '-- Select --',
    baseValue: ''
  };

  render() {
    const options = this.props.options.map(val => (
      <option value={val} key={val}>{string.toTitleCase(val)}</option>
    ));

    return (
      <select
        name={this.props.name}
        defaultValue={
          this.props.defaultValue ? this.props.defaultValue : undefined
        }
        style={[styles.base, this.props.style && this.props.style]}
        onChange={this.props.onChange}
        ref={input => this.Input = input}
      >
        {this.props.baseOption &&
          <option value={this.props.baseValue && this.props.baseValue}>
            {this.props.baseOption}
          </option>}
        {options}
      </select>
    );
  }
}

export default Select;
