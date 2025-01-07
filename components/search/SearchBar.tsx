import { searchAtom } from "@/atoms/searchAtom";
import { useAtom } from "jotai";
import { SearchBar as SearchBarRNE } from "@rneui/themed";
import { StyleSheet } from "react-native";

interface Props {
  placeholder?: string;
  onSearch?: () => void;
}

export const SearchBar = ({ placeholder, onSearch }: Props) => {
  const [search, setSearch] = useAtom(searchAtom);

  const onChangeText = (searchText: string) => {
    setSearch(searchText);
    onSearch?.();
  };

  return (
    <SearchBarRNE
      placeholder={placeholder ?? "Search"}
      onChangeText={onChangeText}
      value={search}
      round
      containerStyle={styles.searchBar}
    />
  );
};

const styles = StyleSheet.create({
  searchBar: {
    paddingHorizontal: 12,
    backgroundColor: "transparent",
  },
});
