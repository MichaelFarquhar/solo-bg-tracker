import React from "react";
import { View, ViewStyle } from "react-native";

interface Props {
  children: React.ReactNode;
  style?: ViewStyle;
  padding?: number;
}

export const Container = ({ children, style, padding = 16 }: Props) => {
  const containerStyle: ViewStyle = {
    padding,
    ...style,
  };

  return <View style={containerStyle}>{children}</View>;
};
