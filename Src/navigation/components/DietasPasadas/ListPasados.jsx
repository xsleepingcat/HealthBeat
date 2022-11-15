import * as React from 'react';
import {View, Text, ScrollView} from 'react-native';

import DesayunosPasados from './DesayunosPasados';
import CenasPasadas from './CenasPasadas';
import AlmuerzosPasados from './AlmuerzosPasados';
import PasaBocasPasados from './PasaBocasPasados';

const ListaPasados = () =>{
    return(
        
        <ScrollView>
            <DesayunosPasados></DesayunosPasados>
            <AlmuerzosPasados></AlmuerzosPasados>
            <CenasPasadas></CenasPasadas>
            <PasaBocasPasados></PasaBocasPasados>
        </ScrollView>

    );}

    export default ListaPasados;