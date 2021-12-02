import React from "react";
import { Heading, useColorModeValue } from "native-base";
import { getHeadingIds } from "../../utils";


export const Heading1 = ({ children }: any) => {
  const idText = getHeadingIds(children);
  return (
    <Heading
      fontSize="3xl"
      color={useColorModeValue("gray.700", "gray.300")} />
    )
};

