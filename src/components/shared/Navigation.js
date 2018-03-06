// Import globals
import Radium from 'radium';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link as ReactRouterLink } from 'react-router-dom';
const Link = Radium(ReactRouterLink);

// Import libraries
import { colors, navStructure } from 'lib/globals';

// NavLink styles
const linkStyles = {
  base: {
    color: colors.base1,
    fontSize: 13
  },
  active: {
    fontWeight: 'bold'
  },
  hover: {
    ':hover': { textDecoration: 'none' }
  },
  disabled: {
    textDecoration: 'none',
    opacity: 0.5,
    cursor: 'default'
  },
  inline: {
    display: 'inline-block',
    verticalAlign: 'top',
    marginRight: 10,
    paddingRight: 10
  },
  last: {
    marginRight: 0
  }
};

// NavLink Component
@Radium class NavItemLink extends Component {
  constructor(props) {
    super(props);
    this.state = { disabled: false };
  }

  static propTypes = {
    children: PropTypes.element,
    display: PropTypes.oneOf(['inline']),
    order: PropTypes.oneOf(['odd', 'even', 'first', 'last']),
    data: PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string,
      items: PropTypes.array
    })
  };

  render() {
    let link = (
      <h3 style={linkStyles.base}>
        {this.props.data.name}
      </h3>
    );

    if (this.props.data.path) {
      link = (
        <Link
          to={this.props.data.path}
          style={[
            linkStyles.base,
            linkStyles.hover,
            linkStyles[this.state.disabled && this.state.disabled]
          ]}
        >
          {this.props.data.name}
        </Link>
      );
    }

    return (
      <li
        style={[
          linkStyles[this.props.display && this.props.display],
          linkStyles[this.props.order && this.props.order]
        ]}
      >
        {link}{this.props.children}
      </li>
    );
  }
}

// Nav wrapper styles
const wrapperStyles = {
  backgroundColor: colors.base4,
  padding: 10
};

// Nav wrapper
@Radium class Navigation extends Component {
  /**
   * Name the element's order for styling
   * @param  {number} i         iteratee number
   * @param  {number} arrLength Total array length
   * @return {string}           The name of the order
   */
  labelOrder(i, arrLength) {
    let orderName;
    orderName = i % 2 ? 'odd' : 'even';
    if (i == 0) orderName = 'first';
    if (i + 1 == arrLength) orderName = 'last';
    return orderName;
  }

  /**
   * Deep navigation traversing
   * @return {element} Nested menu element
   */
  buildNavList() {
    const navStyles = {
      list: {
        padding: 0,
        margin: 0,
        listStyle: 'none'
      }
    };

    const navList = [];

    navStructure.forEach((navItem, i) => {
      if (navItem.items) {
        const navSubList = [];

        navItem.items.forEach((navSubItem, y) => {
          if (navSubItem.items) {
            const navSubSubList = [];

            navSubItem.items.forEach((navSubSubItem, z) => {
              navSubSubList.push(
                <NavItemLink data={navSubSubItem} key={i + '.' + y + '.' + z} />
              );
            });

            navSubList.push(
              <NavItemLink data={navSubItem} display="inline" key={i + '.' + y}>
                <ul style={navStyles.list}>{navSubSubList}</ul>
              </NavItemLink>
            );
          } else {
            navSubList.push(
              <NavItemLink data={navSubItem} key={i + '.' + y} />
            );
          }
        });

        navList.push(
          <NavItemLink
            data={navItem}
            display="inline"
            order={this.labelOrder(i, navStructure.length)}
            key={i}
          >
            <ul style={navStyles.list}>{navSubList}</ul>
          </NavItemLink>
        );
      } else {
        navList.push(<NavItemLink data={navItem} display="inline" key={i} />);
      }
    });

    return <ul style={navStyles.list}>{navList}</ul>;
  }

  render() {
    return (
      <nav>
        <div style={wrapperStyles}>
          {this.buildNavList()}
        </div>
      </nav>
    );
  }
}

export default Navigation;
