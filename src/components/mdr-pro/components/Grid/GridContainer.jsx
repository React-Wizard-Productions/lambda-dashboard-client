import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import cx from "classnames";

const useStyles = makeStyles(() => ({
  grid: {
    margin: "0 -15px",
    width: "calc(100% + 30px)",
  },
}));

export function GridContainer(props) {
  const classes = useStyles();
  const { children, className, ...rest } = props;
  const gridContainerClasses = cx({
    [classes.grid]: true,
    [className]: className !== undefined,
  });
  return (
    <Grid container {...rest} className={gridContainerClasses}>
      {children}
    </Grid>
  );
}

GridContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default GridContainer;
