import React from "react";
import { Box, HStack, useColorModeValue } from "native-base";
import { getHeadingIds } from "../../utils";

export const TableRow = ({ children }: any) => {
  return (
    <HStack borderBottomWidth="1" borderColor="gray.700" w="100%" py="3">
      {children}
    </HStack>
  );
};
