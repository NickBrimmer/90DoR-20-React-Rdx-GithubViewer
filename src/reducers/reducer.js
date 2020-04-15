import { FETCH_USER_LOADING, FETCH_USER } from '../actions/actions';


const initialState = {
  loading: false,
  userName: '',
  userInfo: ''
};


export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_USER_LOADING:
      return { ...state, loading: true };
    case FETCH_USER:
      return { ...state, loading: false, userInfo: action.payload };

    default:
      return state;
  }
}

