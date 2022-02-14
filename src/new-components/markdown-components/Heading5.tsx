import React from "react";
import { Heading, useColorModeValue } from "native-base";
import { getHeadingMeta } from "../../utils";

export const Heading5 = ({ children }: any) => {
  const [content, id] = getHeadingMeta(children);
  return (
    <>
      <Heading
        fontSize="md"
        color={useColorModeValue("gray.700", "gray.300")}
        // @ts-ignore
        nativeID={"h5" + id}
      >
        {content}
      </Heading>
    </>
  );
};
