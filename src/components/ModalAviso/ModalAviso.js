import * as React from 'react';
import { Container, Header, Content, Button, Text, Form, Item, Input, Label, View, Alert, Right } from 'native-base';
import { Image, Modal, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './ModalAviso.style';

export default function ModalAviso({ navigation }) {

    return (
        <Modal
            animationType="fade"
            transparent={false}
            visible={true}>

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
                                <Image style={{ marginBottom: 8 }} source={require('./images/rutas.png')} />
                                <Text style={{ textAlign: 'center', marginBottom: 30 }}>Para un mejor experiencia <Text style={{ fontWeight: 'bold' }}>ACTIVA</Text> la localización de tu celular.</Text>
                                <LinearGradient
                                    colors={['#FFA51F', '#EF940C']}
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
