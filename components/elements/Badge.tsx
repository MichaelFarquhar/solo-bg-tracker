import React from "react";
import { View, Text, StyleSheet, ViewStyle } from "react-native";

interface Props {
  text: string;
  style?: ViewStyle;
  variant?: "circle" | "square";
}

export const Badge = ({ text, style, variant = "circle" }: Props) => {
  const viewStyle = [
    styles.badgeStyle,
    variant === "circle" ? styles.circle : styles.square,
    style,
  ];

  return (
    <View style={viewStyle}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const size = 20;

const styles = StyleSheet.create({
  badgeStyle: {
    alignSelf: "center",
    minWidth: size,
    height: size,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
  },
  circle: {
    borderRadius: size / 2,
  },
  square: {
    borderRadius: 3,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
    paddingHorizontal: 4,
  },
});
