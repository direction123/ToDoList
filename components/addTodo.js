import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Alert } from 'react-native';

export default function AddTodo({ submitEventHandler }) {
  const [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  };

  const submitHandler = () => {
    if (text.length > 3) {
      submitEventHandler(text);
      setText("");
    } else {
      Alert.alert("Oops!", "Todo's must be more that 3 chars long", [
        { text: "Understood", onPress: () => console.log("alert closed") }
      ]);
    }
  };

  return (
    <View>
      <TextInput 
        style={styles.input} 
        placeholder='new todo...'
        onChangeText={changeHandler} 
        value={text} 
      />
      <Button color='coral' onPress={() => submitHandler(text)} title='add todo' />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});