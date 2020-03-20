import * as React from 'react';
import { Container, Header, Content, Button, Text, Form, Item, Input, Label, View, Alert, Right } from 'native-base';
import { Image, Modal, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './ModalNuevaRuta.style';

export default function ModalNuevaRuta({ navigation, hidden }) {

    return (
        <Modal
            animationType="fade"
            transparent={false}
            visible={hidden}>

            <LinearGradient
                colors={['#072148D9', '#000000D9']}


                style={styles.container}>
                <View style={styles.container}>
                    <View style={styles.row}>
                        <View style={[styles.box, styles.boxOne]}>
                            <Image style={styles.imageClose} source={require('./../../../assets/cerrar.png')} />
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={[styles.box, styles.boxTwo]}>
                            <View style={styles.card}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', width: 300, justifyContent:'center', marginVertical: -5 }}>
                                    <Image source={require('./../../../assets/bus.png')} />
                                    <Text style={{ textAlign: 'left', width: 180, marginLeft: 20 }}>
                                        Ingresa el código para asignar una nueva ruta.</Text>
                                </View>
                                <Form style={styles.form}>
                                    <Item regular style={styles.item} last>
                                        <Input
                                            style={styles.input}
                                            placeholderTextColor="#BEBEBE"
                                            placeholder='Ejemplo: EST4RT3' />
                                    </Item>
                                    <LinearGradient
                                        colors={['#044C74', '#348AC7']}
                                        style={{ marginLeft: 7 }}>
                                        <Button style={styles.buttonVinc}>
                                            <Text uppercase={false} style={styles.buttonVinc__text}> VINCULAR </Text>
                                        </Button>
                                    </LinearGradient>
                                </Form>
                                <LinearGradient
                                    colors={['#1B7BD7', '#160F6B']}
                                    start={{ x: 0.0, y: 0.2 }}
                                    end={{ x: 0.8, y: 1.0 }}
                                    style={styles.linearStyle}>
                                </LinearGradient>
                            </View>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </Modal>
    );
}
