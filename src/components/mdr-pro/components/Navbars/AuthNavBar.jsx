import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { NavLink, useLocation } from 'react-router-dom';

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
import PersonAdd from '@material-ui/icons/PersonAdd';
import FingerPrint from '@material-ui/icons/Fingerprint';
import Menu from '@material-ui/icons/Menu';
import { RegularButton as Button } from '../..';

function authColor(theme, key) {
  return {
    backgroundColor: theme.dashboard.palette[key][0],
    color: theme.dashboard.palette.whiteColor,
    ...theme.dashboard.boxShadow.default,
  };
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    borderBottom: 0,
    marginBottom: 0,
    position: 'absolute',
    width: '100%',
    paddingTop: 10,
    zIndex: 1029,
    color: theme.dashboard.palette.gray[6],
    border: 0,
    borderRadius: 3,
    padding: '10px 0',
    transition: 'all 150ms ease 0s',
    minHeight: 50,
    display: 'block',
  },
  container: {
    ...theme.dashboard.container.default,
    minHeight: 50,
  },
  flex: {
    flex: 1,
  },
  title: {
    ...theme.dashboard.font.default,
    lineHeight: '30px',
    fontSize: 18,
    borderRadius: 3,
    textTransform: 'none',
    color: theme.dashboard.palette.whiteColor,
    letterSpacing: 'unset',
    '&:hover,&:focus': {
      background: 'transparent',
      color: theme.dashboard.palette.whiteColor,
    },
  },
  appResponsive: {
    top: 8,
  },
  primary: authColor(theme, 'primary'),
  secondary: authColor(theme, 'secondary'),
  info: authColor(theme, 'info'),
  success: authColor(theme, 'success'),
  warning: authColor(theme, 'warning'),
  danger: authColor(theme, 'danger'),
  list: {
    ...theme.dashboard.font.default,
    fontSize: 14,
    margin: 0,
    marginRight: -15,
    paddingLeft: 0,
    listStyle: 'none',
    color: theme.dashboard.palette.whiteColor,
    paddingTop: 0,
    paddingBottom: 0,
  },
  listItem: {
    float: 'left',
    position: 'relative',
    display: 'block',
    width: 'auto',
    margin: 0,
    padding: 0,
    [theme.breakpoints.down('sm')]: {
      zIndex: 999,
      width: '100%',
      paddingRight: 15,
    },
  },
  navLink: {
    color: theme.dashboard.palette.whiteColor,
    margin: '0 5px',
    paddingTop: 15,
    paddingBottom: 15,
    fontWeight: 500,
    fontSize: 12,
    textTransform: 'uppercase',
    borderRadius: 3,
    lineHeight: '20px',
    position: 'relative',
    display: 'block',
    padding: '10px 15px',
    textDecoration: 'none',
    '&:hover,&:focus': {
      color: theme.dashboard.palette.whiteColor,
      background: `rgba(${theme.dashboard.hexToRgb(
        theme.dashboard.palette.gray[17],
      )}, 0.2)`,
    },
  },
  listItemIcon: {
    marginTop: -3,
    top: 0,
    position: 'relative',
    marginRight: 3,
    width: 20,
    height: 20,
    verticalAlign: 'middle',
    color: 'inherit',
    display: 'inline-block',
  },
  listItemText: {
    flex: 'none',
    padding: 0,
    minWidth: 0,
    margin: 0,
    display: 'inline-block',
    position: 'relative',
    whiteSpace: 'nowrap',
  },
  navLinkActive: {
    backgroundColor: `rgba(${theme.dashboard.hexToRgb(
      theme.dashboard.palette.whiteColor,
    )}, 0.1)`,
  },
  drawerPaper: {
    border: 'none',
    bottom: 0,
    transitionProperty: 'top, bottom, width',
    transitionDuration: '.2s, .2s, .35s',
    transitionTimingFunction: 'linear, linear, ease',
    ...theme.dashboard.boxShadow.default,
    width: theme.dashboard.drawerWidth.default,
    position: 'fixed',
    top: 0,
    height: '100vh',
    right: 0,
    left: 'auto',
    visibility: 'visible',
    overflowY: 'visible',
    borderTop: 'none',
    textAlign: 'left',
    paddingRight: 8,
    paddingLeft: 0,
    ...theme.dashboard.transition,
    '&:before,&:after': {
      position: 'absolute',
      zIndex: 3,
      width: '100%',
      height: '100%',
      content: '""',
      display: 'block',
      top: 0,
    },
    '&:after': {
      background: theme.dashboard.palette.blackColor,
      opacity: 0.8,
    },
  },
  sideBarButton: {
    '&,&:hover,&:focus': {
      color: theme.dashboard.palette.whiteColor,
    },
    top: -2,
  },
}));

const navLinks = [
  {
    link: '/auth/register',
    title: 'Register',
    icon: PersonAdd,
  },
  {
    link: '/auth/login',
    title: 'Login',
    icon: FingerPrint,
  },
];

function AuthNavBar(props) {
  const [open, setOpen] = useState(false);
  const routerLocation = useLocation();
  const handleDrawerToggle = () => setOpen(!open);
  const activeRoute = (routeName) => routerLocation.pathname === routeName;
  const classes = useStyles();
  const { brandText, color } = props;
  const appBarClasses = cx({
    [classes.appBar]: true,
    [classes[color]]: color,
  });

  const list = (
    <List className={classes.list}>
      {navLinks.map(({ link, title, icon: NavIcon }, key) => (
        <ListItem className={classes.listItem} key={key}>
          <NavLink
            to={link}
            className={cx({
              [classes.navLink]: true,
              [classes.navLinkActive]: activeRoute(link),
            })}
          >
            <NavIcon className={classes.listItemIcon} />
            <ListItemText
              primary={title}
              disableTypography
              className={classes.listItemText}
            />
          </NavLink>
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar position="static" className={appBarClasses}>
      <Toolbar className={classes.container}>
        <Hidden smDown>
          <div className={classes.flex}>
            <Button href="#" className={classes.title} color="transparent">
              {brandText}
            </Button>
          </div>
        </Hidden>
        <Hidden mdUp>
          <div className={classes.flex}>
            <Button href="#" className={classes.title} color="transparent">
              Section Lead Dashboard
            </Button>
          </div>
        </Hidden>
        <Hidden smDown>{list}</Hidden>
        <Hidden mdUp>
          <Button
            className={classes.sidebarButton}
            color="transparent"
            justIcon
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </Button>
        </Hidden>
        <Hidden mdUp>
          <Hidden mdUp>
            <Drawer
              variant="temporary"
              anchor="right"
              open={open}
              classes={{ paper: classes.drawerPaper }}
              onClose={handleDrawerToggle}
              modalProps={{ keepMounted: true }}
            >
              {list}
            </Drawer>
          </Hidden>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
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
