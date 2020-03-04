import * as React from 'react';
import { Container, Header, Content, Button, Text, Form, Item, Input, Label } from 'native-base';
import { Image } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <Container style={{ justifyContent: 'center', alignItems: 'center' }} >
      <Image
        source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1583314195/bg.png' }}
        style={{ flex: 1, height: '100%', width: '100%', resizeMode: 'cover', position: 'absolute' }}
      />
      <Container style={{ backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
        <Image style={{ marginTop: 0, width: 300, height: 100, resizeMode: 'contain', backgroundColor: 'transparent' }} source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1583315329/Logo.png' }} />
        <Form>
          <Item style={{ borderWidth: 0, borderColor: 'transparent', height: 90 }} stackedLabel>
            <Label style={{ marginBottom: 15, color: '#ffff' }}>Número de identificación</Label>
            <Input style={{ borderWidth: 1, borderColor: '#FFFF', borderRadius: 10, paddingLeft: 20 }} />
          </Item>
          <Item style={{ borderWidth: 0, borderColor: 'transparent', height: 90 }} stackedLabel last>
            <Label style={{ marginBottom: 15, color: '#ffff' }}>Contraseña</Label>
            <Input style={{ borderWidth: 1, borderColor: '#FFFF', borderRadius: 10, paddingLeft: 20 }} />
          </Item>
        </Form>
        <Button light><Text> Inciar sesion </Text></Button>
      </Container>
    </Container>
  );
}