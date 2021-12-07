import React from "react";
import * as RN from "react-native";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";
import * as NBComponents from "native-base";

import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

export const CodeBlock = ({ children, isLive = true }: any) => {
  const Wrapper = (props: any) => {
    return (
      <NBComponents.Center flex={1} px="3">
        {props.children}
      </NBComponents.Center>
    );
  };
  const scope = { ...NBComponents, Wrapper, ...React }; // add custom deps as and when required. more info here -> https://github.com/FormidableLabs/react-live#liveprovider-
  
  // @ts-ignore
  delete scope.default;
  return (
    <>
      {isLive ? (
        <LiveProvider
          scope={scope}
          code={children}
          transformCode={(a) => {
            return `
          function App() {
            ${a}
            return (<Example/>);
          }
          `;
          }}
        >
          <LiveEditor />
          <LiveError />
          <LivePreview />
        </LiveProvider>
      ) : (
        // <div>{children}</div>
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
                <NBComponents.Box
                  key={i}
                  {...getLineProps({ line, key: i })}
                  flexDir="row"
                >
                  {line.map((token: any, key: any) => {
                    return (
                      <NBComponents.Text key={key}>
                        {token.content}
                      </NBComponents.Text>
                    );
                  })}
                </NBComponents.Box>
              ))}
            </pre>
          )}
        </Highlight>
      )}
    </>
  );
};
