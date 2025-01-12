import { ThemedText } from "@/components/ThemedText";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TextStyle, View, ViewStyle } from "react-native";

interface Props {
  text: string;
  viewStyle?: ViewStyle;
  textStyle?: TextStyle;
}

export const AlertBox = ({ text, viewStyle, textStyle }: Props) => {
  return (
    <View style={[styles.container, viewStyle]}>
      <Ionicons name="information-circle" size={24} color={"white"} />
      <ThemedText style={[styles.text, textStyle]}>{text}</ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 8,
  },
  text: {
    width: "100%",
    flexShrink: 1,
    fontWeight: "500",
  },
});
