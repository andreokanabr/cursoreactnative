import React, { useRef, useEffect } from 'react';
import { StatusBar, Text, StyleSheet, View, Animated } from 'react-native';
import { Colors } from '../../themes/utilites/Colors';
export default function animacao() {
  const larAnimada = useRef(new Animated.Value(150)).current;
  const altAnimada = useRef(new Animated.Value(50)).current;
  const opacidadeAnimada = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(larAnimada, {
          toValue: 300,
          duration: 2000,
          useNativeDriver: false,
        }),
        Animated.timing(larAnimada, {
          toValue: 150,
          duration: 2000,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  }, []);

  return (
    <View style={est.container}>
      <StatusBar hidden={true} />
      <Animated.View
        style={{
          width: larAnimada,
          height: altAnimada,
          backgroundColor: '#4169e1',
          justifyContent: 'center',
          borderRadius: 50,
        }}
      >
        <Text style={{ textAlign: 'center', fontSize: 22, color: '#FFF' }}>
          Carregando
        </Text>
      </Animated.View>
    </View>
  );
}
const est = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
