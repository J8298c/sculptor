import { LOGIN_SUCCESS, LOGIN_ERROR } from '../consts';


export default (state = {}, action) => {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return {...state, action.user}
    case LOGIN_ERROR:
      return { ...state, action.error}
    default:
      return state
  }
}
