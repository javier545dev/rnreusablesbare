import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import type { ROUTES } from '@/core/constants'

type StackNavigation = {
  [ROUTES.HOME_TAB]: undefined
  [ROUTES.HOME]: undefined
  [ROUTES.SETTINGS]: undefined
  [ROUTES.DETAILS]: undefined
  [ROUTES.GLASS]: undefined
  [ROUTES.LIQUID]: undefined
}

export type MainStackNavigation = NativeStackNavigationProp<StackNavigation>

export type RootTabParamList = {
  [ROUTES.HOME]: undefined
  [ROUTES.PROFILE]: undefined
  [ROUTES.SETTINGS]: undefined
}
