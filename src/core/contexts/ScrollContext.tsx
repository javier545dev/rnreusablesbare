import { createContext, useContext } from 'react'
import { type SharedValue, useSharedValue } from 'react-native-reanimated'

interface ScrollContextType {
  translateY: SharedValue<number>
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined)

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const translateY = useSharedValue(0)
  return <ScrollContext.Provider value={{ translateY }}>{children}</ScrollContext.Provider>
}

export const useScrollControl = () => {
  const context = useContext(ScrollContext)
  if (!context) {
    throw new Error('useScrollControl must be used within a ScrollProvider')
  }
  return context
}
