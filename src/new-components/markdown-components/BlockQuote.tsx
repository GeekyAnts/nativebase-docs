import React from "react";
import { HStack, Text } from "native-base";
import { QuoteCloseIcon, QuoteOpenIcon } from "../../icons";
export const BlockQuote = ({ children }: any) => {
  return (
    <HStack w="100%" justifyContent="center" mb="8">
      <QuoteOpenIcon alignSelf="flex-start" />
      <Text mx="3" fontSize="lg" py="2.5" alignSelf="center" color="coolGray.400">
        {children.props.children}
      </Text>
      <QuoteCloseIcon alignSelf="flex-end" />
    </HStack>
  );
};
