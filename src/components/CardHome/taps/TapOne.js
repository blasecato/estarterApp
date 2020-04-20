import React, { useState } from "react";
import styles from "../CardHome.style";
import { Text, View, Form, Item, Input, List, ListItem } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import RuteIcon from "../../RuteIcon/index";
import { TouchableOpacity, ActivityIndicator, ScrollView } from "react-native";
export default function TapOne({ loading, succes, setSucces, setLoading }) {
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
      {!loading && (
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            marginTop: -12,
          }}
        >
          <Text style={[styles.text__info, { marginBottom: 19, marginTop: 5 }]}>
            Ingresa el código que te han asignado en tu empresa.
          </Text>
          <Form style={styles.form}>
            <View style={{ width: "90%", maxWidth: "100%" }}>
              <Item regular style={styles.item} last>
                <Input
                  style={styles.input}
                  placeholderTextColor="#BEBEBE"
                  placeholder="Ejemplo: EST4RT3"
                />
              </Item>
            </View>
          </Form>
          <LinearGradient
            colors={["#044C74", "#348AC7"]}
            start={{ x: 0.0, y: 0.2 }}
            end={{ x: 0.8, y: 2.8 }}
            style={[styles.buttonVinc, { width: "60%", marginTop: 10 }]}
          >
            <TouchableOpacity
              onPress={() => {
                setLoading(true);
                setTimeout(() => {
                  setSucces(true);
                }, 2000);
              }}
              style={{
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text uppercase={false} style={styles.buttonVinc__text}>
                {" "}
                VINCULAR{" "}
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      )}

      {loading && !succes && (
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            marginTop: -12,
          }}
        >
          <ActivityIndicator size="large" color="#00ff00" />
          <Text style={styles.text__info}>
            Estamos validando tu código por favor espera unos segundos.
          </Text>
        </View>
      )}
      {succes && (
        <View>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              alignItems: "center",
            }}
          >
            <List style={styles.list}>
              {[...Array(9)].map((item, i) => (
                <ListItem style={styles.listItem}>
                  <RuteIcon style={styles.imageList} hex={colors[i]} />
                  <View style={styles.viewList}>
                    <Text style={styles.textList__routes}>RE1</Text>
                  </View>
                  <Text style={styles.textList__info}>
                    {" "}
                    Unicentro - Calle 100 - Calle 13{" "}
                  </Text>
                </ListItem>
              ))}
            </List>
          </ScrollView>
        </View>
      )}
    </View>
  );
}
