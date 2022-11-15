import {View, Text, StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';  
import * as React from 'react';
import { fonts } from '../../styles/fonts';

import {
  LineChart
} from "react-native-chart-kit";

/* Agarrar datos al aire dependiendo del mes del anio */

const chartConfig = {
  backgroundGradientFrom: "#DBB265",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#DBB265",
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(205, 174, 114, ${opacity})`,
  strokeWidth: 3 , // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`
};

const arrayMeses = ["Ene", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Ago", "Sep" , "Oct", "Nov", "Dic"]

const data = {
  labels: ["Ene", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      data: [50, 51, 53, 57, 58, 60],
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      strokeWidth: 2,
    }
  ],
};

const windowWidth = Dimensions.get('window').width;


export const GraficaPeso = () => {
    return( 
          <LineChart
            data={data}
            width={windowWidth*.80}
            height={220}
            chartConfig={chartConfig}
            bezier/>           
    );
}


const grafica = StyleSheet.create({ 
    mainContainer:{
        height: "90%",
        backgroundColor: "black",
        width: "90%",
        borderRadius: 10,
        margin: 10,
    }
})