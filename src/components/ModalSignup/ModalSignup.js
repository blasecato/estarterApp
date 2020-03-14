import React, { useState } from 'react';
import { Container, Header, Content, Button, Text, Form, Item, Input, Label, View, Alert, Right } from 'native-base';
import { Image, Modal, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './ModalSignup.style';

export default function ModalSignup({ navigation, hidden, setHidden, setModalActivation }) {

    return (
        <Modal
            animationType="fade"
            transparent={false}
            visible={hidden}>
            <Container style={styles.containerbg}>
                <LinearGradient
                    colors={['#072148', '#000000']}
                    style={styles.bg}>
                    <TouchableHighlight
                        style={styles.touchClose}
                        onPress={() => {
                            setHidden(false)
                        }}>
                        <View style={styles.viewClose}>
                            <Text style={styles.textClose}>Cerrar</Text>
                            <Image
                                source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1583451323/closeIcon.png' }}
                                style={styles.imageClose}
                            />
                        </View>
                    </TouchableHighlight>
                    <View style={styles.container}>
                        <LinearGradient
                            colors={['#9DDCFF', '#19428D']}
                            style={styles.linearGradient}>
                            <Image style={styles.logo}
                                source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1583315329/Logo.png' }} />
                            <Text style={styles.textRegister}>Completa la siguiente información para realizar tu registro.</Text>
                            <Form style={styles.form}>
                                <Item style={styles.item} stackedLabel>
                                    <Label style={styles.label}>
                                        Número de identificación
                                    </Label>
                                    <Input style={styles.input} />
                                </Item>
                                <Item style={styles.item} stackedLabel>
                                    <Label style={styles.label}>
                                        Nombre y apellido
                                    </Label>
                                    <Input style={styles.input} />
                                </Item>
                                <Item style={styles.item} stackedLabel>
                                    <Label style={styles.label}>
                                        Correo Electrónico
                                    </Label>
                                    <Input style={styles.input} />
                                </Item>
                                <Item style={styles.item} stackedLabel last>
                                    <Label style={styles.label}>
                                        Número de celular
                                    </Label>
                                    <Input style={styles.input} />
                                </Item>
                            </Form>
                        </LinearGradient>
                        <Button onPress={() => { setModalActivation(3) }} full style={styles.button} >
                            <Text style={styles.textButton}> Registrarme </Text>
                        </Button>
                    </View>
                </LinearGradient>
            </Container>
        </Modal>
    );
}
