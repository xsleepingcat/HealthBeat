import {View, Text, StyleSheet} from 'react-native';
import * as React from 'react';


import PesoActual from './PesoActual';
import ViewsPesosSmall from './ViewsPesosSmall';

const ViewsPesos = () => {
    return(
        <>
        <PesoActual></PesoActual>
        <ViewsPesosSmall></ViewsPesosSmall>
        </> 
    )
}

export default ViewsPesos;