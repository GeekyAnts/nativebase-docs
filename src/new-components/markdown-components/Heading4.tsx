import React from "react";
import { Heading, useColorModeValue } from "native-base";
import { getHeadingIds } from "../../utils";

export const Heading4 = ({ children }: any) => {
  const idText = getHeadingIds(children);
  return (
    <Heading
      my="2"
      fontSize="md"
      // fontWeight="normal"
      color={useColorModeValue("gray.700", "gray.300")}
      // @ts-ignore
      nativeID={idText}
    >
      {children}
    </Heading>
  );
};
