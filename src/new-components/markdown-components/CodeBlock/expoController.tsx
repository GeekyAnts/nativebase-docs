import versions from "../../../../versions.json";
import config from "../../../../docs.config";

export const endingExpoTemplate = `
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
  },styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient,formik,yup`;
  const url = `https://snack.expo.dev?files=${encodeURIComponent(
    JSON.stringify(files)
  )}&dependencies=${encodeURIComponent(expoDendencies)}`;
  return url;
}
