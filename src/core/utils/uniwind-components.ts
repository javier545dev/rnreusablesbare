import { BlurView as NativeBlurView } from "@sbaiahmed1/react-native-blur";
import {
  ImageBackground as NativeImageBackground,
  ScrollView as NativeScrollView,
} from "react-native";
import { withUniwind } from "uniwind";

// Envolvemos componentes de terceros para que soporten className de Uniwind
// Mapeamos props de estilo internas a nombres de clases personalizados
export const BlurView = withUniwind(NativeBlurView);

export const ImageBackground = withUniwind(NativeImageBackground, {
  imageStyle: "imageClassName",
} as any);

export const ScrollView = withUniwind(NativeScrollView, {
  contentContainerStyle: "contentContainerClassName",
} as any);
