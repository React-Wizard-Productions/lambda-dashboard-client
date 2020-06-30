import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Hidden,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { RegularButton as Button } from '../..';

function authColor(theme, key) {
  return {
    backgroundColor: theme.dashboard.palette[key][0],
    color: theme.dashboard.palette.whiteColor,
    ...theme.dashboard.boxShadow.default,
  };
}

const useStyles = makeStyles((theme) => ({
  appBar: {},
  container: {},
  flex: {},
  title: {},
  appResponsive: {},
  primary: authColor(theme, 'primary'),
  secondary: authColor(theme, 'secondary'),
  info: authColor(theme, 'info'),
  success: authColor(theme, 'success'),
  warning: authColor(theme, 'warning'),
  danger: authColor(theme, 'danger'),
  list: {},
  listItem: {},
  navLink: {},
  listItemIcon: {},
  listItemText: {},
  navLinkActive: {},
  drawerPaper: {},
  sideBarButton: {},
}));

function AuthNavBar(props) {
  const [open, setOpen] = useState(false);
  const handleDrawerToggle = () => setOpen(!open);
  const activeRoute = (routeName) =>
    window.location.href.indexOf(routeName) > -1;
  const classes = useStyles();
}

AuthNavBar.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'danger',
  ]),
  brandText: PropTypes.string,
};

export default AuthNavBar;
