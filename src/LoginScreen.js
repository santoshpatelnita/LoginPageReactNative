import React, { useState } from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const handleLogin = (values) => {
    // Retrieve the registration data using AsyncStorage and compare with the login data
  };

  return (
    <View style={{flex:1, justifyContent: 'center', paddingLeft: 15}}>
      <Text style={styles.textHeaing}>Username:</Text>
      <TextInput
        autoFocus
        style={styles.mobileTextInput}
        value={userName}
        onChangeText={(e) => setUserName(e)}
      />
      <Text style={styles.textHeaing}>Password:</Text>
      <TextInput
        autoFocus
        style={styles.mobileTextInput}
        value={password}
        onChangeText={(e) => setPassword(e)}
      />

      <TouchableOpacity 
      style={styles.button}
      onPress={()=>handleLogin}
      >
        <Text style={{textAlign: 'center', color: '#FFFFFF', fontSize:14}}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  textHeaing: {
    paddingTop: 10,
  },
  mobileTextInput: {
    width: '95%',
    borderWidth: 0.5,
    borderRadius: 5,
    paddingVertical: 5,
  },
  button: {
    width: '95%',
    paddingVertical: 10,
    marginTop: 20,
    backgroundColor: 'green',
    borderRadius: 5,
  },
});

export default LoginScreen;
