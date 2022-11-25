import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { FunctionComponent, useCallback, useLayoutEffect, useMemo, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../services/home/actions";
import { productsSelector } from "../../services/home/selectors";

interface IGetProductsScreenProps {}

export const GetProductsScreen:FunctionComponent<IGetProductsScreenProps> = () => {

  const products = useSelector(productsSelector);
  const [counter, setCounter] = useState('');

  const navigation = useNavigation<NavigationProp<any>>();

  const dispatch = useDispatch();

  const onGetProducts = useCallback(
    () => {
      dispatch(getProducts(counter));
    },
    [counter, dispatch],
  );

  const renderProduct = useCallback(
    ({item}) => {
      return <View style={{flexDirection:'row', marginVertical: 10,}}>
        <Text>{`ID: ${item.id}    `}</Text>
        <Text>{`Name: ${item.name}`}</Text>
      </View>
    },
    [],
  );
  
  const keyExtractor = useCallback(
    (item) => {
      return item?.id;
    },
    [],
  )
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity testID="newproduct-search-icon" onPress={onGetProducts}>
          <View style={styles.loginView}>
            <Text>get</Text>
          </View>
        </TouchableOpacity>
      ),
    });
  }, [navigation, onGetProducts]);
  

  const emptyComponent = useMemo(() => <View>
    <Text>No Data</Text>
  </View>
  , []);

  
  return (<View style={styles.container}>
    <View style={styles.top}>
      <View style={styles.row}>
        <Text style={styles.label}>search number:  </Text>
        <TextInput style={styles.textInput} value={counter} onChangeText={setCounter} placeholder="please input search counter"/>
      </View>
    </View>
    <View style={styles.body}>
      <FlatList 
        data={products}
        renderItem = {renderProduct}
        keyExtractor={keyExtractor}
        ListEmptyComponent={emptyComponent}
        />
        
    </View>

  </View>);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  top: {
    height: 120,
  },
  body: {
    marginTop: 10,
    backgroundColor:'white',
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },
  loginView: {
    width: 40,
    height: 40,
    justifyContent:'center',
    alignItems:'center',
    marginRight: 10,
  },
  label: {
    marginLeft: 30,
    width: 130,
  },
  row: {
    flexDirection:'row',
    marginTop: 30,
  },
  textInput: {
    width: 220,
    borderWidth: 1,
    borderColor:'black',
  },
});