import React, { Component, useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [nome, setNome] = useState('');
  const [input, setInput] = useState('');

  //Componente DidMount
  useEffect(() => {
    async function getStorage() {
      const nomeStorage = await AsyncStorage.getItem('nomes');
      if (nomeStorage !== null) {
        setNome(nomeStorage);
      }
    }
    getStorage();

    // return () => {};
  }, []);

  //Componente DidUpdate
  useEffect(() => {
    async function saveStorage() {
      await AsyncStorage.setItem('nomes', nome);
    }

    saveStorage();
  }, [nome]);

  function alteraNome() {
    setNome(input);
    setInput('');
  }

  return (
    <View style={estilos.container}>
      <StatusBar hidden={true} />

      <TextInput
        placeholder="Seu Nome..."
        value={input}
        onChangeText={texto => setInput(texto)}
      />

      <TouchableOpacity style={estilos.btn} onPress={alteraNome}>
        <Text style={estilos.btnText}>Alterar Nome</Text>
      </TouchableOpacity>

      <Text style={estilos.texto}>{nome}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
  },
  texto: {
    color: '#000',
    fontSize: 35,
  },
  btn: {
    backgroundColor: '#222',
    alignItems: 'center',
  },
  btnText: {
    color: '#FFF',
  },
});
