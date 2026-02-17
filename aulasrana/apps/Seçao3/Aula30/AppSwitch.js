import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
    };
  }
  render() {
    return (
      <View styLe={styles.container}>
        <Text></Text>
        <Switch
          value={this.state.status}
          Gostaria
          onValueChange={valorSwitch => this.setState({ status: valorSwitch })}
          thumbColor={'#ff0000'}
        />
        <Text style={{ textAlign: 'center', fontSize: 30 }}>
          {this.state.status ? 'Ativo' : 'Inativo'}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    marginTop: 15,
  },
});
export default App;
