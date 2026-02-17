import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import api from '../../src/services/api';
import Filmes from '../../src/Filmes';

export default function App() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState([true]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get('r-api/?api=filmes');
      // console.log(response.data);
      setFilmes(response.data);
      setLoading(false);
    }
    loadFilmes();
  }, []);

  if (loading) {
    return (
      <View style={estilizacao.indicadorLoading}>
        {/* <ActivityIndicator color="#ff0000" size={45} /> */}
        <ActivityIndicator color="#ff0000" size="large" />
      </View>
    );
  } else {
    return (
      <View style={estilizacao.container}>
        <StatusBar hidden={true} />
        <FlatList
          data={filmes}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Filmes data={item} />}
        />
      </View>
    );
  }
}

const estilizacao = StyleSheet.create({
  container: {
    flex: 1,
  },
  indicadorLoading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
