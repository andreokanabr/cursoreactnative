import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../pages/Home/Evolucao';
import Sobre from '../../pages/Sobre/Evolucao';
import Contato from '../../pages/Contato/Evolucao/';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Tela inicio',
            headerStyle: {
              backgroundColor: '#121212',
            },

            headerTintColor: '#fff',
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Sobre"
          component={Sobre}
          options={{
            title: 'Pagina Sobre',
          }}
        />

        <Stack.Screen
          name="Contato"
          component={Contato}
          options={{
            title: 'Pagina Contato',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
