import {View, Text, StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';  
import * as React from 'react';
import { fonts } from '../../styles/fonts';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export const ViewsCitas =() =>{
    return(
        <View style={ViewsIMCStyle.mainContainer}>
            <View style={ViewsIMCStyle.containerInfo}>
                <Text style={fonts.medicionesHeader}>Ult. Cita</Text>
                <Text style={fonts.medicionesInfo}>08/08/22</Text>
            </View>
            <Text></Text>

            <View style={ViewsIMCStyle.containerInfo}>
                <Text style={fonts.medicionesHeader}>Sig. Cita</Text>
                <Text style={fonts.medicionesInfo}>08/10/22</Text>
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


    },
    containerInfo:{
        backgroundColor: "rgba(194,129,3,.65)",
        padding: 5,
        borderRadius: 5,
        width: "45%",
        justifyContent: "center",
        alignItems: "center"
    }
})


