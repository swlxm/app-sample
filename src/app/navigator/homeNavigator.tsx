
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../../scenes/Home/LoginScreen';
import { HomeStackParamList, HOME_ROUTER } from './types';
import { HomeScreen } from '../../scenes/Home/HomeScreen';
import { RecordProductScreen } from '../../scenes/Home/RecordProductScreen';
import { GetProductsScreen } from '../../scenes/Home/GetProductsScreen';

const homeStack = createStackNavigator<HomeStackParamList>();

export const HomeStackNavigator = () => {
  return (
  <homeStack.Navigator
    initialRouteName={HOME_ROUTER.HOME}>
      <homeStack.Screen name={HOME_ROUTER.LOGIN}
      component={LoginScreen} />
          <homeStack.Screen name={HOME_ROUTER.HOME}
      component={HomeScreen} />
      <homeStack.Screen name={HOME_ROUTER.HOME_POST_PRODUCT} component={RecordProductScreen}/>
      <homeStack.Screen name={HOME_ROUTER.HOME_GET_PRODUCT} component={GetProductsScreen}/>
    </homeStack.Navigator>);
};