import * as React from 'react';
import { Container, Header, Content, Button, Text, Form, Item, Input, Label, View, Alert, Right, Textarea } from 'native-base';
import { Image, Modal, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './ModalCodeQr.style';

export default function ModalCodeQr({ navigation, hidden }) {

    return (
        <Modal
            animationType="fade"
            transparent={false}
            visible={hidden}>
            <LinearGradient
                colors={['#072148D9', '#000000D9']}
                style={styles.container}>
                {/* <View style={styles.container}>
                    <View style={styles.row}>
                        <View style={[styles.box, styles.boxOne]}>
                            <Image style={styles.imageClose} source={require('./../../../assets/cerrar.png')} />
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={[styles.box, styles.boxTwo]}>
                            <View style={styles.card}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 20 }}>
                                    <Image style={{ height: 315, width: 315, resizeMode: 'cover' }} source={require('./../../../assets/code.png')} />
                                </View>
                                <Text
                                    style={{ display: 'flex', textAlign: 'center', width: 274, justifyContent: 'center', marginBottom: 22 }}
                                >Presenta este código al conductor para activar tu usuario cada vez que utilices la ruta.</Text>
                                <Form style={styles.form}>
                                    <View style={{
                                        width: '60%',
                                        maxWidth: '100%',
                                    }}>
                                        <Item regular style={styles.item} last>
                                            <Input
                                                style={styles.input}
                                                placeholderTextColor="#115C89"
                                                placeholder='1022952500' />
                                        </Item>
                                    </View>
                                    <LinearGradient
                                        colors={['#044C74', '#348AC7']}
                                        style={{ width: '40%' }}>
                                        <Button onPress={() => { console.log("cliek") }} style={styles.buttonVinc}>
                                            <Text uppercase={false} style={styles.buttonVinc__text}> ACTIVAR </Text>
                                        </Button>
                                    </LinearGradient>
                                </Form>
                            </View>
                            <View style={styles.LinearGradient}>
                                <LinearGradient
                                    colors={['#1B7BD7', '#160F6B']}
                                    start={{ x: 0.0, y: 0.2 }}
                                    end={{ x: 0.8, y: 1.0 }}
                                    style={styles.linearStyle}>
                                </LinearGradient>
                            </View>
                        </View>
                    </View>
                </View> */}
                <View style={styles.container}>
                    <View style={styles.row}>
                        <View style={[styles.box, styles.boxOne]}>
                            <Image style={styles.imageClose} source={require('./../../../assets/cerrar.png')} />
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={[styles.box, styles.boxTwo]}>
                            <View style={styles.card}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 20 }}>
                                    <Image style={{ height: 315, width: 315, resizeMode: 'cover', zIndex: 1 }} source={require('./../../../assets/codeWhite.png')} />
                                </View>
                                <Text
                                    style={{ display: 'flex', textAlign: 'center', width: 274, justifyContent: 'center', marginBottom: 22 }}
                                >Aun no tiene vinculado un código de seguridad QR</Text>
                                <Form style={styles.form}>
                                    <View style={{
                                        width: '60%',
                                        maxWidth: '100%',
                                    }}>
                                        <Item regular style={styles.item} last>
                                            <Input
                                                style={styles.input}
                                                placeholderTextColor="#BEBEBE"
                                                placeholder='Ejemplo: EST4RT3' />
                                        </Item>
                                    </View>
                                    <LinearGradient
                                        colors={['#044C74', '#348AC7']}
                                        style={{ width: '40%' }}>
                                        <Button onPress={() => { console.log("cliek") }} style={styles.buttonVinc}>
                                            <Text uppercase={false} style={styles.buttonVinc__text}>VINCULAR</Text>
                                        </Button>
                                    </LinearGradient>
                                </Form>
                            </View>
                            <View style={styles.LinearGradient}>
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
