import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../scenes/Login/Login';
import Splash from '../scenes/Splash/Splash';
import Onboarding from '../scenes/Onboarding/Onboarding';
import Home from '../scenes/Home/Home';
import ModalCodeQr from '../components/ModalCodeQr/ModalCodeQr';
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

    const [modalCodeQr, setModalCodeQr] = useState(false)

    return (
        <NavigationContainer >
            <Drawer.Navigator drawerStyle={{
                backgroundColor: '#001324',
                width: 246,
                display: 'flex',
            }} initialRouteName="Login" drawerContent={props =>
                <DrawerContentScrollView style={{
                    display: 'flex',
                    flexDirection: 'column'
                }} {...props}>
                    <View style={{ width: '100%', alignItems: 'center', marginTop: 34, marginBottom: 22 }}>
                        <Image
                            source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1585027651/logoMenu.png' }}
                            style={{
                                height: 51,
                                width: 163,
                                resizeMode: 'contain'
                            }}
                        />
                    </View>
                    <TouchableOpacity style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',

                    }}>
                        <View style={{
                            borderWidth: 1,
                            borderColor: '#5695f85C',
                            width: 100
                        }} />

                        <Image style={{ resizeMode: 'cover', width: 74, height: 12, marginLeft: 12, marginRight: 8 }} source={require('./../../assets/editProfile.png')} />
                        <Image style={{ resizeMode: 'cover', width: 30, height: 30, marginRight: 8 }} source={require('./../../assets/edit.png')} />
                        <View style={{
                            borderWidth: 1,
                            borderColor: '#5695f85C',
                            width: 114
                        }} />
                    </TouchableOpacity>
                    <DrawerItemList labelStyle={{ color: 'white', fontSize: 17, fontWeight: '300' }} activeBackgroundColor={{ color: '#001324' }} itemStyle={{ marginLeft: 28 }} {...props} />
                    <TouchableOpacity
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginLeft: 36,
                        }}
                        onPress={() => alert('Link to help')}>
                        <Image style={{ resizeMode: 'cover', width: 53, height: 53 }} source={require('./../../assets/soporte.png')} />
                        <Text style={{
                            color: '#FFFF',
                            marginLeft: 13,

                        }}>Soporte</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { setModalCodeQr(!modalCodeQr) }}
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginLeft: 36,
                        }}
                    >
                        <Image style={{ resizeMode: 'cover', width: 53, height: 53 }} source={require('./../../assets/qr.png')} />
                        <Text style={{
                            color: '#FFFF',
                            marginLeft: 13
                        }}>Código QR</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: '100%'
                    }}>
                        <View style={{
                            borderWidth: 1,
                            borderColor: '#5695f85C',
                            width: 28
                        }} />
                        <Image style={{ resizeMode: 'cover', marginLeft: 12 }} source={require('./../../assets/closeSesion.png')} />
                    </TouchableOpacity>

                </DrawerContentScrollView>
            }>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Login" component={Login} />
                <Drawer.Screen name="Onboarding" component={Onboarding} />
            </Drawer.Navigator>

            <ModalCodeQr hidden={modalCodeQr} setHidden={setModalCodeQr} ></ModalCodeQr>
        </NavigationContainer >
    );
}

