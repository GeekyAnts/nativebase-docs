import { getParameters } from "codesandbox/lib/api/define";
import versions from "../../../../versions.json";
import config from "../../../../docs.config";

export const cbxHtmlFile = `
  <!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="theme-color" content="#000000">
	<!--
      manifest.json provides metadata used when your web app is added to the
      homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
    -->
	<link rel="manifest" href="%PUBLIC_URL%/manifest.json">
	<link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">

	<title>React App</title>
</head>

<body>
	<noscript>
		You need to enable JavaScript to run this app.
	</noscript>
	<div id="root"></div>
</body>

</html>
  `;

export const endingCodeSandboxTemplate = (isNativebaseExample?: string) => {
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
          <Center h="100vh" px="3">
              <Example />
          </Center>
        </NativeBaseProvider>
      );
  };
  `;
};

export function getCodeSandBoxURL(code: string, version: string) {
  const codeSandBoxDependencies = {
    name: "nativebase",
    version: "1.0.0",
    description: "",
    keywords: [],
    main: "src/index.tsx",
    dependencies: {
      react: "*",
      "react-is": "*",
      "expo-font": "~10.0.3",
      "native-base": `${
        config.versionMap[version] === undefined
          ? config.versionMap[versions[0]]
          : config.versionMap[version]
      }`,
      "styled-system": "*",
      "expo-asset": "8.4.6",
      "expo-constants": "~12.1.3",
      "react-native-safe-area-context": "3.3.2",
      "react-dom": "17.0.2",
      "react-native-svg": "12.1.1",
      "styled-components": "*",
      "@expo/vector-icons": "^12.0.0",
      "expo-linear-gradient": "~10.0.3",
      "react-native-web": "0.17.5",
    },
    devDependencies: {
      "@types/react": "17.0.0",
      "@types/react-dom": "17.0.0",
      typescript: "4.1.3",
    },
    scripts: {
      start: "react-scripts start",
      build: "react-scripts build",
      test: "react-scripts test --env=jsdom",
      eject: "react-scripts eject",
    },
    browserslist: [">0.2%", "not dead", "not ie <= 11", "not op_mini all"],
  };
  const parameters = getParameters({
    files: {
      "public/index.html": {
        isBinary: false,
        content: cbxHtmlFile,
      },
      "src/index.tsx": {
        isBinary: false,
        content: `
            import { render } from "react-dom";
    
    import App from "./App";
    
    const rootElement = document.getElementById("root");
    render(<App />, rootElement);
    
            `,
      },
      "src/App.tsx": {
        isBinary: false,
        content: code,
      },
      "tsconfig.json": {
        isBinary: false,
        content: `
            {
              "include": [
                  "./src/**/*"
              ],
              "compilerOptions": {
                  "strict": true,
                  "esModuleInterop": true,
                  "lib": [
                      "dom",
                      "es2015"
                  ],
                  "jsx": "react-jsx"
              }
          }
            `,
      },
      "package.json": {
        isBinary: false,
        // @ts-ignore
        content: codeSandBoxDependencies,
      },
    },
  });
  const url = `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}`;
  return url;
}
