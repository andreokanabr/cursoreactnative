import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FormUsers() {
  return (
    <View>
      <Text>Oi</Text>
    </View>
  );
}

const est = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: '#000',
    marginLeft: 8,
    marginRight: 8,
  },
  buttonText: {
    padding: 8,
    color: '#FFF',
    textAlign: 'center',
  },
  label: {
    color: '#000',
    fontSize: 18,
    marginBottom: 4,
    marginLeft: 8,
  },
  input: {
    borderWidth: 1,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 8,
  },
  list: {
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8,
  },
  buttonLogout: {
    backgroundColor: 'red',
    alignSelf: 'flex-start',
    margin: 14,
    padding: 8,
    borderRadius: 4,
  },
});
