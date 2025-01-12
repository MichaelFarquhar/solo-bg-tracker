import { StyleSheet, FlatList } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { GameItem } from "@/components/GameItem/GameItem";
import { SearchBar } from "@/components/search/SearchBar";
import { useAtomValue } from "jotai";
import { searchAtom } from "@/atoms/searchAtom";
import { SearchResultsText } from "@/components/search/SearchResultsText";

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
  const search = useAtomValue(searchAtom);
  const [data] = useState(listData);
  const [filteredData, setFilteredData] = useState(listData);

  useEffect(() => {
    if (search.trim() === "") {
      setFilteredData(data);
    } else {
      setFilteredData(
        data.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
      );
    }
  }, [search, data]);

  return (
    <SafeAreaView>
      {/* Search Bar and Search Results Text */}
      <SearchBar placeholder="Search games" />
      <SearchResultsText searchText={search} searchData={filteredData} />

      <FlatList
        data={filteredData}
        renderItem={({ item, index }) => <GameItem gameData={item} key={index} />}
      />
    </SafeAreaView>
  );
}
