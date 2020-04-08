import React, { useState } from 'react';
import { Container, Text } from 'native-base';
import { Image } from 'react-native';
import styles from './Splash.styles'

export default function SplashScreen({ navigation }) {

    return (
        <Container style={styles.container} >
            <Image
                source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1583314195/bg.png' }}
                style={styles.container__Background}
            />
            <Container style={styles.content}>
                <Image style={styles.logo} source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1583315329/Logo.png' }} />
                <Text style={styles.logo__slogan}>Transporte + Tecnología + <Text>❤</Text></Text>
            </Container>
            <Container style={styles.footer}>
                <Text style={styles.footerText}>Al iniciar sesión aceptas los terminos y codiciones, y politicas de privacidad de estarter S.A.S</Text>
                <Text style={styles.footerText__bold}>Estarter v. 3.0.1</Text>
            </Container>
        </Container>
    );
}
