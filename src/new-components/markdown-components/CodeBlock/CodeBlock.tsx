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
  HStack,
} from "native-base";

const useIsOverflow = (ref: any) => {
  const [isOverflow, setIsOverflow] = React.useState(false);

  React.useLayoutEffect(() => {
    const { current } = ref;

    if (current) setIsOverflow(current.scrollWidth > current.clientWidth);
  }, [ref]);

  return isOverflow;
};

export const CodeBlock = ({ children, isBash, ...props }: any) => {
  // const [parsedCode, setParsedCode] = React.useState(children);
  const [copied, setCopied] = React.useState(false);
  const [overflow, setOverflow] = React.useState<any>("hidden");
  const ref = React.useRef(null);
  const isContentOverFlow = useIsOverflow(ref);

  const { onCopy } = useClipboard();

  function handleCopy() {
    onCopy(children);
    setCopied(true);
    // set copied to false after 2 second
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  let bgDarkColor = "#171E2E";
  let bgLightColor = "#f9fafb";

  if (isBash) {
    bgDarkColor = "blueGray.800";
    bgLightColor = "coolGray.200";
  }

  const bgColor = useColorModeValue(bgLightColor, bgDarkColor);
  const borderColor = useColorModeValue("#e5e7eb", "#1e293b");

  const handleMouseOver = () => {
    setOverflow("auto");
  };

  const handleMouseOut = () => {
    setOverflow("hidden");
  };

  return (
    <HStack bg={bgColor} rounded="lg" {...props}>
      <Highlight
        {...defaultProps}
        code={children.trim("\n")}
        language="tsx"
        theme={useColorModeValue(github, paleNight)}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Box flexDirection={"row"} w="100%" justifyContent={"space-between"}>
            <pre
              ref={ref}
              className={className}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              style={{
                ...style,
                borderRadius: "8px",
                padding: "16px",
                paddingBottom:
                  overflow === "auto" && isContentOverFlow ? "8px" : "16px",
                margin: "0px",
                backgroundColor: bgColor,
                borderWidth: "1",
                borderColor: borderColor,
                fontSize: "14px",
                lineHeight: "21px",
                overflowX: overflow,
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
            <Box justifyContent="flex-start" mt="2.5" mx="3">
              <Button
                variant="unstyled"
                _light={{
                  bg: "coolGray.50",
                  _hover: {
                    bg: "coolGray.400",
                    _text: { color: "coolGray.50" },
                    _icon: { color: "coolGray.50" },
                  },
                  _pressed: {
                    bg: "coolGray.400",
                    _text: { color: "coolGray.50" },
                    _icon: { color: "coolGray.50" },
                  },
                  _text: { color: "muted.500" },
                  _icon: { color: "muted.500" },
                }}
                _dark={{
                  bg: "blueGray.700",
                  _hover: { bg: "blueGray.600" },
                  _pressed: { bg: "blueGray.500" },
                  _text: { color: "muted.400" },
                  _icon: { color: "muted.400" },
                }}
                px="2"
                py="1"
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
            </Box>
          </Box>
        )}
      </Highlight>
    </HStack>
  );
};
