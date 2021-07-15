import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Email from '../screens/email'
import Mobile from '../screens/mobile'

const AppStack = createStackNavigator();
export default function NavigationApp() {
  return (
<NavigationContainer>
    <AppStack.Navigator screenOptions={{ headerShown: false }} >
    <AppStack.Screen name="Email" component={Email}  options={{ title: 'Email' }}/>
    <AppStack.Screen name="Mobile" component={Mobile}  options={{ title: 'Mobile' }}/>
  
    </AppStack.Navigator>

    </NavigationContainer>
  );
}
 