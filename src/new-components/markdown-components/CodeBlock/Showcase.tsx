import React, { useState } from "react";
import * as RN from "react-native";
import * as NBComponents from "native-base";
import { endingExpoTemplate, getExpoSnackURL } from "./expoController";
import { ExpoIcon, CodePlaygroundIcon } from "../../../icons";
import {
  endingCodeSandboxTemplate,
  getCodeSandBoxURL,
} from "./codeSandBoxController";
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

// ----------------------------------------------- Themes --------------------------------------------------

import nightOwl from "prism-react-renderer/themes/nightOwl";
import paleNight from "prism-react-renderer/themes/palenight";

// ----------------------------------------------- Components --------------------------------------------------
import {
  Box,
  ScrollView,
  IconButton,
  useClipboard,
  Icon,
  Tooltip,
  Link,
  HStack,
  Divider,
  Spacer,
  Text,
  Button,
  Collapse,
  Center,
} from "native-base";
// ----------------------------------------------- Gradients --------------------------------------------------

const gradients = [
  ["#D946EF", "#024FC7"],
  ["#F87171", "#3730A3"],
  ["#BEF264", "#075985"],
  ["#FACC15", "#EC4899", "#FB7185"],
  ["#10B981", "#6D28D9"],
  ["#38BDF8", "#1D4ED8", "#4C1D95"],
  ["#FB923C", "#C026D3"],
  ["#5EEAD4", "#0284C7", "#5B21B6"],
  ["#F43F5E", "#4F46E5", "#5B21B6"],
  ["#D946EF", "#0284C7", "#EC4899"],
];

function generateRandomGradient() {
  const index = Math.floor(Math.random() * gradients.length);
  return gradients[index];
}
function pickGradient(gradient?: string): string {
  if (gradient) {
    console.log("here");
    if (gradient.length > 1) {
      return gradient;
    } else {
      return gradients[parseInt(gradient)].join(",");
    }
  } else {
    return generateRandomGradient().join(",");
  }
}

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
// addExportsToCode(children, endingCodeSandboxTemplate)
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { AppContext } from "../../../AppContext";
import { GradientChangeIcon } from "../../../icons/GradientChangeicon";

interface IShowcaseProps {
  children: string;
  gradient?: string;
}

export const Showcase = ({ children, gradient, ...props }: IShowcaseProps) => {
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

  const [parsedCode, setParsedCode] = React.useState(getParsedCode(children));
  // const [parsedCode, setParsedCode] = React.useState(children);
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
  function addExportsToCode(code: string, endingTemplate: string) {
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

  const expoCode = addExportsToCode(children, endingExpoTemplate);
  const codeSandboxCode = addExportsToCode(children, endingCodeSandboxTemplate);
  const [gradientString, setGradientString] = React.useState("");
  React.useEffect(() => {
    setGradientString(pickGradient(gradient));
  }, []);
  const [showCode, setShowCode] = useState(false);
  return (
    <LiveProvider
      scope={scope}
      code={parsedCode}
      transformCode={(a) => {
        return `
          function App() {
            ${a}
            return (<Example/>);
          }
          `;
      }}
      // theme={nightOwl}
      theme={paleNight}
    >
      {/* <LiveEditor />
          <LiveError />
          <LivePreview /> */}
      <Center
        h="48"
        p="4"
        mb="4"
        // borderWidth="0"
        rounded="lg"
        // _dark={{ borderColor: "blueGray.800" }}
        // _light={{ borderColor: "blueGray.300" }}
        // bg={{
        //   linearGradient: {
        //     colors: ["lightBlue.300", "violet.800"],
        //     start: [0, 0],
        //     end: [1, 0],
        //   },
        // }}
        style={{
          // @ts-ignore
          backgroundImage: "linear-gradient(135deg," + gradientString + ")",
          transition: "background-image 1s",
        }}
      >
        {/* <IconButton
          p="2"
          variant="unstyled"
          onPress={() => {
            setGradientString(pickGradient());
          }}
          _hover={{ _icon: { opacity: "100" } }}
          _icon={{ opacity: "60", color: "white" }}
          icon={<GradientChangeIcon size="xs" />}
          position="absolute"
          top="2"
          right="2"
        /> */}
        <Button
          p="2"
          opacity="60"
          _hover={{ opacity: "100" }}
          size="sm"
          variant="unstyled"
          onPress={() => {
            setShowCode(!showCode);
          }}
          leftIcon={
            <Icon
              as={expoVectorIcons.MaterialCommunityIcons}
              name={showCode ? "eye-off" : "eye"}
              size="xs"
              opacity="60"
            />
          }
          position="absolute"
          bottom="2"
          right="2"
        >
          {showCode ? "Hide Code" : "Show Code"}
        </Button>

        <LiveError />
        <LivePreview />
      </Center>
      <Collapse isOpen={showCode}>
        <Box
          // px="4"
          overflow="hidden"
          // pb="4"
          mb="4"
          borderWidth="1"
          rounded="lg"
          _dark={{ borderColor: "blueGray.800" }}
          _light={{ borderColor: "blueGray.300" }}
        >
          <HStack
            bg="blueGray.800:alpha.40"
            w="100%"
            alignItems="center"
            pl="4"
            pr="5"
          >
            <CodePlaygroundIcon />
            <Text>Playground</Text>
            <Spacer />
            <HStack
              flexDir="row"
              justifyContent="flex-end"
              alignItems="center"
              divider={<Divider bg="trueGray.300:alpha.10" thickness="2" />}
              h="9"
              py="1.5"
              space="4"
            >
              <Tooltip
                bg="coolGray.800"
                _text={{ color: "coolGray.400" }}
                hasArrow
                label="Open Expo Snack"
              >
                <Link
                  isExternal
                  href={getExpoSnackURL(expoCode, activeVersion)}
                >
                  <IconButton
                    _hover={{ bg: "coolGray.800" }}
                    p="1"
                    icon={<ExpoIcon size="xs" opacity="70" />}
                  />
                </Link>
              </Tooltip>
              <Tooltip
                bg="coolGray.800"
                _text={{ color: "coolGray.400" }}
                hasArrow
                label="Open code in CodeSandBox"
              >
                <Link
                  isExternal
                  href={getCodeSandBoxURL(codeSandboxCode, activeVersion)}
                >
                  <IconButton
                    _hover={{ bg: "coolGray.800" }}
                    p="1"
                    icon={
                      <Icon
                        color="muted.50:alpha.70"
                        as={expoVectorIcons?.AntDesign}
                        name="CodeSandbox"
                        size="xs"
                      />
                    }
                  />
                </Link>
              </Tooltip>
              <Tooltip
                bg="coolGray.800"
                _text={{ color: "coolGray.400" }}
                hasArrow
                label={copied ? "copied" : "copy"}
              >
                <IconButton
                  _hover={{ bg: "coolGray.800" }}
                  p="1"
                  onPress={handleCopy}
                  icon={
                    <Icon
                      color="muted.50:alpha.70"
                      as={expoVectorIcons?.Ionicons}
                      name={copied ? "copy" : "copy-outline"}
                      size="xs"
                    />
                  }
                />
              </Tooltip>
            </HStack>
          </HStack>
          <Box p="4" pt="0" bg="codeBlockBackgroundColor">
            <ScrollView maxH="300px">
              <LiveEditor
                style={{ backgroundColor: "transparent" }}
                onChange={(code) => setParsedCode(code)}
              />
            </ScrollView>
          </Box>
        </Box>
      </Collapse>
    </LiveProvider>
  );
};
