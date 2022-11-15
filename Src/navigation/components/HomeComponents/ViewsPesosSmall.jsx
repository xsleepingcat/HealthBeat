import {View, Text, StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';  
import * as React from 'react';
import { PesoInicial } from './PesoInicial';
import { PesoMeta } from './PesoMeta';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ViewsPesosSmall = () => {
    return(
        <View style={ConatinerStyles.containerViewPesosSmall}>
            <PesoInicial> </PesoInicial>
            <Text style={{color:"white"}}></Text>
            <PesoMeta></PesoMeta>
        </View>
    );
}

const ConatinerStyles = StyleSheet.create({
    containerViewPesosSmall:{
        margin: 10,
        width: windowWidth*0.80,
        flexDirection: 'row',
        justifyContent: "space-between"
    }
})

export default ViewsPesosSmall;