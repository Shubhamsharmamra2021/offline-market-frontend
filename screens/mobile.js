import React from 'react';
import { Image, Text, View,TextInput } from 'react-native';
import MainButton from '../components/Button'; 
import FooterPolicy from '../components/policy';
import TouchButton from '../components/TouchButton';
import {styles} from '../css/style.js';

export default function Mobile({navigation}) {
    
    return (
      <View style={styles.container} >
        <View style={styles.main}>
          <View style={styles.card}>
            <View style={styles.heading}>
            <Image
                style={styles.headimg}
                source={require('../assets/images/mobileNumber.png')}
              /> 
              <Text style={styles.headh3}>
                Enter Your Mobile Number 
              </Text>      
                            
              
            </View>
             <TouchButton />
            <View style={styles.inputIcon}>
            <Image
                  style={{width:30,height:25,marginLeft:10,marginTop:7, position:"absolute",borderRadius:6}}
                  source={require('../assets/images/flag.png')}
                />
              <TextInput 
                placeholder="+91 9329136304"
                placeholderTextColor="#C4C4C4"
               style={styles.inputFieldMobile}
               />
              <View></View>
            </View>
            <View  >
                <MainButton />
            </View>
          </View>
        </View>
        <FooterPolicy />
      </View>
    );
}
 
  