import React, { useState } from 'react';
import { Container, Header, Content, Button, Text, Form, Item, Input, Label, View, Alert, Right } from 'native-base';
import { Image, Modal, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './ModalActivation.style';
import { ScrollView } from 'react-native-gesture-handler';

export default function ModalActivation({ navigation, hidden, setHidden }) {

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={hidden > 0}>
            <View style={styles.container}>
                <View style={[styles.box, styles.box1]}>
                    <LinearGradient
                        colors={['#072148D9', '#000000D9']}
                        start={{ x: 0.0, y: 0.5 }}
                        end={{ x: 0.0, y: 0.9 }}
                        style={styles.container__background}>
                        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
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
                            <View style={styles.content}>
                                <LinearGradient
                                    colors={['#9DDCFF', '#19428D']}
                                    style={styles.linearGradient}>
                                    <Image style={styles.logo}
                                        source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1583315329/Logo.png' }} />
                                    {
                                        hidden == 1 &&
                                        <>
                                            <Text style={styles.text__info}>Hemos enviado un código de activación al número de celular</Text>
                                            <View style={styles.content__info}>
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
                                    {
                                        hidden == 2 &&
                                        <>
                                            <Text style={styles.text__info}>Hemos enviado un código de activación a tu correo electrónico</Text>
                                            <View style={styles.content__info}>
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
                                    {
                                        hidden == 3 &&
                                        <>
                                            <Text style={styles.text__info}>Hemos enviado un código de activación al número de celular</Text>
                                            <View style={styles.content__info}>
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
                                            <Text style={{ color: '#FFFFFF', marginBottom: 10 }}> Enviar al correo electrónico </Text>
                                        </>
                                    }

                                    <Button full style={styles.buttonPass}>
                                        <Text style={{ color: '#FFFFFF' }}> Iniciar sesión </Text>
                                    </Button>
                                </LinearGradient>
                                <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                                    <Text style={{ color: '#FFFFFF' }}> Volver a enviar </Text>
                                </View>
                            </View>
                        </ScrollView>
                    </LinearGradient>
                </View>
            </View>
        </Modal>
    );
}