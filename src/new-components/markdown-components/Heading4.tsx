import React from "react";
import { Heading, useColorModeValue } from "native-base";
import { getHeadingMeta } from "../../utils";

export const Heading4 = ({ children }: any) => {
  const [content, id] = getHeadingMeta(children);
  return (
    <>
      <Heading display="none" nativeID="DocSearch-h4" >{content}</Heading>
      <Heading
        my="2"
        fontSize="md"
        color={useColorModeValue("gray.700", "gray.300")}
        // @ts-ignore
        nativeID={id}
      >
        {content}
      </Heading>
    </>
  );
};
