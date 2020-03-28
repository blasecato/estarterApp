import React, { useState } from 'react';
import { Container, Header, Content, Button, Text, Form, Item, Input, Label, View, Alert, Right } from 'native-base';
import { Image, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './ModalConfirm.style';

export default function ModalConfirm({ navigation, hidden, setHidden, setModalActivation }) {

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
                                        <Text style={styles.label}>¿Cuál es tu número de celular?</Text>
                                        <Form style={styles.form}>
                                            <Item style={styles.item} stackedLabel last>
                                                <Input style={styles.input} />
                                            </Item>
                                        </Form>
                                    </>
                                    :
                                    <>
                                        <View style={styles.cardCircle}>
                                            <Image style={styles.imageCardCircle}
                                                source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1583893414/msj.png' }} />
                                        </View>
                                        <Text style={styles.label}>¿Cuál es tu correo electrónico?</Text>
                                        <Form style={styles.form}>
                                            <Item style={styles.item} stackedLabel last>
                                                <Input style={styles.input} />
                                            </Item>
                                        </Form>
                                    </>
                            }
                        </LinearGradient>
                        {
                            hidden == 1 ?

                                <Button onPress={() => { setModalActivation(1) }} full style={styles.buttonPass} >
                                    <Text uppercase={false} style={styles.buttonPass__text}> Restablecer contraseña </Text>
                                </Button>

                                :

                                <Button onPress={() => { setModalActivation(2) }} full style={styles.buttonPass} >
                                    <Text uppercase={false} style={styles.buttonPass__text}> Restablecer contraseña </Text>
                                </Button>
                        }
                    </View>
                </LinearGradient>
            </Container>


            {/* <Container style={styles.container}>
                <LinearGradient>
                    <ScrollView>
                        <View>
                            <TouchableOpacity onPress={() => { setHidden(0) }} style={styles.touchClose}>
                                <Text style={styles.textClose}>Cerrar</Text>
                                <Image
                                    source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1583451323/closeIcon.png' }}
                                    style={styles.imageClose}
                                />
                            </TouchableOpacity>


                        </View>
                    </ScrollView>
                </LinearGradient>
            </Container> */}
        </Modal>

    );
}
