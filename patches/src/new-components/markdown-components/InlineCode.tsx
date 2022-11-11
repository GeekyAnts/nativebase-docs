import React from "react";
import { Text } from "native-base";
export const InlineCode = ({ children }: any) => {
  return (
    <Text
      _light={{ color: "black" }}
      _dark={{ color: "coolGray.50" }}
      fontFamily="monospace"
      // fontWeight="semibold"
    >
      {children}
    </Text>
  );
};
