import React from "react";
import { Center } from "native-base";

interface IOpacityComponent {
  token: number;
  opacity: number;
}

const OpacityComponent = ({ token, opacity }: IOpacityComponent) => {
  return (
    <Center _light={{bg:`primary.400:alpha.${token}`}} _dark={{bg:`primary.600:alpha.${token}`}} size="16" rounded="4">
      {token}
    </Center>
  );
};
export default OpacityComponent;
