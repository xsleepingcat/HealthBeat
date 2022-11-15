import {View, Text, StyleSheet,ScrollView} from 'react-native';
import * as React from 'react';
import ViewsPesos from '../components/HomeComponents/ViewsPesos';
import ViewsMediciones from '../components/HomeComponents/ViewsMediciones';
import { ViewGraficas } from '../components/HomeComponents/ViewGraficas';
const Home =  () =>{
  return(

    <ScrollView contentContainerStyle={{backgroundColor: "#030B18", alignItems: "center",paddingVertical: 20,}}>

          <ViewsPesos></ViewsPesos>
          <ViewsMediciones></ViewsMediciones>
          <ViewGraficas></ViewGraficas>
    </ScrollView>  
    
    )
} 

export default Home;
