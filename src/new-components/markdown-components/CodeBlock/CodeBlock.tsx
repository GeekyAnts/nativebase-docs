import React from "react";
import * as RN from "react-native";
import Highlight, { defaultProps } from "prism-react-renderer";
import { getParameters } from "codesandbox/lib/api/define";
import * as NBComponents from "native-base";
import versions from "../../../../versions.json";
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

// import nightOwl from "prism-react-renderer/themes/nightOwl";
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
// addExportsToCode(children, endingCodeSandboxTemplate)
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { AppContext } from "../../../AppContext";

export const CodeBlock = ({ children, props }: any) => {
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

  // const [parsedCode, setParsedCode] = React.useState(children);
  const [copied, setCopied] = React.useState(false);

  const { onCopy } = useClipboard();

  function handleCopy() {
    onCopy(children);
    setCopied(true);
    // set copied to false after 2 second
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <Highlight
      {...defaultProps}
      code={children}
      language="tsx"
      theme={paleNight}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{ ...style, borderRadius: "8px", padding: "16px",margin:"0px",fontStyle:"italic" }}
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
  );
};
