import { spawn, fork, take } from 'redux-saga/effects';
import { createRequestInstance, watchRequests } from 'redux-saga-requests';
import { createDriver } from 'redux-saga-requests-fetch';
import { REHYDRATE } from 'redux-persist/lib/constants';
import { onRequest, onSuccess } from './interceptors';
import { fetchDriver } from './fetchDriver';

export function* rootSaga() {
  yield take(REHYDRATE);
  yield createRequestInstance({
    driver: createDriver(fetchDriver, {
      baseURL: 'http://10.72.161.176:8088/',
    }),
    onRequest,
    onSuccess,
  });

  yield fork(watchRequests);
}
