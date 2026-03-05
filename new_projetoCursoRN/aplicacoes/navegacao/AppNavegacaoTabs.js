import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../../pages/Home/Tabs';
import Sobre from '../../pages/Sobre/Tabs';
import Contato from '../../pages/Contato/Tabs';

import Feather from '@react-native-vector-icons/feather';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true, //não mostrar bar com teclado ativo
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#FFF',
          tabBarStyle: {
            backgroundColor: '#202225',
            borderTopWidth: 0,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            // tabBarLabel: 'Inicio'
            tabBarIcon: ({ color, size }) => {
              return <Feather name="home" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Sobre"
          component={Sobre}
          options={{
            // tabBarLabel: 'Inicio'
            tabBarIcon: ({ color, size }) => {
              return <Feather name="file-text" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Contato"
          component={Contato}
          options={{
            // headerShown: false,
            tabBarIcon: ({ color, size }) => {
              return <Feather name="phone-call" size={size} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
