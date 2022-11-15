import React from "react";
import { FlatList, View, Text, Image } from "react-native";
import { USUARIOS } from "../../USERS/Users";
import { StyleSheet } from "react-native";

const FlatListItem = (props) =>{
  return(   
        <View style={ListStyle.conatinerItem} key={props.id}>
            <View style={ListStyle.containerImagen} >
            <Image
            style={ListStyle.imagen}
            source={require('../../images/carne-res-hilachas-huevo.jpg')}/>
            </View>
            <View style = {ListStyle.texBox}>
                <Text style = {ListStyle.headerReceta}>{props.dietas.dieta1.desayunos.desayuno1.name}</Text>
                <Text  style = {ListStyle.textoReceta}>Ingredientes: </Text>
                { props.dietas.dieta1.desayunos.desayuno1.ingredientes.map((e) => {
                    return  <Text style = {ListStyle.textoIngredientes}> ~{e} </Text>
                })}
            </View> 
        </View>
    ) };

const ListStyle = StyleSheet.create(
    {
        headerReceta: {
            color:"#FFFFFF",
            fontSize:17,
            fontWeight: "bold",
        },
        textoReceta: {
            color: "#FFFFFF",
            fontSize: 15
        },
        textoIngredientes:{
            color: '#FFFFFF',
            fontSize: 12
        },
        texBox:{
            marginLeft: 10,
        },
        conatinerItem: {
            backgroundColor: "rgba(241,159,0,0.36)",
            padding: 10,   
            flex: 1,
            flexDirection: "row",
            borderWidth: 1,
            borderColor: "#FFAA04",
            borderRadius: 5
            
        },
        containerImagen:{
            width: "30%",
            height: "100%"
        },
        imagen:{
            width: "100%",
            height: "100%",
            borderRadius: 5
        }
    }
)

export default FlatListItem;