import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Login from '../pages/Login';

const StackNavigator = createStackNavigator();

export default function Stack(): React.ReactElement {
  return (
    <StackNavigator.Navigator
      initialRouteName="Login"
      detachInactiveScreens={false}>
      <StackNavigator.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
    </StackNavigator.Navigator>
  );
}
