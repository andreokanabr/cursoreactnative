import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class App extends Component {
  render() {
    let nome = 'Matheus';

    return (
      <View>
        <Text>Olá Mundo!!!!</Text>
        <Text>Meu Primeiro App</Text>
        <Text style={{ color: '#FF0000', fontSize: 25, margin: 15 }}>
          Sujeito Programador
        </Text>

        <Text style={{ fontSize: 30 }}> {nome} </Text>

        <Jobs largura={100} altura={200} fulano="Matheus" />
      </View>
    );
  }
}

export default App;

class Jobs extends Component {
  render() {
    let img = 'https://sujeitoprogramador.com/steve.png';

    return (
      <View>
        <Image
          source={{ uri: img }}
          style={{ width: this.props.largura, height: this.props.altura }}
        />
        <Text> {this.props.fulano} </Text>
      </View>
    );
  }
}
