import React, { useState } from 'react';
import { Container, Header, Content, Button, Text, Form, Item, Input, Label, View, Alert, Right } from 'native-base';
import { Image, Modal, TouchableHighlight, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './ModalResetPassword.style';

export default function ModalResetPassword({ navigation, hidden, setHidden, setModalCode }) {

    return (
        <Modal
            animationType="fade"
            transparent={false}
            visible={hidden}>
            <Container style={styles.container}>
                <LinearGradient
                    colors={['#072148', '#000000']}
                    style={styles.container__background}>
                    <View style={styles.content}>
                        <TouchableOpacity onPress={() => { setHidden(!hidden) }} style={styles.touchClose}>
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
                            <Text style={styles.textPass}>¿Cómo deseas reestablecer tu contraseña?</Text>
                            <Container style={styles.cards}>
                                <TouchableOpacity onPress={() => { setModalCode(1) }} style={[styles.card, { marginRight: 15 }]}>
                                    <Image
                                        source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1583893414/celular.png' }}
                                        style={{ height: 75, width: 47, resizeMode: 'contain', marginTop: 40 }}
                                    />
                                    <Text style={styles.textCard}>Enviar código a mi <Text style={styles.textCard__bold}>número celular</Text></Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { setModalCode(2) }} style={[styles.card, { marginLeft: 15 }]}>
                                    <Image
                                        source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1583893414/msj.png' }}
                                        style={{ height: 68, width: 54, resizeMode: 'contain', marginTop: 47  }}
                                    />
                                    <Text style={styles.textCard}>Enviar código a mi <Text style={styles.textCard__bold}>correo electrónico</Text></Text>
                                </TouchableOpacity>
                            </Container>
                        </LinearGradient>
                    </View>
                </LinearGradient>
            </Container>
        </Modal>
    );
}
