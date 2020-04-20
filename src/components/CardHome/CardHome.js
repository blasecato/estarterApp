import React, { useState } from "react";
import {
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import {
  Text,
  View,
  Segment,
  Container,
  Card,
  CardItem,
  Body,
} from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./CardHome.style";
import TapOne from "./taps/TapOne";
import TapTwo from "./taps/TapTwo";

export default function CardHome({
  setModalCompartirRuta,
  activeTab,
  setActiveTab,
  setInstruction,
  setWhatsapp,
  setModalAviso,
}) {
  const [loading, setLoading] = useState(false);
  const [succes, setSucces] = useState(false);

  return (
    <Container style={styles.container}>
      <LinearGradient
        colors={["#03325F00", "#1b7bd7E8", "#03325F"]}
        style={styles.container__gradient}
      >
        <View style={styles.container_tab}>
          <View
            style={{
              width: " 90%",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              marginHorizontal: "10%",
            }}
          >
            <TouchableOpacity
              style={styles.button__ubication}
              onPress={() => {
                setModalAviso(true);
              }}
            >
              <Image source={require("./../../../assets/marker.png")}></Image>
            </TouchableOpacity>
          </View>
          <Segment style={({}, activeTab == 1 ? styles.tab : styles.tabShared)}>
            <TouchableWithoutFeedback
              onPress={() => {
                setTimeout(() => {
                  setActiveTab(1);
                }, 50);
              }}
              style={
                ({}, activeTab == 2 ? styles.inactiveTab : styles.activeTab)
              }
            >
              <View
                style={
                  (styles.view_tab,
                  activeTab == 2 ? styles.inactiveTab : styles.activeTab)
                }
              >
                <Text
                  style={
                    activeTab == 1
                      ? styles.activeTab__text
                      : styles.inactiveTab__text
                  }
                >
                  Mis rutas
                </Text>
                <Image
                  style={
                    activeTab == 1
                      ? styles.activeTab__img
                      : styles.inactiveTab__img
                  }
                  source={require("./../../../assets/down.png")}
                ></Image>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => {
                setTimeout(() => {
                  setActiveTab(2);
                }, 50);
              }}
              style={
                ({}, activeTab == 1 ? styles.inactiveTab : styles.activeTab)
              }
            >
              <View
                style={
                  (styles.view_tab,
                  activeTab == 1 ? styles.inactiveTab : styles.activeTab)
                }
              >
                <Text
                  style={
                    activeTab == 1
                      ? styles.inactiveTab__text
                      : styles.activeTab__text
                  }
                >
                  Compartidas
                </Text>
                <Image
                  style={
                    activeTab == 1
                      ? styles.inactiveTab__img
                      : styles.activeTab__img
                  }
                  source={require("./../../../assets/down.png")}
                ></Image>
              </View>
            </TouchableWithoutFeedback>
          </Segment>
        </View>
        <Card
          style={
            activeTab == 1
              ? styles.container__card
              : styles.container__cardShared
          }
        >
          <CardItem style={{ paddingHorizontal: 0, marginHorizontal: 0 }}>
            <Body
              style={{
                marginHorizontal: 0,
                paddingHorizontal: 0,
                width: "100%",
              }}
            >
              {activeTab == 1 && (
                <TapOne
                  loading={loading}
                  succes={succes}
                  setSucces={setSucces}
                  setLoading={setLoading}
                />
              )}
              {activeTab == 2 && (
                <TapTwo
                  setModalCompartirRuta={setModalCompartirRuta}
                  setInstruction={setInstruction}
                  setWhatsapp={setWhatsapp}
                />
              )}
            </Body>
          </CardItem>
        </Card>
      </LinearGradient>
    </Container>
  );
}
