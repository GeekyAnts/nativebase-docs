import React from "react";
import { Box, ChevronRightIcon, HStack, Icon, Text } from "native-base";
import { AntDesign } from "@expo/vector-icons";
export const Li = ({ children }: any) => {
  return (
    <HStack space="3" alignItems="center">
      <Box bg="cyan.900:alpha.50" rounded="full" alignSelf="flex-start" p="2">
        <Icon as={AntDesign} name="caretright" size="2" color="cyan.500" />
      </Box>
      <Text>{children}</Text>
    </HStack>
  );
};
