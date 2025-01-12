import { Button } from "@/components/Button";
import { BGGIcon } from "@/components/svgs/BGGIcon";
import { Octicons } from "@expo/vector-icons";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface NewGameForm {
  title: string;
  image: string;
  winCondition: "score" | "winloss";
}

interface Props {}

const NewGame = ({}: Props) => {
  const openModal = () => {};

  return (
    <SafeAreaView>
      <View style={styles.buttonContainer}>
        <Button
          icon={<BGGIcon width={24} height={24} fill={"white"} />}
          label="Search BoardGameGeek"
          onPress={openModal}
          style={styles.bggIconStyle}
          alignSelf="stretch"
        />
      </View>

      {/* Form */}
      <View style={styles.titleRow}>
        <Image style={styles.image} source={{ uri: "https://picsum.photos/50" }} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 12,
  },
  bggIconStyle: {
    backgroundColor: "#FF5100", //BGG Logo Color
    color: "white",
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default NewGame;
