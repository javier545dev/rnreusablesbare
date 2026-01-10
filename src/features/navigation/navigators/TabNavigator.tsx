import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, Settings, User } from 'lucide-react-native'
import { ROUTES } from '@/core/constants'
import { useColorScheme } from '@/core/hooks/use-color-scheme'
import { NAV_THEME } from '@/core/theme'
import GlassScreen from '@/features/glass-effects/screens/GlassScreen'
import HomeScreen from '@/features/home/screens/HomeScreen'
import SettingsScreen from '@/features/settings/screens/SettingsScreen'
import type { RootTabParamList } from '@/types/navigation'
import { AnimatedHeader, AnimatedTabBar } from '../components/AnimatedNavigation'
import { TabBarGlassBackground } from '../components/GlassBackgrounds'

const Tab = createBottomTabNavigator<RootTabParamList>()

export default function TabNavigator() {
  const { colorScheme } = useColorScheme()
  const isDark = colorScheme === 'dark'

  const theme = isDark ? NAV_THEME.dark : NAV_THEME.light

  return (
    <Tab.Navigator
      tabBar={(props) => <AnimatedTabBar {...props} />}
      screenOptions={{
        header: (props) => <AnimatedHeader {...props} />,
        headerShown: true,
        headerTransparent: true,
        headerTitleAlign: 'center',
        headerTintColor: theme.colors.text,
        headerTitleStyle: {
          fontWeight: 'bold'
        },
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 95,
          elevation: 0,
          borderTopWidth: 0,
          backgroundColor: 'transparent',
          paddingTop: 10
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginBottom: 0
        },
        tabBarBackground: () => (
          <TabBarGlassBackground blurType={isDark ? 'extraDark' : 'regular'} />
        )
      }}
    >
      <Tab.Screen
        name={ROUTES.HOME}
        component={GlassScreen}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ focused, color }) => (
            <Home size={24} color={color} strokeWidth={focused ? 2.5 : 2} />
          )
        }}
      />

      <Tab.Screen
        name={ROUTES.PROFILE}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ focused, color }) => (
            <User size={24} color={color} strokeWidth={focused ? 2.5 : 2} />
          )
        }}
      />

      <Tab.Screen
        name={ROUTES.SETTINGS}
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Ajustes',
          tabBarIcon: ({ focused, color }) => (
            <Settings size={24} color={color} strokeWidth={focused ? 2.5 : 2} />
          )
        }}
      />
    </Tab.Navigator>
  )
}
