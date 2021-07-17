import React from 'react';
import { Image, Text, View,TextInput } from 'react-native';
 import FooterPolicy from '../components/policy';
import MainButton from '../components/Button';
 import {styles} from '../css/style.js';
 

export default function ProfilePhoto({navigation}) {
    return (
      <View style={styles.container} >
        <View style={styles.main}>
          <View style={styles.card}>
            <View style={styles.heading}>
            <Image
                style={{width:30, height:30}}
                source={require('../assets/images/profile-emoji.png')}
              /> 
               
              <Text style={styles.headh3}>
               Okay, kaushal ! 
              </Text>
            </View>
            <View style={{marginTop:20}}>
                <Text style={{color:"#C4C4C4",fontSize:14}}>
                    How's this photo
                </Text>
            </View>
            <View style={{marginTop:15,marginBottom:20}}>
            <Image
                style={{width:120, height:120, borderRadius:"50%"}}
                source={require('../assets/images/profile.png')}
              /> 
            </View>  
            <View style={{marginBottom:20}}>
                <Text style={{color:"#DD2E44",fontSize:14}}>
                    Chosse a different photo
                </Text>
            </View>
            <MainButton
               NextPage="ShopDetailScreen1"
            />
               
            
          </View>
        </View>
        <FooterPolicy />
      </View>
    );
}

  