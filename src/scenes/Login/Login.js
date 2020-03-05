import React, { useState } from 'react';
import { Container, Header, Content, Button, Text, Form, Item, Input, Label, TouchableHighlight, View, Alert, Right } from 'native-base';
import { Image, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen({ navigation }) {

  const [modalVisible, setModalVisible] = useState(false)

  return (
    <Container style={{ justifyContent: 'center', alignItems: 'center' }} >
      <Image
        source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1583314195/bg.png' }}
        style={{ flex: 1, height: '100%', width: '100%', resizeMode: 'cover', position: 'absolute' }}
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
        <Button transparent><Text> Olvide mi contraseña </Text></Button>
      </Container>
      <Button onPress={() => { setModalVisible(!modalVisible) }} full style={{ backgroundColor: '#FFFFFF4D', color: '#162CA3', borderColor: 'transparent', elevation: 0 }} >
        <Text style={{ color: '#162CA3' }}> ¿No tienes una cuenta? </Text>
      </Button>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}>
        <Container style={{ height: '100%', backgroundColor: '#000000' }}>
          <LinearGradient
            colors={['#072148', '#000000']}
            style={{ height: '100%', width: '100%', alignItems: 'center' }}>
            <View style={{ height: '80%', width: '90%', backgroundColor: 'transparent' }}>
              <View style={{ display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'flex-end', marginBottom: 8 }}>
                <Text style={{ color: '#FFFFFF', textAlign: 'right' }}>Cerrar</Text>
                <Image
                  source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1583451323/closeIcon.png' }}
                  style={{ height: 15, width: 15, resizeMode: 'contain',  alignItems: 'flex-end', marginLeft: 15 }}
                />
              </View>
              <LinearGradient
                colors={['#9DDCFF', '#19428D']}
                style={{ height: '100%', width: '100%', alignItems: 'center', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                <Image style={{ marginTop: 32, width: 300, height: 100, resizeMode: 'contain', backgroundColor: 'transparent' }} source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1583315329/Logo.png' }} />
                <Text style={{ marginTop: 24, marginBottom: 27, color: '#282828', textAlign: 'center' }}>Completa la siguiente información para realizar tu registro.</Text>
                <Form style={{ paddingRight: 15 }}>
                  <Item style={{ borderWidth: 0, borderColor: 'transparent', height: 90, width: 320 }} stackedLabel>
                    <Label style={{ marginBottom: 15, color: '#FFFF' }}>
                      Número de identificación
                    </Label>
                    <Input style={{ borderWidth: 1, borderColor: '#FFFF', borderRadius: 10, backgroundColor: '#FFFFFF1A', width: 320 }} />
                  </Item>
                  <Item style={{ borderWidth: 0, borderColor: 'transparent', height: 90 }} stackedLabel last>
                    <Label style={{ marginBottom: 15, color: '#FFFF' }}>
                      Nombre y apellido
                    </Label>
                    <Input style={{ borderWidth: 1, borderColor: '#FFFF', borderRadius: 10, backgroundColor: '#FFFFFF1A', width: 320 }} />
                  </Item>
                  <Item style={{ borderWidth: 0, borderColor: 'transparent', height: 90 }} stackedLabel last>
                    <Label style={{ marginBottom: 15, color: '#FFFF' }}>
                      Correo Electrónico
                    </Label>
                    <Input style={{ borderWidth: 1, borderColor: '#FFFF', borderRadius: 10, backgroundColor: '#FFFFFF1A', width: 320 }} />
                  </Item>
                  <Item style={{ borderWidth: 0, borderColor: 'transparent', height: 90 }} stackedLabel last>
                    <Label style={{ marginBottom: 15, color: '#FFFF' }}>
                      Número de celular
                    </Label>
                    <Input style={{ borderWidth: 1, borderColor: '#FFFF', borderRadius: 10, backgroundColor: '#FFFFFF1A', width: 320 }} />
                  </Item>
                </Form>
              </LinearGradient>
              <Button full style={{ backgroundColor: '#417CCA', color: '#162CA3', borderColor: 'transparent', elevation: 0, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }} >
                <Text style={{ color: '#FFFFFF' }}> Registrarme </Text>
              </Button>
            </View>
          </LinearGradient>
        </Container>
      </Modal>
    </Container>
  );
}
