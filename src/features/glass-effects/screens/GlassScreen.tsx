import { BlurSwitch, type BlurType } from "@sbaiahmed1/react-native-blur";
import { useState } from "react";
import {
  ImageBackground as NativeImageBackground,
  Text,
  View,
} from "react-native";
import Animated from "react-native-reanimated";
import { BlurView } from "@/components/uniwind/uniwind-components";
import { BLUR_VIEW_SWITCHES, DEMO_IMAGES } from "@/core/constants";
import { useScrollHandler } from "@/core/hooks/use-scroll-handler";

const BLUR_TYPES = [
  { name: "X Light", type: "xlight" },
  { name: "Light", type: "light" },
  { name: "Dark", type: "dark" },
  { name: "Regular", type: "regular" },
  { name: "Prominent", type: "prominent" },
  { name: "Extra Dark", type: "extraDark" },
  { name: "System Material", type: "systemMaterial" },
  { name: "System Thick Material", type: "systemThickMaterial" },
  { name: "System Chrome Material", type: "systemChromeMaterial" },
  {
    name: "System Ultra Thin Material Light",
    type: "systemUltraThinMaterialLight",
  },
  { name: "System Thin Material Light", type: "systemThinMaterialLight" },
  { name: "System Material Light", type: "systemMaterialLight" },
  { name: "System Thick Material Light", type: "systemThickMaterialLight" },
  { name: "System Chrome Material Light", type: "systemChromeMaterialLight" },
  {
    name: "System Ultra Thin Material Dark",
    type: "systemUltraThinMaterialDark",
  },
  { name: "System Thin Material Dark", type: "systemThinMaterialDark" },
  { name: "System Material Dark", type: "systemMaterialDark" },
  { name: "System Thick Material Dark", type: "systemThickMaterialDark" },
  { name: "System Chrome Material Dark", type: "systemChromeMaterialDark" },
];

export default function ExamplesScreen() {
  const [switchStates, setSwitchStates] = useState<Record<number, boolean>>({});
  const scrollHandler = useScrollHandler();

  const toggleSwitch = (id: number) => {
    setSwitchStates((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <NativeImageBackground
      source={{ uri: DEMO_IMAGES[1] }}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <Animated.ScrollView
        contentContainerStyle={{ padding: 20, paddingBottom: 100 }}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        <Text className="text-3xl font-bold text-white text-center mt-10 mb-5">
          Blur Examples
        </Text>

        <Text className="text-xl font-bold text-white mt-5 mb-4">
          Blur Switch
        </Text>
        <BlurView
          blurType="dark"
          blurAmount={60}
          className="rounded-2xl p-4 mb-5 overflow-hidden"
        >
          {BLUR_VIEW_SWITCHES.map((item) => (
            <View
              key={item.id}
              className="flex-row justify-between items-center py-3 border-b border-white/10"
            >
              <Text className="text-lg font-semibold text-white">
                {item.label}
              </Text>
              <BlurSwitch
                value={switchStates[item.id]}
                onValueChange={() => toggleSwitch(item.id)}
                blurAmount={item.blurAmount}
                trackColor={{ true: item.color }}
                disabled={item.disabled}
              />
            </View>
          ))}
        </BlurView>

        <Text className="text-xl font-bold text-white mt-5 mb-4">
          Blur Types
        </Text>

        <View className="flex-row flex-wrap justify-between mb-5">
          {BLUR_TYPES.map((blur) => (
            <BlurView
              key={blur.type}
              blurType={blur.type as BlurType}
              blurAmount={50}
              className="w-full p-4 mb-3 rounded-xl min-h-25 justify-center items-center"
            >
              <Text className="text-base font-bold text-white mb-1">
                {blur.name}
              </Text>
              <Text className="text-xs text-white/80">
                blurType="{blur.type}"
              </Text>
            </BlurView>
          ))}
        </View>

        <Text className="text-xl font-bold text-white mt-5 mb-4">
          Blur Intensity
        </Text>

        {[20, 40, 60, 80, 100].map((amount) => (
          <BlurView
            key={amount}
            blurType="light"
            blurAmount={amount}
            className="p-5 mb-3 rounded-xl overflow-hidden w-full items-center"
          >
            <Text className="text-base font-semibold text-white text-center">
              Blur Amount: {amount}
            </Text>
          </BlurView>
        ))}
      </Animated.ScrollView>
    </NativeImageBackground>
  );
}
