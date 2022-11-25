import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

// @ts-ignore
import rootReducer from './root-reducer';
import { rootSaga } from './root-saga';

const migrate = (state: any, version: number) => {
  return Promise.resolve(state);
};


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
  ],
  version: 50,
  migrate,
  stateReconciler: autoMergeLevel2,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const middlewares = [];
middlewares.push(sagaMiddleware);

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({
    collapsed: true,
    diff: true,
  });
  middlewares.push(logger);
}

const enhancer = applyMiddleware(...middlewares);

const store = createStore(persistedReducer, enhancer);

const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export function configureStore() {
  return {
    store: {
      ...store,
      runSaga: sagaMiddleware.run,
    },
    persistor,
  };
}
