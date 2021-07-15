import React from 'react';
import { Image, View,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from '../css/style.js';


export default function TouchButton() {
    const navigation = useNavigation();

    return ( 
            <View style={{flexDirection:"row", marginLeft:"0px",}}>
            <TouchableOpacity style={styles.mainbuttonMobile} onPress={() =>navigation.navigate('Mobile')}>
               <View style={styles.touchButtonMobile} >
                <Image
                  style={{width:17,height:27,borderRadius:1}}
                  source={require('../assets/images/mobilebtn.png')}
                />
              </View>
             </TouchableOpacity>
            <TouchableOpacity  style={styles.mainbuttonMobile} 
                        onPress={() =>navigation.navigate('Email')}>
              <View style={styles.touchButtonMail} >
                <Image
                  style={{width:30,height:22,borderRadius:1}}
                  source={require('../assets/images/mailbtn.png')}
                />
              </View>
                
             </TouchableOpacity>
            </View> 
    );
} 
  