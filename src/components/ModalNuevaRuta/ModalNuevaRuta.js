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
  TouchableWithoutFeedback,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./ModalNuevaRuta.style";

export default function ModalNuevaRuta({ navigation, hidden, setHidden }) {
  return (
    <Modal animationType="fade" transparent={true} visible={hidden}>
      <LinearGradient
        colors={["#072148D9", "#000000D9"]}
        start={{ x: 0.0, y: 0.5 }}
        end={{ x: 0.0, y: 0.9 }}
        style={styles.container}
      >
        <TouchableWithoutFeedback
          style={styles.container}
          onPress={() => setHidden(false)}
        >
          <View style={styles.container}>
            <View style={{ position: "absolute", top: 0, right: 0 }}>
              <TouchableOpacity
                onPress={() => {
                  setHidden(false);
                }}
                style={[styles.viewClose]}
              >
                <Image
                  style={styles.imageClose}
                  source={require("./../../../assets/cerrar.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={[styles.box, styles.boxTwo]}>
              <View style={styles.card}>
                <View style={styles.view__info}>
                  <Image source={require("./../../../assets/bus.png")} />
                  <Text style={styles.text__info}>
                    Ingresa el código para asignar una nueva ruta.
                  </Text>
                </View>
                <Form style={styles.form}>
                  <Item regular style={styles.item} last>
                    <Input
                      style={styles.input}
                      placeholderTextColor="#BEBEBE"
                      placeholder="Ejemplo: EST4RT3"
                    />
                  </Item>
                  <LinearGradient
                    colors={["#044C74", "#348AC7"]}
                    start={{ x: 0.0, y: 0.2 }}
                    end={{ x: 0.8, y: 2.8 }}
                    style={{ marginLeft: 14, width: "40%" }}
                  >
                    <TouchableOpacity style={styles.buttonVinc}>
                      <Text uppercase={false} style={styles.buttonVinc__text}>
                        VINCULAR
                      </Text>
                    </TouchableOpacity>
                  </LinearGradient>
                </Form>
                <LinearGradient
                  colors={["#1B7BD7", "#160F6B"]}
                  start={{ x: 0.0, y: 0.2 }}
                  end={{ x: 0.8, y: 1.0 }}
                  style={styles.linearStyle}
                ></LinearGradient>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </LinearGradient>
    </Modal>
  );
}
