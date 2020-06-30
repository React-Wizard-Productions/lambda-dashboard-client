import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { Link, List, ListItem, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  block: {},
  left: {
    float: 'left !important',
    display: 'block',
  },
  right: {
    margin: 0,
    fontSize: 14,
    float: 'right !important',
    padding: 15,
  },
  footer: {
    bottom: 0,
    borderTop: `1px solid ${theme.dashboard.palette.gray[15]}`,
    padding: '15px 0',
    ...theme.dashboard.font.default,
    zIndex: 4,
  },
  container: {
    zIndex: 3,
    ...theme.dashboard.container.default,
    position: 'relative',
  },
  containerFluid: {
    zIndex: 3,
    ...theme.dashboard.container.fluid,
    position: 'relative',
  },
  a: {
    color: theme.dashboard.palette.primary[0],
    textDecoration: 'none',
    backgroundColor: 'transparent',
  },
  list: {
    marginBottom: 0,
    padding: 0,
    marginTop: 0,
  },
  inlineBlock: {
    display: 'inline-block',
    padding: 0,
    width: 'auto',
  },
  whiteColor: {
    '&,&:hover,&:focus': {
      color: theme.dashboard.palette.whiteColor,
    },
  },
}));

const footerLinks = [
  {
    link: '#home',
    text: 'Home',
  },
  {
    link: '#company',
    text: 'Company',
  },
  {
    link: '#portfolio',
    text: 'Portfolio',
  },
  {
    link: '#blog',
    text: 'Blog',
  },
];

function Footer(props) {
  const classes = useStyles();
  const { fluid, white } = props;
  const container = cx({
    [classes.container]: !fluid,
    [classes.containerFluid]: fluid,
    [classes.whiteColor]: white,
  });
  const anchor = cx({
    [classes.a]: true,
    [classes.whiteColor]: white,
  });
  const block = cx({
    [classes.block]: true,
    [classes.whiteColor]: white,
  });

  return (
    <footer className={classes.footer}>
      <div className={container}>
        <div className={classes.left}>
          <List className={classes.list}>
            {footerLinks.map(({ link, text }, key) => (
              <ListItem className={classes.inlineBlock} key={key}>
                <Link href={link} className={block}>
                  {text}
                </Link>
              </ListItem>
            ))}
          </List>
        </div>
        <Typography className={classes.right}>
          &copy; {new Date().getFullYear()}{' '}
          <Link
            href="https://www.creative-tim.com?ref=mdpr-footer"
            className={anchor}
            target="_blank"
          >
            Creative Tim
          </Link>
          , made with love for a better web
        </Typography>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  fluid: PropTypes.bool,
  white: PropTypes.bool,
};

export default Footer;
