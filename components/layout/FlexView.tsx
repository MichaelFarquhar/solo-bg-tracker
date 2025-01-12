import React from "react";
import { View, ViewStyle } from "react-native";

interface Props {
  children: React.ReactNode;
  style?: ViewStyle;
  direction?: "row" | "column";
  align?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  gap?: number;
  wrap?: boolean;
}

export const FlexView = ({
  children,
  style,
  direction = "row",
  align = "center",
  justify,
  gap = 8,
  wrap = false,
}: Props) => {
  const flexStyle: ViewStyle = {
    flexDirection: direction,
    alignItems: align,
    gap,
    ...(justify && { justifyContent: justify }),
    ...(wrap && { flexWrap: "wrap" }),
    ...style,
  };

  return <View style={flexStyle}>{children}</View>;
};
