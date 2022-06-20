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
import React from 'react';
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
} from 'native-base';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

function SearchBar() {
  return (
    <VStack space={8} width="100%">
      <VStack width="100%" space={2}>
        <Box>Cupertino</Box>
        <Input
          placeholder="Search"
          variant="filled"
          width="100%"
          bg="gray.200"
          borderRadius={10}
          py={1}
          px={2}
          _web={{
            _focus: { borderColor: 'muted.300', style: { boxShadow: 'none' } },
          }}
          InputLeftElement={
            <Icon
              size="sm"
              ml={2}
              size={5}
              color="gray.400"
              as={<Ionicons name="ios-search" />}
            />
          }
        />
      </VStack>

      <VStack width="100%" space={2}>
        <Box>Material</Box>
        <Input
          placeholder="Search People & Places"
          bg="#fff"
          width="100%"
          borderRadius={4}
          py={3}
          px={1}
          fontSize={14}
          _web={{
            _focus: { borderColor: 'muted.300', style: { boxShadow: 'none' } },
          }}
          InputLeftElement={
            <Icon
              size="sm"
              m={2}
              size={6}
              color="gray.400"
              as={<MaterialIcons name="search" />}
            />
          }
          InputRightElement={
            <Icon
              size="sm"
              m={2}
              size={6}
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
    <NativeBaseProvider>
      <Center flex={1} px={2}>
        <SearchBar />
      </Center>
    </NativeBaseProvider>
  );
}
```
