import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RoutesD from '../../src/routes/Drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <NavigationContainer>
      <RoutesD />
    </NavigationContainer>
  );
}
