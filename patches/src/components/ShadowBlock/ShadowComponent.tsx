import React from "react";
import { Center } from "native-base";

interface IShadowComponent {
  value: number;
}

const ShadowComponent = ({ value }: IShadowComponent) => {
  return (
    <Center
      _dark={{ bg: "primary.600" }}
      _light={{ bg: "primary.400" }}
      size="16"
      rounded="4"
      shadow={value}
    >
      {value}
    </Center>
  );
};
export default ShadowComponent;
