import React from "react";
import { FlatList, View, Text, Image } from "react-native";
import { USUARIOS } from "../../USERS/Users";
import { StyleSheet } from "react-native";
import { fonts } from "../../styles/fonts";



const AlmerzoItem = (platillo) =>{
    return(

    <View
    style={stylesList.container} 
    key={platillo.name}>
        <Text style={fonts.headerDietas}>{platillo  .name}</Text>
        {platillo.ingredientes.map( (i)=>
            {
                return(
                <Text key={i}
                style={fonts.listaIngredientes}> ◉ {i}</Text>
                )
            }

        )};

    </View>);
}

const stylesList = StyleSheet.create(
    {
        container:{
            flex:1,
            flexDirection: "column",
            backgroundColor: "rgba(241,159,0,0.36)",
            padding: 20,
            borderRadius: 10,
            width: '100%',
            borderWidth:1,
            borderColor: "#FFAA04"
        }
    }
)


export default AlmerzoItem;