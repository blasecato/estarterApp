import React, { useState } from 'react';
import { Container, Header, Content, Button, Text, Form, Item, Input, Label, View, Alert, Right } from 'native-base';
import { Image, Modal, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './ModalQualification.style';

export default function ModalQualification({ navigation }) {

    const [visibleQualification, setVisibleQualification] = useState(true)

    return (
        <Modal
            animationType="fade"
            transparent={false}
            visible={visibleQualification}>
            <LinearGradient
                colors={['#072148D9', '#000000D9']}
                style={styles.container}>
                <View style={[styles.box, styles.boxOne]}>
                    <TouchableOpacity onPress={() => {
                        setVisibleQualification(false)
                        navigation.navigate('Home')
                    }}
                    >

                        <Image style={styles.imageClose} source={require('./../../../assets/cerrar.png')} />
                    </TouchableOpacity>
                </View>
                <View style={[styles.box, styles.boxTwo]}>
                    <Text style={styles.boxTwo__textBold}>La ruta ha finalizado</Text>
                    <Text style={[styles.boxTwo__textNormal, { marginBottom: 36, }]}>Gracias por utilizar nuestros servicios.</Text>
                    <Text style={[styles.boxTwo__textNormal, { marginBottom: 15, }]}>¿Tu calificación de hoy?</Text>
                    <View
                        style={{ display: 'flex', flexDirection: 'row', color: '#FFFF', textAlign: 'center', marginBottom: 53, fontWeight: 'bold' }}>
                        <Image style={styles.qualification} source={require('./../../../assets/5.png')} />
                        <Image style={styles.qualification} source={require('./../../../assets/4.png')} />
                        <Image style={styles.qualification} source={require('./../../../assets/3.png')} />
                        <Image style={styles.qualification} source={require('./../../../assets/2.png')} />
                        <Image style={[styles.qualification], { marginRight: 0 }} source={require('./../../../assets/1.png')} />
                    </View>
                    <Text style={[styles.boxTwo__textNormal, { marginBottom: 30, width: '100%' }]}>¿Quieres dejar un comentario?</Text>
                </View>

                <View style={[styles.box, styles.boxThree]}>
                    <Image style={{ width: 148, height: 56, resizeMode: 'contain', backgroundColor: 'transparent' }} source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1583315329/Logo.png' }} />
                    <Text style={{ fontSize: 10, lineHeight: 12, color: '#FFFFFF', fontWeight: 'bold' }}>Transporte + Tecnología + <Text>❤</Text></Text>
                </View>

            </LinearGradient>
        </Modal>
    );
}