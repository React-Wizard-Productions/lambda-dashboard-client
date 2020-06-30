import React from "react";
import PropTypes from "prop-types";
import ThemeProvider from "./theme/ThemeProvider";
import RouterProvider from "./routing/RouterProvider";

function Providers(props) {
  const { children } = props;

  return (
    <RouterProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </RouterProvider>
  );
}

Providers.propTypes = {
  children: PropTypes.node,
};

export default Providers;
