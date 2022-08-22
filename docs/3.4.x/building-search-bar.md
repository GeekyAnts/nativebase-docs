---
id: building-search-bar
title: SearchBar
---

Search-bar are one of the most commonly seen variation of input. Here are design to make life easier.

## Example

Here are some examples to show how easily and quickly we can create so many types of search-bars.

<!--
![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b4c4662d-8a9c-48a2-817d-000ff8f5f6b6/Screenshot_2021-01-18_at_7.51.08_PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b4c4662d-8a9c-48a2-817d-000ff8f5f6b6/Screenshot_2021-01-18_at_7.51.08_PM.png) -->

```jsx isLive=true
import React from "react";
import {
  VStack,
  Input,
  Button,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  Divider,
  Heading,
} from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

function SearchBar() {
  return (
    <VStack
      my="4"
      space={5}
      w="100%"
      maxW="300px"
      divider={
        <Box px="2">
          <Divider />
        </Box>
      }
    >
      <VStack w="100%" space={5} alignSelf="center">
        <Heading fontSize="lg">Cupertino</Heading>
        <Input
          placeholder="Search"
          variant="filled"
          width="100%"
          borderRadius="10"
          py="1"
          px="2"
          InputLeftElement={
            <Icon
              ml="2"
              size="4"
              color="gray.400"
              as={<Ionicons name="ios-search" />}
            />
          }
        />
      </VStack>

      <VStack w="100%" space={5} alignSelf="center">
        <Heading fontSize="lg">Material</Heading>
        <Input
          placeholder="Search People & Places"
          width="100%"
          borderRadius="4"
          py="3"
          px="1"
          fontSize="14"
          InputLeftElement={
            <Icon
              m="2"
              ml="3"
              size="6"
              color="gray.400"
              as={<MaterialIcons name="search" />}
            />
          }
          InputRightElement={
            <Icon
              m="2"
              mr="3"
              size="6"
              color="gray.400"
              as={<MaterialIcons name="mic" />}
            />
          }
        />
      </VStack>
    </VStack>
  );
}

export function Example() {
  return (
    <Center flex={1} px="2">
      <SearchBar />
    </Center>
  );
}
```
