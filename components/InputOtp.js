import React,{useState} from 'react';
import { TextInput,View,TouchableOpacity } from 'react-native';
 import {styles} from '../css/style.js';
export default function InputOtp(props) {
 
    return (   
        <View style={styles.inputIconOtp}>
        <TextInput
          style={styles.inputOtp}
          maxLength='1'
            />
            <TextInput
          style={styles.inputOtp}
          maxLength='1'
          />
            <TextInput
          style={styles.inputOtp}
          maxLength='1'
          />
            <TextInput
          style={styles.inputOtp}
          maxLength='1'
          />

       </View>
    );
} 