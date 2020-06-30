import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  infoArea: {
    maxWidth: 360,
    margin: '0 auto',
    padding: 0,
  },
  iconWrapper: {
    float: 'left',
    marginTop: 24,
    marginRight: 10,
  },
  primary: {
    color: theme.dashboard.palette.primary[0],
  },
  secondary: { color: theme.dashboard.palette.secondary[0] },
  warning: { color: theme.dashboard.palette.warning[0] },
  danger: { color: theme.dashboard.palette.danger[0] },
  success: { color: theme.dashboard.palette.success[0] },
  gray: { color: theme.dashboard.palette.gray[0] },
  info: { color: theme.dashboard.palette.info[0] },
  icon: {
    width: 36,
    height: 36,
  },
  descriptionWrapper: {
    color: theme.dashboard.palette.gray[0],
    overflow: 'hidden',
  },
  title: {
    color: theme.dashboard.palette.gray[2],
    margin: '30px 0 15px',
    textDecoration: 'none',
    fontSize: 18,
  },
  description: {
    color: theme.dashboard.palette.gray[0],
    overflow: 'hidden',
    marginTop: 0,
    fontSize: 14,
  },
}));

export function InfoArea(props) {
  const classes = useStyles();
  const { iconColor = 'gray', description, title, icon: InfoIcon } = props;
  const iconWrapperClasses = cx({
    [classes.iconWrapper]: true,
    [classes[iconColor]]: iconColor,
  });

  return (
    <div className={classes.infoArea}>
      <div className={iconWrapperClasses}>
        <InfoIcon className={classes.icon} />
      </div>
      <div className={classes.descriptionWrapper}>
        <Typography variant="h4" className={classes.title}>
          {title}
        </Typography>
        <Typography className={classes.description}>{description}</Typography>
      </div>
    </div>
  );
}

InfoArea.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  iconColor: PropTypes.oneOf([
    'primary',
    'secondary',
    'danger',
    'success',
    'info',
    'gray',
  ]),
};

export default InfoArea;
