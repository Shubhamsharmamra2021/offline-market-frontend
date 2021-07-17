import React from 'react';
import { Image, View,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from '../css/style.js';


export default function TouchButton(props) {
    const navigation = useNavigation();

    return ( 
            <View style={{flexDirection:"row", marginLeft:"0px",}}>
            <TouchableOpacity style={styles.mainbuttonMobile} onPress={() =>navigation.navigate('MobileScreen')}>
               <View style={props.mobileactive}>
                <Image
                  style={{width:22,height:32,borderRadius:1}}
                  source={props.mobileSource} 
                />
              </View>
             </TouchableOpacity>
            <TouchableOpacity  style={styles.mainbuttonMobile} 
                        onPress={() =>navigation.navigate('EmailScreen')}>
              <View style={styles.touchButtonMail,props.mailactive} >
                <Image
                  style={{width:40,height:25,borderRadius:1}}
                  source={props.mailSource}
                />
              </View>
                 
             </TouchableOpacity>
            </View> 
    );
} 
  