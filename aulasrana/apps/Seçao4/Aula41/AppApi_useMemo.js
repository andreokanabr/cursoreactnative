import React, { Component, useState, useEffect, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from './theme/colors'; // Importe a paleta

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
  const letrasNome = useMemo(() => {
    console.log('Mudou letra');
    return nome.length;
  }, [nome]);
  // console.log(letrasNome);

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
      <Text style={estilos.texto2}>Tem {letrasNome} letras</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
  },
  texto: {
    color: '#ff0000',
    fontSize: 35,
  },
  texto2: {
    color: '#000',
    fontSize: 22,
  },
  btn: {
    backgroundColor: '#222',
    alignItems: 'center',
  },
  btnText: {
    color: '#FFF',
  },
});
