import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import{createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './screens/Home/index.jsx'
import ProfileScreen from'./screens/Profile/index.jsx'



export default function App() {
  

  const Stack= createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
       <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title:'Welcome'}} />

        <Stack.Screen 
        name="Profile" 
        component={ProfileScreen}/>

      </Stack.Navigator>

  
    </NavigationContainer>
  );
}