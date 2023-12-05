/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {createAppContainer} from 'react-navigation';
import NavBar from './components/NavBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {NavigationContainer} from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Sports from './components/Sports';
import Diversions from './components/Diversions';
import Opinion from './components/Opinion';
import NewsTabsNavigator from './components/NewsTabNavigator';
import NewsTabNavigator from './components/NewsTabNavigator';
type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
 
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="News"
      screenOptions={{
        tabBarActiveTintColor: 'red', // Set the active tab color to red
        
        
      }}>
        <Tab.Screen
          name="News"
          component={NewsTabNavigator}
          options={{
            title: 'News',
            tabBarIcon: ({size, color}) => (
              <Icon name="newspaper" size={size} color={color} />
            ),
            headerStyle: {
              backgroundColor: 'red', // Set the header background color to red
            },
            headerTitleStyle: {
              color: 'white', // Set the header text color to red
            },
          }}
        />
        <Tab.Screen
          name="Sports"
          component={Sports}
          options={{
            title: 'Sports',
            tabBarIcon: ({size, color}) => (
              <Icon name="football" size={size} color={color} />
            ),
            headerStyle: {
              backgroundColor: 'red', // Set the header background color to red
            },
            headerTitleStyle: {
              color: 'white', // Set the header text color to red
            },
          }}
        />
        <Tab.Screen
          name="Diversions"
          component={Diversions}
          options={{
            title: 'Diversions',
            tabBarIcon: ({size, color}) => (
              <Icon name="newspaper" size={size} color={color} />
            ),
            headerStyle: {
              backgroundColor: 'red', // Set the header background color to red
            },
            headerTitleStyle: {
              color: 'white', // Set the header text color to red
            },
          }}
        />
        <Tab.Screen
          name="Opinions"
          component={Opinion}
          options={{
            title: 'Opinions',
            tabBarIcon: ({size, color}) => (
              <Icon name="text-long" size={size} color={color} />
            ),
            headerStyle: {
              backgroundColor: 'red', // Set the header background color to red
            },
            headerTitleStyle: {
              color: 'white', // Set the header text color to red
            },
          }}
        />
        
      </Tab.Navigator>
    </NavigationContainer>
  ); 
  
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
