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
          <View style={styles.card}>
            <View style={styles.heading}>
            <Image
                style={{width:35, height:35}}
                source={require('../assets/images/fullname-emoji.png')}
              /> 
               
              <Text style={styles.headh3}>
                Enter Your Full Name ? 
              </Text>
            </View>
            <View style={styles.inputIcon}>
              <InputField
              placeholder="Kaushal Jain"
              pcolor="#C4C4C4"
             />
             </View>
             <View style={{marginBottom:30}}>
                <Text style={{color:"#C4C4C4",fontSize:14}}>
                   People use real name at 
                </Text>
                <Text style={{color:"#C4C4C4",fontSize:14}}>
                    Bringstore
                </Text>
            </View>
            <MainButton
                NextPage="ProfilePhotoScreen"

            />
            
            
          </View>
        </View>
        <FooterPolicy />
      </View>
    );
}

  