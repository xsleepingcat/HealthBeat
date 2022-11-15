import react from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Desayuno from '../Screens/Desayuno';
import DietasPasadas from '../Screens/DietasPasadas';
import { useNavigation } from '@react-navigation/native';


const Bottoms = () => {
  const navigation = useNavigation();

  return (
    <>
    
      <TouchableOpacity style={styles.buttonContainer}
        onPress= { () => navigation.navigate('Desayuno')}>
        <Text style={styles.buttonText}>Desayuno</Text>
      </TouchableOpacity> 

      <TouchableOpacity style={styles.buttonContainerGral}
        onPress= { () => navigation.navigate('Almuerzo')}>
        <Text style={styles.buttonText}>Almuerzo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainerGral}
        onPress= { () => navigation.navigate('Cena')}>
        <Text style={styles.buttonText}>Cena</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainerGral}
        onPress= { () => navigation.navigate('PasaBoca')}>
        <Text style={styles.buttonText}>Pasa Boca</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainerDP}
        onPress= { () => navigation.navigate('DietasPasadas')}>
        <Text style={styles.buttonTextDP}>Dietas pasadas</Text>
      </TouchableOpacity>
    </>
  );
};
export default Bottoms;

const styles = StyleSheet.create({
  buttonContainer: {
    width: 250,
    height: 70,
    backgroundColor: '#FF7E06',
    marginTop: 20,
    marginLeft: 85,
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#F9F9F9',
  },

  buttonText: {
    color: '#f9f9f9',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 12,
    fontStyle: 'italic',
  },

  buttonContainerGral: {
    width: 250,
    height: 70,
    backgroundColor: '#FF7E06',
    marginTop: 20,
    marginLeft: 85,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F9F9F9',
    borderRadius: 10,
  },

  buttonContainerDP: {
    width: 160,
    height: 40,
    backgroundColor: '#CD701A',
    marginTop: 20,
    marginLeft: 130,
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#F9F9F9',
  },

  buttonTextDP: {
    color: '#f9f9f9',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 9,
    fontStyle: 'italic',
  },
});
