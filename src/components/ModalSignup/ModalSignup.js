import React, { useState } from 'react';
import { Container, Header, Content, Button, Text, Form, Item, Input, Label, View, Alert, Right } from 'native-base';
import { Image, Modal, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ModalSignup({ navigation, hidden, setHidden, setModalCode }) {

    return (
        <Modal
            animationType="fade"
            transparent={false}
            visible={hidden}>
            <Container style={{ height: '100%', backgroundColor: '#000000' }}>
                <LinearGradient
                    colors={['#072148', '#000000']}
                    style={{ height: '100%', width: '100%', alignItems: 'center', flexDirection: 'row', justifyContent: "center", display: 'flex', position: "relative" }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: "center", marginBottom: 10, position: 'absolute', width: 100, height: 40, backgroundColor: 'transparent', top: 15, right: 10, zIndex: 99 }}>
                        <TouchableHighlight
                            style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
                            onPress={() => {
                                setHidden(false)
                            }}>
                            <View style={{ width: 100, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "center" }}>
                                <Text style={{ color: '#FFFFFF', textAlign: 'right' }}>Cerrar</Text>
                                <Image
                                    source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1583451323/closeIcon.png' }}
                                    style={{ height: 15, width: 15, resizeMode: 'contain', alignItems: 'flex-end', marginLeft: 15 }}
                                />
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={{ height: 680, width: '90%', backgroundColor: 'transparent', position: 'relative' }}>
                        <LinearGradient
                            colors={['#9DDCFF', '#19428D']}
                            style={{ flex: 1, width: '100%', alignItems: 'center', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                            <Image style={{ marginTop: 32, width: 300, height: 100, resizeMode: 'contain', backgroundColor: 'transparent' }} source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1583315329/Logo.png' }} />
                            <Text style={{ width: 288, marginTop: 24, marginBottom: 27, color: '#282828', textAlign: 'center' }}>Completa la siguiente información para realizar tu registro.</Text>
                            <Form style={{ paddingRight: 15 }}>
                                <Item style={{ borderWidth: 0, borderColor: 'transparent', height: 90, width: 320 }} stackedLabel>
                                    <Label style={{ marginBottom: 15, color: '#FFFF' }}>
                                        Número de identificación
                                    </Label>
                                    <Input style={{ borderWidth: 1, borderColor: '#FFFF', borderRadius: 10, backgroundColor: '#FFFFFF1A', width: 320 }} />
                                </Item>
                                <Item style={{ borderWidth: 0, borderColor: 'transparent', height: 90 }} stackedLabel last>
                                    <Label style={{ marginBottom: 15, color: '#FFFF' }}>
                                        Nombre y apellido
                                    </Label>
                                    <Input style={{ borderWidth: 1, borderColor: '#FFFF', borderRadius: 10, backgroundColor: '#FFFFFF1A', width: 320 }} />
                                </Item>
                                <Item style={{ borderWidth: 0, borderColor: 'transparent', height: 90 }} stackedLabel last>
                                    <Label style={{ marginBottom: 15, color: '#FFFF' }}>
                                        Correo Electrónico
                                    </Label>
                                    <Input style={{ borderWidth: 1, borderColor: '#FFFF', borderRadius: 10, backgroundColor: '#FFFFFF1A', width: 320 }} />
                                </Item>
                                <Item style={{ borderWidth: 0, borderColor: 'transparent', height: 90 }} stackedLabel last>
                                    <Label style={{ marginBottom: 15, color: '#FFFF' }}>
                                        Número de celular
                                    </Label>
                                    <Input style={{ borderWidth: 1, borderColor: '#FFFF', borderRadius: 10, backgroundColor: '#FFFFFF1A', width: 320 }} />
                                </Item>
                            </Form>
                        </LinearGradient>
                        <Button onPress={() => { setModalCode(2) }} full style={{ backgroundColor: '#417CCA', color: '#162CA3', borderColor: 'transparent', elevation: 0, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }} >
                            <Text style={{ color: '#FFFFFF' }}> Registrarme </Text>
                        </Button>
                    </View>
                </LinearGradient>
            </Container>
        </Modal>
    );
}
