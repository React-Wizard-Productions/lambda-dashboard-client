import React, { createRef, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import LoginPage from '../../pages/LoginPage';
import Footer from '../Footer/Footer';
import login from '../../../../assets/login3.jpg';

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
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {};
  }, []);

  return (
    <div>
      <div className={classes.wrapper} ref={wrapper}>
        <div className={classes.fullPage}>
          <LoginPage />
          <Footer white />
        </div>
      </div>
    </div>
  );
}

export default Auth;
