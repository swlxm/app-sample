import { Action } from 'redux';
import { get } from 'lodash';
import { select } from 'redux-saga/effects';
import { tokenSelector } from '../services/home/selectors';

const makeAuthRequest =  (
  apiRequest: any,
  token: string,
) => {
  const request = apiRequest;
  
  return {
    ...request,
    url: request.url,
    headers: {
      'Content-Type': get(request, 'request.headers.contentType', 'application/json'),
      ...request.headers,
      Authorization: token,
    },
  };
};

export function* onRequest(request: any, action: Action) {
  const token = yield select(tokenSelector);
  if (Array.isArray(request)) {
    const result = request.map(req => {
      return  makeAuthRequest(req,token);
    });
    return result;
  } else {
    const result = makeAuthRequest(request,token);
    return result;
  }
}


export function* onSuccess(response: any, action: Action) {
  return response;
}
