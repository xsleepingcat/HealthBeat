import {View, Text} from 'react-native';
import * as React from 'react';
import AlmuerzoItem from '../components/AlmuerzoComponents/AlmerzoItem.jsx';
import ListaDeComidas from '../components/ListComponent/ListaDeComidas.jsx';

const Desayuno = () => {
    return (
        <View>  
            <ListaDeComidas></ListaDeComidas>
        </View>
    );
};

export default Desayuno;

