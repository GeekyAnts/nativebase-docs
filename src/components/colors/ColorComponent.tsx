import React from "react";
import { Heading, Text, Box, HStack, VStack } from "native-base";
const a = {
  50: "#18181b",
  100: "#27272a",
  200: "#3f3f46",
  300: "#52525b",
  400: "#71717a",
  500: "#a1a1aa",
  600: "#d4d4d8",
  700: "#e4e4e7",
  800: "#f4f4f5",
  900: "#fafafa",
};
interface IColorComponent {
  name: string;
  variants: any;
}

const ColorComponent = ({ name, variants }: IColorComponent) => {
  return (
    <Box>
      <Heading mt="10" fontSize="xl">
        {name}
      </Heading>
      <Box mt="4" flexWrap="wrap" flexDir="row" justifyContent="space-between">
        {Object.keys(variants).map((variant, key) => {
          return (
            <Box
              w="200px"
              key={`color-component-${variant}-${key}`}
              mr="4"
              mb="4"
            >
              <HStack>
                <Box bg={variants[variant]} rounded="lg" mr="3" w="12" h="12" />
                <VStack>
                  <Box _text={{ fontWeight: "semibold", fontSize: "md" }}>
                    {`${name !== "singletons" ? name + "." : ""}${variant}`}
                  </Box>
                  <Text fontSize="md" fontWeight="light">
                    {variants[variant]}
                  </Text>
                </VStack>
              </HStack>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
export default ColorComponent;
