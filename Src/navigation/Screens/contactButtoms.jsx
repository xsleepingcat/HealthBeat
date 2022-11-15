import react from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import logo from '../images/airplane.png';

const contactButtoms = () => {
    return (
        <>
            <TouchableOpacity style={styles.buttons}>
                <Text style={styles.textButtons}>Enviar mensaje<img src={logo}></img></Text>
            </TouchableOpacity>
        </>
    )
}
export default contactButtoms;

const styles = StyleSheet.create({
    
    buttons:{
        width: 100,
        height: 50,

    },
});