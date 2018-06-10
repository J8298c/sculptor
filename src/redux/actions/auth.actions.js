import { LOGIN_SUCCESS, LOGION_ERROR } from '../consts';

export const loginSuccess = user => {
  return {
    type: LOGIN_SUCCESS,
    user
  }
}

export const loginError = error => {
  return {
    type: LOGIN_ERROR,
    error
  }
}
