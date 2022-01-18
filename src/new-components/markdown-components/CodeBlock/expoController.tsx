import versions from "../../../../versions.json";
import config from "../../../../docs.config";

export const endingExpoTemplate = (isNativebaseExample?: string) => {
  return isNativebaseExample && isNativebaseExample === "false"
    ? `
  export default () => {
      return (
              <Example />
      );
  };
  `
    : `
    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Example />
            </Center>
          </NativeBaseProvider>
        );
    };
    `;
};
export function getExpoSnackURL(code: string, version: string) {
  const files = {
    // Inlined code
    "App.tsx": {
      type: "CODE",
      contents: code,
    },
  };
  const expoDendencies = `react-is,expo-font,native-base@${
    config.versionMap[version] === undefined
      ? config.versionMap[versions[0]]
      : config.versionMap[version]
  },styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient,formik,yup,@react-navigation/drawer,@react-navigation/native,react-native-vector-icons,react-native-gesture-handler,react-native-linear-gradient,@react-native-community/masked-view,react-native-screens,react-native-reanimated`;
  const url = `https://snack.expo.dev?files=${encodeURIComponent(
    JSON.stringify(files)
  )}&dependencies=${encodeURIComponent(expoDendencies)}`;
  return url;
}

export function getFiles(code: string) {
  const files = {
    // Inlined code
    "App.tsx": {
      type: "CODE",
      contents: code,
    },
  };

  return files;
}

export function getDependencies(version: string) {
  const expoDendencies = `react-is,expo-font,native-base@${
    config.versionMap[version] === undefined
      ? config.versionMap[versions[0]]
      : config.versionMap[version]
  },styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient,formik,yup,@react-navigation/drawer,@react-navigation/native,react-native-vector-icons,react-native-gesture-handler,react-native-linear-gradient,@react-native-community/masked-view,react-native-screens,react-native-reanimated,react-native-screens,@types/react,@types/react-native`;
  return expoDendencies;
}
export const SNACK_URL = "https://snack.expo.dev/";
