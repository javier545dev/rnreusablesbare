import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import { enableScreens } from "react-native-screens";
import { ROUTES } from "@/core/constants";
import { useColorScheme } from "@/core/hooks/use-color-scheme";
import { NAV_THEME } from "@/core/theme";
import DetailsScreen from "@/features/details/screens/DetailsScreen";
import GlassScreen from "@/features/glass-effects/screens/GlassScreen";
import LiquidGlassScreen from "@/features/glass-effects/screens/LiquidScreen";
import SettingsScreen from "@/features/settings/screens/SettingsScreen";
import { HeaderGlassBackground } from "../components/GlassBackgrounds";
import TabNavigator from "./TabNavigator";

enableScreens();

const Stack = createNativeStackNavigator();

export function RootNavigator() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";
  return (
    <>
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />
      <NavigationContainer theme={isDark ? NAV_THEME.dark : NAV_THEME.light}>
        <Stack.Navigator
          screenOptions={{
            headerTransparent: true,
            headerTintColor: isDark
              ? NAV_THEME.dark.colors.text
              : NAV_THEME.light.colors.text,
            headerStyle: {
              backgroundColor: "transparent",
            },
            headerBackground: () => (
              <HeaderGlassBackground
                blurType={isDark ? "extraDark" : "regular"}
              />
            ),
          }}
        >
          <Stack.Screen
            name={ROUTES.HOME_TAB}
            component={TabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen name={ROUTES.SETTINGS} component={SettingsScreen} />
          <Stack.Screen name={ROUTES.DETAILS} component={DetailsScreen} />
          <Stack.Screen
            name={ROUTES.GLASS}
            component={GlassScreen}
            options={{
              title: "Glass Integration",
              headerTransparent: true,
              headerBlurEffect: "regular",
              headerStyle: {
                backgroundColor: "transparent",
              },
            }}
          />

          <Stack.Screen
            name={ROUTES.LIQUID}
            component={LiquidGlassScreen}
            options={{
              title: "Liquid Effect",
              headerTransparent: true,
              headerBlurEffect: "regular",
              headerStyle: {
                backgroundColor: "transparent",
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
