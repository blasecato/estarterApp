import React, { useState } from 'react';
import { Container, Header, Content, Button, Text, Form, Item, Input, Label, View, Alert, Right } from 'native-base';
import { Image, Modal, TouchableHighlight,TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ModalResetPassword({ navigation, hidden, setHidden, setModalCode }) {

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={hidden}>
            <Container style={{ height: '100%', backgroundColor: '#000000' }}>
                <LinearGradient
                    colors={['#072148', '#000000']}
                    style={{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ height: '55%', width: '90%', backgroundColor: 'transparent' }}>
                        <TouchableOpacity onPress={() => { setHidden(!hidden) }} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginBottom: 8 }}>
                            <Text style={{ color: '#FFFFFF', textAlign: 'right' }}>Cerrar</Text>
                            <Image
                                source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1583451323/closeIcon.png' }}
                                style={{ height: 15, width: 15, resizeMode: 'contain', alignItems: 'flex-end', marginLeft: 15 }}
                            />
                        </TouchableOpacity>
                        <LinearGradient
                            colors={['#9DDCFF', '#19428D']}
                            style={{ height: '100%', width: '100%', alignItems: 'center', borderRadius: 10 }}>
                            <Image style={{ marginTop: 32, width: 300, height: 100, resizeMode: 'contain', backgroundColor: 'transparent' }} source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1583315329/Logo.png' }} />
                            <Text style={{ marginTop: 24, marginBottom: 13, color: '#282828', textAlign: 'center' }}>¿Cómo deseas reestablecer tu contraseña?</Text>
                            <Container style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginBottom: 8, backgroundColor: 'transparent' }}>
                                <TouchableOpacity onPress={() => { setModalCode(1) }} style={{ backgroundColor: '#103256', width: 122, height: 170, borderRadius: 10, marginRight: 15, alignItems: 'center', justifyContent: 'center'  }}>
                                    <Image
                                        source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1583893414/celular.png' }}
                                        style={{ height: 75, width: 47, resizeMode: 'contain', alignItems: 'flex-end', marginTop: 25 }}
                                    />
                                    <Text style={{ marginTop: 7, marginBottom: 13, color: '#FFFF', textAlign: 'center' }}>Enviar código a mi <Text style={{ color: '#FFFF', fontWeight: 'bold' }}>número celular</Text></Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { setModalCode(2) }} style={{ backgroundColor: '#103256', width: 122, height: 170, borderRadius: 10, marginLeft: 15, alignItems: 'center', justifyContent: 'center' }}>
                                    <Image
                                        source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1583893414/msj.png' }}
                                        style={{ height: 68, width: 54, resizeMode: 'contain', alignItems: 'flex-end', marginTop: 37 }}
                                    />
                                    <Text style={{ marginTop: 7, marginBottom: 13, color: '#FFFF', textAlign: 'center' }}>Enviar código a mi <Text style={{ color: '#FFFF', fontWeight: 'bold' }}>correo electrónico</Text></Text>
                                </TouchableOpacity>
                            </Container>
                        </LinearGradient>
                    </View>
                </LinearGradient>
            </Container>
        </Modal>
    );
}
