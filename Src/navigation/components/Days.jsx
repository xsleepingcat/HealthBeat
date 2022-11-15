import { re } from 'mathjs';
import * as React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { stylesDays } from '../styles/StylesDays';


const diasArray = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];

const fechaActual = new Date;

const diaActual = fechaActual.getDay()

//Falta poner todo esto por componenetes, revisar despues 

const Days = () => {
  return (
    <View style={{width: "100%", justifyContent: "center", alignItems: 'center'}}>

    <View style={stylesDays.Container}>
    {
      diasArray.map((diaDeLaSemana,index) => { 
        if(index == diaActual){
          return(
            <View style={stylesDays.circleActive}>
              <Text style={stylesDays.Day}>{diaDeLaSemana}</Text>            
          </View>)  
          
        }
        
        return(
        <View style={stylesDays.circle}>
              <Text style={stylesDays.Day}>{diaDeLaSemana}</Text>            
        </View>)
      })
    }
    </View>

    </View>
  );
};
export default Days;

