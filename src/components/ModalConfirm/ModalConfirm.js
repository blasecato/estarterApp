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
  Alert,
  Right,
} from "native-base";
import {
  Image,
  Modal,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./ModalConfirm.style";

export default function ModalConfirm({
  navigation,
  hidden,
  setHidden,
  setModalActivation,
}) {
  return (
    <Modal animationType="fade" transparent={true} visible={hidden != 0}>
      <TouchableWithoutFeedback
        style={styles.container}
        onPress={() => {
          setHidden(false);
        }}
      >
        <View style={[styles.box, styles.box1]}>
          <LinearGradient
            colors={["#072148D9", "#000000D9"]}
            start={{ x: 0.0, y: 0.5 }}
            end={{ x: 0.0, y: 0.9 }}
            style={styles.container__background}
          >
            <ScrollView
              contentContainerStyle={{
                flexGrow: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={styles.content}>
                <TouchableOpacity
                  style={styles.touchClose}
                  onPress={() => {
                    setHidden(false);
                  }}
                >
                  <View style={styles.viewClose}>
                    <Text style={styles.textClose}>Cerrar</Text>
                    <Image
                      source={{
                        uri:
                          "https://res.cloudinary.com/cacaotics/image/upload/v1583451323/closeIcon.png",
                      }}
                      style={styles.imageClose}
                    />
                  </View>
                </TouchableOpacity>
                <LinearGradient
                  colors={["#9DDCFF", "#19428D"]}
                  style={styles.linearGradient}
                >
                  <Image
                    style={styles.logo}
                    source={{
                      uri:
                        "https://res.cloudinary.com/cacaotics/image/upload/v1583315329/Logo.png",
                    }}
                  />
                  {hidden == 1 ? (
                    <>
                      <View style={styles.cardCircle}>
                        <Image
                          style={styles.imageCardCircle}
                          source={{
                            uri:
                              "https://res.cloudinary.com/cacaotics/image/upload/v1583893414/celular.png",
                          }}
                        />
                      </View>
                      <Text style={styles.label}>
                        ¿Cuál es tu número de celular?
                      </Text>
                      <Form style={styles.form}>
                        <Item style={styles.item} stackedLabel last>
                          <Input style={styles.input} />
                        </Item>
                      </Form>
                    </>
                  ) : (
                    <>
                      <View style={styles.cardCircle}>
                        <Image
                          style={styles.imageCardCircle}
                          source={{
                            uri:
                              "https://res.cloudinary.com/cacaotics/image/upload/v1583893414/msj.png",
                          }}
                        />
                      </View>
                      <Text style={styles.label}>
                        ¿Cuál es tu correo electrónico?
                      </Text>
                      <Form style={styles.form}>
                        <Item style={styles.item} stackedLabel last>
                          <Input style={styles.input} />
                        </Item>
                      </Form>
                    </>
                  )}
                </LinearGradient>
                <Button
                  onPress={() => {
                    setModalActivation(2);
                    setHidden(false);
                  }}
                  full
                  style={styles.buttonPass}
                >
                  <Text uppercase={false} style={styles.buttonPass__text}>
                    {" "}
                    Restablecer contraseña{" "}
                  </Text>
                </Button>
              </View>
            </ScrollView>
          </LinearGradient>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
