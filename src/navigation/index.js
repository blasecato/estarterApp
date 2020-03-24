import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../scenes/Login/Login';
import Splash from '../scenes/Splash/Splash';
import Onboarding from '../scenes/Onboarding/Onboarding';
import Home from '../scenes/Home/Home';
import ModalAviso from '../components/ModalAviso/ModalAviso';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { Image, Modal, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Button, Text, Form, Item, Input, Label, View, Alert, Right } from 'native-base';

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();



export default function navigator() {
    return (
        <NavigationContainer >
            <Drawer.Navigator drawerStyle={{
                backgroundColor: '#001324',
                width: 246,
            }} initialRouteName="Login" drawerContent={props =>
                <DrawerContentScrollView {...props}>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <Image
                            source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1585027651/logoMenu.png' }}
                            style={{
                                height: 51,
                                width: 163,
                                resizeMode: 'contain'
                            }}
                        />
                    </View>
                    <DrawerItemList {...props} />
                    <DrawerItem label="Help" onPress={() => alert('Link to help')} />
                    <View>
                        <Text>Prueba</Text>
                    </View>
                </DrawerContentScrollView>
            }>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Login" component={Login} />
                <Drawer.Screen name="Onboarding" component={Onboarding} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

