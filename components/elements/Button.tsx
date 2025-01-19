import { ThemedText } from "@/components/ThemedText";
import { StyleSheet, TouchableHighlight, View, ViewStyle } from "react-native";

interface Props {
  label: string;
  icon?: JSX.Element;
  onPress: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  alignSelf?: "stretch" | "flex-start" | "center" | "flex-end";
}

export const Button = ({
  label,
  icon,
  onPress,
  style,
  disabled = false,
  alignSelf = "stretch",
}: Props) => {
  const propStyles: ViewStyle = {
    alignSelf: alignSelf,
  };

  return (
    <TouchableHighlight onPress={onPress} style={[styles.buttonContainer, propStyles]}>
      <View style={[styles.button, style]}>
        {icon ? icon : null}
        <ThemedText style={styles.buttonText}>{label}</ThemedText>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: "auto",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderRadius: 6,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
  },
});
