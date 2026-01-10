import { AppProviders } from '@/core/providers'
import { RootNavigator } from '@/features/navigation/navigators/RootNavigator'

export default function App() {
  return (
    <AppProviders>
      <RootNavigator />
    </AppProviders>
  )
}
