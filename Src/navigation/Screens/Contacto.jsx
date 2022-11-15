  import {View,TouchableOpacity, Text,StyleSheet , ScrollView, Platform, Button } from 'react-native';
  import * as React from 'react';


  import { useState } from 'react';
  import { fonts } from '../styles/fonts';



  const Contacto = () => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setShow(false);
      setDate(currentDate);
    };
  
    const showMode = (currentMode) => {
      if (Platform.OS === 'android') {
        setShow(false);
        // for iOS, add a button that closes the picker
      }
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
    };
    
    return (

      
      
      <ScrollView style={styleContacto.mainContainer} contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styleContacto.containerData}>
              <Text style = {fonts.headerMediciones}> USER </Text>
          </View>

          <View style={styleContacto.containerData}>
            
            <TouchableOpacity style={styleContacto.button}>
              <Text style={styleContacto.font}>Enviar mensaje</Text>
            </TouchableOpacity> 

            <TouchableOpacity style={styleContacto.button}
              onPress={showDatepicker}
              >
              <Text style={styleContacto.font}>Agendar cita</Text>
            </TouchableOpacity>     

                  
                
            <View style={styleContacto.outputDate}>
              <Text style={styleContacto.font}>{date.toLocaleString()}</Text>
            </View>

          </View>     
        
            
      </ScrollView>
    );
  };

  const styleContacto = StyleSheet.create({

    mainContainer:{
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#030B18',
      padding: 20

      
    },
    containerData:{
      height:300,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button:{
      backgroundColor: "rgba(255, 170, 4, 1)",
      borderRadius: 10,
      padding: 10,
      justifyContent: "center",
      alignItems: 'center',
      width: "80%",
      margin: 20
    },
    font:{
      fontSize: 20,
      color: "white"
    },
    outputDate:{
      elevation: 20,
      shadowColor: '#FFAA04',
      backgroundColor: '#030B18',
      width: '30%',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 25,
      paddingVertical: 10,
      borderRadius: 10,
      borderColor: "#FFAA04",
      borderWidth: 1,

    }
  })

  export default Contacto;
