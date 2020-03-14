import React, { useState } from 'react';
import { Container, Header, Content, Button, Text, Form, Item, Input, Label, View, Alert, Right } from 'native-base';
import { Image, Modal, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './ModalConfirm.style';

export default function ModalConfirm({ navigation, hidden, setHidden }) {

    return (
        <Modal
            animationType="fade"
            transparent={false}
            visible={hidden != 0}>
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
                                hidden == 1 ?
                                    <>
                                        <View style={styles.cardCircle}>
                                            <Image style={styles.imageCardCircle}
                                                source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1583893414/celular.png' }} />
                                        </View>
                                        <Form style={styles.form}>
                                            <Item style={styles.item} stackedLabel last>
                                                <Label style={styles.label}>¿Cuál es tu número de celular?</Label>
                                                <Input style={styles.input} />
                                            </Item>
                                        </Form>
                                        <Button onPress={() => { setModalActivation(1) }} full style={styles.buttonPass} >
                                            <Text style={{ color: '#FFFFFF' }}> Restablecer contraseña </Text>
                                        </Button>
                                    </>
                                    :
                                    <>
                                        <View style={styles.cardCircle}>
                                            <Image style={styles.imageCardCircle}
                                                source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1583893414/msj.png' }} />
                                        </View>
                                        <Form style={styles.form}>
                                            <Item style={styles.item} stackedLabel last>
                                                <Label style={styles.label}>¿Cuál es tu correo electrónico?</Label>
                                                <Input style={styles.input} />
                                            </Item>
                                        </Form>
                                        <Button onPress={() => { setModalActivation(2) }} full style={styles.buttonPass} >
                                            <Text style={{ color: '#FFFFFF' }}> Restablecer contraseña </Text>
                                        </Button>
                                    </>
                            }
                        </LinearGradient>
                    </View>
                </LinearGradient>
            </Container>
        </Modal>

    );
}
