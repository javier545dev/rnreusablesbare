import { useNavigation, useRoute } from '@react-navigation/native'
import { View } from 'react-native'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'

export default function DetailsScreen() {
  const route = useRoute()
  const navigation = useNavigation()

  return (
    <View className="flex-1 justify-center items-center gap-6 bg-background">
      <Text className="text-xl font-bold">Details Screen</Text>
      <Text className="text-muted-foreground text-center">Route Name: {route.name}</Text>
      <Button variant="ghost" onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </Button>
    </View>
  )
}
