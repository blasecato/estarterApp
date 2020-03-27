import * as React from 'react';
import { Image } from 'react-native';
import { Button, View, Text, Container } from 'native-base';
import Onboarding from 'react-native-onboarding-swiper';

export default function Loading({ navigation }) {
    return (
        <Container style={{ justifyContent: 'center', alignItems: 'center' }} >
            <Image
                source={require('./../../../assets/loading.png')}
                style={{ flex: 1, height: '100%', width: '100%', resizeMode: 'cover', position: 'absolute' }}
            />
        </Container>
    );
}
