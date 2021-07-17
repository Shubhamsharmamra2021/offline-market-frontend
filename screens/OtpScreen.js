import React from 'react';
import { Image, Text, View,TextInput } from 'react-native';
 import FooterPolicy from '../components/policy';
import MainButton from '../components/Button';
import TouchButton from '../components/TouchButton';
import {styles} from '../css/style.js';
import InputField from '../components/InputField';
import InputOtp from '../components/InputOtp';


export default function Otp({navigation}) {
    return (
      <View style={styles.container} >
        <View style={styles.main}>
          <View style={styles.card}>
            <View style={styles.heading}>
            <Image
                style={{width:20,height:30,left:0}}
                source={require('../assets/images/password.png')}
              /> 
               
              <Text style={styles.headh3}>
                Enter the code we just texted you
              </Text>
            </View>
            <InputOtp />  
            <MainButton
              NextPage="ProfileNameScreen"
            />
            
            
          </View>
        </View>
        <FooterPolicy />
      </View>
    );
}

  