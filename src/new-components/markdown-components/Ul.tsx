import React from "react";
import { VStack } from "native-base";
export const Ul = ({ children }: any) => {
  return (
    <VStack space="4" my="2">
      {children}
    </VStack>
  );
};
