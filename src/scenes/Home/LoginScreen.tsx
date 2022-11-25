import { NavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { isEmpty } from "lodash";
import React, { FunctionComponent, useCallback, useEffect, useState } from "react";
import { View,Text,StyleSheet, TextInput, Button  } from "react-native";
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../services/home/actions";
import { isUserLoggedSelector, loginErrorSelector } from "../../services/home/selectors";

interface ILoginScreenProps {}

export const LoginScreen:FunctionComponent<ILoginScreenProps> = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const dispatch = useDispatch();
  const isLogged = useSelector(isUserLoggedSelector);
  const isLoginError = useSelector(loginErrorSelector);
  const [userName, setUserName] = useState('admin');
  const [password, setPassword] = useState('admin');

  const onHide = useCallback(
    () => {
      console.log('onHide');
    },
    [],
  );
  
  const onLogin = useCallback(
    () => {
      if (isEmpty(userName) || isEmpty(password)){
        Toast.show({ text1: '错误', text2: '请输入用户名或者错误', type: 'error', onHide: onHide });
        return;
      }
      dispatch(userLogin(userName, password));
    },
    [],
  );
  
  useEffect(() => {
    if (isLogged){
      navigation.goBack();
    } 
    if (isLoginError){
      Toast.show({ text1: '错误', text2: '请输入用户名或者错误', type: 'error', onHide: onHide});
    }
  }, [isLogged, isLoginError]);

  useEffect(() => {
    return () => {
      
    }
  }, []);
  
  

  return (
  <View style={styles.container}>
    <View style={styles.body}>
      <View style={styles.row}>
        <Text style={styles.label}>Username:  </Text><TextInput value={userName} onChangeText={setUserName} placeholder="please input user name"/>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Password:  </Text><TextInput value={password} onChangeText={setPassword} placeholder="please input user Password"/>
      </View>

       <View style={styles.view}>
         <Button
           title="Login"
           color={'black'}
           style={styles.button}
           onPress={onLogin}
         />
       </View>
    </View>
  </View>);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
  },
  row: {
    flexDirection:'row',
    marginTop: 30,
  },
  body: {
    justifyContent:'center',
    // alignItems:'center',
  },
  label: {
    marginLeft: 30,
  },
  textInput: {
    width: 120,
  },
  view: {
    marginVertical: 20,
  },
  button: {
    width: 40,
    height: 25,
    // backgroundColor: 'red',
    borderColor: 'red',
    borderWidth: 1,
  },
});