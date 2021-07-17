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
          <View style={styles.heading ,{marginBottom:50}}>
              <Text style={{fontSize:24 ,fontWeight:400}}>
                Shop Verification
              </Text>
            </View>
            <View style={styles.heading ,{marginBottom:50}}>
              <Text style={{fontSize:22 ,fontWeight:400}}>
               Your shop detail are save from
               bringonstore server(India) 
               our member will get to your shop 
               to verify document and verify your
               shop
              </Text>
            </View>
            <View style={styles.heading}>
              <Text style={{fontSize:22 ,fontWeight:400}}>
              Your Verification Code is <Text style={{color:"#DC143C"}}>
               5892
              </Text>
              </Text>   
            </View>
          </View>
        </View>
        <View style={{bottom:10}}>
            <Text style={{fontSize:16,color:"#DC143C"}}>
               Note : it will take 2 to 4 Hours to Verify
              </Text> 
            </View>
        <FooterPolicy />
      </View>
    );
}

  