import { useState } from "react";
import { ImageBackground, ScrollView } from "react-native";
import LiquidGlassExample from "@/components/ui/liquid";
import { DEMO_IMAGES } from "@/core/constants";

export default function LiquidGlassScreen() {
  const [currentImageIndex, setCurrentImageIndex] = useState(2);

  const cycleBackground = () => {
    setCurrentImageIndex((prev) => (prev + 1) % DEMO_IMAGES.length);
  };

  return (
    <ImageBackground
      source={{ uri: DEMO_IMAGES[currentImageIndex] }}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <ScrollView
        contentContainerStyle={{
          padding: 20,
          paddingBottom: 100,
          paddingTop: 40,
        }}
      >
        <LiquidGlassExample cycleBackground={cycleBackground} />
      </ScrollView>
    </ImageBackground>
  );
}
