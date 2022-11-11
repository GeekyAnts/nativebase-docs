import React from "react";
import { Box, HStack, useColorModeValue } from "native-base";

export const TableRow = ({ children }: any) => {
  return (
    <HStack
      borderBottomWidth="1"
      _dark={{ borderColor: "borderColorDark" }}
      _light={{ borderColor: "borderColorLight" }}
      w="100%"
      py="3"
    >
      {children}
    </HStack>
  );
};
