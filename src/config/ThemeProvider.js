import { Component } from 'react';
import PropTypes from 'prop-types';
import colors from './colors';

const propTypes = {
  children: PropTypes.element,
  theme: PropTypes.object,
};

const childContextTypes = {
  theme: PropTypes.object.isRequired,
};

class ThemeProvider extends Component {
  getChildContext() {
    return {
      theme: { ...colors, ...this.props.theme },
    };
  }

  render() {
    return this.props.children;
  }
}

ThemeProvider.propTypes = propTypes;
ThemeProvider.childContextTypes = childContextTypes;

export default ThemeProvider;
