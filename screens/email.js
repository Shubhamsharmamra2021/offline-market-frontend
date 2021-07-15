import React from 'react';
import { Image, Text, View,TextInput } from 'react-native';
 import FooterPolicy from '../components/policy';
import MainButton from '../components/Button';
import TouchButton from '../components/TouchButton';
import {styles} from '../css/style.js';


export default function Email({navigation}) {
    return (
      <View style={styles.container} >
        <View style={styles.main}>
          <View style={styles.card}>
            <View style={styles.heading}>
            <Image
                style={styles.headimg}
                source={require('../assets/images/email.png')}
              /> 
               
              <Text style={styles.headh3}>
                Enter Your Email Address 
              </Text>      
               
                           
              
            </View>
             <TouchButton />
            <View style={styles.inputIcon}>
              <TextInput
               placeholder="Shubhu@gmail.com"
               placeholderTextColor="#C4C4C4"
               style={styles.inputField}/>
              <View></View>
            </View>
            <MainButton />
            
            
          </View>
        </View>
        <FooterPolicy />
      </View>
    );
}

  