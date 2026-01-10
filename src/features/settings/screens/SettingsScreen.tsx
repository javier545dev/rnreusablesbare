import { View } from "react-native";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { useColorScheme } from "@/core/hooks/use-color-scheme";

export default function SettingsScreen() {
  const { toggleColorScheme, colorScheme } = useColorScheme();

  return (
    <View className="flex-1 justify-center items-center gap-6 bg-background">
      <Text className="text-xl font-bold">Settings</Text>
      <Text>Current Theme: {colorScheme.toUpperCase()}</Text>

      <Button onPress={toggleColorScheme} variant="default">
        <Text>Toggle Theme</Text>
      </Button>
    </View>
  );
}
