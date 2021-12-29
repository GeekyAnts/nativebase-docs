import React from "react";
import { VStack } from "native-base";
export const Ul = ({ children }: any) => {
  return (
    <VStack space="3" my="2">
      {children}
    </VStack>
  );
};
