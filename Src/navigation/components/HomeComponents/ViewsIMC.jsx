import {View, Text, StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';  
import * as React from 'react';
import { fonts } from '../../styles/fonts';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export const ViewsIMC =() =>{
    return(
        <View style={ViewsIMCStyle.mainContainer}>
            <View style={ViewsIMCStyle.containerInfo}>
                <Text style={fonts.medicionesHeader}>IMC</Text>
                <Text style={fonts.medicionesInfo}>19.3</Text>

            </View>
            <Text></Text>
            <View style={ViewsIMCStyle.containerInfo}>
                <Text style={fonts.medicionesHeader}>Altura</Text>
                <Text style={fonts.medicionesInfo}>1.80m </Text>

            </View>

        </View>
    );
}

const ViewsIMCStyle = StyleSheet.create({
    mainContainer:{
        width: "100%",
        flexDirection: "row",
        justifyContent:"space-around",
        margin:10,
        margin: 15,


    },
    containerInfo:{
        backgroundColor: "rgba(194,129,3,.65)",
        padding: 5,
        borderRadius: 5,
        width: "30%",
        justifyContent: "center",
        alignItems: "center"
    }
})


