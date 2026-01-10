import { useState } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { Text } from "@/components/ui/text";
import {
  LiquidGlassContainer,
  LiquidGlassView,
} from "@/components/uniwind/uniwind-components";
import { DEMO_IMAGES, glassColors } from "@/core/constants";

export default function LiquidGlassScreen() {
  const [currentImageIndex, setCurrentImageIndex] = useState(2);
  const [selectedGlassType, setSelectedGlassType] = useState<
    "clear" | "regular"
  >("clear");
  const [glassTintColor, setGlassTintColor] = useState("#007AFF");
  const [glassOpacity, setGlassOpacity] = useState(0.8);
  const [containerSpacing, setContainerSpacing] = useState(20);

  const translateX = useSharedValue(0);

  const animateCirclesCloser = () => {
    translateX.value = withSequence(
      withTiming(-50, { duration: 2000 }),
      withTiming(30, { duration: 2000 }),
    );
  };

  const animatedCircleStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const cycleBackground = () => {
    setCurrentImageIndex((prev) => (prev + 1) % DEMO_IMAGES.length);
  };

  return (
    <ImageBackground
      source={{ uri: DEMO_IMAGES[currentImageIndex] }}
      className="flex-1"
      resizeMode="cover"
    >
      <ScrollView contentContainerClassName="px-6 pb-24 pt-12">
        <View className="p-5">
          <Text className="text-2xl font-bold text-white mb-4 shadow-md">
            Liquid Glass Effects
          </Text>
          <Text className="text-sm text-white/60 text-center mb-5 italic">
            ✨ Available on iOS 26+ • Fallback to blur on older versions
          </Text>

          {/* Main Liquid Glass Demo */}
          <View className="mb-8">
            <LiquidGlassView
              glassType={selectedGlassType}
              glassTintColor={glassTintColor}
              glassOpacity={glassOpacity}
              className="p-5 min-h-37 justify-center items-center rounded-[20px]"
              reducedTransparencyFallbackColor="rgba(255, 255, 255, 0.9)"
            >
              <Text className="text-2xl font-bold text-black mb-2 text-center">
                🌊 Liquid Glass
              </Text>
              <Text className="text-sm text-black/80 mb-1 text-center">
                Type: {selectedGlassType}
              </Text>
              <Text className="text-sm text-black/80 mb-1 text-center">
                Tint: {glassTintColor}
              </Text>
              <Text className="text-sm text-black/80 mb-1 text-center">
                Opacity: {Math.round(glassOpacity * 100)}%
              </Text>
              <Text className="text-sm text-black/80 mb-1 text-center">
                Radius: 20px
              </Text>

              <TouchableOpacity
                className="mt-4 px-5 py-2 rounded-2xl border border-white/30"
                style={{ backgroundColor: glassTintColor + "40" }}
                onPress={cycleBackground}
              >
                <Text className="text-black font-semibold text-center">
                  Change Background
                </Text>
              </TouchableOpacity>
            </LiquidGlassView>
          </View>

          {/* Glass Type Selector */}
          <View className="mb-6">
            <LiquidGlassView
              isInteractive={false}
              glassType="clear"
              glassTintColor="#000000"
              glassOpacity={0.3}
              className="p-4 rounded-xl mb-4 items-center"
            >
              <Text className="text-lg font-bold text-white text-center">
                Glass Types
              </Text>
            </LiquidGlassView>

            <View className="flex-row justify-around">
              {["clear", "regular"].map((glassType) => (
                <TouchableOpacity
                  key={glassType}
                  onPress={() =>
                    setSelectedGlassType(glassType as "clear" | "regular")
                  }
                  className="flex-1 mx-1"
                >
                  <LiquidGlassView
                    glassType={glassType as "clear" | "regular"}
                    glassTintColor={glassTintColor}
                    glassOpacity={0.6}
                    className={`p-4 rounded-2xl items-center border-2 ${
                      selectedGlassType === glassType
                        ? "border-primary"
                        : "border-transparent"
                    }`}
                  >
                    <Text className="text-base font-bold text-black mb-1">
                      {glassType === "clear" ? "🔮 Clear" : "💎 Regular"}
                    </Text>
                    <Text className="text-xs text-black/60 capitalize">
                      {glassType}
                    </Text>
                  </LiquidGlassView>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Glass Tint Color Selector */}
          <View className="mb-6">
            <LiquidGlassView
              glassType="clear"
              glassTintColor="#000000"
              glassOpacity={0.3}
              className="p-4 rounded-xl mb-4 items-center"
            >
              <Text className="text-lg font-bold text-white text-center">
                Glass Tint Colors
              </Text>
            </LiquidGlassView>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {glassColors.map((colorItem) => (
                <TouchableOpacity
                  key={colorItem.name}
                  onPress={() => setGlassTintColor(colorItem.color)}
                  className="mx-1"
                >
                  <LiquidGlassView
                    glassType={selectedGlassType}
                    glassTintColor={colorItem.color}
                    glassOpacity={0.8}
                    className={`w-20 h-20 rounded-2xl justify-center items-center border-2 ${
                      glassTintColor === colorItem.color
                        ? "border-primary"
                        : "border-transparent"
                    }`}
                  >
                    <Text className="text-2xl mb-1">{colorItem.emoji}</Text>
                    <Text className="text-xs font-semibold text-black text-center">
                      {colorItem.name}
                    </Text>
                  </LiquidGlassView>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Glass Opacity Slider */}
          <View className="mb-6">
            <LiquidGlassView
              glassType="clear"
              glassTintColor="#000000"
              glassOpacity={0.3}
              className="p-4 rounded-xl mb-4 items-center"
            >
              <Text className="text-lg font-bold text-white text-center">
                Glass Opacity
              </Text>
            </LiquidGlassView>

            <View className="flex-row justify-around">
              {[0.2, 0.4, 0.6, 0.8, 1.0].map((opacity) => (
                <TouchableOpacity
                  key={opacity}
                  onPress={() => setGlassOpacity(opacity)}
                  className="flex-1 mx-1"
                >
                  <LiquidGlassView
                    glassType={selectedGlassType}
                    glassTintColor={glassTintColor}
                    glassOpacity={opacity}
                    className={`p-4 rounded-2xl items-center border-2 ${
                      glassOpacity === opacity
                        ? "border-primary"
                        : "border-transparent"
                    }`}
                  >
                    <Text className="text-sm font-bold text-black">
                      {Math.round(opacity * 100)}%
                    </Text>
                  </LiquidGlassView>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Liquid Glass Container with Spacing */}
          <View className="mb-6">
            <LiquidGlassView
              glassType="clear"
              glassTintColor="#000000"
              glassOpacity={0.3}
              className="p-4 rounded-xl mb-4 items-center"
            >
              <Text className="text-lg font-bold text-white text-center">
                🌊 Liquid Glass Container
              </Text>
            </LiquidGlassView>

            <LiquidGlassContainer
              spacing={containerSpacing}
              className="min-h-50 mb-4 flex-row justify-center items-center"
            >
              <LiquidGlassView
                glassType="clear"
                glassTintColor="#000000"
                glassOpacity={0.3}
                className="w-30 h-30 p-5 items-center justify-center rounded-full"
              >
                <Text className="text-lg font-bold text-white text-center">
                  Circle 1
                </Text>
              </LiquidGlassView>
              <Animated.View style={animatedCircleStyle}>
                <LiquidGlassView
                  glassType="clear"
                  glassTintColor="#000000"
                  glassOpacity={0.3}
                  className="w-30 h-30 p-5 items-center justify-center rounded-full"
                >
                  <Text className="text-lg font-bold text-white text-center">
                    Circle 2
                  </Text>
                </LiquidGlassView>
              </Animated.View>
            </LiquidGlassContainer>

            {/* Animate Button */}
            <TouchableOpacity
              className="bg-primary/80 py-4 px-6 rounded-2xl items-center my-4 border-2 border-primary"
              onPress={animateCirclesCloser}
            >
              <Text className="text-white text-base font-bold">
                ✨ Animate Circles
              </Text>
            </TouchableOpacity>

            {/* Spacing Selector */}
            <View className="flex-row justify-around mt-2">
              {[0, 10, 20, 30, 40].map((spacing) => (
                <TouchableOpacity
                  key={spacing}
                  onPress={() => setContainerSpacing(spacing)}
                  className="flex-1 mx-1"
                >
                  <View
                    className={`p-3 rounded-xl items-center border-2 ${
                      containerSpacing === spacing
                        ? "bg-primary/20 border-primary"
                        : "bg-white/20 border-transparent"
                    }`}
                  >
                    <Text className="text-xs font-bold text-white">
                      {spacing}px
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Practical Liquid Glass Examples */}
          <View className="mt-5">
            <Text className="text-2xl font-bold text-white mb-4 shadow-md">
              Practical Examples
            </Text>

            {/* Interactive Card */}
            <View className="mb-5 rounded-[20px] h-75 overflow-hidden">
              <ImageBackground
                source={{
                  uri: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
                }}
                className="flex-1 justify-end"
              >
                <LiquidGlassView
                  glassType="regular"
                  glassTintColor="#FFFFFF"
                  glassOpacity={0}
                  className="p-5 min-h-30"
                >
                  <Text className="text-xl font-bold text-black mb-2">
                    Interactive Glass Card
                  </Text>
                  <Text className="text-sm text-black/80 mb-4 leading-5">
                    Liquid glass creates beautiful, interactive surfaces that
                    respond to touch and light.
                  </Text>
                  <View className="flex-row gap-2">
                    <TouchableOpacity className="px-4 py-2 rounded-xl bg-black/10 border border-white/30">
                      <Text className="text-black font-semibold text-sm">
                        Action
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="px-4 py-2 rounded-xl bg-black/10 border border-white/30">
                      <Text className="text-black font-semibold text-sm">
                        Share
                      </Text>
                    </TouchableOpacity>
                  </View>
                </LiquidGlassView>
              </ImageBackground>
            </View>

            {/* Glass Modal */}
            <View className="mb-5 rounded-[20px] h-45 overflow-hidden">
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1560703650-ef3e0f254ae0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
                }}
                className="absolute w-full h-full"
              />
              <LiquidGlassView
                glassType="regular"
                glassTintColor="#007AFF"
                glassOpacity={0.2}
                className="flex-1 justify-center items-center p-5"
              >
                <Text className="text-2xl font-bold text-white mb-2 text-center">
                  🌊 Liquid Glass Modal
                </Text>
                <Text className="text-sm text-white text-center mb-5 leading-5">
                  Experience the fluid, dynamic nature of liquid glass effects.
                </Text>
                <TouchableOpacity className="px-6 py-3 rounded-2xl bg-white/20 border border-white/30">
                  <Text className="text-white font-bold text-base">
                    Continue
                  </Text>
                </TouchableOpacity>
              </LiquidGlassView>
            </View>
          </View>

          {/* iOS Version Info */}
          <View className="mt-5">
            <LiquidGlassView
              glassType="clear"
              glassTintColor="#FF9500"
              glassOpacity={0.5}
              className="p-5 rounded-2xl"
            >
              <Text className="text-lg font-bold text-black mb-2 text-center">
                📱 iOS 26+ Required
              </Text>
              <Text className="text-sm text-black/80 text-center leading-5">
                Liquid glass effects are only available on iOS 26 and later. On
                older versions, the component automatically falls back to
                regular blur effects.
              </Text>
            </LiquidGlassView>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
