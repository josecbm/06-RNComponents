import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { Animation101 } from '../screens/Animation101';
import { Animation102Screen } from '../screens/Animation102Screen';

const Stack = createStackNavigator();

export const  Navigator = ()=> {
    return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Animation101" component={Animation101} />
        <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
    </Stack.Navigator>
    );
}