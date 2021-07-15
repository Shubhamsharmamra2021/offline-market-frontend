import React from 'react';
import {  Text, View } from 'react-native';


export default function FooterPolicy({navigation}) {
    
    return (
        <View style={{   
                        position: 'absolute',
                        bottom: -10 ,
                        textAlign:"center",
                        margin:"50px"
                    }}>
              <Text style={{color:"#C4C4C4",  }}>  
                By entering your number you're agreeing to our 
                Term of Service and Privacy Policy Thanks
              </Text>
            </View>
     );
}
 
  