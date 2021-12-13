import { HStack, Text, Box } from "native-base";
import React from "react";

const SpaceComponent = ({ name, value }) => {
  return (
    <HStack space="4" px="3">
      <Text w="20" fontSize="md">
        {name}
      </Text>
      <Text w="20" fontSize="md">
        {value}
      </Text>
      <Box h="4" w={value + "px"} bg="indigo.600" />
    </HStack>
  );
};
export default SpaceComponent;
