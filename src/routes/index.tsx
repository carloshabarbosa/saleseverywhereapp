import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import DrawerStack from './drawer';
import Stack from './stack';

export default function Navigation(): React.ReactElement {
  const [hasToken, sethasToken] = useState(false);
  useEffect(() => {
    AsyncStorage.getItem('jwtToken').then(token => {
      sethasToken(!!token);
    });
  });

  const RootStack = createStackNavigator();
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {!hasToken ? (
          <RootStack.Screen
            name="Auth"
            component={Stack}
            options={{headerShown: false}}
          />
        ) : (
          <RootStack.Screen
            name="App"
            component={DrawerStack}
            options={{headerShown: false}}
          />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
