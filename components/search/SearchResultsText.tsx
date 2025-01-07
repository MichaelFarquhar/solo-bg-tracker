import { ThemedText } from "@/components/ThemedText";
import { StyleSheet, View } from "react-native";

interface Props {
  searchText: string;
  searchData: any[];
}

export const SearchResultsText = ({ searchText, searchData }: Props) => {
  return (
    <View style={styles.searchResultsContainer}>
      {searchText === "" ? (
        ""
      ) : (
        <ThemedText style={styles.searchResults}>
          {searchData.length}) results for "{searchText}".
        </ThemedText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  searchResultsContainer: {
    paddingTop: 6,
    paddingBottom: 10,
    paddingHorizontal: 14,
  },
  searchResults: {
    fontSize: 14,
    fontWeight: "500",
  },
});
