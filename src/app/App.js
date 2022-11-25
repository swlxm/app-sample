/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import {HomeStackNavigator} from './navigator/homeNavigator';
import React from 'react';
import Toast from 'react-native-toast-message';
import {PersistGate} from 'redux-persist/integration/react';
// import {Button, StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {configureStore} from './configure-store';

const App = () => {
  const {store, persistor} = configureStore();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} />
      <NavigationContainer>
        <HomeStackNavigator />
        <Toast />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
