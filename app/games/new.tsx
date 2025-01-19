import { Button } from "@/components/elements/Button";
import { FAB } from "@/components/elements/FAB";
import { Container } from "@/components/layout/Container";
import { FlexView } from "@/components/layout/FlexView";
import { Spacer } from "@/components/layout/Spacer";
import { SVGBoardGameGeek } from "@/components/svgs/SVGBoardGameGeek";
import { Ionicons } from "@expo/vector-icons";
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
  const saveGame = () => {};

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Button
          icon={<SVGBoardGameGeek width={24} height={24} fill={"white"} />}
          label="Search BoardGameGeek"
          onPress={openModal}
          style={styles.bggIconStyle}
          alignSelf="stretch"
        />

        <Spacer size="xl" />

        {/* Form */}
        <View style={styles.card}>
          <FlexView gap={12}>
            <Image style={styles.image} source={{ uri: "https://picsum.photos/50" }} />
          </FlexView>
        </View>
      </Container>
      <FAB
        icon={<Ionicons name="checkmark" size={22} color={"white"} />}
        onPress={saveGame}
        style={{ backgroundColor: "green" }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 4,
    padding: 12,
    backgroundColor: "#242424",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  bggIconStyle: {
    backgroundColor: "#FF5100", //BGG Logo Color
    color: "white",
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default NewGame;
