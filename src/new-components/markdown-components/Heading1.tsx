import React from "react";
import { Heading, useColorModeValue } from "native-base";
import { getHeadingIds } from "../../utils";

export default function Heading1({ children }: any) {
  const idText = getHeadingIds(children);
  return (
    <Heading
      color="cyan.700"
      fontSize="xl"
      // @ts-ignore
      nativeID={idText}
    >
      {children}
    </Heading>
  );
}
