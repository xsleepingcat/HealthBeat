import * as React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTab} from './Src/navigation/BottomTab';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Desayuno from '../Screens/Desayuno';
import Home from '../Screens/Home';
import Contacto from '../Screens/Contacto';
import Dietas from '../Screens/Dietas';


const Stack = createNativeStackNavigator();

export default function Navigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name='Desayuno'
            component={Desayuno}
            />
        <Stack.Navigator>
            <Stack.Screen
            name='Dietas'
            component={Dietas}
            />
        </Stack.Navigator>
    )
}