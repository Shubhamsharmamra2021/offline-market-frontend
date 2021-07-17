import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EmailScreen from '../screens/EmailScreen'
import MobileScreen from '../screens/MobileScreen'
import OtpScreen from '../screens/OtpScreen'
import ProfileNameScreen from '../screens/ProfileNameScreen'
import ProfilePhotoScreen from '../screens/ProfilePhotoScreen'
import ShopDetailScreen1 from '../screens/ShopDetailScreen1'
import ShopDetailScreen2 from '../screens/ShopDetailScreen2'
import ShopVerificationScreen from '../screens/ShopVerificationScreen'

const AppStack = createStackNavigator();
export default function NavigationApp() {
  return (
<NavigationContainer>
    <AppStack.Navigator screenOptions={{ headerShown: false }} >
    <AppStack.Screen name="EmailScreen" component={EmailScreen}  options={{ title: 'Email' }}/>
    <AppStack.Screen name="MobileScreen" component={MobileScreen}  options={{ title: 'Mobile' }}/>
    <AppStack.Screen name="OtpScreen" component={OtpScreen}  options={{ title: 'OtpScreen' }}/>
    <AppStack.Screen name="ProfileNameScreen" component={ProfileNameScreen}  options={{ title: 'ProfileName' }}/>
    <AppStack.Screen name="ProfilePhotoScreen" component={ProfilePhotoScreen}  options={{ title: 'ProfilePhotoScreen' }}/>
    <AppStack.Screen name="ShopDetailScreen1" component={ShopDetailScreen1}  options={{ title: 'ShopDetailScreen1' }}/>
    <AppStack.Screen name="ShopDetailScreen2" component={ShopDetailScreen2}  options={{ title: 'ShopDetailScreen2' }}/>
    <AppStack.Screen name="ShopVerificationScreen" component={ShopVerificationScreen}  options={{ title: 'ShopVerificationScreen' }}/>

    </AppStack.Navigator>

    </NavigationContainer>
  );
}
 