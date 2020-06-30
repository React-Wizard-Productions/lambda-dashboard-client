import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';

function RouterProvider(props) {
  const { children } = props;
  return <Router>{children}</Router>;
}

RouterProvider.propTypes = {
  children: PropTypes.node,
};

export default RouterProvider;
