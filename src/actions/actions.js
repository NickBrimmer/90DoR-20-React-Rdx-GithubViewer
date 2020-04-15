import { getGitUser } from '../services/fetch';



export const FETCH_USER_LOADING = 'FETCH_USER_LOADING';
export const FETCH_USER = 'FETCH_USER';

export const fetchUser = (username) => dispatch => {
  dispatch({ type: FETCH_USER_LOADING });
  return getGitUser(username)
    .then(userInfo => dispatch({
      type: FETCH_USER,
      payload: userInfo
    }));
};

