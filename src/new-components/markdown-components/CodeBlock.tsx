import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";
import { Box, Text } from "native-base";

export const CodeBlock = ({ children }: any) => {
  return (
    <Highlight
      {...defaultProps}
      code={children.props.children}
      language="javascript"
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }: any) => (
        <pre
          className={`overflow-x-auto leading-7 ${className}`}
          style={{ ...style, padding: "20px" }}
        >
          {tokens.map((line: any, i: any) => (
            <Box key={i} {...getLineProps({ line, key: i })} flexDir="row">
              {line.map((token: any, key: any) => {
                return <Text key={key}>{token.content}</Text>;
              })}
            </Box>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
