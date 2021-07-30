import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { Animation101 } from '../screens/Animation101';
import { Animation102Screen } from '../screens/Animation102Screen';
import { SwitchScreen } from '../screens/SwitchScreen';
import { AlertScreen } from '../screens/AlertScreen';
import { TextInputScreen } from '../screens/TextInputScreen';
import { PullToRefresh } from '../screens/PullToRefresh';
import { CustonSectionListScreen } from '../screens/CustonSectionListScreen';

const Stack = createStackNavigator();

export const  Navigator = ()=> {
    return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: 'white'
            }
        }}
    >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Animation101" component={Animation101} />
        <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
        <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
        <Stack.Screen name="AlertScreen" component={AlertScreen} />
        <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
        <Stack.Screen name="PullToRefresh" component={PullToRefresh} />
        <Stack.Screen name="CustonSectionListScreen" component={CustonSectionListScreen} />
    </Stack.Navigator>
    );
}