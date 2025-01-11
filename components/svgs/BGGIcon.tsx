import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

export const BGGIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" {...props} width={props.width ?? 50} height={props.height ?? 50}>
    <Path d="m19.7 4.44-2.38.64L19.65 0 4.53 5.56l.83 6.67-1.4 1.34L8.12 24l8.85-3.26 3.07-7.22-1.32-1.27.98-7.81Z" />
  </Svg>
);
