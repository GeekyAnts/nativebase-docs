import React from "react";
import { Box, HStack, useColorModeValue } from "native-base";
import { getHeadingIds } from "../../utils";

export const TableHead = ({ children }: any) => {
  return <HStack>{children}</HStack>;
};
