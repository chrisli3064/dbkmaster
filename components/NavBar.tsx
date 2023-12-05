import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';
import NewsFeed from './NewsTab';
import Other from './Other';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function HomeScreen() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={Other} />
      <Tab.Screen name="d" component={Other} />
    </Tab.Navigator>
  );
}

export default function NavBar() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Other" component={HomeScreen} />
          <Stack.Screen name="News" component={NewsFeed} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
