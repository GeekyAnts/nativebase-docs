import React from "react";
import { Text, Box, useColorModeValue } from "native-base";

export const TableData = ({ children }: any) => {
  return (
    <Box flex="1" px="2">
      <Text fontSize="sm">{children}</Text>
    </Box>
  );
};
