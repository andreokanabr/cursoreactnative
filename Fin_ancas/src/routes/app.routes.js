import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';

import Home from '../pages/Home';

const AppDrawer = createDrawerNavigator();

function AppRoutes() {
  const dimensions = useWindowDimensions();

  return (
    <AppDrawer.Navigator
      screenOptions={{
        drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
      }}
    >
      <AppDrawer.Screen name="Home" component={Home} />
    </AppDrawer.Navigator>
  );
}

export default AppRoutes;
