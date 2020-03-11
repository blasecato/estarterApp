import React, { useState } from 'react';
import { Container, Header, Content, Button, Text, Form, Item, Input, Label, View, Alert, Right } from 'native-base';
import { Image, Modal, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen({ navigation }) {

  const [modalRegister, setModalRegister] = useState(false)
  const [modalPassword, setModalPassword] = useState(false)
  const [modalActivate, setModalActivate] = useState(false)
  const [modalCode, setModalCode] = useState(0)

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


        <Button onPress={() => { setModalPassword(!modalPassword) }} transparent><Text> Olvide mi contraseña </Text></Button>
      </Container>


      {/* OLVIDE MI CONTRASENA */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalPassword}>
        <Container style={{ height: '100%', backgroundColor: '#000000' }}>
          <LinearGradient
            colors={['#072148', '#000000']}
            style={{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ height: '55%', width: '90%', backgroundColor: 'transparent' }}>
              <TouchableOpacity onPress={() => { setModalPassword(!modalPassword) }} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginBottom: 8 }}>
                <Text style={{ color: '#FFFFFF', textAlign: 'right' }}>Cerrar</Text>
                <Image
                  source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1583451323/closeIcon.png' }}
                  style={{ height: 15, width: 15, resizeMode: 'contain', alignItems: 'flex-end', marginLeft: 15 }}
                />
              </TouchableOpacity>
              <LinearGradient
                colors={['#9DDCFF', '#19428D']}
                style={{ height: '100%', width: '100%', alignItems: 'center', borderRadius: 10 }}>
                <Image style={{ marginTop: 32, width: 300, height: 100, resizeMode: 'contain', backgroundColor: 'transparent' }} source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1583315329/Logo.png' }} />
                <Text style={{ marginTop: 24, marginBottom: 13, color: '#282828', textAlign: 'center' }}>¿Cómo deseas reestablecer tu contraseña?</Text>
                <Container style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginBottom: 8, backgroundColor: 'transparent' }}>
                  <TouchableOpacity onPress={() => { setModalCode(1) }} style={{ backgroundColor: '#103256', width: 122, height: 170, borderRadius: 10, marginRight: 15 }}>

                    <Text style={{ marginTop: 24, marginBottom: 13, color: '#FFFF', textAlign: 'center' }}>Enviar código a mi <Text style={{ color: '#FFFF', fontWeight: 'bold' }}>número celular</Text></Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => { setModalCode(2) }} style={{ backgroundColor: '#103256', width: 122, height: 170, borderRadius: 10, marginLeft: 15 }}>

                    <Text style={{ marginTop: 24, marginBottom: 13, color: '#FFFF', textAlign: 'center' }}>Enviar código a mi <Text style={{ color: '#FFFF', fontWeight: 'bold' }}>correo electrónico</Text></Text>
                  </TouchableOpacity>
                </Container>
              </LinearGradient>
            </View>
          </LinearGradient>
        </Container>
      </Modal>


      {/* MODAL DE CODIGO */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalCode != 0}>
        <Container style={{ height: '100%', backgroundColor: '#000000' }}>
          <LinearGradient
            colors={['#072148', '#000000']}
            style={{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ height: '55%', width: '90%', backgroundColor: 'transparent' }}>
              <TouchableOpacity onPress={() => { setModalCode(0) }} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginBottom: 8 }}>
                <Text style={{ color: '#FFFFFF', textAlign: 'right' }}>Cerrar</Text>
                <Image
                  source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1583451323/closeIcon.png' }}
                  style={{ height: 15, width: 15, resizeMode: 'contain', alignItems: 'flex-end', marginLeft: 15 }}
                />
              </TouchableOpacity>
              <LinearGradient
                colors={['#9DDCFF', '#19428D']}
                style={{ height: '100%', width: '100%', alignItems: 'center', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                {
                  modalCode == 1 ?
                    <>
                      <Image style={{ marginTop: 32, width: 300, height: 100, resizeMode: 'contain', backgroundColor: 'transparent' }} source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1583315329/Logo.png' }} />
                      <Text style={{ marginTop: 24, marginBottom: 13, color: '#282828', textAlign: 'center' }}>¿Cuál es tu número de celular?</Text>
                    </>
                    :
                    <>
                      <Image style={{ marginTop: 32, width: 300, height: 100, resizeMode: 'contain', backgroundColor: 'transparent' }} source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1583315329/Logo.png' }} />
                      <Text style={{ marginTop: 24, marginBottom: 13, color: '#282828', textAlign: 'center' }}>¿Cuál es tu correo electrónico?</Text>
                    </>
                }
                <Form style={{ paddingRight: 15 }}>
                  <Item style={{ borderWidth: 0, borderColor: 'transparent', height: 20, width: 320 }} stackedLabel>
                    <Input style={{ borderWidth: 1, borderColor: '#FFFF', borderRadius: 10, backgroundColor: '#FFFFFF1A', width: 320 }} />
                  </Item>
                </Form>
              </LinearGradient>
              <Button full style={{ backgroundColor: '#417CCA', color: '#162CA3', borderColor: 'transparent', elevation: 0, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }} >
                <Text style={{ color: '#FFFFFF' }}> Restrablecer contraseña </Text>
              </Button>
            </View>
          </LinearGradient>
        </Container>
      </Modal>


      <Button onPress={() => { setModalRegister(!modalRegister) }} full style={{ backgroundColor: '#FFFFFF4D', color: '#162CA3', borderColor: 'transparent', elevation: 0 }} >
        <Text style={{ color: '#162CA3' }}> ¿No tienes una cuenta? </Text>
      </Button>


      {/* MODAL DE REGISTRO */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalRegister}>
        <Container style={{ height: '100%', backgroundColor: '#000000' }}>
          <LinearGradient
            colors={['#072148', '#000000']}
            style={{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ height: '80%', width: '90%', backgroundColor: 'transparent' }}>
              <TouchableOpacity onPress={() => setModalRegister(!modalRegister)} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginBottom: 8 }}>
                <Text style={{ color: '#FFFFFF', textAlign: 'right' }}>Cerrar</Text>
                <Image
                  source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1583451323/closeIcon.png' }}
                  style={{ height: 15, width: 15, resizeMode: 'contain', alignItems: 'flex-end', marginLeft: 15 }}
                />
              </TouchableOpacity>
              <LinearGradient
                colors={['#9DDCFF', '#19428D']}
                style={{ height: '100%', width: '100%', alignItems: 'center', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                <Image style={{ marginTop: 32, width: 300, height: 100, resizeMode: 'contain', backgroundColor: 'transparent' }} source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1583315329/Logo.png' }} />
                <Text style={{ marginTop: 24, marginBottom: 13, color: '#282828', textAlign: 'center' }}>Completa la siguiente información para realizar tu registro.</Text>
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
              <Button onPress={() => alert('holaaaaaaaa')} full style={{ backgroundColor: '#417CCA', color: '#162CA3', borderColor: 'transparent', elevation: 0, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }} >
                <Text style={{ color: '#FFFFFF' }}> Registrarme </Text>
              </Button>
            </View>
          </LinearGradient>
        </Container>
      </Modal>



      {/* MODAL CODIGO DE ACTIVACION */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalActivate}>
        <Container style={{ height: '100%', backgroundColor: '#000000' }}>
          <LinearGradient
            colors={['#072148', '#000000']}
            style={{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ height: '80%', width: '90%', backgroundColor: 'transparent' }}>
              <TouchableOpacity onPress={() => setModalActivate(!modalActivate)} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginBottom: 8 }}>
                <Text style={{ color: '#FFFFFF', textAlign: 'right' }}>Cerrar</Text>
                <Image
                  source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1583451323/closeIcon.png' }}
                  style={{ height: 15, width: 15, resizeMode: 'contain', alignItems: 'flex-end', marginLeft: 15 }}
                />
              </TouchableOpacity>
              <LinearGradient
                colors={['#9DDCFF', '#19428D']}
                style={{ height: '100%', width: '100%', alignItems: 'center', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                <Image style={{ marginTop: 32, width: 300, height: 100, resizeMode: 'contain', backgroundColor: 'transparent' }} source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1583315329/Logo.png' }} />
                <Text style={{ marginTop: 24, marginBottom: 13, color: '#282828', textAlign: 'center' }}>Completa la siguiente información para realizar tu registro.</Text>
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
                <Text style={{ color: '#FFFFFF' }}> Iniciar Sesión </Text>
              </Button>
            </View>
          </LinearGradient>
        </Container>
      </Modal>
    </Container >
  );
}
