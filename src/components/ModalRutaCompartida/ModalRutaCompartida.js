import * as React from 'react';
import { Container, Header, Content, Button, Text, Form, Item, Input, Label, View, Alert, Right, Textarea } from 'native-base';
import { Image, Modal, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './ModalRutaCompartida.style';
import { ScrollView } from 'react-native-gesture-handler';

export default function ModalRutaCompartida({ navigation, hidden }) {

    return (
        <Modal
            animationType="fade"
            transparent={false}
            visible={hidden}>
            {/* <LinearGradient
                colors={['#072148D9', '#000000D9']}
                start={{ x: 0.0, y: 0.5 }}
                end={{ x: 0.0, y: 0.9 }}
                style={styles.container}>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.row}>
                            <TouchableOpacity style={[styles.box, styles.boxOne]}>
                                <Image style={styles.imageClose} source={require('./../../../assets/cerrar.png')} />
                            </TouchableOpacity >
                        </View>
                        <View style={styles.row}>
                            <View style={[styles.box, styles.boxTwo]}>
                                <View style={styles.card}>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', width: 300, justifyContent: 'center', marginVertical: 20 }}>
                                        <Image style={{ height: 77, width: 77, resizeMode: 'cover' }} source={require('./../../../assets/carro.png')} />
                                        <Text style={{ textAlign: 'left', width: 180, marginLeft: 20 }}>
                                            Al crear esta ruta, sera compartida unicamente con tus compañeros de trabajo.</Text>
                                    </View>
                                    <Form style={styles.form}>
                                        <Item style={styles.item} stackedLabel>
                                            <Label style={styles.label}>Lugar de origen</Label>
                                            <View style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                                                <Input style={[styles.input, { width: '81%' }]}
                                                    placeholderTextColor="#BEBEBE"
                                                    placeholder='Ejemplo: El Salitre'
                                                />
                                                <Image style={{ height: 50, width: 52, resizeMode: 'cover', marginLeft: 8 }} source={require('./../../../assets/origen.png')} />
                                            </View>
                                        </Item>
                                        <Item style={styles.item} stackedLabel>
                                            <Label style={styles.label}>Whatsapp</Label>
                                            <View style={{ display: 'flex', flexDirection: 'row', width: '100%', backgroundColor: '#079E04' }}>
                                                <Image style={{ height: 50, width: 52, resizeMode: 'cover' }} source={require('./../../../assets/wa.png')} />
                                                <Input style={[styles.input, { width: '84%' }]}
                                                    placeholderTextColor="#BEBEBE"
                                                    placeholder='Ejemplo: 3227409090'
                                                />
                                            </View>
                                        </Item>
                                        <Item style={styles.item} stackedLabel last>
                                            <Label style={styles.label}>Escribe algunos detalles.</Label>
                                            <Textarea rowSpan={4} style={styles.input} bordered placeholderTextColor="#BEBEBE"
                                                placeholder='Ejemplo: Ejemplo: Hola, salgo todos los dias a las 7am y me regreso a las 6pm, los dias de pico y placa no llevo vehículo....' />
                                        </Item>
                                    </Form>
                                    <LinearGradient
                                        colors={['#044C74', '#348AC7']}
                                        style={{ marginLeft: 7, marginTop: 61 }}>
                                        <Button style={styles.buttonVinc}>
                                            <Text uppercase={false} style={styles.buttonVinc__text}> AÑADIR RUTA </Text>
                                        </Button>
                                    </LinearGradient>
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
                </ScrollView>
            </LinearGradient> */}
            <LinearGradient
                colors={['#072148D9', '#000000D9']}
                start={{ x: 0.0, y: 0.5 }}
                end={{ x: 0.0, y: 0.9 }}
                style={styles.container_background}>
                <ScrollView >
                    <View style={styles.container}>
                        <View style={[styles.box, styles.boxOne]}>
                            <TouchableOpacity style={styles.viewClose}>
                                <Image style={styles.imageClose} source={require('./../../../assets/cerrar.png')} />
                            </TouchableOpacity>
                            <View style={styles.card}>
                                <View style={[styles.cardBox, styles.cardBoxOne]}>
                                    <Image style={{ height: 77, width: 77, resizeMode: 'cover' }} source={require('./../../../assets/carro.png')} />
                                    <Text style={{
                                        textAlign: 'left', width: 200, marginLeft: 10, fontStyle: 'normal',
                                        fontWeight: 'normal',
                                        fontSize: 12,
                                        lineHeight: 16,
                                    }}>
                                        Al crear esta ruta, sera compartida unicamente con tus compañeros de trabajo.</Text>
                                </View>
                                <View style={[styles.cardBox, styles.cardBoxTwo]}>
                                    <Form style={styles.form}>
                                        <Item style={styles.item} stackedLabel>
                                            <Label style={styles.label}>Lugar de origen</Label>
                                            <View style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                                                <Input style={[styles.input, { width: '81%' }]}
                                                    placeholderTextColor="#BEBEBE"
                                                    placeholder='Ejemplo: El Salitre'
                                                />
                                                <Image style={{ height: 50, width: 52, resizeMode: 'cover', marginLeft: 8 }} source={require('./../../../assets/origen.png')} />
                                            </View>
                                        </Item>
                                        <Item style={styles.item} stackedLabel>
                                            <Label style={styles.label}>Whatsapp</Label>
                                            <View style={{ display: 'flex', flexDirection: 'row', width: '100%', backgroundColor: '#079E04' }}>
                                                <Image style={{ height: 50, width: 52, resizeMode: 'cover' }} source={require('./../../../assets/wa.png')} />
                                                <Input style={[styles.input, { width: '84%' }]}
                                                    placeholderTextColor="#BEBEBE"
                                                    placeholder='Ejemplo: 3227409090'
                                                />
                                            </View>
                                        </Item>
                                        <Item style={styles.item} stackedLabel last>
                                            <Label style={styles.label}>Escribe algunos detalles.</Label>
                                            <Textarea rowSpan={4} style={[styles.input, { width: '100%' }]} bordered placeholderTextColor="#BEBEBE"
                                                placeholder='Ejemplo: Ejemplo: Hola, salgo todos los dias a las 7am y me regreso a las 6pm, los dias de pico y placa no llevo vehículo....' />
                                        </Item>
                                    </Form>
                                    <TouchableOpacity>
                                        <LinearGradient
                                            colors={['#044C74', '#348AC7']}
                                            start={{ x: 0.0, y: 0.2 }}
                                            end={{ x: 0.8, y: 2.8 }}
                                            style={{ padding: 15, width: 203, margin: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{
                                                color: '#FFFF',
                                                fontSize: 19,
                                                fontStyle: 'normal',
                                                fontWeight: '500',
                                            }}>AÑADIR RUTA</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>

                                </View>
                            </View>
                            <LinearGradient
                                colors={['#1B7BD7', '#160F6B']}
                                start={{ x: 0.0, y: 0.2 }}
                                end={{ x: 0.8, y: 1.0 }}
                                style={styles.linearStyle}>

                            </LinearGradient>
                        </View>
                    </View>
                </ScrollView>
            </LinearGradient>
        </Modal>
    );
}
