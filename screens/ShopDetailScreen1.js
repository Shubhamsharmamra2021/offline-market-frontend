import React from 'react';
import { Image, Text, View,TextInput } from 'react-native';
 import FooterPolicy from '../components/policy';
import MainButton from '../components/Button';
import TouchButton from '../components/TouchButton';
import {styles} from '../css/style.js';
import InputField from '../components/InputField';


export default function ProfileName({navigation}) {
    return (
      <View style={styles.container} >
        <View style={styles.main}>
          <View style={styles.card,{marginTop:60}}>
            <View style={styles.heading}>
            <Image
                style={{width:26, height:26}}
                source={require('../assets/images/basket.png')}
              /> 
               
              <Text style={styles.headh3}>
                Enter Your Shop Detail 
              </Text>
            </View>
            <View style={styles.inputIcon}>
              <InputField
              placeholder="Shop Address"
             />
             
              <InputField
              placeholder="Shop Name"
             />
              <InputField
              placeholder="Shop Owner Name"
             />
              <InputField
              placeholder="Shop Mobile Number"
             />
              <InputField
              placeholder="Shop Email Address (optional)"
             />
             </View>

            <MainButton
                NextPage="ShopDetailScreen2"

            />
            
            
          </View>
        </View>
        <FooterPolicy />
      </View>
    );
}

  