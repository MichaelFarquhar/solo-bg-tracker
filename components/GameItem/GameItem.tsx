import { GameListItem } from "@/app/(tabs)";
import { Badge } from "@/components/Badge";
import { GameItemImageBackup } from "@/components/GameItem/GameItemImageBackup";
import { ThemedText } from "@/components/ThemedText";
import { StyleSheet, View, Image } from "react-native";

interface Props {
  gameData: GameListItem;
}

export const GameItem = ({ gameData }: Props) => {
  return (
    <View style={styles.gameList}>
      <View style={styles.leftContent}>
        {!gameData.img || gameData.img === "" ? (
          <GameItemImageBackup />
        ) : (
          <Image
            style={styles.img}
            width={50}
            height={50}
            source={{
              uri: gameData.img,
            }}
          />
        )}
        <View style={styles.textContent}>
          <ThemedText style={styles.gameTitle} numberOfLines={1} ellipsizeMode="tail">
            {gameData.title}
          </ThemedText>
          <ThemedText style={styles.gameDate}>Last played: {gameData.lastPlayed}</ThemedText>
        </View>
      </View>
      <Badge text="gameData.plays" />
    </View>
  );
};

const styles = StyleSheet.create({
  gameList: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderTopWidth: 1,
    borderTopColor: "#353636",
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flex: 1, // Allow left content to take available space
    marginRight: 16, // Add spacing between left content and badge
  },
  img: {
    width: 50,
    height: 50,
    objectFit: "cover",
  },
  textContent: {
    flexDirection: "column",
    justifyContent: "center",
    flex: 1, // Allow text content to take available space
    minWidth: 0, // This is crucial for text truncation
  },
  gameTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  gameDate: {
    fontSize: 12,
  },
});
