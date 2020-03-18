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
            <Container style={styles.containerbg}>
                <View>
                </View>
                <LinearGradient
                    colors={['#072148D9', '#000000D9']}
                    style={styles.bg}>
                    <Image style={styles.imageClose} source={require('./images/cerrar.png')} />
                    <View style={styles.container}>
                        <Image source={require('./images/rutas.png')} />
                        <Text style={{ textAlign: 'center' }}>Para un mejor experiencia <Text style={{ fontWeight: 'bold' }}>ACTIVA</Text> la localización de tu celular.</Text>
                        <LinearGradient
                            colors={['#FFA51F', '#EF940C']}
                            style={styles.linearStyle}>
                        </LinearGradient>
                    </View>
                </LinearGradient>
            </Container>
        </Modal>
    );
}
