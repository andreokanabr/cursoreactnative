import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  useColorScheme,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Detalhes from '../../src/Detalhes';

export default function Filmes({ data }) {
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <View>
      <View style={estilizacao.card}>
        <Text style={estilizacao.titulo}>{data.nome}</Text>

        <Image source={{ uri: data.foto }} style={estilizacao.capa} />
        <View style={estilizacao.areaBotao}>
          <TouchableOpacity
            style={estilizacao.botao}
            onPress={() => setVisibleModal(true)}
          >
            <Text style={estilizacao.botaoTexto}>LEIA MAIS</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal transparent={true} animationType="slide" visible={visibleModal}>
        <Detalhes filme={data} voltar={() => setVisibleModal(false)} />
      </Modal>
    </View>
  );
}
const estilizacao = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    margin: 15,
    elevation: 2,
  },
  capa: {
    height: 250,
    zIndex: 2,
  },
  titulo: {
    padding: 15,
    fontSize: 18,
  },
  areaBotao: {
    alignItems: 'flex-end',
    marginTop: -40,
    zIndex: 9,
  },
  botao: {
    width: 100,
    backgroundColor: '#09A6FF',
    opacity: 1,
    padding: 9,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  botaoTexto: {
    color: '#FFF',
    textAlign: 'center',
  },
});
