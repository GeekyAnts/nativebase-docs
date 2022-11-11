import React, { useRef } from "react";
import LiveCodeEditorScope from "./LiveCodeEditorScope";
import { getParsedCode, addExportsToCode } from "./utils";
import {
  endingExpoTemplate,
  getDependencies,
  getFiles,
  SNACK_URL,
} from "./expoController";

import { ExpoIcon, CodePlaygroundIcon } from "../../../icons";

import {
  endingCodeSandboxTemplate,
  getCodeSandBoxURL,
} from "./codeSandBoxController";

import * as expoVectorIcons from "@expo/vector-icons";

// ----------------------------------------------- Themes --------------------------------------------------

// import nightOwl from "prism-react-renderer/themes/nightOwl";
import paleNight from "prism-react-renderer/themes/palenight";
import github from "prism-react-renderer/themes/github";

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
  useColorModeValue,
} from "native-base";

import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { AppContext } from "../../../AppContext";

export const Playground = ({ children, ...props }: any) => {
  const { activeVersion } = React.useContext(AppContext);

  const [parsedCode, setParsedCode] = React.useState(getParsedCode(children));
  // const [parsedCode, setParsedCode] = React.useState(children);
  const [copied, setCopied] = React.useState(false);
  const formRef = useRef(null);

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

  function submitExpoForm() {
    // @ts-ignore
    formRef.current?.submit();
  }
  return (
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
      // theme={nightOwl}
      theme={useColorModeValue(github, paleNight)}
    >
      {/* <LiveEditor />
          <LiveError />
          <LivePreview /> */}
      <Box
        p="4"
        mb="4"
        // borderWidth="0"
        rounded="lg"
        _dark={{
          borderColor: "blueGray.800:alpha.40",
          bg: "blueGray.800:alpha.40",
        }}
        _light={{
          borderWidth: 1,
          borderColor: "coolGray.200",
          bg: "coolGray.50",
        }}
        bg="blueGray.800:alpha.40"
      >
        <Box w="100%" overflow="auto">
          <LiveError style={{ color: useColorModeValue("black", "white") }} />
        </Box>
        <LivePreview />
      </Box>
      <Box
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
          _dark={{ bg: "blueGray.800:alpha.40", borderColor: "coolGray.800" }}
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
            <form
              action={SNACK_URL}
              method="POST"
              target="_blank"
              ref={formRef}
            >
              <input
                type="hidden"
                name="dependencies"
                value={getDependencies(activeVersion)}
              />

              <input
                type="hidden"
                name="files"
                value={JSON.stringify(getFiles(expoCode))}
              />

              <Tooltip
                bg="coolGray.800"
                _text={{ color: "coolGray.400" }}
                hasArrow
                label="Open Expo Snack"
              >
                <IconButton
                  onPress={() => {
                    submitExpoForm();
                  }}
                  _hover={{
                    _light: { bg: "coolGray.100" },
                    _dark: { bg: "coolGray.800" },
                  }}
                  p="1"
                  icon={<ExpoIcon size="xs" opacity="70" />}
                />
              </Tooltip>
            </form>
            {/* Remove this comment after Icon issue is fixed */}
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
    </LiveProvider>
  );
};
