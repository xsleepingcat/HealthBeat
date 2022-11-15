import {View, Text, StyleSheet} from 'react-native';
import * as React from 'react';

import { fonts } from '../../styles/fonts';

export const PesoInicial = () =>{
    return(
        <View style={pesosViews.mainConainer}>
            <Text style={fonts.pesoInicialHeader}>Peso inicial</Text>
            <View style={pesosViews.pesoContainer}>
                <Text style={fonts.pesoInicial}> 50kg </Text>
            </View>
        </View>
    );
}

const pesosViews = StyleSheet.create({
    mainConainer:{
        justifyContent: 'center',
        alignItems: "center",
        width: 120    
    },
    pesoContainer:{
        backgroundColor: "rgba(241,159,0,0.24)",
        width: "100%", 
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 10,
        borderColor: "#F19F00",
        borderWidth: 1,
        height:50
    }
})