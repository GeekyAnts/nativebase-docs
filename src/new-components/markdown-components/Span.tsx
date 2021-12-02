import React from "react";
import { Text, useColorModeValue } from "native-base";
export const Span = ({ children }: any) => {
  return (
    <Text
      color={useColorModeValue("gray.700", "gray.100")}
      fontSize="md"
      lineHeight="30"
    >
      {children}
    </Text>
  );
};
