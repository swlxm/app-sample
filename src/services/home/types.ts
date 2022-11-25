import {Action} from 'redux'; 
import { GET_PRODUCTS_ACTION, POST_PRODUCTS_ACTION, USER_LOGIN_ACTION } from './const';

// export interface 

export interface IHomeState {
  // token: string;
  userLoginStatus: {
    token: string, 
    logged: boolean,
    loginError: boolean,
  },
  products:({key: string})[],
  submitStatus: boolean,
}


export interface IUserLoginAction extends Action{
  type: typeof USER_LOGIN_ACTION,
  request: {
    url: string;
  }
}

export interface IGetProductsAction extends Action {
  type: typeof GET_PRODUCTS_ACTION,
  request: {
    url: string;
  }
}

export interface IPostProductAction extends Action {
  type: typeof POST_PRODUCTS_ACTION,
  request: {
    url: string;
    method: string;
    body: any;
  }
}

export type IHomeActions = IUserLoginAction 
| IGetProductsAction
| IPostProductAction
| Action;