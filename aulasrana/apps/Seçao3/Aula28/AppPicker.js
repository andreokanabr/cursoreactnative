import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizza: 0,
      pizzas: [
        { key: 1, nome: 'Strogonoff', valor: 35.9 },
        { key: 2, nome: 'portuguesa', valor: 29.9 },
        { key: 3, nome: 'calabresa', valor: 55.9 },
        { key: 4, nome: 'bacon', valor: 25.9 },
      ],
    };
  }
  render() {
    let pizzasItem = this.state.pizzas.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome} />;
    });

    return (
      <View styLe={styles.container}>
        <Text style={styles.logo}>Menu Pizza</Text>

        <Picker
          selectedValue={this.state.pizza}
          onValueChange={(ItemValue, itenIndex) =>
            this.setState({ pizza: ItemValue })
          }
        >
          {pizzasItem}
        </Picker>

        <Text style={styles.pizzas}>
          Você escolhe: {this.state.pizzas[this.state.pizza].nome}
        </Text>
        <Text style={styles.pizzas}>
          R$ {this.state.pizzas[this.state.pizza].valor.toFixed(2)}
        </Text>
        {/* <Text style={{ fontSize: 30 }}>{this.state.pizza}</Text> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  logo: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
  },
  pizzas: {
    marginTop: 15,
    fontSize: 25,
    textAlign: 'center',
  },
});

export default App;
