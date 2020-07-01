import * as authTypes from './authTypes';
import { createReducer } from '../utils/createReducer';

const {
  AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_START,
  AUTH_LOGIN_SUCCESS,
  AUTH_REGISTER_FAILURE,
  AUTH_REGISTER_START,
  AUTH_REGISTER_SUCCESS,
  LOGOUT,
  WELCOME_BACK,
} = authTypes;

const initialState = {
  data: {
    message: '',
    token: null,
    name: '',
  },
  isLoading: false,
  errors: null,
};

function authStart(state) {
  return {
    ...state,
    isLoading: true,
    errors: null,
    data: { message: '', token: null, name: '' },
  };
}

function authSuccess(state, payload) {
  localStorage.setItem('sl-dashboard', JSON.stringify(payload, null, 2));
  return { ...state, isLoading: false, errors: null, data: payload };
}

function authFailure(state, payload) {
  if (localStorage.getItem('sl-dashboard')) {
    localStorage.removeItem('sl-dashboard');
  }
  return {
    ...state,
    isLoading: false,
    errors: payload,
    data: { message: '', token: null, name: '' },
  };
}

function logout() {
  if (localStorage.getItem('sl-dashboard')) {
    localStorage.removeItem('sl-dashboard');
  }
  return initialState;
}

function welcomeBack(state) {
  const data = JSON.parse(localStorage.getItem('sl-dashboard'));
  return { ...state, data };
}

export default createReducer(initialState, {
  [AUTH_REGISTER_START]: authStart,
  [AUTH_REGISTER_SUCCESS]: authSuccess,
  [AUTH_REGISTER_FAILURE]: authFailure,
  [AUTH_LOGIN_START]: authStart,
  [AUTH_LOGIN_SUCCESS]: authSuccess,
  [AUTH_LOGIN_FAILURE]: authFailure,
  [LOGOUT]: logout,
  [WELCOME_BACK]: welcomeBack,
});
