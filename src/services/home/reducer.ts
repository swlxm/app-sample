import { success, error } from 'redux-saga-requests';
import { get } from "lodash";
import { GET_PRODUCTS_ACTION, POST_PRODUCTS_ACTION, USER_LOGIN_ACTION } from "./const";
import { IHomeActions, IHomeState } from "./types";

const initialState: IHomeState = {
  userLoginStatus: {
    token: '', 
    logged: false,
    loginError: false,
  },
  products: [],
  submitStatus: false,
};

export function home(state = initialState, action: IHomeActions): IHomeState{
  switch (action.type) {
    case USER_LOGIN_ACTION: {
      return {...state, userLoginStatus: {
        ...state.userLoginStatus,
        token: '',
        logged: false,
        loginError: false,
      }};
    }
    case success(USER_LOGIN_ACTION):{
      console.log('action-->', action);
      const token = get(action, ['response', 'data', 'Token']);
      console.log('token--->', token);
      return {...state, userLoginStatus: {
        ...state.userLoginStatus,
        token,
        logged: true,
        loginError: false,
      }};
    }
    case error(USER_LOGIN_ACTION):{
      console.log('error-->', action);
      return {...state, userLoginStatus: {
        ...state.userLoginStatus,
        token:'',
        logged: false,
        loginError: true,
      }};
    }
    case success(GET_PRODUCTS_ACTION): {
      console.log('success action-->', action);
      const Products = get(action, ['response', 'data', 'Data', 'Products'], []);

      console.log('Products-->', Products);
      return {...state, products: [...Products]}
    }
    case error(GET_PRODUCTS_ACTION): {
      console.log('11action-->', action);
      return {...state};
    }
    case POST_PRODUCTS_ACTION: {
      return {...state, submitStatus: true};
    }
    case success(POST_PRODUCTS_ACTION): {
      return {...state, submitStatus: true};
    }
    case error(POST_PRODUCTS_ACTION): {
      return {...state, submitStatus: false};
    }
    default:
      return {...state};
  }
}