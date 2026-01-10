import {
  BottomTabBar,
  type BottomTabBarProps,
  type BottomTabHeaderProps,
} from "@react-navigation/bottom-tabs";
import { getHeaderTitle } from "@react-navigation/elements";
import { useState } from "react";
import {
  type LayoutChangeEvent,
  useWindowDimensions,
  View,
} from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useScrollControl } from "@/core/contexts/ScrollContext";
import { useColorScheme } from "@/core/hooks/use-color-scheme";
import { HeaderGlassBackground } from "./GlassBackgrounds";

export const AnimatedTabBar = (props: BottomTabBarProps) => {
  const { translateY } = useScrollControl();
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: withTiming(translateY.value, { duration: 300 }) },
      ],
    };
  });

  return (
    <Animated.View
      style={[
        animatedStyle,
        { position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 1 },
      ]}
    >
      <BottomTabBar {...props} />
    </Animated.View>
  );
};

export const AnimatedHeaderTitle = ({
  title,
  tintColor,
}: {
  title: string;
  tintColor?: string;
}) => {
  const { translateY } = useScrollControl();
  const { width } = useWindowDimensions();
  const [textWidth, setTextWidth] = useState(0);

  const onLayout = (e: LayoutChangeEvent) => {
    setTextWidth(e.nativeEvent.layout.width);
  };

  const translationToLeft = 16 + textWidth / 2 - width / 2;

  const animatedStyle = useAnimatedStyle(() => {
    if (textWidth === 0) return { opacity: 0 };

    const targetX = interpolate(
      translateY.value,
      [0, 100],
      [0, translationToLeft],
      "clamp",
    );

    const scale = interpolate(translateY.value, [0, 100], [1, 0.7], "clamp");

    return {
      opacity: 1,
      transform: [
        { translateX: withTiming(targetX, { duration: 300 }) },
        { scale: withTiming(scale, { duration: 300 }) },
      ],
    };
  });

  return (
    <Animated.Text
      onLayout={onLayout}
      style={[
        animatedStyle,
        {
          fontSize: 18,
          color: tintColor,
          fontWeight: "bold",
        },
      ]}
      numberOfLines={1}
    >
      {title}
    </Animated.Text>
  );
};

export const AnimatedHeader = ({ options, route }: BottomTabHeaderProps) => {
  const insets = useSafeAreaInsets();
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";
  const HEADER_HEIGHT = 44;
  const title = getHeaderTitle(options, route.name);

  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        marginTop: insets.top,
        height: HEADER_HEIGHT,
        justifyContent: "center",
        alignItems: "center",
        overflow: "visible",
      }}
    >
      <HeaderGlassBackground blurType={isDark ? "extraDark" : "regular"} />
      <AnimatedHeaderTitle title={title} tintColor={options.headerTintColor} />
    </View>
  );
};
