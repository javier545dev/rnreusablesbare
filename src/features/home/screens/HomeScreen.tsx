import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Text } from '@/components/ui/text'
import { ROUTES } from '@/core/constants'
import type { MainStackNavigation } from '@/types/navigation'

export default function HomeScreen() {
  const navigation = useNavigation<MainStackNavigation>()

  return (
    <View className="flex-1 justify-center items-center gap-6 bg-background p-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
          <CardDescription>Explore the navigation and theme features.</CardDescription>
        </CardHeader>
        <CardContent className="gap-4">
          <Button onPress={() => navigation.navigate(ROUTES.SETTINGS)}>
            <Text>Go to Settings</Text>
          </Button>
          <Button variant="secondary" onPress={() => navigation.navigate(ROUTES.DETAILS)}>
            <Text>Go to Details</Text>
          </Button>
          <Button variant="outline" onPress={() => navigation.navigate(ROUTES.GLASS)}>
            <Text>Check Glass Effect</Text>
          </Button>

          <Button variant="outline" onPress={() => navigation.navigate(ROUTES.LIQUID)}>
            <Text>Check Liquid Effect</Text>
          </Button>
        </CardContent>
      </Card>
    </View>
  )
}
