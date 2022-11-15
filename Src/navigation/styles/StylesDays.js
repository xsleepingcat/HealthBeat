
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';


export const stylesDays = StyleSheet.create({
    Container: {
      width: 400,
      height: 50,
      backgroundColor: '#62460E',
      marginTop: 20,
      marginLeft: 6,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#FFAA04',
      flexDirection: 'row',
    },
    circle: {
      width: 40,
      height: 40,
      backgroundColor: '#DC9101',
      marginLeft: 14,
      marginTop: 3,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: '#F9F9F9',
    },
  
    circleActive: {
      width: 40,
      height: 40,
      backgroundColor: '#AB8B50',
      marginLeft: 14,
      marginTop: 3,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: '#F9F9F9',
    },
    
  
    Day: {
      color: '#F9F9F9',
      fontWeight: 'bold',
      fontSize: 25,
      textAlign: 'center',
      marginTop: 2,
      marginRight: 1.5,
      
    }
  
  });