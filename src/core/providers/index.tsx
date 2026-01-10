import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ScrollProvider } from "@/core/contexts/ScrollContext";
import { ColorSchemeProvider } from "@/core/hooks/use-color-scheme";
import { Uniwind } from "@/core/providers/Uniwind";

interface AppProvidersProps {
  children: React.ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <Uniwind>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider>
          <ScrollProvider>
            <ColorSchemeProvider>{children}</ColorSchemeProvider>
          </ScrollProvider>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </Uniwind>
  );
}
