/*import * as React from 'react'; */
import React, {Component} from 'react';
import {SafeAreaView, View, Text, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTab} from './Src/navigation/BottomTab';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './Src/navigation/Screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          initialRouteName={LoginScreen}
        />
        <BottomTab />
      </NavigationContainer>
    );
  }
}
