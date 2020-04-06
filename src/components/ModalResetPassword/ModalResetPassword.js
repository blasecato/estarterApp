import React, { useState } from 'react';
import { Container, Header, Content, Button, Text, Form, Item, Input, Label, View, Alert, Right } from 'native-base';
import { Image, Modal, TouchableHighlight, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './ModalResetPassword.style';
import { ScrollView } from 'react-native-gesture-handler';

export default function ModalResetPassword({ navigation, hidden, setHidden, setModalCode }) {

    return (
        <Modal
            animationType="fade"
            transparent={false}
            visible={hidden}>
            <View style={styles.container}>
                <View style={[styles.box, styles.box1]}>
                    <LinearGradient
                        colors={['#072148D9', '#000000D9']}
                        start={{ x: 0.0, y: 0.5 }}
                        end={{ x: 0.0, y: 0.9 }}
                        style={styles.container__background}>
                        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}> 
                            <View style={styles.content}>
                                <TouchableOpacity
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
                                </TouchableOpacity>
                                <LinearGradient
                                    colors={['#9DDCFF', '#19428D']}
                                    style={styles.linearGradient}>
                                    <Image style={styles.logo}
                                        source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1583315329/Logo.png' }} />
                                    <Text style={styles.textPass}>¿Cómo deseas reestablecer tu contraseña?</Text>
                                    <View style={styles.cards}>
                                        <TouchableOpacity onPress={() => { setModalCode(1) }} style={[styles.card, { marginRight: 15, marginBottom: 20 }]}>
                                            <Image
                                                source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1583893414/celular.png' }}
                                                style={{ height: 75, width: 47, resizeMode: 'contain', marginTop: 40 }}
                                            />
                                            <Text style={styles.textCard}>Enviar código a mi <Text style={styles.textCard__bold}>número celular</Text></Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => { setModalCode(2) }} style={[styles.card, { marginLeft: 15, marginBottom: 20 }]}>
                                            <Image
                                                source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1583893414/msj.png' }}
                                                style={{ height: 68, width: 54, resizeMode: 'contain', marginTop: 47 }}
                                            />
                                            <Text style={styles.textCard}>Enviar código a mi <Text style={styles.textCard__bold}>correo electrónico</Text></Text>
                                        </TouchableOpacity>
                                    </View>
                                </LinearGradient>
                            </View>
                        </ScrollView>
                    </LinearGradient>
                </View>
            </View>

        </Modal>
    );
}
