import React from "react";
import { TouchableOpacity, ViewStyle, StyleSheet } from "react-native";

type Position = "right" | "left";

interface Props {
  icon: JSX.Element;
  onPress: () => void;
  position?: Position;
  size?: number;
  style?: ViewStyle;
}

const POSITIONS: Record<Position, ViewStyle> = {
  right: {
    bottom: 24,
    right: 24,
  },
  left: {
    bottom: 24,
    left: 24,
  },
};

export const FAB = ({ icon, onPress, position = "right", size = 56, style }: Props) => {
  const dynamicStyles = {
    button: {
      width: size,
      height: size,
      borderRadius: size / 2,
    },
  };

  return (
    <TouchableOpacity
      style={[styles.button, dynamicStyles.button, POSITIONS[position], style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    backgroundColor: "#6B46C1",
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
  },
});
