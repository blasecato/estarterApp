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
  Textarea,
} from "native-base";
import {
  Image,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./ModalCodeQr.style";
import { ScrollView } from "react-native-gesture-handler";

export default function ModalCodeQr({ navigation, hidden, setHidden }) {
  const [active, setActive] = useState(false);

  return (
    <Modal animationType="fade" transparent={true} visible={hidden}>
      <LinearGradient
        colors={["#072148D9", "#000000D9"]}
        start={{ x: 0.0, y: 0.5 }}
        end={{ x: 0.0, y: 0.9 }}
        style={styles.container_background}
      >
        <TouchableWithoutFeedback
          style={styles.container}
          onPress={() => {
            setHidden(false);
          }}
        >
          <View style={[styles.box, styles.boxOne]}>
            <View style={{ position: "absolute", top: 0, right: 0 }}>
              <TouchableOpacity
                onPress={() => setHidden(false)}
                style={styles.viewClose}
              >
                <Image
                  style={styles.imageClose}
                  source={require("./../../../assets/cerrar.png")}
                />
              </TouchableOpacity>
            </View>
            {!active && (
              <View style={styles.card}>
                <View style={[styles.cardBox, styles.cardBoxOne]}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      style={{
                        height: 315,
                        width: "100%",
                        resizeMode: "cover",
                        zIndex: 1,
                        marginTop: 22,
                        marginBottom: 24,
                      }}
                      source={require("./../../../assets/codeWhite.png")}
                    />
                  </View>
                </View>
                <View style={[styles.cardBox, styles.cardBoxTwo]}>
                  <Text
                    style={{
                      display: "flex",
                      textAlign: "center",
                      width: 274,
                      justifyContent: "center",
                      marginBottom: 5,
                      marginTop: 10,
                      fontFamily: "Ubuntu",
                    }}
                  >
                    Aun no tiene vinculado un código de seguridad QR
                  </Text>
                  <Form style={styles.form}>
                    <Item regular style={styles.item} last>
                      <Input
                        style={[
                          styles.input,
                          { fontSize: 14, fontFamily: "Ubuntu" },
                        ]}
                        placeholderTextColor="#BEBEBE"
                        placeholder="Ejemplo: EST4RT3"
                      />
                    </Item>
                    <LinearGradient
                      colors={["#044C74", "#348AC7"]}
                      start={{ x: 0.0, y: 0.2 }}
                      end={{ x: 0.8, y: 3.0 }}
                      style={{ marginLeft: 7 }}
                    >
                      <Button
                        style={styles.buttonVinc}
                        onPress={() => setActive(true)}
                      >
                        <Text uppercase={false} style={styles.buttonVinc__text}>
                          VINCULAR
                        </Text>
                      </Button>
                    </LinearGradient>
                  </Form>
                </View>
              </View>
            )}

            {active && (
              <View style={[styles.card, { height: 480 }]}>
                <View style={[styles.cardBox, styles.cardBoxOne]}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      style={{
                        height: 315,
                        width: "100%",
                        resizeMode: "cover",
                        zIndex: 1,
                        marginTop: 24,
                      }}
                      source={require("./../../../assets/code.png")}
                    />
                  </View>
                </View>
                <View style={[styles.cardBox, styles.cardBoxTwo]}>
                  <Text
                    style={{
                      display: "flex",
                      textAlign: "center",
                      width: 274,
                      justifyContent: "center",
                      marginBottom: 5,
                      marginTop: 10,
                      fontFamily: "Ubuntu",
                    }}
                  >
                    Presenta este código al conductor para activar tu usuario
                    cada vez que utilices la ruta.
                  </Text>
                  <Form style={styles.form}>
                    <Item regular style={styles.item} last>
                      <Input
                        style={styles.input}
                        placeholderTextColor="#115C89"
                        placeholder="1022952500"
                      />
                    </Item>
                    <LinearGradient
                      colors={["#044C74", "#348AC7"]}
                      start={{ x: 0.0, y: 0.2 }}
                      end={{ x: 0.8, y: 3.0 }}
                      style={{ marginLeft: 7, width: 115 }}
                    >
                      <Button
                        style={styles.buttonVinc}
                        onPress={() => {
                          console.log("cliek");
                        }}
                      >
                        <Text uppercase={false} style={styles.buttonVinc__text}>
                          ACTIVAR
                        </Text>
                      </Button>
                    </LinearGradient>
                  </Form>
                </View>
              </View>
            )}
            <LinearGradient
              colors={["#1B7BD7", "#160F6B"]}
              start={{ x: 0.0, y: 0.2 }}
              end={{ x: 0.8, y: 1.0 }}
              style={styles.linearStyle}
            ></LinearGradient>
          </View>
        </TouchableWithoutFeedback>
      </LinearGradient>
    </Modal>
  );
}
