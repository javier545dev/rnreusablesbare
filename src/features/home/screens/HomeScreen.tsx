import { useNavigation } from '@react-navigation/native'
import { ScrollView, View } from 'react-native'
import { GlassInfoCard } from '@/components/shared/GlassInfoCard'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Text } from '@/components/ui/text'
import { ROUTES } from '@/core/constants'
import type { MainStackNavigation } from '@/types/navigation'

export default function HomeScreen() {
  const navigation = useNavigation<MainStackNavigation>()

  return (
    <ScrollView className="flex-1 bg-background" contentContainerClassName="p-6 pt-12">
      <View className="items-center gap-6">
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

        <View className="w-full mt-4">
          <Text className="text-lg font-bold mb-4">Features Overview</Text>
          <GlassInfoCard
            index={1}
            title="Glass Effects"
            description="Native blur implementation with multiple material types and real-time intensity control."
          />
          <GlassInfoCard
            index={2}
            title="Liquid UI"
            description="Fluid glass surfaces that merge and react using advanced iOS native shaders."
          />
          <GlassInfoCard
            index={3}
            title="Performance"
            description="Optimized with Reanimated 4 and Uniwind for build-time style generation."
          />
        </View>
      </View>
    </ScrollView>
  )
}
