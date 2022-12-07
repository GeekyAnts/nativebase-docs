import React from "react";
import { Text, Box, useColorModeValue } from "native-base";

export const TableHeadData = ({ children }: any) => {
  return (
    <Box
      flexDirection="row"
      w="100%"
      // flex={children === "Name" || children === "Default" ? "3" : "5"}
      flex="1"
      px="2"
    >
      <Text fontSize="md">{children}</Text>
    </Box>
  );
};
