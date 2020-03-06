import React, { useState } from 'react';
import { Container, Text } from 'native-base';
import { Image } from 'react-native';

export default function SplashScreen({ navigation }) {

    return (
        <Container style={{ justifyContent: 'center', alignItems: 'center' }} >
            <Image
                source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1583314195/bg.png' }}
                style={{ flex: 1, height: '100%', width: '100%', resizeMode: 'cover', position: 'absolute' }}
            />

            <Container style={{ backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center', paddingTop: 200 }}>
                <Image style={{ marginTop: 0, width: 300, height: 100, resizeMode: 'contain', backgroundColor: 'transparent' }} source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1583315329/Logo.png' }} />
                <Text style={{ color: '#FFFFFF80', fontWeight: 'bold' }}>Transporte + Tecnología + <Text>❤</Text></Text>
            </Container>
            <Container style={{ backgroundColor: 'transparent', justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 30 }}>
                <Text style={{ color: '#162CA3', textAlign: 'center', fontStyle: 'normal', fontSize: 12 }}>Al iniciar sesión aceptas los terminos y codiciones, y politicas de privacidad de estarter S.A.S</Text>
                <Text style={{ color: '#162CA3', textAlign: 'center', fontWeight: 'bold', fontStyle: 'normal', fontSize: 14, paddingTop: 5 }}>Estarter v. 3.0.1</Text>
            </Container>
        </Container>
    );
}
