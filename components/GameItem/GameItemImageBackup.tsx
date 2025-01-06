import { FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

// Randomly select a color based off the Tailwind 900 level colors.
const TAILWIND_900_COLORS = [
  "#7f1d1d", // red-900
  "#7c2d12", // orange-900
  "#78350f", // amber-900
  "#713f12", // yellow-900
  "#365314", // lime-900
  "#14532d", // green-900
  "#064e3b", // emerald-900
  "#134e4a", // teal-900
  "#164e63", // cyan-900
  "#0c4a6e", // sky-900
  "#1e3a8a", // blue-900
  "#312e81", // indigo-900
  "#4c1d95", // purple-900
  "#581c87", // violet-900
  "#701a75", // fuchsia-900
  "#831843", // pink-900
  "#881337", // rose-900
];

// Random Game Related Icon from FontAwesome5
const GAME_ICONS = ["chess", "puzzle-piece", "dice-d20", "dice-d6", "dice"];

export const GameItemImageBackup = () => {
  const randomColor = TAILWIND_900_COLORS[Math.floor(Math.random() * TAILWIND_900_COLORS.length)];
  const randomIcon = GAME_ICONS[Math.floor(Math.random() * GAME_ICONS.length)];

  return (
    <View style={[styles.backupImageContainer, { backgroundColor: randomColor }]}>
      <FontAwesome5 name={randomIcon} size={24} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  backupImageContainer: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: "#ededed",
    alignItems: "center",
    justifyContent: "center",
  },
});
