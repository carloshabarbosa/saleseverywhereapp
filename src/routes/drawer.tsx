import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../pages/Home';

const Drawer = createDrawerNavigator();

export default function DrawerStack(): React.ReactElement {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Incial" component={Home} />
    </Drawer.Navigator>
  );
}
