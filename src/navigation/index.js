import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../scenes/Login/Login';
import Onboarding from '../scenes/Onboarding/Onboarding';

const Stack = createStackNavigator();

export default function navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
                <Stack.Screen name="Onboarding" component={Onboarding} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

