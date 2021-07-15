import React from 'react';
import { Text,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import {styles} from '../css/style.js';
export default function MainButton() {
    const navigation = useNavigation();

    return (  
            <TouchableOpacity >
              <Text  style={styles.mainButton}  onPress={() =>navigation.navigate('Email')}>Next {'>'}</Text>
             </TouchableOpacity>
             
      
    );
} 