import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import cx from "classnames";

const useStyles = makeStyles(() => ({
  grid: {
    padding: "0 15px !important",
  },
}));
export function GridItem(props) {
  const classes = useStyles();
  const { children, className, ...rest } = props;
  const gridItemClasses = cx({
    [classes.grid]: true,
    [className]: className !== undefined,
  });

  return (
    <Grid item {...rest} className={gridItemClasses}>
      {children}
    </Grid>
  );
}

GridItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default GridItem;
