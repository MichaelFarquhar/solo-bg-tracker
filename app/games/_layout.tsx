import { Stack } from "expo-router/stack";

export default function GamesLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="new"
        options={{
          headerTitle: "Add New Game",
          headerBackVisible: true,
        }}
      />
    </Stack>
  );
}
