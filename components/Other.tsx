import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, TouchableOpacity, Linking} from 'react-native'; // Import necessary components
import axios from 'axios';
import * as RSSParser from 'react-native-rss-parser';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Other(): JSX.Element {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text> Place Holder </Text>
    </View>
  );
}

export default Other;
