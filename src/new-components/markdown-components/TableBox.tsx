import React from "react";
import { Box, ScrollView, useColorModeValue } from "native-base";
import { getHeadingIds } from "../../utils";

export const TableBox = ({ children }: any) => {
  return (
    <ScrollView horizontal={true}>
      <Box w="800px">{children}</Box>
    </ScrollView>
  );
};
