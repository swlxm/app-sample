
import React, { FunctionComponent, useCallback, useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { submitProduct } from "../../services/home/actions";

interface IRecordProductScreenProps {}

export const RecordProductScreen:FunctionComponent<IRecordProductScreenProps> = () => {

  const dispatch = useDispatch();
  const [counter, setCounter] = useState('');
  const [id, setId] = useState('');
  const [name, setName] = useState('');

  const onSubmit = useCallback(
    () => {
      dispatch(submitProduct(counter, id, name));
    },
    [counter,id,name],
  )
  
  return (
    <View style={styles.container}>
      <View style={styles.body}>
      <View style={styles.row}>
          <Text style={styles.label}>Counter:  </Text>
          <TextInput style={styles.input} value={counter} onChangeText={setCounter} placeholder="please input counter"/>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Id:  </Text>
          <TextInput style={styles.input} value={id} onChangeText={setId} placeholder="please input id"/>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Name:  </Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="please input name"/>
        </View>
  
         <View style={styles.view}>
           <Button
             title="Submit"
             color={'black'}
             style={styles.button}
             onPress={onSubmit}
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
      borderColor: 'red',
      borderWidth: 1,
    },
    input: {
      width: 190,
      borderWidth: 1,
    },
  });