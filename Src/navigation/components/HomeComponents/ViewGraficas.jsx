import {View, Text, StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';  
import * as React from 'react';
import { fonts } from '../../styles/fonts';

import { GraficaIMC } from './GraficaIMC';
import { GraficaPeso } from './GraficaPeso';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const ViewGraficas = () => {
    return(
        <>
            <View style={graficasStyels.mainContainer} >
                <Text style={fonts.headerMediciones}>IMC en el tiempo</Text>
                <GraficaIMC></GraficaIMC>
            </View>
            <View style={graficasStyels.mainContainer} >
                <Text style={fonts.headerMediciones}>Peso en el tiempo</Text>
                <GraficaPeso></GraficaPeso>
            </View>            
        </>  
    );
}


const graficasStyels = StyleSheet.create({
    mainContainer:{
        height: windowHeight*0.40,
        backgroundColor: "#F19F00",
        width: windowWidth*0.80,
        borderRadius: 10,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    }
})