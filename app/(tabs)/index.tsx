import { Image, StyleSheet, Platform, ScrollView, FlatList } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Button, FAB, SearchBar } from "@rneui/themed";
import { BaseAppbar } from "@/components/appbars/BaseAppbar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Octicons } from "@expo/vector-icons";
import { useState } from "react";
import { GameItem } from "@/components/GameItem/GameItem";

export interface GameListItem {
  id: number;
  title: string;
  lastPlayed: string;
  img?: string;
  plays: number;
}

const listData: GameListItem[] = [
  {
    id: 1,
    title: "Harmonies",
    lastPlayed: "2024-02-12",
    img: "https://cf.geekdo-images.com/A_XP2_VN3ugyqPhezowB_w__itemrep/img/wGng6fVAYRI5NKBX6x-pksZKJGI=/fit-in/246x300/filters:strip_icc()/pic8026369.png",
    plays: 1,
  },
  {
    id: 2,
    title: "SETI: Search for Extraterrestrial Intelligence Intelligence",
    lastPlayed: "2024-02-16",
    img: "https://cf.geekdo-images.com/_BUXOVRDU9g_eRwgpR5ZZw__itemrep/img/akn-Silkr3votqHnRyacw5b1YsM=/fit-in/246x300/filters:strip_icc()/pic8160466.jpg",
    plays: 15,
  },
  {
    id: 3,
    title: "Harmonies",
    lastPlayed: "2024-02-12",
    img: "https://cf.geekdo-images.com/A_XP2_VN3ugyqPhezowB_w__itemrep/img/wGng6fVAYRI5NKBX6x-pksZKJGI=/fit-in/246x300/filters:strip_icc()/pic8026369.png",
    plays: 1,
  },
  {
    id: 4,
    title: "SETI: Search for Extraterrestrial Intelligence Intelligence",
    lastPlayed: "2024-02-16",
    img: "",
    plays: 15,
  },
  {
    id: 5,
    title: "SETI: Search for Extraterrestrial Intelligence Intelligence",
    lastPlayed: "2024-02-16",
    img: "",
    plays: 15,
  },
];

export default function HomeScreen() {
  const [search, setSearch] = useState("");
  const [data] = useState(listData);
  const [filteredData, setFilteredData] = useState(listData);

  const updateSearch = (searchText: string) => {
    setSearch(searchText);
    setFilteredData(data.filter((item) => item.title.includes(searchText)));
  };

  return (
    <SafeAreaView>
      <BaseAppbar
        leftAction={<Octicons name="home" size={24} />}
        title="Title"
        rightAction={<Octicons name="diff-added" size={24} />}
      />
      <FAB icon={{ name: "add", color: "white" }} color="green" placement="right" />
      <SearchBar placeholder="Search games" onChangeText={updateSearch} value={search} />
      <ThemedText>Search Result: {search}</ThemedText>
      <FlatList
        data={filteredData}
        renderItem={({ item, index }) => <GameItem gameData={item} key={index} />}
      />

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{" "}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: "cmd + d",
              android: "cmd + m",
              web: "F12",
            })}
          </ThemedText>{" "}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{" "}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{" "}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{" "}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{" "}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
      <Button title={"Hey"} type="outline" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
