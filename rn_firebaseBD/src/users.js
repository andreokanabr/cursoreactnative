import React from 'react';
import { db } from './firebaseConnection';
import { deleteDoc, doc } from 'firebase/firestore';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export function UsersList({ data, handleEdit }) {
  async function handleDeleteItem() {
    const docRef = doc(db, 'users', data.id);
    await deleteDoc(docRef);
  }

  function handleEditUser() {
    handleEdit(data);
  }

  return (
    <View style={est.container}>
      {/* <Text>Id: {data.id}</Text> */}
      <Text>Nome: {data.nome}</Text>
      <Text>Idade: {data.idade}</Text>
      <Text>Cargo: {data.cargo}</Text>
      <TouchableOpacity style={est.buttonDel} onPress={handleDeleteItem}>
        <Text style={est.buttonText}>Deletar usuario</Text>
      </TouchableOpacity>
      <TouchableOpacity style={est.buttonEdit} onPress={handleEditUser}>
        <Text style={est.buttonText}>Editar usuario</Text>
      </TouchableOpacity>
    </View>
  );
}

const est = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 4,
    marginBottom: 14,
  },
  item: {
    color: '#000',
    fontSize: 16,
  },
  buttonDel: {
    backgroundColor: '#B3261E',
    alignSelf: 'flex-start',
    padding: 4,
    borderRadius: 4,
    marginTop: 16,
  },
  buttonText: {
    color: '#FFF',
    paddingLeft: 8,
    paddingRight: 8,
  },
  buttonEdit: {
    backgroundColor: '#000',
    alignSelf: 'flex-start',
    padding: 4,
    borderRadius: 4,
    marginTop: 16,
  },
});
