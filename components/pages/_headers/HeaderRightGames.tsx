import { Octicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

export const HeaderRightGames = () => {
  return (
    <View style={styles.container}>
      <Octicons size={24} name="filter" color={"white"} />
      <Octicons size={24} name="diff-added" color={"white"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 26,
    marginRight: 16,
  },
});
