import {View, Text, StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';  
import * as React from 'react';
import { fonts } from '../../styles/fonts';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PesoActual = () => {
    return(
            <View style= {PesoActualStyles.containerPesoActual}>
                <Text style = {{color: "white", fontSize:25, margin: 0, fontWeight: 'bold' } } >Peso Acual</Text>
                <Text style = {fonts.pesoActual} >60kg</Text>
            </View>
        
    );
}

const PesoActualStyles = StyleSheet.create({
    containerPesoActual:{
        backgroundColor: "rgba(241,159,0,0.24)",
        width: windowWidth*0.80,
        height: windowHeight*.15,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        borderColor: "#F19F00",
        borderWidth: 1,
        flexDirection: "column"
    }

})


export default PesoActual;