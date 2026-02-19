import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Pessoas from './src/Pessoas';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        { id: '1', nome: 'André', idade: 30, email: 'aoficial@email.com' },
        { id: '2', nome: 'Joao', idade: 21, email: 'joaoficial@email.com' },
        { id: '3', nome: 'Maria', idade: 26, email: 'mahficial@email.com' },
        { id: '4', nome: 'Rita', idade: 51, email: 'iritaficial@email.com' },
        { id: '5', nome: 'Alfred', idade: 70, email: 'mordomo@email.com' },
        {
          id: '6',
          nome: 'Edson',
          idade: 62,
          email: 'edson@email.com',
        },
        { id: '7', nome: 'José', idade: 66, email: 'zemanga@email.com' },
        {
          id: '8',
          nome: 'Mario',
          idade: 55,
          email: 'supermario@email.com',
        },
      ],
    };
  }

  render() {
    return (
      <View styLe={styles.container}>
        <FlatList
          data={this.state.feed}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Pessoas data={item} />}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
