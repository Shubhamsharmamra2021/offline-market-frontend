import React from 'react';
import { TextInput,View,TouchableOpacity } from 'react-native';
 import {styles} from '../css/style.js';
export default function InputField(props) {
 
    return (  
       
        <TextInput
         placeholder={props.placeholder}
         placeholderTextColor="#C4C4C4"
         style={styles.inputField}
         
         />
        
    );
} 