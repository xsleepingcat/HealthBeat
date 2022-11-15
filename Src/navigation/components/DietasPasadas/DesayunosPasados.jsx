import { re } from 'mathjs';
import * as React from 'react';
import {View, Text} from 'react-native';

import { USUARIOS } from '../../USERS/Users'; 


const DesayunosPasados = () =>{
    return(
        <View>
            {
                USUARIOS.map((u, i) =>{
                    return(
                        <Text key={u.id}></Text>
                    );
                })
            }
        </View>
    );

    }

    export default DesayunosPasados;