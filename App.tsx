/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';
import Navigation from './src/routes';

export default function App(): React.ReactElement {
  enableScreens(false);

  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}
