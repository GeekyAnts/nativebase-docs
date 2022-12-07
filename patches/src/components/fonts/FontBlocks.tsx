import React from "react";
import FontSizeComponent from "./FontSizeComponent";
import { Box, useColorModeValue } from "native-base";
const FONT_SIZES: any = {
  "2xs": 10,
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  "2xl": 24,
  "3xl": 30,
  "4xl": 36,
  "5xl": 48,
  "6xl": 60,
  "7xl": 72,
  "8xl": 96,
  "9xl": 128,
};

const FontBlocks = ({}) => {
  return (
    <Box bg={useColorModeValue("#f9fafb", "#171E2E")} borderRadius="md" p="4">
      {Object.keys(FONT_SIZES).map((key, index) => (
        <FontSizeComponent
          name={key}
          value={FONT_SIZES[key]}
          key={`space-component-${key}-${index}`}
        />
      ))}
    </Box>
  );
};

export default FontBlocks;
