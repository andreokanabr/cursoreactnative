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

export default function App() {
  return (
    <View style={est.container}>
      <StatusBar hidden={true} />
      <FormUsers />
    </View>
  );
}

const est = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
});
