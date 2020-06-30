import React from "react";
import PropTypes from "prop-types";
import ThemeProvider from "./theme/ThemeProvider";

function Providers(props) {
  const { children } = props;

  return <ThemeProvider>{children}</ThemeProvider>;
}

Providers.propTypes = {
  children: PropTypes.node,
};

export default Providers;
