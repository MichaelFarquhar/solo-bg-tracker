import React from "react";
import { View, ViewStyle, useWindowDimensions } from "react-native";

type SpacerSize = "xs" | "sm" | "md" | "lg" | "xl";

interface Props {
  size?: SpacerSize;
  style?: ViewStyle;
  show?: boolean;
  hideOnMobile?: boolean;
  hideOnTablet?: boolean;
  hideOnDesktop?: boolean;
}

const SPACER_SIZES: Record<SpacerSize, number> = {
  xs: 8,
  sm: 16,
  md: 24,
  lg: 32,
  xl: 40,
};

export const Spacer = ({
  size = "md",
  show = true,
  hideOnMobile = false,
  hideOnTablet = false,
  hideOnDesktop = false,
  style,
}: Props) => {
  const { width: screenWidth } = useWindowDimensions();

  const isMobile = screenWidth < 768;
  const isTablet = screenWidth >= 768 && screenWidth < 1024;
  const isDesktop = screenWidth >= 1024;

  if (!show) return null;
  if (hideOnMobile && isMobile) return null;
  if (hideOnTablet && isTablet) return null;
  if (hideOnDesktop && isDesktop) return null;

  const spacerStyle: ViewStyle = {
    height: SPACER_SIZES[size],
    width: "100%",
    ...style,
  };

  return <View style={spacerStyle} />;
};
