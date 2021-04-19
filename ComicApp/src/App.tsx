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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '@screens/home/index'
import User from '@screens/user/index'
import ComicDetails from '@screens/comic-details/index'

const Tab = createBottomTabNavigator()

const HomeStack = createStackNavigator()
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={ Home } />
      <HomeStack.Screen name="ComicDetails" component={ ComicDetails } />
    </HomeStack.Navigator>
  )
}

const UserStack = createStackNavigator()
function UserStackScreen() {
  return (
    <UserStack.Navigator>
      <UserStack.Screen name="User" component={ User } />
      <UserStack.Screen name="ComicDetails" component={ ComicDetails } />
    </UserStack.Navigator>
  )
}
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={ HomeStackScreen }
          options={{ title: '最新更新' }}
        />
        <Tab.Screen
          name="User"
          component={ UserStackScreen }
          options={{ title: '我的' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
