import React, { useContext } from "react";
import { Box, ChevronRightIcon, HStack, Icon, Text } from "native-base";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { AdmonitionContext } from "./Admonition";

export const Li = ({ children }: any) => {
  const { admonitionStatus } = useContext(AdmonitionContext);
  const bgColor = (admonitionStatus: any) => {
    switch (admonitionStatus) {
      case "info":
        return "info.900:alpha.50";
      case "note":
        return "indigo.900:alpha.50";
      case "tip":
        return "emerald.900:alpha.50";
      default:
        return "cyan.900:alpha.50";
    }
  };
  const iconColor = (admonitionStatus: any) => {
    switch (admonitionStatus) {
      case "info":
        return "info.500";
      case "note":
        return "indigo.500";
      case "tip":
        return "emerald.400";
      default:
        return "cyan.500";
    }
  };
  const getIcon = (admonitionStatus: any) => {
    if (admonitionStatus === "") {
      return (
        <Box
          bg={bgColor(admonitionStatus)}
          rounded="full"
          alignSelf="flex-start"
          p="2"
          mt="1"
        >
          <Icon as={AntDesign} name="caretright" size="2" color="cyan.500" />
        </Box>
      );
    } else {
      return (
        <Box
          bg={bgColor(admonitionStatus)}
          rounded="full"
          alignSelf="flex-start"
          p="1"
          mt="1"
        >
          <Icon
            as={MaterialIcons}
            name="check"
            size="4"
            color={iconColor(admonitionStatus)}
          />
        </Box>
      );
    }
  };
  return (
    <HStack space="3" alignItems="center">
      {getIcon(admonitionStatus)}
      <Text fontSize="md" color="coolGray.300">{children}</Text>
    </HStack>
  );
};
