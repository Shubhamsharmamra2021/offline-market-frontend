import React from 'react';
import { Image, Text, View,TextInput } from 'react-native';
 import FooterPolicy from '../components/policy';
import MainButton from '../components/Button';
import TouchButton from '../components/TouchButton';
import {styles} from '../css/style.js';
import InputField from '../components/InputField';


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
               
              <Text style={styles.headh3} >
                Enter Your Email Address 
              </Text>
            </View>
             <TouchButton 
             mobileactive={styles.touchButtonMobile}
             mailactive={styles.mailactive}
             mobileSource={require('../assets/images/mobilebtn.png')}
             mailSource={require('../assets/images/w-mailbtn.png')}

             />
             <View style={styles.inputIcon}>
             <InputField
              placeholder="Shubham@gmail.com"
              />
              </View>
            <MainButton
              NextPage="OtpScreen"
            />
            
            
          </View>
        </View>
        <FooterPolicy />
      </View>
    );
}

  