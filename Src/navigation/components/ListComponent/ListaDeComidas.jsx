import React from "react";
import { FlatList, View, Text, Image } from "react-native";
import { USUARIOS } from "../../USERS/Users";
import { StyleSheet } from "react-native";
import { fonts } from "../../styles/fonts";
import { useRoute } from "@react-navigation/native";

import { AlmerzoItem } from "../AlmuerzoComponents/AlmerzoItem";

const user = USUARIOS[0];

const DATA_REPO ={
    'Desayuno' : user.dietas.dieta1.desayunos,
    'Almuerzo' : user.dietas.dieta1.almuerzos,
    'Cena' : user.dietas.dieta1.cenas,
    'PasaBoca' : user.dietas.dieta1.pasaBoca,
} 


const PlatilloItem = (props) =>{
    return(
    <View
    style={stylesList.container} 
    key={props.name}>
        <Text style={fonts.headerDietas}>{props.name}</Text>
        {props.ingredientes.map( (i)=>
            {
                return(
                <Text key={i}
                style={fonts.listaIngredientes}> ◉ {i}</Text>
                )
            }
        )}  

    </View>);
}

const ListaDeComidas = () =>{
    const route = useRoute();
    const nameRoute = route.name
  return(
    <View 
    style= {{padding:10, backgroundColor: "#030B18", height: "100%", alignItems: "center", width: "100%"} }>

            <Text style={fonts.headerMediciones}>{nameRoute}</Text>

            <FlatList 
            style={{alignContent:"center", marginTop: 15}}
            data={DATA_REPO[nameRoute]}
            ItemSeparatorComponent={ ()=> <Text> </Text>}
            renderItem={( {item: platillo} ) =>(
                
                <PlatilloItem {...platillo}/>

            )
            } />
            
</View>            

                
            
    ) };


const stylesList = StyleSheet.create(
    {
        container:{
            flex:1,
            flexDirection: "column",
            backgroundColor: "rgba(241,159,0,0.36)",
            padding: 20,
            borderRadius: 10,
            width: 300,
            borderWidth:1,
            borderColor: "#FFAA04"
        }
    }
)

export default ListaDeComidas;