import React, { useContext } from "react";
import { Box, useColorModeValue, HStack, Icon, Text } from "native-base";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { AdmonitionContext } from "./Admonition";

export const Li = ({ children }: any) => {
  const { admonitionStatus } = useContext(AdmonitionContext);
  const bgColor = (admonitionStatus: any) => {
    switch (admonitionStatus) {
      case "info":
        return useColorModeValue("info.500:alpha.50", "info.900:alpha.50");
      case "note":
        return useColorModeValue("indigo.500:alpha.50", "indigo.900:alpha.50");
      case "tip":
        return useColorModeValue("emerald.500:alpha.50", "emerald.900:alpha.50");
      default:
        return useColorModeValue(
          "primary.500:alpha.50",
          "primary.900:alpha.50"
        );
    }
  };
  const iconColor = (admonitionStatus: any) => {
    switch (admonitionStatus) {
      case "info":
        return useColorModeValue("info.900", "info.500");
      case "note":
        return useColorModeValue("indigo.900", "indigo.500");
      case "tip":
        return useColorModeValue("emerald.900", "emerald.400");
      default:
        return useColorModeValue("primary.900", "primary.500");
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
          <Icon
            as={AntDesign}
            name="caretright"
            size="2"
            _light={{ color: "primary.900" }}
            _dark={{ color: "primary.500" }}
          />
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
      <Text
        fontSize="md"
        _light={{ color: "coolGray.700" }}
        _dark={{ color: "coolGray.300" }}
      >
        {children}
      </Text>
    </HStack>
  );
};
