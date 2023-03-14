import React from "react";
import { Heading, useColorModeValue } from "native-base";
import { getHeadingMeta } from "../../utils";

export const Heading1 = ({ children }: any) => {
  const [content, id] = getHeadingMeta(children);
  return (
    <Heading nativeID="h1" fontSize="3xl" color={useColorModeValue("gray.700", "gray.300")} />
  );
};
