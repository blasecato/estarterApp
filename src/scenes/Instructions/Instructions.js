import * as React from 'react';
import { Image } from 'react-native';
import { Button, View, Text, Container } from 'native-base';
import Onboarding from 'react-native-onboarding-swiper';

export default function Instructions({ navigation }) {
    return (
        <Container style={{ justifyContent: 'center', alignItems: 'center' }} >
            {/* <Image
                source={require('./../../../assets/instructions.png')}
                style={{ flex: 1, height: '100%', width: '100%', resizeMode: 'cover', position: 'absolute' }}
            /> */}
            <LinearGradient
                colors={['#072148D9', '#000000D9']}
                start={{ x: 0.0, y: 0.5 }}
                end={{ x: 0.0, y: 0.9 }}
                style={styles.container_background}></LinearGradient>
        </Container>
    );
}
