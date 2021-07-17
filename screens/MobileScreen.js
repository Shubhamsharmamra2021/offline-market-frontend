import React from 'react';
import { Image, Text, View,TextInput, ImageBackground } from 'react-native';
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
             <TouchButton 
              mobileactive={styles.mobileactive}
              mailactive={styles.touchButtonMail}
               mobileSource={require('../assets/images/w-mobilebtn.png')}
              mailSource={require('../assets/images/mailbtn.png')}

             />
            <View style={styles.inputIcon,{marginTop:30,marginBottom:30}}>
            <Image
                  style={{width:31,height:20,marginLeft:10,marginTop:11, position:"absolute",borderRadius:6}}
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
                <MainButton 
                  NextPage='OtpScreen'
                />
            </View>
          </View>
        </View>
        <FooterPolicy />
      </View>
    );
}
 
  