import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import store from '../../../../../store';

function Redux(props) {
  const { children } = props;
  return <Provider store={store}>{children}</Provider>;
}

Redux.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Redux;
