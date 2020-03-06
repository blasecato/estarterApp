import React, { useState } from 'react';
import { Container, Text } from 'native-base';

export default function SplashScreen({ navigation }) {

    return (
        <Container style={{ justifyContent: 'center', alignItems: 'center' }} >
            <Text>Splash</Text>
        </Container>
    );
}
