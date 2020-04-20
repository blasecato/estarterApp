import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Circle, Rect } from "react-native-svg";

export default function RuteIcon({ navigation, hex = "#FF1F1F", style }) {
  return (
    <View style={style}>
      <Svg
        width="31"
        height="13"
        viewBox="0 0 31 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Rect x="9" y="6" width="19" height="2" stroke={hex} strokeWidth="2" />
        <Circle
          cx="6.5"
          cy="6.5"
          r="5"
          fill="white"
          stroke={hex}
          strokeWidth="3"
        />
        <Circle
          cx="26"
          cy="7"
          r="4"
          fill="white"
          stroke={hex}
          strokeWidth="2"
        />
      </Svg>
    </View>
  );
}
