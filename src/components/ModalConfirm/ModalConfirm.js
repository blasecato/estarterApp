import React, { useState } from 'react';
import { Container, Header, Content, Button, Text, Form, Item, Input, Label, View, Alert, Right } from 'native-base';
import { Image, Modal, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ModalConfirm({ navigation, hidden, setHidden }) {


    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={hidden != 0}>
            <Container style={{ height: '100%', backgroundColor: '#000000' }}>
                <LinearGradient
                    colors={['#072148', '#000000']}
                    style={{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ height: '55%', width: '90%', backgroundColor: 'transparent' }}>
                        <TouchableOpacity onPress={() => { setHidden(0) }} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginBottom: 8 }}>
                            <Text style={{ color: '#FFFFFF', textAlign: 'right' }}>Cerrar</Text>
                            <Image
                                source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1583451323/closeIcon.png' }}
                                style={{ height: 15, width: 15, resizeMode: 'contain', alignItems: 'flex-end', marginLeft: 15 }}
                            />
                        </TouchableOpacity>
                        <LinearGradient
                            colors={['#9DDCFF', '#19428D']}
                            style={{ height: '100%', width: '100%', alignItems: 'center', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                            {
                                hidden == 1 ?
                                    <>
                                        <Image style={{ marginTop: 32, width: 300, height: 100, resizeMode: 'contain', backgroundColor: 'transparent' }} source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1583315329/Logo.png' }} />
                                        <Text style={{ marginTop: 24, marginBottom: 13, color: '#282828', textAlign: 'center' }}>¿Cuál es tu número de celular?</Text>
                                    </>
                                    :
                                    <>
                                        <Image style={{ marginTop: 32, width: 300, height: 100, resizeMode: 'contain', backgroundColor: 'transparent' }} source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1583315329/Logo.png' }} />
                                        <Text style={{ marginTop: 24, marginBottom: 13, color: '#282828', textAlign: 'center' }}>¿Cuál es tu correo electrónico?</Text>
                                    </>
                            }
                            <Form style={{ paddingRight: 15 }}>
                                <Item style={{ borderWidth: 0, borderColor: 'transparent', height: 20, width: 320 }} stackedLabel>
                                    <Input style={{ borderWidth: 1, borderColor: '#FFFF', borderRadius: 10, backgroundColor: '#FFFFFF1A', width: 320 }} />
                                </Item>
                            </Form>
                        </LinearGradient>
                        <Button full style={{ backgroundColor: '#417CCA', color: '#162CA3', borderColor: 'transparent', elevation: 0, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }} >
                            <Text style={{ color: '#FFFFFF' }}> Restrablecer contraseña </Text>
                        </Button>
                    </View>
                </LinearGradient>
            </Container>
        </Modal>

    );
}
