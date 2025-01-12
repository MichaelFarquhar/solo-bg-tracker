import { StyleSheet, Image, Platform } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { SafeAreaView } from "react-native-safe-area-context";
import { AlertBox } from "@/components/AlertBox";
import { Spacer } from "@/components/layout/Spacer";
import { Container } from "@/components/layout/Container";
import { FlexView } from "@/components/layout/FlexView";
import { Button } from "@/components/Button";

export default function TabFourProfile() {
  return (
    <SafeAreaView>
      <Container>
        <ThemedText type="title">Profile Page</ThemedText>
        <Spacer size="md" />
        <AlertBox text="Profile functionality is currently not implemented." />

        <Spacer size="xl" />
        <ThemedText type="defaultSemiBold" style={{ textTransform: "uppercase" }}>
          Import / Export Data
        </ThemedText>
        <Spacer size="sm" />
        <FlexView>
          <Button label="Import Data" onPress={() => null} />
          <Button label="Export Data" onPress={() => null} />
        </FlexView>
      </Container>
    </SafeAreaView>
  );
}
