import { HStack, Text, Box } from "native-base";
import React from "react";

const SpaceComponent = ({ name, value }: any) => {
  return (
    <HStack space="4" px="3">
      <Text minW="10" fontSize="md">
        {name}
      </Text>
      <Text minW="20" fontSize="md">
        {value}
      </Text>
      <Box h="4" w={value + "px"} bg="indigo.600" overflow="auto" />
    </HStack>
  );
};
export default SpaceComponent;
