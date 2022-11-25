import { GET_PRODUCTS_ACTION, POST_PRODUCTS_ACTION, USER_LOGIN_ACTION } from "./const";
import { GET_USER_LOGIN_URL, makeGetProductsUrl, POST_PRODUCTS_URL } from "./endPoints";
import { IGetProductsAction, IPostProductAction, IUserLoginAction } from "./types";

export const userLogin = (username: string, password: string): IUserLoginAction => {
  return {
    type: USER_LOGIN_ACTION,
    request: {
      url: GET_USER_LOGIN_URL(username, password),
    }
  };
};

export const getProducts = (counterId: string): IGetProductsAction => {
  return {
    type: GET_PRODUCTS_ACTION,
    request: {
      url: makeGetProductsUrl(counterId),
    }
  };
};

export const submitProduct = (counter: string, id: string, name: string): IPostProductAction => {
  const body = {counter, id, name};
  return {
    type: POST_PRODUCTS_ACTION,
    request: {
      url: POST_PRODUCTS_URL(),
      method: 'post',
      body: JSON.stringify(body),
    }
  };
};