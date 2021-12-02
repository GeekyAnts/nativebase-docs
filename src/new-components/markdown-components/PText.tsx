import React from "react";
import { Text, useColorModeValue } from "native-base";
export const PText = ({ children }: any) => {
  return (
    <Text
      color={useColorModeValue("gray.700", "gray.300")}
      mb="7"
      // for p tag
      fontSize="md"
      lineHeight="30"
    >
      {children}
    </Text>
  );
};
