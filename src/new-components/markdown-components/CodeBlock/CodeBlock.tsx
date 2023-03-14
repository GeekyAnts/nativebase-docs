import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import * as expoVectorIcons from "@expo/vector-icons";

// ----------------------------------------------- Themes --------------------------------------------------

import github from "prism-react-renderer/themes/github";
import paleNight from "prism-react-renderer/themes/palenight";

// ----------------------------------------------- Components --------------------------------------------------
import {
  Box,
  useClipboard,
  Icon,
  Button,
  useColorModeValue,
} from "native-base";

export const CodeBlock = ({ children, props }: any) => {
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

  const bgColor = useColorModeValue("#f9fafb", "#171E2E");
  const borderColor = useColorModeValue("#e5e7eb", "#1e293b");
  return (
    <Highlight
      {...defaultProps}
      code={children.trim("\n")}
      language="tsx"
      theme={useColorModeValue(github, paleNight)}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Box w="100%" position="relative">
          <Button
            size="sm"
            opacity={60}
            position={"absolute"}
            variant="unstyled"
            _light={{ bg: "coolGray.300" }}
            _dark={{ bg: "coolGray.800" }}
            bg="coolGray.800"
            _hover={{ bg: "coolGray.600" }}
            top={3}
            right={4}
            px="2"
            p="1"
            _text={{
              fontSize: "sm",
              lineHeight: "1.5em",
              // hack for now
              fontFamily:
                "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
            }}
            onPress={handleCopy}
            rightIcon={
              <Icon
                as={expoVectorIcons?.Ionicons}
                name={copied ? "copy" : "copy-outline"}
                size="4"
              />
            }
          >
            {!copied ? "Copy" : "Copied"}
          </Button>

          <pre
            className={className}
            style={{
              ...style,
              borderRadius: "8px",
              padding: "16px",
              paddingBottom: "8px",
              margin: "0px",
              overflow: "scroll",
              backgroundColor: bgColor,
              borderWidth: "1",
              borderColor: borderColor,
              fontSize: "14px",
              lineHeight: "normal",
            }}
          >
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })} key={i}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} key={key} />
                ))}
              </div>
            ))}
          </pre>
        </Box>
      )}
    </Highlight>
  );
};
