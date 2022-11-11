import React from "react";
import { HStack } from "native-base";
import ShadowComponent from "./ShadowComponent";

const ShadowBlock = () => {
  const shadows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <HStack flexWrap="wrap" space="7">
      {shadows.map((val, ind) => (
        <ShadowComponent value={val} key={ind} />
      ))}
    </HStack>
  );
};
export default ShadowBlock;
