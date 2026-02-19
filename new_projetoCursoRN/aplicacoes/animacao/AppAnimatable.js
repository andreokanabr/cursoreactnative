import React, { useRef } from 'react';
import {
  StatusBar,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import { Colors } from '../../themes/utilites/Colors';
import * as Animatable from 'react-native-animatable';

const ButtonAnimated = Animatable.createAnimatableComponent(TouchableOpacity);

export default function AppAnimatable() {
  const buttonRef = useRef(null);

  function handleClick() {
    buttonRef.current.shake();
  }

  return (
    <View style={est.container}>
      <StatusBar hidden={true} />
      <Animatable.Text
        style={est.title}
        animation="shake"
        // iterationCount={Infinity}
        // duration={5000}
      >
        OLÁ
      </Animatable.Text>
      <ButtonAnimated
        style={est.button}
        animation="pulse"
        ref={buttonRef}
        onPress={handleClick}
      >
        <Text style={{ color: '#FFF' }}>Animar</Text>
      </ButtonAnimated>
    </View>
  );
}

const est = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
  },
  button: {
    width: '70%',
    height: 30,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
});
