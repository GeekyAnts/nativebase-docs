import React from "react";
import { HStack } from "native-base";
import OpacityComponent from "./OpacityComponent";

const OpacityBlock = () => {
  const opacity = {
    // 0: 0,
    5: 0.05,
    10: 0.1,
    20: 0.2,
    25: 0.25,
    30: 0.3,
    40: 0.4,
    50: 0.5,
    60: 0.6,
    70: 0.7,
    75: 0.75,
    80: 0.8,
    90: 0.9,
    95: 0.95,
    100: 1,
  };
  const tempOpc = Object.entries(opacity);

  return (
    <HStack flexWrap="wrap" space="7">
      {tempOpc.map((val:any, ind) => (
        <OpacityComponent token={val[0]} opacity={val[1]} key={ind} />
      ))}
    </HStack>
  );
};
export default OpacityBlock;
