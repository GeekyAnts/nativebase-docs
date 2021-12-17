import React from "react";
import * as RN from "react-native";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";
import * as NBComponents from "native-base";
import versions from "../../../versions.json";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import MaterialIcons from "react-native-vector-icons/MaterialIcons";
// import AntDesign from "react-native-vector-icons/AntDesign";
// import Entypo from "react-native-vector-icons/Entypo";
// import EvilIcons from "react-native-vector-icons/EvilIcons";
// import Feather from "react-native-vector-icons/Feather";
// import FontAwesome from "react-native-vector-icons/FontAwesome";
// import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
// import Foundation from "react-native-vector-icons/Foundation";
// import Fontisto from "react-native-vector-icons/Fontisto";
// import Octicons from "react-native-vector-icons/Octicons";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
// import Zocial from "react-native-vector-icons/Zocial";
import * as expoVectorIcons from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const { parse } = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
import { Formik } from "formik";
// import { NavigationContainer } from "@react-navigation/native";
// import {
//   createDrawerNavigator,
//   DrawerContentScrollView,
// } from "@react-navigation/drawer";
import dynamic from "next/dynamic";
import { SwipeListView } from "react-native-swipe-list-view";
import { TabView, SceneMap } from "react-native-tab-view";
import { G, Circle as CircleSvg, Path } from "react-native-svg";
import nightOwl from "prism-react-renderer/themes/nightOwl";
import {
  Box,
  ScrollView,
  IconButton,
  useClipboard,
  Icon,
  Tooltip,
  Link,
} from "native-base";

// @ts-ignore
const { NavigationContainer } = dynamic(
  // @ts-ignore
  () => import("@react-navigation/native"),
  {
    ssr: false,
  }
);
// @ts-ignore
const { createDrawerNavigator, DrawerContentScrollView } = dynamic(
  // @ts-ignore
  () => import("react-navigation"),
  {
    ssr: false,
  }
);
// SnackPlayer name=Drawer-Navigation dependencies=@react-navigation/stack@5.1.0,@react-navigation/drawer,@react-navigation/native@5.0.8,react-native-vector-icons,react-native-gesture-handler@1.10.2,react-native-linear-gradient,@react-native-community/masked-view@0.1.10,react-native-screens@3.0.0,react-native-reanimated@2.1.0
// const LinearGradient = require("react-native-linear-gradient").default;
// import LinearGradient from 'react-native-linear-gradient';
// const LinearGradient = require('expo-linear-gradient').LinearGradient;

import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { AppContext } from "../../AppContext";
import config from "../../../docs.config";

export const CodeBlock = ({ children, isLive }: any) => {
  const { activeVersion } = React.useContext(AppContext);
  const Wrapper = (props: any) => {
    return (
      <NBComponents.Center flex={1} px="3">
        {props.children}
      </NBComponents.Center>
    );
  };
  function getParsedCode(code: any) {
    const ast = parse(code, {
      sourceType: "module",
      plugins: ["jsx", "typescript"],
    });
    traverse(ast, {
      enter(path: any) {
        if (path.node.type === "ImportDeclaration") {
          path.remove();
        }
        if (path.node?.type === "ExportNamedDeclaration") {
          // console.log(path.node.declaration.declarations);
          const childDec = path.node.declaration;
          path.replaceWith(childDec);
          // console.log(path.node);
        }
        // if(path.node?.type ==="FunctionDeclaration"){
        //   console.log(path.node);
        // }
        // console.log(path.node);
      },
    });

    const output = generate(ast);
    return output.code;
  }
  // const IconLib = {
  //   MaterialCommunityIcons,
  //   MaterialIcons,
  //   AntDesign,
  //   Entypo,
  //   EvilIcons,
  //   Feather,
  //   FontAwesome,
  //   FontAwesome5,
  //   Foundation,
  //   Fontisto,
  //   Octicons,
  //   Ionicons,
  //   SimpleLineIcons,
  //   Zocial,
  // };
  const scope = {
    ...RN,
    ...NBComponents,
    Wrapper,
    ...React,
    // ...IconLib,
    ...expoVectorIcons,
    NavigationContainer,
    createDrawerNavigator,
    DrawerContentScrollView,
    KeyboardAwareScrollView,
    SwipeListView,
    TabView,
    SceneMap,
    Formik,
    G,
    Path,
    CircleSvg,
    // LinearGradient,
  }; // add custom deps as and when required. more info here -> https://github.com/FormidableLabs/react-live#liveprovider-

  // @ts-ignore
  delete scope.default;
  // console.log(getParsedCode(children));

  // const [parsedCode, setParsedCode] = React.useState(getParsedCode(children));
  const [parsedCode, setParsedCode] = React.useState(children);
  const [copied, setCopied] = React.useState(false);

  const { onCopy } = useClipboard();
  function handleCopy() {
    onCopy(parsedCode);
    setCopied(true);
    // set copied to false after 2 second
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }
  const expoDendencies = `react-is,expo-font,native-base@${
    config.versionMap[activeVersion] === undefined
      ? config.versionMap[versions[0]]
      : config.versionMap[activeVersion]
  },styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient,formik,yup`;
  const codeSandBoxDependencies = {
    "react-is": "*",
    "expo-font": "~10.0.3",
    "native-base": `${
      config.versionMap[activeVersion] === undefined
        ? config.versionMap[versions[0]]
        : config.versionMap[activeVersion]
    }`,
    "styled-system": "*",
    "expo-constants": "~12.1.3",
    "react-native-safe-area-context": "3.3.2",
    "react-native-svg": "12.1.1",
    "styled-components": "*",
    "@expo/vector-icons": "^12.0.0",
    "expo-linear-gradient": "~10.0.3",
  };
  const endingTemplate = `
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
  const getImportSpecifier = (name: any) => {
    return {
      type: "ImportSpecifier",
      imported: {
        type: "Identifier",
        loc: {
          identifierName: name,
        },
        name: name,
      },
      local: {
        type: "Identifier",
        loc: {
          identifierName: name,
        },
        name: name,
      },
    };
  };
  function addExportsToCode(code: string) {
    const ast = parse(code, {
      sourceType: "module",
      plugins: ["jsx", "typescript"],
    });
    traverse(ast, {
      ImportDeclaration({ node }: any) {
        let isCenterImported = false;
        let isProviderImported = false;
        if (node.source.value === "native-base") {
          node.specifiers.forEach((s: any) => {
            if (s.imported.name === "Center") {
              isCenterImported = true;
            } else if (s.imported.name === "NativeBaseProvider") {
              isProviderImported = true;
            }
          });
          if (!isCenterImported) {
            node.specifiers.push(getImportSpecifier("Center"));
          }
          if (!isProviderImported) {
            node.specifiers.push(getImportSpecifier("NativeBaseProvider"));
          }
        }
      },
      enter(path: any) {
        if (path.node?.type === "ExportNamedDeclaration") {
          // console.log(path.node.declaration.declarations);
          const childDec = path.node.declaration;
          path.replaceWith(childDec);
          // console.log(path.node);
        }
      },
    });
    const output = generate(ast);
    const finalTemplate = output.code + "\n" + endingTemplate;
    return finalTemplate;
  }
  const files = {
    // Inlined code
    "App.tsx": {
      type: "CODE",
      contents: addExportsToCode(children),
    },
  };
  function getExpoSnackURL() {
    const url = `https://snack.expo.dev?files=${encodeURIComponent(
      JSON.stringify(files)
    )}&dependencies=${encodeURIComponent(expoDendencies)}`;
    return url;
  }
  return (
    <>
      {isLive ? (
        <LiveProvider
          scope={scope}
          code={getParsedCode(children)}
          transformCode={(a) => {
            return `
          function App() {
            ${a}
            return (<Example/>);
          }
          `;
          }}
          theme={nightOwl}
        >
          {/* <LiveEditor />
          <LiveError />
          <LivePreview /> */}
          <Box
            p="4"
            mb="4"
            borderWidth="1"
            rounded="lg"
            _dark={{ borderColor: "blueGray.700" }}
            _light={{ borderColor: "blueGray.300" }}
          >
            <LiveError />
            <LivePreview />
          </Box>
          <Box
            px="4"
            pb="4"
            mb="4"
            borderWidth="1"
            rounded="lg"
            _dark={{ borderColor: "blueGray.700" }}
            _light={{ borderColor: "blueGray.300" }}
            bg="codeBlockBackgroundColor"
          >
            <Box flexDir="row" w="100%" justifyContent="flex-end">
              <Tooltip label="Open Expo Snack">
                <Link isExternal href={getExpoSnackURL()}>
                  <IconButton
                    icon={
                      <Icon
                        as={expoVectorIcons?.AntDesign}
                        name="CodeSandbox"
                        size="xs"
                      />
                    }
                  />
                </Link>
              </Tooltip>
              <Tooltip label="Open code in CodeSandBox">
                <IconButton
                  icon={
                    <Icon
                      as={expoVectorIcons?.AntDesign}
                      name="CodeSandbox"
                      size="xs"
                    />
                  }
                />
              </Tooltip>
              {/* <IconButton
                onPress={() => setParsedCode(getParsedCode(children))}
                icon={<ArrowBackIcon size="xs" />}
              /> */}
              <Tooltip label={copied ? "copied" : "copy"}>
                <IconButton
                  onPress={handleCopy}
                  icon={
                    <Icon
                      as={expoVectorIcons?.Ionicons}
                      name={copied ? "copy" : "copy-outline"}
                      size="xs"
                    />
                  }
                />
              </Tooltip>
            </Box>
            <ScrollView maxH="300px">
              <LiveEditor onChange={(code) => setParsedCode(code)} />
            </ScrollView>
          </Box>
        </LiveProvider>
      ) : (
        <Highlight
          {...defaultProps}
          code={children}
          language="tsx"
          theme={nightOwl}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={className}
              style={{ ...style, borderRadius: "8px", padding: "16px" }}
            >
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })} key={i}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} key={key} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      )}
    </>
  );
};
