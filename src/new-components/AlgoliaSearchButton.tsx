import React from "react";
import { HStack, SearchIcon, Text, Pressable } from "native-base";

import "@docsearch/css";

export default function AlgoliaSearchButton(props: any) {
  return (
    <Pressable
      px="3"
      py="1.5"
      rounded="40px"
      _dark={{ bg: "blueGray.700" }}
      _light={{ bg: "blueGray.200" }}
      onPress={() => {
        // @ts-ignore
        document.getElementsByClassName("DocSearch-Button")[0]?.click();
      }}
    >
      {({ isHovered, isFocused }: any) => {
        return (
          <HStack justifyContent="space-between" minW="120" alignItems="center">
            <HStack alignItems="center" space="1">
              <SearchIcon
                size="4"
                _dark={{ color: isHovered ? "coolGray.100" : "coolGray.400" }}
                _light={{ color: isHovered ? "coolGray.600" : "coolGray.500" }}
              />
              <Text
                fontSize="md"
                _dark={{ color: isHovered ? "coolGray.100" : "coolGray.400" }}
                _light={{ color: isHovered ? "coolGray.600" : "coolGray.500" }}
              >
                Search
              </Text>
            </HStack>
            <HStack alignItems="center" space="1">
              <Text
                _dark={{ color: isHovered ? "coolGray.100" : "coolGray.400" }}
                _light={{ color: isHovered ? "coolGray.600" : "coolGray.500" }}
              >
                ⌘
              </Text>
              <Text
                _dark={{ color: isHovered ? "coolGray.100" : "coolGray.400" }}
                _light={{ color: isHovered ? "coolGray.600" : "coolGray.500" }}
              >
                K
              </Text>
            </HStack>
          </HStack>
        );
      }}
    </Pressable>
  );
}
