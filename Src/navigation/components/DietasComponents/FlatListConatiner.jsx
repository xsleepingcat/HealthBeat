import React from "react";
import { FlatList, View, Text } from "react-native";
import { USUARIOS } from "../../USERS/Users";
import { StyleSheet } from "react-native";
import FlatListItem from "./FlatListItem";

const FlatListContainer = () =>{
  return(
    <View style={flatListStyle.mainContainer}>
        <FlatList
        style={flatListStyle.flat}
        data={USUARIOS}
        ItemSeparatorComponent ={()=> (<Text></Text>)}
        renderItem={({item: u}) =>(
            <FlatListItem {...u}/>
        ) }
        >
        </FlatList>
    </View>
    );
};

const flatListStyle = StyleSheet.create(
    {
        mainContainer:{
            flex:1,
            backgroundColor:"#030B18"
        },
        flat: {
            flex: 1,
            width: 300,
            alignContent: "center",
            marginHorizontal: 40,
            marginVertical: 10,
            padding: 10,
            
        }
    }
)

export default FlatListContainer;