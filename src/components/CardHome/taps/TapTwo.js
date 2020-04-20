import React, { useState } from "react";
import styles from "../CardHome.style";
import { Text, View, Form, Item, Input, List, ListItem } from "native-base";
import RuteIcon from "../../RuteIcon/index";
import {
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";
export default function TapOne({
  loading,
  succes,
  setInstruction,
  setWhatsapp,
  setModalCompartirRuta,
}) {
  const colors = [
    "#FF1F1F",
    "#FFA51F",
    "#85CD0F",
    "#CF3DD2",
    "#FF1F1F",
    "#FFA51F",
    "#85CD0F",
    "#CF3DD2",
    "#85CD0F",
  ];
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
          width: "90%",
        }}
      >
        <List style={styles.list}>
          {[...Array(9)].map((item, i) => (
            <ListItem
              onPress={() => {
                setInstruction(true);
                setTimeout(() => {
                  setInstruction(false);
                  setWhatsapp(true);
                }, 2000);
              }}
              style={styles.listItem}
            >
              <RuteIcon style={styles.imageList} hex={colors[i]} />
              <Text style={styles.textList__info}>
                {" "}
                Unicentro - Calle 100 - Calle 13{" "}
              </Text>
            </ListItem>
          ))}
        </List>
      </ScrollView>
      <View style={styles.iconWhatsapp}>
        <TouchableOpacity
          onPress={() => {
            setModalCompartirRuta(true);
          }}
          style={[styles.box, styles.boxOne]}
        >
          <Image
            style={styles.iconWhatsapp__icon}
            source={require("./../../../../assets/add.png")}
          ></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
}
