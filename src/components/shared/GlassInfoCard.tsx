import { useEffect } from 'react'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring
} from 'react-native-reanimated'
import { Text } from '@/components/ui/text'
import { BlurView } from '@/components/uniwind/uniwind-components'
import { cn } from '@/core/utils/cn'

interface GlassInfoCardProps {
  title: string
  description: string
  index?: number
  className?: string
}

export function GlassInfoCard({ title, description, index = 0, className }: GlassInfoCardProps) {
  const opacity = useSharedValue(0)
  const translateY = useSharedValue(20)

  useEffect(() => {
    opacity.value = withDelay(index * 100, withSpring(1))
    translateY.value = withDelay(index * 100, withSpring(0))
  }, [index, opacity, translateY])

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }]
  }))

  return (
    <Animated.View style={animatedStyle}>
      <BlurView
        blurType="regular"
        blurAmount={30}
        className={cn('p-5 rounded-3xl border border-white/20 overflow-hidden mb-4', className)}
      >
        <Text className="text-xl font-bold text-white mb-2">{title}</Text>
        <Text className="text-sm text-white/70 leading-5">{description}</Text>
      </BlurView>
    </Animated.View>
  )
}
