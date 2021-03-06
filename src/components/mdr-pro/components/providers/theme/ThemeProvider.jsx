import React from 'react';
import PropTypes from 'prop-types';
import {
  createMuiTheme,
  MuiThemeProvider,
  CssBaseline,
} from '@material-ui/core';
import theme from './theme';

function ThemeProvider(props) {
  const { children } = props;
  const dashboardTheme = createMuiTheme(theme);
  return (
    <MuiThemeProvider theme={dashboardTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default ThemeProvider;
