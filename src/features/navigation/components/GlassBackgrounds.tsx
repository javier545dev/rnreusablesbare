import { type BlurType, BlurView } from '@sbaiahmed1/react-native-blur'
import { type StyleProp, StyleSheet, type ViewStyle } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface GlassBackgroundProps {
  blurType?: BlurType
  style?: StyleProp<ViewStyle>
}

export const HeaderGlassBackground = ({ blurType = 'light', style }: GlassBackgroundProps) => {
  const insets = useSafeAreaInsets()

  return (
    <BlurView
      blurType={blurType}
      blurAmount={60}
      style={[
        StyleSheet.absoluteFill,
        {
          top: -insets.top
        },
        style
      ]}
    />
  )
}

export const TabBarGlassBackground = ({ blurType = 'light', style }: GlassBackgroundProps) => {
  const insets = useSafeAreaInsets()

  return (
    <BlurView
      blurType={blurType}
      blurAmount={60}
      style={[
        StyleSheet.absoluteFill,
        {
          bottom: -insets.bottom
        },
        style
      ]}
    />
  )
}
