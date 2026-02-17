import React, { useRef, useEffect } from 'react';
import { StatusBar, Text, StyleSheet, View, Animated } from 'react-native';
import { Colors } from '../../themes/utilites/Colors';
export default function animacao() {
  const larAnimada = useRef(new Animated.Value(0)).current;
  const altAnimada = useRef(new Animated.Value(50)).current;
  const opacidadeAnimada = useRef(new Animated.Value(1)).current;

  // useEffect(() => {
  //   Animated.timing(larAnimada, {
  //     toValue: 100,
  //     duration: 4000,
  //     useNativeDriver: false,
  //   }).start();
  // }, []);

  // let porcentagemLargura = larAnimada.interpolate({
  //   inputRange: [0, 100],
  //   outputRange: ['0%', '100%'],
  // });

  useEffect(() => {
    Animated.sequence([
      Animated.timing(larAnimada, {
        toValue: 100,
        duration: 4000,
        useNativeDriver: false,
      }),
      Animated.timing(altAnimada, {
        toValue: 100,
        duration: 4000,
        useNativeDriver: false,
      }),
      //]).start(({ finished }) => {
    ]).start(({}) => {
      alert('ANIMAÇÃO FINALIZADA');
      // console.log(finished);
    });
  }, []);

  let porcentagemLargura = larAnimada.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  let porcentagemAltura = altAnimada.interpolate({
    inputRange: [50, 100],
    outputRange: ['5%', '100%'],
  });
  return (
    <View style={est.container}>
      <StatusBar hidden={true} />
      <Animated.View
        style={{
          width: porcentagemLargura,
          height: porcentagemAltura,
          backgroundColor: '#4169e1',
          justifyContent: 'center',
        }}
      >
        {/* <Text>TESTE</Text> */}
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
