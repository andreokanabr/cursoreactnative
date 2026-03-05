import React, { useRef, useEffect } from 'react';
import { StatusBar, Text, StyleSheet, View, Animated } from 'react-native';
import { Colors } from '../../themes/utilites/Colors';
export default function animacao() {
  const larAnimada = useRef(new Animated.Value(150)).current;
  const altAnimada = useRef(new Animated.Value(50)).current;
  const opacidadeAnimada = useRef(new Animated.Value(1)).current;
  //sequencia
  // useEffect(() => {
  //   Animated.sequence([
  //     Animated.timing(larAnimada, {
  //       toValue: 300,
  //       duration: 2000,
  //       useNativeDriver: false,
  //     }),
  //     Animated.timing(altAnimada, {
  //       toValue: 200,
  //       duration: 2000,
  //       useNativeDriver: false,
  //     }),
  //     Animated.timing(opacidadeAnimada, {
  //       toValue: 0,
  //       duration: 1000,
  //       useNativeDriver: false,
  //     }),
  //   ]).start();
  // }, []);

  //paralela
  // useEffect(() => {
  //   Animated.parallel([
  //     Animated.timing(larAnimada, {
  //       toValue: 300,
  //       duration: 2000,
  //       useNativeDriver: false,
  //     }),
  //     Animated.timing(altAnimada, {
  //       toValue: 200,
  //       duration: 2000,
  //       useNativeDriver: false,
  //     }),
  //   ]).start();
  // }, []);

  //juncao de tudo sequenca/paralela
  useEffect(() => {
    Animated.sequence([
      Animated.timing(opacidadeAnimada, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: false,
      }),
      Animated.parallel([
        Animated.timing(larAnimada, {
          toValue: 300,
          duration: 2000,
          useNativeDriver: false,
        }),
        Animated.timing(altAnimada, {
          toValue: 300,
          duration: 2000,
          useNativeDriver: false,
        }),
      ]),
      Animated.timing(opacidadeAnimada, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: false,
      }),
    ]).start();
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
          opacity: opacidadeAnimada,
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
