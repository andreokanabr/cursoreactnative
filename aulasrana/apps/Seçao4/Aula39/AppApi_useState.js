import React, { Component, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default function App() {
  const [nome, setNome] = useState('Arthur Fleck');
  const [input, setInput] = useState('');

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
