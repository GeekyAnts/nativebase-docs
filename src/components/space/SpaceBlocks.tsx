import React from "react";
import { Box, HStack, Heading, Divider } from "native-base";
import SpaceComponent from "./SpaceComponent";
const SPACING: any = {
  px: "1px",
  0: 0,
  0.5: 2,
  1: 4,
  1.5: 6,
  2: 8,
  2.5: 10,
  3: 12,
  3.5: 14,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
  10: 40,
  12: 48,
  16: 64,
  20: 80,
  24: 96,
  32: 128,
  40: 160,
  48: 192,
  56: 224,
  64: 256,
  72: 288,
  80: 320,
  96: 384,
  "1/2": "50%",
  "1/3": "33.333%",
  "2/3": "66.666%",
  "1/4": "25%",
  "2/4": "50%",
  "3/4": "75%",
  "1/5": "20%",
  "2/5": "40%",
  "3/5": "60%",
  "4/5": "80%",
  "1/6": "16.666%",
  "2/6": "33.333%",
  "3/6": "50%",
  "4/6": "66.666%",
  "5/6": "83.333%",
  full: "100%",
};

const SpaceBlocks = ({}) => {
  return (
    <Box>
      <HStack space="4" px="3">
        <Heading fontSize="md" fontWeight="md" w="10">
          Value
        </Heading>
        <Heading fontSize="md" fontWeight="md" w="20">
          Pixels
        </Heading>
        <Heading fontSize="md" fontWeight="md">
          Representation
        </Heading>
      </HStack>
      <Divider
        my="4"
        _dark={{ bg: "borderColorDark" }}
        _light={{ bg: "borderColorLight" }}
      />
      {Object.keys(SPACING).map((key, index) => (
        <>
          <SpaceComponent
            name={key}
            value={SPACING[key]}
            key={`space-component-${key}-${index}`}
          />
          <Divider
            my="3"
            _dark={{ bg: "borderColorDark" }}
            _light={{ bg: "borderColorLight" }}
          />
        </>
      ))}
    </Box>
  );
};

export default SpaceBlocks;
