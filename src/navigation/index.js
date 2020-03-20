import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../scenes/Login/Login';
import Splash from '../scenes/Splash/Splash';
import Onboarding from '../scenes/Onboarding/Onboarding';
import Home from '../scenes/Home/Home';
import ModalAviso from '../components/ModalAviso/ModalAviso';

const Stack = createStackNavigator();

export default function navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
                <Stack.Screen name="Onboarding" options={{ headerShown: false }} component={Onboarding} />
                <Stack.Screen name="ModalAviso" options={{ headerShown: false }} component={ModalAviso} />
                <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

