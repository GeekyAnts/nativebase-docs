import React, { useState } from "react";
import LiveCodeEditorScope from "./LiveCodeEditorScope";
import { getParsedCode, addExportsToCode } from "./utils";
import { endingExpoTemplate, getExpoSnackURL } from "./expoController";
import { ExpoIcon, CodePlaygroundIcon } from "../../../icons";
import { ComponentOfTheWeek } from "../ComponentOfWeek";
import {
  endingCodeSandboxTemplate,
  getCodeSandBoxURL,
} from "./codeSandBoxController";
import * as expoVectorIcons from "@expo/vector-icons";

// ----------------------------------------------- Themes --------------------------------------------------

import github from "prism-react-renderer/themes/github";
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
  useColorModeValue,
} from "native-base";
// ----------------------------------------------- Gradients --------------------------------------------------

const darkModeGradients = [
  ["#D946EF", "#024FC7"],
  ["#F87171", "#3730A3"],
  ["#38BDF8", "#1D4ED8", "#4C1D95"],
  ["#FB923C", "#C026D3"],
  ["#5EEAD4", "#0284C7", "#5B21B6"],
  ["#8B5CF6", "#A21CAF"],
  ["#9333EA", "#4338CA"],
  ["#9333EA", "#EA580C"],
];

const lightModeGradients = [
  ["#FBCFE8", "#818CF8"],
  ["#BAE6FD", "#60A5FA"],
  ["#FDBA74", "#E879F9"],
  ["#FEF3C7", "#67E8F9"],
];

function generateRandomDarkModeGradient() {
  const index = Math.floor(Math.random() * darkModeGradients.length);
  return darkModeGradients[index];
}
function pickDarkModeGradient(gradient?: string): string[] {
  if (gradient && gradient != "random") {
    // TODO: fix
    if (gradient.length > 1) {
      //@ts-ignore
      return gradient;
    } else {
      return darkModeGradients[parseInt(gradient)];
    }
  } else {
    return generateRandomDarkModeGradient();
  }
}
function generateRandomLightModeGradient() {
  const index = Math.floor(Math.random() * lightModeGradients.length);
  return lightModeGradients[index];
}
function pickLightModeGradient(gradient?: string): string[] {
  if (gradient && gradient != "random") {
    // TODO: fix
    if (gradient.length > 1) {
      //@ts-ignore
      return gradient;
    } else {
      return lightModeGradients[parseInt(gradient)];
    }
  } else {
    return generateRandomLightModeGradient();
  }
}

import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { AppContext } from "../../../AppContext";
import { GradientChangeIcon } from "../../../icons/GradientChangeIcon";

interface IShowcaseProps {
  children: string;
  gradient?: string;
  youtubeEmbedd?: string;
}

const ShowcaseInternal = ({
  lightModeGradientArray,
  darkModeGradientArray,
  setDarkModeGradientArray,
  setLightModeGradientArray,
  youtubeEmbedd,
  expoCode,
  activeVersion,
  copied,
  handleCopy,
  setParsedCode,
  children,
}: any) => {
  const [showMagicWand, setShowMagicWand] = useState(false);

  const [showCode, setShowCode] = useState(false);
  return (
    <>
      <Center
        onMouseEnter={() => {
          setShowMagicWand(true);
        }}
        onMouseLeave={() => {
          setShowMagicWand(false);
        }}
        minH="48"
        px="4"
        py="10"
        mb="4"
        // borderWidth="0"
        rounded="lg"
        // _dark={{ borderColor: "blueGray.800" }}
        // _light={{ borderColor: "blueGray.300" }}
        _light={{
          bg: {
            linearGradient: {
              colors: lightModeGradientArray,
              start: [0, 0],
              end: [1, 0],
            },
          },
        }}
        _dark={{
          bg: {
            linearGradient: {
              colors: darkModeGradientArray,
              start: [0, 0],
              end: [1, 0],
            },
          },
        }}
        // _light={{
        //   style: {
        //     // @ts-ignore
        //     backgroundImage:
        //       "linear-gradient(135deg," + lightModeGradientArray + ")",
        //   },
        // }}
        // _dark={{
        //   style: {
        //     // @ts-ignore
        //     backgroundImage:
        //       "linear-gradient(135deg," + darkModeGradientArray + ")",
        //   },
        // }}
        style={{
          // @ts-ignore
          transition: "background-image 1s",
        }}
      >
        {showMagicWand && (
          <IconButton
            p="2"
            variant="unstyled"
            _dark={{
              onPress: () => {
                setDarkModeGradientArray(pickDarkModeGradient());
              },
            }}
            _light={{
              onPress: () => {
                setLightModeGradientArray(pickLightModeGradient());
              },
            }}
            _hover={{ _icon: { opacity: "100" } }}
            _icon={{ opacity: "60", color: "white" }}
            icon={<GradientChangeIcon size="xs" />}
            position="absolute"
            top="2"
            right="2"
          />
        )}

        <Button
          p="1.5"
          opacity="60"
          _hover={{
            opacity: "100",
            bg: "warmGray.800:alpha.30",
          }}
          _dark={{ _text: { color: "coolGray.100" } }}
          _light={{ _text: { color: "coolGray.800" } }}
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

        <Box w="100%" overflow="auto">
          <LiveError style={{ color: useColorModeValue("black", "white") }} />
        </Box>
        {children}
      </Center>
      <Collapse isOpen={showCode}>
        <Box
          mb={youtubeEmbedd && "4"}
          // px="4"
          overflow="hidden"
          // pb="4"
          // mb="4"
          borderWidth="1"
          rounded="lg"
          _dark={{ borderColor: "blueGray.800" }}
          _light={{ borderColor: "coolGray.200" }}
        >
          <HStack
            _light={{ bg: "coolGray.200", borderColor: "coolGray.200" }}
            _dark={{
              bg: "blueGray.800:alpha.40",
              borderColor: "coolGray.800",
            }}
            w="100%"
            alignItems="center"
            pl="5"
            pr="5"
            borderBottomWidth="1"
          >
            <CodePlaygroundIcon size="6" mr="2" />
            <Text>Playground</Text>
            <Spacer />
            <HStack
              flexDir="row"
              justifyContent="flex-end"
              alignItems="center"
              divider={
                <Divider
                  _dark={{ bg: "trueGray.300:alpha.10" }}
                  _light={{ bg: "coolGray.700:alpha.10" }}
                  thickness="2"
                />
              }
              h="9"
              py="1.5"
              space="1.5"
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
                    _hover={{
                      _light: { bg: "coolGray.100" },
                      _dark: { bg: "coolGray.800" },
                    }}
                    p="1"
                    icon={<ExpoIcon size="xs" opacity="70" />}
                  />
                </Link>
              </Tooltip>
              {/* <Tooltip
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
                    _hover={{
                      _light: { bg: "coolGray.100" },
                      _dark: { bg: "coolGray.800" },
                    }}
                    p="1"
                    icon={
                      <Icon
                        _light={{ color: "muted.800:alpha.70" }}
                        _dark={{ color: "muted.50:alpha.70" }}
                        as={expoVectorIcons?.AntDesign}
                        name="CodeSandbox"
                        size="xs"
                      />
                    }
                  />
                </Link>
              </Tooltip> */}
              <Tooltip
                bg="coolGray.800"
                _text={{ color: "coolGray.400" }}
                hasArrow
                label={copied ? "copied" : "copy"}
              >
                <IconButton
                  _hover={{
                    _light: { bg: "coolGray.100" },
                    _dark: { bg: "coolGray.800" },
                  }}
                  p="1"
                  onPress={handleCopy}
                  icon={
                    <Icon
                      _light={{ color: "muted.800:alpha.70" }}
                      _dark={{ color: "muted.50:alpha.70" }}
                      as={expoVectorIcons?.Ionicons}
                      name={copied ? "copy" : "copy-outline"}
                      size="xs"
                    />
                  }
                />
              </Tooltip>
            </HStack>
          </HStack>
          <Box
            p="4"
            pt="0"
            _light={{ bg: "coolGray.50" }}
            _dark={{ bg: "codeBlockBackgroundColor" }}
          >
            <ScrollView showsVerticalScrollIndicator={false} maxH="300px">
              <LiveEditor
                style={{
                  fontSize: "14px",
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  borderWidth: "0",
                  opacity: useColorModeValue("0.8", "1"),
                }}
                onChange={(code) => setParsedCode(code)}
              />
            </ScrollView>
          </Box>
        </Box>
      </Collapse>
    </>
  );
};

export const Showcase = (
  { children, gradient, youtubeEmbedd }: IShowcaseProps,
  props: any
) => {
  const { activeVersion } = React.useContext(AppContext);

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

  const expoCode = addExportsToCode(
    children,
    endingExpoTemplate(props?.isNativebaseExample)
  );
  const codeSandboxCode = addExportsToCode(
    children,
    endingCodeSandboxTemplate(props?.isNativebaseExample)
  );
  const [darkModeGradientArray, setDarkModeGradientArray] = React.useState([
    "",
  ]);
  const [lightModeGradientArray, setLightModeGradientArray] = React.useState([
    "",
  ]);
  React.useEffect(() => {
    setDarkModeGradientArray(pickDarkModeGradient(gradient));
    setLightModeGradientArray(pickLightModeGradient(gradient));
  }, []);

  const [gradientIndex, setGradientIndex] = useState("random");
  React.useEffect(() => {
    setDarkModeGradientArray(pickDarkModeGradient(gradientIndex));
    setLightModeGradientArray(pickLightModeGradient(gradientIndex));
  }, [gradientIndex]);
  const internalProps = {
    lightModeGradientArray,
    darkModeGradientArray,
    setDarkModeGradientArray,
    setLightModeGradientArray,
    youtubeEmbedd,
    expoCode,
    activeVersion,
    copied,
    handleCopy,
    setParsedCode,
  };
  return (
    <Box>
      <LiveProvider
        scope={LiveCodeEditorScope}
        code={parsedCode}
        transformCode={(a) => {
          return `
          function App() {
            ${a}
            return (<Example/>);
          }
          `;
        }}
        theme={useColorModeValue(github, paleNight)}
      >
        <ShowcaseInternal {...internalProps}>
          <LivePreview />
        </ShowcaseInternal>
        {/* <Input
        value={gradientIndex}
        onChange={(e: any) => {
          setGradientIndex(e.target.value);
        }}
      /> */}
        {/* </Pressable> */}
      </LiveProvider>
      <ComponentOfTheWeek youtubeEmbedd={youtubeEmbedd} />
    </Box>
  );
};
