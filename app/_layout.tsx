import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { Suspense, useEffect } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import { ActivityIndicator } from "react-native";
import { openDatabaseSync, SQLiteProvider } from "expo-sqlite";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import migrations from "../db/drizzle/migrations";
import { useDrizzleStudio } from "expo-drizzle-studio-plugin";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

// Database configuration
const DB_NAME = "solo_bg_tracker.db";
const expoDB = openDatabaseSync(DB_NAME);
const db = drizzle(expoDB);

export default function RootLayout() {
  const colorScheme = useColorScheme();
  useDrizzleStudio(expoDB);

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });
  const { success, error } = useMigrations(db, migrations);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Suspense fallback={<ActivityIndicator size="large" />}>
        <SQLiteProvider databaseName={DB_NAME} options={{ enableChangeListener: true }} useSuspense>
          <Stack>
            <Stack.Screen
              name="(tabs)"
              options={{ headerShown: false, headerShadowVisible: true }}
            />
            <Stack.Screen name="games" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
        </SQLiteProvider>
      </Suspense>
      <StatusBar style="auto" backgroundColor="transparent" translucent />
    </ThemeProvider>
  );
}
