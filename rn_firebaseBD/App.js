import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { FormUsers } from './src/FormUsers';
import { auth } from './src/firebaseConnection';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function App() {
  async function handleCreateUser() {
    const user = await createUserWithEmailAndPassword(
      auth,
      'teste@teste.com',
      '123123',
    );
    console.log(user);
  }
  return (
    <View style={est.container}>
      <StatusBar hidden={true} />
      {/* <FormUsers /> */}
      <Text style={{ marginLeft: 8, fontSize: 18, color: '#000' }}>Email:</Text>
      <TextInput style={est.input} placeholder="Digite seu email..." />
      <Text style={{ marginLeft: 8, fontSize: 18, color: '#000' }}>Senha:</Text>
      <TextInput style={est.input} placeholder="Digite sua senha..." />
      <TouchableOpacity style={est.button} onPress={handleCreateUser}>
        <Text style={est.buttonText}>Criar Conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const est = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  input: {
    marginLeft: 8,
    marginRight: 8,
    borderWidth: 1,
    marginBottom: 14,
  },
  button: {
    backgroundColor: '#000',
    marginLeft: 8,
    marginRight: 8,
    padding: 8,
  },
  buttonText: {
    padding: 8,
    color: '#FFF',
    textAlign: 'center',
  },
});
