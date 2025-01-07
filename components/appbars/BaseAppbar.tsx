import { ThemedText } from "@/components/ThemedText";
import { StyleSheet, View } from "react-native";

interface Props {
  title: string;
  leftAction?: JSX.Element;
  rightAction?: JSX.Element;
}

export const BaseAppbar = ({ leftAction, title, rightAction }: Props) => {
  return (
    <View style={styles.appBar}>
      <View style={styles.leftActions}>
        {leftAction}
        <ThemedText style={styles.title}>{title}</ThemedText>
      </View>
      <View>{rightAction ? rightAction : <ThemedText></ThemedText>}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingVertical: 18,
    marginBottom: 18,
    width: "100%",
    backgroundColor: "white",
    position: "sticky",
  },
  leftActions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#353636",
  },
});
