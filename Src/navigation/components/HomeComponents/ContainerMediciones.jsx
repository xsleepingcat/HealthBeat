import {View, Text, StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';  
import * as React from 'react';
import { fonts } from '../../styles/fonts';

import { ViewsIMC } from './ViewsIMC';
import { ViewsCitas } from './ViewsCitas';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const ContainerMediciones = () => {
    return(
        <>
            <View style={stylesContainer.mainContainer}>
                <Text style = { fonts.headerMediciones}>Mediciones</Text>
                <ViewsIMC></ViewsIMC>   
            </View>

            <View style={stylesContainer.mainContainer}>
                <Text style = { fonts.headerMediciones}>Citas</Text>
                <ViewsCitas></ViewsCitas>
            </View>
                     
        </>   

        
    );
}

const stylesContainer = StyleSheet.create({
    mainContainer:{
        backgroundColor: "#F19F00",
        width: windowWidth*0.80,
        borderRadius: 10,
        padding: 20,
        margin: 10,
        flexDirection:"column",
        alignItems: 'center',
        
    }
})
