import {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { useScrollControl } from "@/core/contexts/ScrollContext";

export const useScrollHandler = () => {
  const { translateY } = useScrollControl();
  const lastContentOffset = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      const currentOffset = event.contentOffset.y;
      const diff = currentOffset - lastContentOffset.value;

      if (currentOffset <= 0) {
        translateY.value = 0;
      } else if (diff > 10 && currentOffset > 50) {
        translateY.value = 150;
      } else if (diff < -10) {
        translateY.value = 0;
      }
      lastContentOffset.value = currentOffset;
    },
  });

  return scrollHandler;
};
