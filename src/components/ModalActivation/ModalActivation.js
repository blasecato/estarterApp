import React, { useState } from 'react';
import { Container, Header, Content, Button, Text, Form, Item, Input, Label, View, Alert, Right } from 'native-base';
import { Image, Modal, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './ModalActivation.style';

export default function ModalActivation({ navigation, hidden, setHidden }) {
    console.log({ hidden });
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={hidden > 0}>
            <Container style={styles.containerbg}>
                <LinearGradient
                    colors={['#072148', '#000000']}
                    style={styles.bg}>
                    <View style={styles.container}>
                        <TouchableOpacity onPress={() => { setHidden(0) }} style={styles.touchClose}>
                            <Text style={styles.textClose}>Cerrar</Text>
                            <Image
                                source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1583451323/closeIcon.png' }}
                                style={styles.imageClose}
                            />
                        </TouchableOpacity>
                        <LinearGradient
                            colors={['#9DDCFF', '#19428D']}
                            style={styles.linearGradient}>
                            <Image style={styles.logo}
                                source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1583315329/Logo.png' }} />
                            {
                                hidden == 1 &&
                                <>
                                    <Text style={{ color: '#282828', textAlign: 'center', paddingBottom: 25 }}>Hemos enviado un código de activación al número de celular</Text>
                                    <View style={{ color: '#282828', textAlign: 'center', backgroundColor: '#03173a36', width: 280, height: 56, alignItems: 'center', justifyContent: 'center', borderColor: '#3866a8', borderWidth: 1 }}>
                                        <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 30 }}> 300 3000000 </Text>
                                    </View>
                                    <View style={styles.lineStyle} />
                                    <Text style={{ color: '#FFFFFF' }}> Código de activación </Text>
                                    <Form style={styles.form}>
                                        <Item style={styles.item} stackedLabel last>
                                            <Input style={[styles.input, { marginRight: 17 }]} />
                                            <Input style={[styles.input, { marginRight: 17 }]} />
                                            <Input style={[styles.input, { marginRight: 17 }]} />
                                            <Input style={styles.input} />
                                        </Item>
                                    </Form>
                                   
                                </>
                            }
                            {hidden == 2 &&
                                <>
                                    <Text style={{ color: '#282828', textAlign: 'center', paddingBottom: 25 }}>Hemos enviado un código de activación a tu correo electrónico</Text>
                                    <View style={{ color: '#282828', textAlign: 'center', backgroundColor: '#03173a36', width: 280, height: 56, alignItems: 'center', justifyContent: 'center', borderColor: '#3866a8', borderWidth: 1 }}>
                                        <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 30 }}> hola@correo.com </Text>
                                    </View>
                                    <View style={styles.lineStyle} />
                                    <Text style={{ color: '#FFFFFF' }}> Código de activación </Text>
                                    <Form style={styles.form}>
                                        <Item style={styles.item} stackedLabel last>
                                            <Input style={[styles.input, { marginRight: 17 }]} />
                                            <Input style={[styles.input, { marginRight: 17 }]} />
                                            <Input style={[styles.input, { marginRight: 17 }]} />
                                            <Input style={styles.input} />
                                        </Item>
                                    </Form>
                                  
                                </>
                            }
                            {hidden == 3 &&
                                <>
                                    <Text style={{ color: '#282828', textAlign: 'center', paddingBottom: 25 }}>Hemos enviado un código de activación al número de celular</Text>
                                    <View style={{ color: '#282828', textAlign: 'center', backgroundColor: '#03173a36', width: 280, height: 56, alignItems: 'center', justifyContent: 'center', borderColor: '#3866a8', borderWidth: 1 }}>
                                        <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 30 }}> 300 3000000 </Text>
                                    </View>
                                    <View style={styles.lineStyle} />
                                    <Text style={{ color: '#FFFFFF' }}> Código de activación </Text>
                                    <Form style={styles.form}>
                                        <Item style={styles.item} stackedLabel last>
                                            <Input style={[styles.input, { marginRight: 17 }]} />
                                            <Input style={[styles.input, { marginRight: 17 }]} />
                                            <Input style={[styles.input, { marginRight: 17 }]} />
                                            <Input style={styles.input} />
                                        </Item>
                                    </Form>
                                    <Text style={{ color: '#FFFFFF' }}> Enviar al correo electrónico </Text>
                                </>
                            }
                        </LinearGradient>
                        <Button full style={styles.buttonPass}>
                            <Text style={{ color: '#FFFFFF' }}> Iniciar sesión </Text>
                        </Button>
                    </View>
                    <View style={{ marginTop: '20%' }}>
                        <Text style={{ color: '#FFFFFF' }}> Volver a enviar </Text>
                    </View>
                </LinearGradient>
            </Container>
        </Modal>
    );
}