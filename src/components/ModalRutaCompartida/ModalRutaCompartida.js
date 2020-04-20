import * as React from "react";
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
import styles from "./ModalRutaCompartida.style";
import { ScrollView } from "react-native-gesture-handler";

export default function ModalRutaCompartida({
  navigation,
  hidden,
  setModalCompartirRuta,
  setNewRuta,
}) {
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
          onPress={() => setModalCompartirRuta(false)}
        >
          <View style={[styles.box, styles.boxOne]}>
            <View style={{ position: "absolute", top: 0, right: 0 }}>
              <TouchableOpacity
                onPress={() => setModalCompartirRuta(false)}
                style={styles.viewClose}
              >
                <Image
                  style={styles.imageClose}
                  source={require("./../../../assets/cerrar.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.card}>
              <View style={[styles.cardBox, styles.cardBoxOne]}>
                <Image
                  style={{ height: 77, width: 77, resizeMode: "cover" }}
                  source={require("./../../../assets/carro.png")}
                />
                <Text
                  style={{
                    textAlign: "left",
                    width: "65%",
                    maxWidth: 240,
                    marginLeft: 15,
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: 14,
                    lineHeight: 16,
                    fontFamily: "Ubuntu",
                  }}
                >
                  Al crear esta ruta, sera compartida unicamente con tus
                  compañeros de trabajo.
                </Text>
              </View>
              <View style={[styles.cardBox, styles.cardBoxTwo]}>
                <Form style={styles.form}>
                  <Item style={styles.item} stackedLabel>
                    <Label style={styles.labelTwo}>Lugar de origen</Label>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100%",
                      }}
                    >
                      <Input
                        style={[
                          styles.input,
                          { width: "81%", paddingLeft: 13 },
                        ]}
                        placeholderTextColor="#BEBEBE"
                        placeholder="Ejemplo: El Salitre"
                      />
                      <Image
                        style={{
                          height: 50,
                          width: 52,
                          resizeMode: "cover",
                          marginLeft: 8,
                        }}
                        source={require("./../../../assets/origen.png")}
                      />
                    </View>
                  </Item>
                  <Item style={styles.item} stackedLabel>
                    <Label style={styles.labelTwo}>Whatsapp</Label>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100%",
                        backgroundColor: "#079E04",
                      }}
                    >
                      <Image
                        style={{ height: 50, width: 52, resizeMode: "cover" }}
                        source={require("./../../../assets/wa.png")}
                      />
                      <Input
                        style={[
                          styles.input,
                          { width: "84%", paddingLeft: 13 },
                        ]}
                        placeholderTextColor="#BEBEBE"
                        placeholder="Ejemplo: 3227409090"
                      />
                    </View>
                  </Item>
                  <Item style={styles.item} stackedLabel last>
                    <Label style={styles.label}>
                      Escribe algunos detalles.
                    </Label>
                    <Textarea
                      rowSpan={4}
                      style={[styles.input, { width: "100%", paddingLeft: 13 }]}
                      bordered
                      placeholderTextColor="#BEBEBE"
                      placeholder="Ejemplo: Ejemplo: Hola, salgo todos los dias a las 7am y me regreso a las 6pm, los dias de pico y placa no llevo vehículo..."
                    />
                  </Item>
                </Form>
                <TouchableOpacity
                  onPress={() => {
                    setNewRuta(true);
                    setModalCompartirRuta(false);
                  }}
                  style={{ marginBottom: 40 }}
                >
                  <LinearGradient
                    colors={["#044C74", "#348AC7"]}
                    start={{ x: 0.0, y: 0.2 }}
                    end={{ x: 0.8, y: 2.8 }}
                    style={{
                      padding: 15,
                      width: 220,
                      marginLeft: 60,
                      marginTop: 60,
                      marginRight: 60,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "#FFFF",
                        fontSize: 15,
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontFamily: "Ubuntu",
                      }}
                    >
                      AÑADIR RUTA
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
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
