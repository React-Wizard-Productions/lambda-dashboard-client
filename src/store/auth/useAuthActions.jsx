import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { axiosWithOutAuth as axios } from '../utils/axiosConfig';
import * as types from './authTypes';

const {
  LOGOUT,
  WELCOME_BACK,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_START,
  AUTH_REGISTER_SUCCESS,
  AUTH_REGISTER_START,
  AUTH_REGISTER_FAILURE,
} = types;

export const useAuthActions = () => {
  const dispatch = useDispatch();

  const login = useCallback(
    (credentials) => {
      dispatch({ type: AUTH_LOGIN_START });
      axios()
        .post('/auth/login', credentials)
        .then((res) => {
          dispatch({ type: AUTH_LOGIN_SUCCESS, payload: res.data });
        })
        .catch((err) => {
          dispatch({ type: AUTH_LOGIN_FAILURE, payload: err.response });
        });
    },
    [dispatch],
  );

  const register = useCallback(
    (credentials) => {
      dispatch({ type: AUTH_REGISTER_START });
      axios()
        .post('/auth/register', credentials)
        .then((res) => {
          dispatch({ type: AUTH_REGISTER_SUCCESS, payload: res.data });
        })
        .catch((err) => {
          dispatch({ type: AUTH_REGISTER_FAILURE, payload: err.response });
        });
    },
    [dispatch],
  );

  const logout = useCallback(() => dispatch({ type: LOGOUT }), [dispatch]);

  const welcomeBack = useCallback(() => dispatch({ type: WELCOME_BACK }), [
    dispatch,
  ]);

  return { login, register, logout, welcomeBack };
};
