import type { BlurType } from '@sbaiahmed1/react-native-blur'
import { View, type ViewProps } from 'react-native'
import { BlurView } from '@/components/uniwind/uniwind-components'
import { cn } from '@/core/utils/cn'

interface GlassCardProps extends ViewProps {
  blurType?: BlurType
  blurAmount?: number
  containerClassName?: string
  intensity?: 'low' | 'medium' | 'high'
}

export function GlassCard({
  children,
  blurType = 'regular',
  blurAmount = 50,
  containerClassName,
  intensity = 'medium',
  style,
  ...props
}: GlassCardProps) {
  const intensityMap = {
    low: 20,
    medium: 50,
    high: 80
  }

  return (
    <View
      className={cn('overflow-hidden rounded-3xl border border-white/20', containerClassName)}
      style={style}
      {...props}
    >
      <BlurView
        blurType={blurType}
        blurAmount={intensityMap[intensity] || blurAmount}
        className="absolute"
      />
      <View className="p-5">{children}</View>
    </View>
  )
}
