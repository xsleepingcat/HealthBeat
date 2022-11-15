import {View, Text, Button} from 'react-native';
import * as React from 'react';
import Bottoms from '../components/Bottoms';
import Days from '../components/Days';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import Desayuno from './Desayuno';
import Almuerzo from './Almuerzo';
import Cena from './Cena';
import PasaBoca from './Pasaboca';
import DietasPasadas from './DietasPasadas';

const Stack = createNativeStackNavigator();

const Dietas1 = () => {
    const navigation = useNavigation();
    return (
        <View style={{
            flex: 1, backgroundColor: "#030B18"
                }}>

        <Days />
        <Bottoms {...navigation}/>
        </View>
    );
};

const MyStack = () =>{
    return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Dietas1" component={Dietas1} />
      <Stack.Screen options={{ headerShown: false }} name="Desayuno" component={Desayuno} />   
      <Stack.Screen options={{ headerShown: false }} name="Almuerzo" component={Almuerzo} />   
      <Stack.Screen options={{ headerShown: false }} name="Cena" component={Cena} />   
      <Stack.Screen options={{ headerShown: false }} name="PasaBoca" component={PasaBoca} />   
      <Stack.Screen options={{ headerShown: false }} name="DietasPasadas" component={DietasPasadas} />   
    </Stack.Navigator>
  );}

export default MyStack;

