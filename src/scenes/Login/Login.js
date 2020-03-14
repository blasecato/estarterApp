import React, { useState } from 'react';
import { Container, Header, Content, Button, Text, Form, Item, Input, Label, View, Alert, Right } from 'native-base';
import { Image, Modal, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ModalSignup from '../../components/ModalSignup/ModalSignup';
import ModalConfirm from '../../components/ModalConfirm/ModalConfirm';
import ModalResetPassword from '../../components/ModalResetPassword/ModalResetPassword';
import ModalActivation from '../../components/ModalActivation/ModalActivation';
import styles from './Login.styles';

export default function HomeScreen({ navigation }) {

  const [modalRegister, setModalRegister] = useState(false)
  const [modalPassword, setModalPassword] = useState(false)
  const [modalActivation, setModalActivation] = useState(0)
  const [modalCode, setModalCode] = useState(0)

  return (
    <Container style={styles.containerbg} >
      <Image
        source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1583314195/bg.png' }}
        style={styles.bg}
      />
      <Container style={styles.container}>
        <Image
          style={styles.logo}
          source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1583315329/Logo.png' }} />
        <Form style={styles.form}>
          <Item style={styles.item} stackedLabel>
            <Label style={styles.label}>Número de identificación</Label>
            <Input style={styles.input} />
          </Item>
          <Item style={styles.item} stackedLabel last>
            <Label style={styles.label}>Contraseña</Label>
            <Input style={styles.input} />
          </Item>
        </Form>
        <Button light style={styles.buttonSignin} ><Text> Inciar sesión </Text></Button>
        <Button onPress={() => { setModalPassword(!modalPassword) }} transparent><Text> Olvide mi contraseña </Text></Button>
      </Container>
      <Button onPress={() => { setModalRegister(!modalRegister) }} full style={{ backgroundColor: '#FFFFFF4D', color: '#162CA3', borderColor: 'transparent', elevation: 0 }} >
        <Text style={styles.buttonSignup}> ¿No tienes una cuenta? </Text>
      </Button>
      <ModalSignup hidden={modalRegister} setHidden={setModalRegister} setModalActivation={setModalActivation} ></ModalSignup>
      <ModalResetPassword hidden={modalPassword} setHidden={setModalPassword} setModalCode={setModalCode} ></ModalResetPassword>
      <ModalConfirm hidden={modalCode} setHidden={setModalCode} setModalActivation={setModalActivation} ></ModalConfirm>
      <ModalActivation hidden={modalActivation} setHidden={setModalActivation} ></ModalActivation>
    </Container>
  );
}
