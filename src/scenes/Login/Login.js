import React, { useState } from 'react';
import { Container, Header, Content, Button, Text, Form, Item, Input, Label, View, Alert, Right } from 'native-base';
import { Image, Modal, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ModalSignup from '../../components/ModalSignup/ModalSignup';
import ModalConfirm from '../../components/ModalConfirm/ModalConfirm';
import ModalResetPassword from '../../components/ModalResetPassword/ModalResetPassword';
import styles from './Login.styles';

export default function HomeScreen({ navigation }) {

  const [modalRegister, setModalRegister] = useState(false)
  const [modalPassword, setModalPassword] = useState(false)
  const [modalCode, setModalCode] = useState(0)

  return (
    <Container style={styles.container} >
      <Image
        source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1583314195/bg.png' }}
        style={styles.logo}
      />
      <Container style={{ backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
        <Image style={{ marginTop: 0, width: 300, height: 100, resizeMode: 'contain', backgroundColor: 'transparent' }} source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1583315329/Logo.png' }} />
        <Form style={{ paddingRight: 15 }}>
          <Item style={{ borderWidth: 0, borderColor: 'transparent', height: 90 }} stackedLabel>
            <Label style={{ marginBottom: 15, color: '#FFFF' }}>Número de identificación</Label>
            <Input style={{ borderWidth: 1, borderColor: '#FFFF', borderRadius: 10, backgroundColor: '#FFFFFF1A' }} />
          </Item>
          <Item style={{ bor5erWidth: 0, borderColor: 'transparent', height: 90 }} stackedLabel last>
            <Label style={{ marginBottom: 15, color: '#FFFF' }}>Contraseña</Label>
            <Input style={{ borderWidth: 1, borderColor: '#FFFF', borderRadius: 10, backgroundColor: '#FFFFFF1A' }} />
          </Item>
        </Form>
        <Button light style={{ marginTop: 20, width: 336, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }} ><Text> Inciar sesión </Text></Button>
        <Button onPress={() => { setModalPassword(!modalPassword) }} transparent><Text> Olvide mi contraseña </Text></Button>
      </Container>
      <Button onPress={() => { setModalRegister(!modalRegister) }} full style={{ backgroundColor: '#FFFFFF4D', color: '#162CA3', borderColor: 'transparent', elevation: 0 }} >
        <Text style={{ color: '#162CA3' }}> ¿No tienes una cuenta? </Text>
      </Button>
      <ModalSignup hidden={modalRegister} setHidden={setModalRegister} setModalCode={setModalCode} ></ModalSignup>
      <ModalResetPassword hidden={modalPassword} setHidden={setModalPassword} ></ModalResetPassword>
      <ModalConfirm hidden={modalCode} setHidden={setModalCode} ></ModalConfirm>
    </Container >
  );
}
