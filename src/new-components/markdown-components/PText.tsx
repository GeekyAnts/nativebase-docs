import React from "react";
import { Text } from "native-base";
export const PText = ({ children }: any) => {
  return (
    <Text
      _dark={{ color: "coolGray.400" }}
      _light={{ color: "coolGray.700" }}
      mb="7"
      fontSize="md"
    >
      {children}
    </Text>
  );
};
