import React, { createRef, useEffect, useState } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import LoginPage from '../../pages/LoginPage';
import Footer from '../Footer/Footer';
import login from '../../../../assets/login3.jpg';
import AuthNavBar from '../Navbars/AuthNavBar';
import routes from '../../../../route';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: 'auto',
    minHeight: '100vh',
    position: 'relative',
    top: 0,
  },
  fullPage: {
    padding: '120px 0',
    position: 'relative',
    minHeight: '100vh',
    display: 'flex !important',
    margin: 0,
    border: 0,
    color: theme.dashboard.palette.whiteColor,
    alignItems: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundImage: `url(${login})`,
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      minHeight: '700px !important',
    },
    '& footer': {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      border: 'none !important',
    },
    '&:before': {
      backgroundColor: `rgba(${theme.dashboard.hexToRgb(
        theme.dashboard.palette.blackColor,
      )}, 0.65)`,
    },
    '&:before,&:after': {
      display: 'block',
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      zIndex: 2,
    },
  },
}));

function Auth(props) {
  const { ...rest } = props;
  const wrapper = createRef();
  const classes = useStyles();
  const routerLocation = useLocation();
  const [brandText, setBrandText] = useState('');
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {};
  }, []);

  const getRoutes = (routes) =>
    routes.map(({ layout, path, component, views, collapse }, key) => {
      if (collapse) {
        return getRoutes(views);
      }
      if (layout === '/auth') {
        return (
          <Route path={`${layout}${path}`} component={component} key={key} />
        );
      }
      return null;
    });

  const getActiveRoute = (routes) => {
    const activeRoute = 'Default Brand Text';
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        const collapseActiveRoute = getActiveRoute(routes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else if (
        window.location.href.indexOf(`${routes[i].layout}${routes[i].path}`) !==
        -1
      ) {
        return routes[i].name;
      }
    }
    return activeRoute;
  };

  useEffect(() => {
    const brandName = getActiveRoute(routes);
    setBrandText(brandName);
  }, [routerLocation]);

  return (
    <div>
      <AuthNavBar brandText={brandText} {...rest} />
      <div className={classes.wrapper} ref={wrapper}>
        <div className={classes.fullPage}>
          <Switch>
            {getRoutes(routes)}
            <Redirect from="/auth" to="/auth/login" />
          </Switch>
          <Footer white />
        </div>
      </div>
    </div>
  );
}

export default Auth;
