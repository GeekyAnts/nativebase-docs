import React from "react";
import * as RN from "react-native";
import * as NBComponents from "native-base";
import * as expoVectorIcons from "@native-base/icons";
import { Formik } from "formik";
import { SwipeListView } from "react-native-swipe-list-view";
import { TabView, SceneMap } from "react-native-tab-view";
import * as reactNativeSvgComponents from "react-native-svg";
const {
  Circle: CircleSvg,
  Text: TextSvg,
  Image: ImageSvg,
  ...remReactNativeSvgComponents
} = reactNativeSvgComponents;
const LinearGradient = require("react-native-linear-gradient").default;
const Wrapper = (props: any) => {
  return (
    <NBComponents.Center flex={1} px="3">
      {props.children}
    </NBComponents.Center>
  );
};
// add custom deps as and when required. more info here -> https://github.com/FormidableLabs/react-live#liveprovider-
const LiveCodeEditorScope = {
  ...RN,
  ...NBComponents,
  Wrapper,
  ...React,
  // ...IconLib,
  ...expoVectorIcons,
  SwipeListView,
  TabView,
  SceneMap,
  Formik,
  ...remReactNativeSvgComponents,
  CircleSvg,
  TextSvg,
  ImageSvg,
  LinearGradient,
};
// @ts-ignore
delete LiveCodeEditorScope.default;

export default LiveCodeEditorScope;
