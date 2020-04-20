import React, { useState } from "react";
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Form,
  Item,
  Input,
  Label,
  View,
  Right,
} from "native-base";
import { Image, Modal, TouchableOpacity, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ModalSignup from "../../components/ModalSignup/ModalSignup";
import ModalConfirm from "../../components/ModalConfirm/ModalConfirm";
import ModalResetPassword from "../../components/ModalResetPassword/ModalResetPassword";
import ModalActivation from "../../components/ModalActivation/ModalActivation";
import styles from "./Login.styles";
import { ScrollView } from "react-native-gesture-handler";
import { useForm, Controller } from "react-hook-form";

export default function LoginScreen({ navigation }) {
  const { control, handleSubmit, errors } = useForm();
  const [modalRegister, setModalRegister] = useState(false);
  const [modalPassword, setModalPassword] = useState(false);
  const [modalActivation, setModalActivation] = useState(0);
  const [modalCode, setModalCode] = useState(0);
  const [phone, setPhone] = useState(undefined);
  const [email, setEmail] = useState(undefined);

  const onSubmit = (data) => navigation.navigate("Onboarding");

  return (
    <Container style={styles.container}>
      <Image
        source={{
          uri:
            "https://res.cloudinary.com/cacaotics/image/upload/v1583314195/bg.png",
        }}
        style={styles.container__Background}
      />
      <Container style={styles.content}>
        <View
          contentContainerStyle={{
            flexGrow: 1,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={styles.logo}
            source={{
              uri:
                "https://res.cloudinary.com/cacaotics/image/upload/v1583315329/Logo.png",
            }}
          />
          <Form style={styles.form}>
            <Item style={styles.item} stackedLabel>
              <Label style={styles.label}>Número de identificación</Label>
              <Controller
                as={<Input style={styles.input} />}
                control={control}
                name="identification"
                onChange={(args) => args[0].nativeEvent.text}
                rules={{ required: true, minLength: 3 }}
                defaultValue=""
              />
              {errors.identification && (
                <Text style={styles.text__warning}>
                  Ingrese el número de identificación.
                </Text>
              )}
            </Item>
            <Item style={styles.item} stackedLabel last>
              <Label style={styles.label}>Contraseña</Label>
              <Controller
                as={<Input style={styles.input} />}
                control={control}
                name="password"
                onChange={(args) => args[0].nativeEvent.text}
                rules={{ required: true, minLength: 3 }}
                defaultValue=""
              />
              {errors.password && (
                <Text style={styles.text__warning}>Ingrese la contraseña.</Text>
              )}
            </Item>
          </Form>
          <Button
            light
            title="Submit"
            onPress={handleSubmit(onSubmit)}
            style={styles.buttonSignin}
          >
            <Text uppercase={false} style={styles.buttonSignin__text}>
              {" "}
              Iniciar sesión{" "}
            </Text>
          </Button>
          <Button
            style={{ marginBottom: 23, justifyContent: "center" }}
            onPress={() => {
              setModalPassword(!modalPassword);
            }}
            transparent
          >
            <Text uppercase={false} style={styles.buttonForgot__text}>
              {" "}
              Olvide mi contraseña{" "}
            </Text>
          </Button>
        </View>
      </Container>
      <Button
        onPress={() => {
          setModalRegister(!modalRegister);
        }}
        full
        style={styles.buttonSignup}
      >
        <Text uppercase={false} style={styles.buttonSignup__text}>
          {" "}
          ¿No tienes una cuenta?{" "}
        </Text>
      </Button>
      <ModalSignup
        hidden={modalRegister}
        setHidden={setModalRegister}
        setModalActivation={setModalActivation}
        navigation
        setPhone={setPhone}
        setEmail={setEmail}
      ></ModalSignup>
      <ModalResetPassword
        hidden={modalPassword}
        setHidden={setModalPassword}
        setModalCode={setModalCode}
      ></ModalResetPassword>
      <ModalActivation
        hidden={modalActivation}
        setHidden={setModalActivation}
        phone={phone}
        email={email}
      ></ModalActivation>
      <ModalConfirm
        hidden={modalCode}
        setHidden={setModalCode}
        setModalActivation={setModalActivation}
      ></ModalConfirm>
    </Container>
  );
}
