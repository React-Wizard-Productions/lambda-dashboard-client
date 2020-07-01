import { createStore, applyMiddleware } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import reducer from './reducer';

const middleware = [logger];
const enhancers = applyMiddleware(...middleware);

const store =
  process.env.NODE_ENV === 'production'
    ? createStore(reducer)
    : createStore(reducer, composeWithDevTools(enhancers));

export default store;
