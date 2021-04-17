/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '@screens/Home'
import Details from '@screens/Details'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={ Home }
          options={{ title: 'wdnmd' }}
        />
        <Stack.Screen name="Details" component={ Details } />
      </Stack.Navigator> 
    </NavigationContainer>
  );
};

export default App;
