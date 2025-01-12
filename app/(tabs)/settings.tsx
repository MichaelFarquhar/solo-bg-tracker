import { StyleSheet, Image, Platform } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabThreeSettings() {
  return (
    <SafeAreaView>
      <ThemedText type="title">Settings Page</ThemedText>
    </SafeAreaView>
  );
}
