import {
  BlurSwitch as NativeBlurSwitch,
  BlurView as NativeBlurView,
  LiquidGlassContainer as NativeLiquidGlassContainer,
  LiquidGlassView as NativeLiquidGlassView
} from '@sbaiahmed1/react-native-blur'
import { withUniwind } from 'uniwind'

export const BlurView = withUniwind(NativeBlurView)
export const BlurSwitch = withUniwind(NativeBlurSwitch)
export const LiquidGlassView = withUniwind(NativeLiquidGlassView)
export const LiquidGlassContainer = withUniwind(NativeLiquidGlassContainer)
