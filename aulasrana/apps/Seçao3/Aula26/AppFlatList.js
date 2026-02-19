import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
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
      ],
    };
  }

  render() {
    return (
      <View styLe={styles.container}>
        <FlatList
          data={this.state.feed}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Pessoa data={item} />}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  areaPessoa: { backgroundColor: '#222', height: 200, marginBottom: 15 },
  textoPessoa: { color: '#FFF', fontSize: 20 },
});
export default App;

class Pessoa extends Component {
  render() {
    return (
      <View style={styles.areaPessoa}>
        <Text style={styles.textoPessoa}>Nome: {this.props.data.nome}</Text>
        <Text style={styles.textoPessoa}>Idade: {this.props.data.idade}</Text>
        <Text style={styles.textoPessoa}>Email: {this.props.data.email}</Text>
      </View>
    );
  }
}
