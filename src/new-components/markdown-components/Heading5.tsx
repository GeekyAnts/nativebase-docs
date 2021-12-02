import React from "react";
import { Heading, useColorModeValue } from "native-base";
import { getHeadingIds } from "../../utils";

export const Heading5 = ({ children }: any) => {
  const idText = getHeadingIds(children);
  return (
    <Heading
      fontSize="md"
      color={useColorModeValue("gray.700", "gray.300")}
      // @ts-ignore
      nativeID={idText}
    >
      {children}
    </Heading>
  );
};
