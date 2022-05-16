const internalProps = {
  IBoxProps: { doc: "box.md", name: "Box", link: "box#props" },
  ITextProps: { doc: "text.md", name: "Text", link: "text#props" },
  IIconProps: { doc: "icon.md", name: "Icon", link: "icon#props" },
  IStackProps: { doc: "stack.md", name: "Stack", link: "stack#props" },
  IButtonProps: { doc: "button.md", name: "Button", link: "button#props" },
  ILinearGradientProps: {
    doc: "more-props.md",
    name: "More Props",
    link: "more-props#ilineargradientprops",
  },
  IPressableProps: {
    doc: "pressable.md",
    name: "Pressable",
    link: "pressable#props",
  },
  ISupportedTransitions: {
    doc: "presence-transition.md",
    name: "ISupportedTransitions",
    link: "presence-transition#isupportedtransitions",
  },
  IStaggerStyleProps: {
    doc: "stagger.md",
    name: "IStaggerStyleProps",
    link: "stagger#istaggerstyleprops",
  },
  ITransitionStyleProps: {
    doc: "presence-transition.md",
    name: "ITransitionStyleProps",
    link: "presence-transition#itransitionstyleprops",
  },
  ImageProps: {
    doc: "",
    name: "Image from React Native",
    link: "https://reactnative.dev/docs/image",
  },
  ImageSourcePropType: {
    doc: "",
    name: "Image Source",
    link: "https://reactnative.dev/docs/image#source",
  },
  IActionsheetContentProps: {
    doc: "actionsheet.md",
    name: "Actionsheet.Content",
    link: "action-sheet#actionsheetcontent",
  },
  SwitchProps: {
    doc: "",
    name: "Switch from React Native",
    link: "https://reactnative.dev/docs/switch",
  },
  IFormControlProps: {
    doc: "formControl.md",
    name: "FormControl",
    link: "form-control#formcontrol",
  },
  IInputProps: {
    doc: "input.md",
    name: "Input",
    link: "input#input",
  },
};
// RN props
// const viewProps = {
//   ViewStyle: {
//     doc: '',
//     name: 'ViewStyle',
//     link: 'https://reactnative.dev/docs/view-style-props',
//   },
//   ViewProps: {
//     doc: '',
//     name: 'View',
//     link: 'https://reactnative.dev/docs/view',
//   },
//   ImageProps: {
//     doc: '',
//     name: 'Image',
//     link: 'https://reactnative.dev/docs/image',
//   },
//   ViewPropsAndroid: {
//     doc: '',
//     name: 'View',
//     link: 'https://reactnative.dev/docs/view',
//   },
//   ViewPropsIOS: {
//     doc: '',
//     name: 'View',
//     link: 'https://reactnative.dev/docs/view',
//   },
//   TVViewPropsIOS: {
//     doc: '',
//     name: 'View',
//     link: 'https://reactnative.dev/docs/view',
//   },
//   GestureResponderHandlers: {
//     doc: '',
//     name: 'View',
//     link: 'https://reactnative.dev/docs/view',
//   },
//   Touchable: {
//     doc: '',
//     name: 'View',
//     link: 'https://reactnative.dev/docs/view',
//   },
//   AccessibilityProps: {
//     doc: '',
//     name: 'View',
//     link: 'https://reactnative.dev/docs/view',
//   },
//   AccessibilityPropsAndroid: {
//     doc: '',
//     name: 'View',
//     link: 'https://reactnative.dev/docs/view',
//   },
//   AccessibilityPropsIOS: {
//     doc: '',
//     name: 'View',
//     link: 'https://reactnative.dev/docs/view',
//   },
//   RefAttributes: {
//     doc: '',
//     name: 'View',
//     link: 'https://reactnative.dev/docs/view',
//   },
//   Attributes: {
//     doc: '',
//     name: 'View',
//     link: 'https://reactnative.dev/docs/view',
//   },
// };
// const textProps = {
//   TextProps: {
//     doc: '',
//     name: 'TextProp',
//     link: 'https://reactnative.dev/docs/text',
//   },
//   TextPropsIOS: {
//     doc: '',
//     name: 'TextProp',
//     link: 'https://reactnative.dev/docs/text',
//   },
//   TextPropsAndroid: {
//     doc: '',
//     name: 'TextProp',
//     link: 'https://reactnative.dev/docs/text',
//   },
//   AccessibilityProps: {
//     doc: '',
//     name: 'TextProp',
//     link: 'https://reactnative.dev/docs/text',
//   },
//   AccessibilityPropsAndroid: {
//     doc: '',
//     name: 'TextProp',
//     link: 'https://reactnative.dev/docs/text',
//   },
//   AccessibilityPropsIOS: {
//     doc: '',
//     name: 'TextProp',
//     link: 'https://reactnative.dev/docs/text',
//   },
// };

const rnProps = {
  ViewStyle: {
    doc: "",
    name: "ViewStyle",
    link: "https://reactnative.dev/docs/view-style-props",
  },
  ImageProps: {
    doc: "",
    name: "Image",
    link: "https://reactnative.dev/docs/image",
  },
  ViewProps: {
    doc: "",
    name: "View",
    link: "https://reactnative.dev/docs/view",
  },
  ScrollViewProps: {
    doc: "",
    name: "ScrollView",
    link: "https://reactnative.dev/docs/scrollview",
  },
  KeyboardAvoidViewProps: {
    doc: "",
    name: "KeyboardAvoidView",
    link: "https://reactnative.dev/docs/keyboardavoidingview",
  },
  StatusBarProps: {
    doc: "",
    name: "StatusBar",
    link: "https://reactnative.dev/docs/statusbar",
  },
  FlatListProps: {
    doc: "",
    name: "FlatList",
    link: "https://reactnative.dev/docs/flatlist",
  },
  SectionListProps: {
    doc: "",
    name: "SectionList",
    link: "https://reactnative.dev/docs/sectionlist",
  },
  TextProps: {
    doc: "",
    name: "TextProp",
    link: "https://reactnative.dev/docs/text",
  },
  PressableProps: {
    doc: "",
    name: "Pressable",
    link: "https://reactnative.dev/docs/pressable",
  },
  SvgProps: {
    doc: "",
    name: "react-native-svg",
    link: "https://github.com/react-native-svg/react-native-svg",
  },
};
// Styling props
const borderProps = {
  ITextProps: { doc: "text.md", name: "Text", link: "text#props" },
  borderRadius: {
    doc: "utilityProps.md",
    name: "BorderProps",
    link: "utility-props#borders",
  },
  //Border Props
  BorderProps: {
    doc: "utilityProps.md",
    name: "BorderProps",
    link: "utility-props#borders",
  },
  BorderWidthProps: {
    doc: "utilityProps.md",
    name: "BorderProps",
    link: "utility-props#borders",
  },
  BorderStyleProps: {
    doc: "utilityProps.md",
    name: "BorderProps",
    link: "utility-props#borders",
  },
  BorderColorProps: {
    doc: "utilityProps.md",
    name: "BorderProps",
    link: "utility-props#borders",
  },
  BorderRadiusProps: {
    doc: "utilityProps.md",
    name: "BorderProps",
    link: "utility-props#borders",
  },
  BorderTopProps: {
    doc: "utilityProps.md",
    name: "BorderProps",
    link: "utility-props#borders",
  },
  BorderRightProps: {
    doc: "utilityProps.md",
    name: "BorderProps",
    link: "utility-props#borders",
  },
  BorderBottomProps: {
    doc: "utilityProps.md",
    name: "BorderProps",
    link: "utility-props#borders",
  },
  BorderLeftProps: {
    doc: "utilityProps.md",
    name: "BorderProps",
    link: "utility-props#borders",
  },
};
const colorProps = {
  color: {
    doc: "utilityProps.md",
    name: "ColorProps",
    link: "utility-props#color-and-background-color",
  },
  backgroundColor: {
    doc: "utilityProps.md",
    name: "ColorProps",
    link: "utility-props#color-and-background-color",
  },
  ColorProps: {
    doc: "utilityProps.md",
    name: "ColorProps",
    link: "utility-props#color-and-background-color",
  },
  TextColorProps: {
    doc: "utilityProps.md",
    name: "ColorProps",
    link: "utility-props#color-and-background-color",
  },
  BackgroundColorProps: {
    doc: "utilityProps.md",
    name: "ColorProps",
    link: "utility-props#color-and-background-color",
  },
  OpacityProps: {
    doc: "utilityProps.md",
    name: "ColorProps",
    link: "utility-props#color-and-background-color",
  },
};
const flexProps = {
  flex: {
    doc: "utilityProps.md",
    name: "FlexProps",
    link: "utility-props#flexbox",
  },
  FlexboxProps: {
    doc: "utilityProps.md",
    name: "FlexProps",
    link: "utility-props#flexbox",
  },
  FlexProps: {
    doc: "utilityProps.md",
    name: "FlexProps",
    link: "utility-props#flexbox",
  },
};
const layoutProps = {
  width: {
    doc: "utilityProps.md",
    name: "LayoutProps",
    link: "utility-props#layout-width-and-height",
  },
  LayoutProps: {
    doc: "utilityProps.md",
    name: "LayoutProps",
    link: "utility-props#layout-width-and-height",
  },
  WidthProps: {
    doc: "utilityProps.md",
    name: "LayoutProps",
    link: "utility-props#layout-width-and-height",
  },
  HeightProps: {
    doc: "utilityProps.md",
    name: "LayoutProps",
    link: "utility-props#layout-width-and-height",
  },
  MinWidthProps: {
    doc: "utilityProps.md",
    name: "LayoutProps",
    link: "utility-props#layout-width-and-height",
  },
  MinHeightProps: {
    doc: "utilityProps.md",
    name: "LayoutProps",
    link: "utility-props#layout-width-and-height",
  },
  MaxWidthProps: {
    doc: "utilityProps.md",
    name: "LayoutProps",
    link: "utility-props#layout-width-and-height",
  },
  MaxHeightProps: {
    doc: "utilityProps.md",
    name: "LayoutProps",
    link: "utility-props#layout-width-and-height",
  },
  DisplayProps: {
    doc: "utilityProps.md",
    name: "LayoutProps",
    link: "utility-props#layout-width-and-height",
  },
  VerticalAlignProps: {
    doc: "utilityProps.md",
    name: "LayoutProps",
    link: "utility-props#layout-width-and-height",
  },
  SizeProps: {
    doc: "utilityProps.md",
    name: "LayoutProps",
    link: "utility-props#layout-width-and-height",
  },
  OverflowProps: {
    doc: "utilityProps.md",
    name: "LayoutProps",
    link: "utility-props#layout-width-and-height",
  },
};
const positionProps = {
  position: {
    doc: "utilityProps.md",
    name: "PositionProps",
    link: "utility-props#position",
  },
  PositionProps: {
    doc: "utilityProps.md",
    name: "PositionProps",
    link: "utility-props#position",
  },
  ZIndexProps: {
    doc: "utilityProps.md",
    name: "PositionProps",
    link: "utility-props#position",
  },
  TopProps: {
    doc: "utilityProps.md",
    name: "PositionProps",
    link: "utility-props#position",
  },
  RightProps: {
    doc: "utilityProps.md",
    name: "PositionProps",
    link: "utility-props#position",
  },
  BottomProps: {
    doc: "utilityProps.md",
    name: "PositionProps",
    link: "utility-props#position",
  },
  LeftProps: {
    doc: "utilityProps.md",
    name: "PositionProps",
    link: "utility-props#position",
  },
};
const spaceProps = {
  PositionProps: {
    doc: "utilityProps.md",
    name: "PositionProps",
    link: "utility-props#position",
  },
  ZIndexProps: {
    doc: "utilityProps.md",
    name: "PositionProps",
    link: "utility-props#position",
  },
  TopProps: {
    doc: "utilityProps.md",
    name: "PositionProps",
    link: "utility-props#position",
  },
  RightProps: {
    doc: "utilityProps.md",
    name: "PositionProps",
    link: "utility-props#position",
  },
  BottomProps: {
    doc: "utilityProps.md",
    name: "PositionProps",
    link: "utility-props#position",
  },
  LeftProps: {
    doc: "utilityProps.md",
    name: "PositionProps",
    link: "utility-props#position",
  },
};
const typographyProps = {
  fontSize: {
    doc: "utilityProps.md",
    name: "TypographyProps",
    link: "utility-props#typography",
  },
  TypographyProps: {
    doc: "utilityProps.md",
    name: "TypographyProps",
    link: "utility-props#typography",
  },
  FontFamilyProps: {
    doc: "utilityProps.md",
    name: "TypographyProps",
    link: "utility-props#typography",
  },
  FontSizeProps: {
    doc: "utilityProps.md",
    name: "TypographyProps",
    link: "utility-props#typography",
  },
  FontWeightProps: {
    doc: "utilityProps.md",
    name: "TypographyProps",
    link: "utility-props#typography",
  },
  LineHeightProps: {
    doc: "utilityProps.md",
    name: "TypographyProps",
    link: "utility-props#typography",
  },
  LetterSpacingProps: {
    doc: "utilityProps.md",
    name: "TypographyProps",
    link: "utility-props#typography",
  },
  FontStyleProps: {
    doc: "utilityProps.md",
    name: "TypographyProps",
    link: "utility-props#typography",
  },
  TextAlignProps: {
    doc: "utilityProps.md",
    name: "TypographyProps",
    link: "utility-props#typography",
  },
};
const backgroundProps = {
  bg: {
    doc: "",
    name: "BackgroundProps",
    link: "utility-props#background",
  },
  BackgroundProps: {
    doc: "",
    name: "BackgroundProps",
    link: "utility-props#background",
  },
  BackgroundColorProps: {
    doc: "",
    name: "BackgroundProps",
    link: "utility-props#background",
  },
};
const extraProps = {
  ExtraProps: {
    doc: "",
    name: "ExtraProps",
    link: "utility-props#extra-props",
  },
};
const outlineProps = {
  OutlineProps: {
    doc: "",
    name: "OutlineProps",
    link: "utility-props#outline",
  },
};
const safeAreaProps = {
  SafeAreaProps: {
    doc: "",
    name: "SafeAreaProps",
    link: "utility-props#safearea",
  },
};
const shadowProps = {
  shadow: {
    doc: "",
    name: "ShadowProps",
    link: "utility-props#shadow",
  },
  ShadowProps: {
    doc: "",
    name: "ShadowProps",
    link: "utility-props#shadow",
  },
};
const transformProps = {
  TransformProps: {
    doc: "",
    name: "TransformProps",
    link: "utility-props#transform",
  },
};
const platformProps = {
  PlatformProps: {
    doc: "utilityProps.md",
    name: "PlatformProps",
    link: "utility-props#platform-props",
  },
};

module.exports = {
  internalPropsMap: internalProps,
  rnPropsMap: rnProps,
  StylingPropsMap: {
    StyledProps: {
      doc: "utilityProps.md",
      name: "LayoutProps",
      link: "utility-props#layout-width-and-height",
    },
    ...borderProps,
    ...colorProps,
    ...typographyProps,
    ...flexProps,
    ...spaceProps,
    ...positionProps,
    ...layoutProps,
    ...backgroundProps,
    ...extraProps,
    ...outlineProps,
    ...safeAreaProps,
    ...shadowProps,
    ...transformProps,
    ...platformProps,
  },
};
