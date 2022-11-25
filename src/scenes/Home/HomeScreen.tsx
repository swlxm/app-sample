
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { FunctionComponent, useCallback, useLayoutEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native';
import { HOME_ROUTER } from '../../app/navigator/types';
import { useSelector } from 'react-redux';
import { isUserLoggedSelector } from '../../services/home/selectors';

interface IHomeScreenProps {}

export const HomeScreen: FunctionComponent<IHomeScreenProps> = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const isLogged = useSelector(isUserLoggedSelector);

  const onPressLogin = useCallback(
    () => {
      navigation.navigate(HOME_ROUTER.LOGIN);
    },
    [navigation],
  );

  const onPostProduct = useCallback(
    () => {
      navigation.navigate(HOME_ROUTER.HOME_POST_PRODUCT);
    },
    [navigation],
  );

  const onGetProduct = useCallback(
    () => {
      navigation.navigate(HOME_ROUTER.HOME_GET_PRODUCT);
    },
    [navigation],
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity testID="newproduct-search-icon" onPress={onPressLogin}>
          <View style={styles.loginView}>
            <Text>Login</Text>
          </View>
          
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (<View>
    <View style={styles.top}>
      {isLogged ?  <Text>用户登录成功</Text>:  <Text>用户未登录</Text>}
    </View>
    <View>
      <Button title='post products' onPress={onPostProduct}/>
      <Button title='get products' onPress={onGetProduct}/>
    </View>
  </View>);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
  },
  top: {
    height: 120,
    justifyContent:'center',
    alignItems:'center',
  },
  loginView: {
    width: 40,
    height: 40,
    justifyContent:'center',
    alignItems:'center',
    marginRight: 10,
  }
});