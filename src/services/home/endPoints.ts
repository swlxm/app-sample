
const queryString = require('query-string');

export const GET_USER_LOGIN_URL = (username: string, password: string) => {
  return `login?${queryString.stringify({username, password})}`
}
export const POST_GET_PRODUCTS_URL = () => 'mock/api/products';
export const POST_PRODUCTS_URL = () => 'mock/api/newProduct';


export const makeGetProductsUrl = (counter: string) => `/mock/api/products?${queryString.stringify({
  counter
})}`