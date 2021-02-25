---
id: buildingSearchBar
title: Building SearchBar
---

Search-bar are one of the most commonly seen variation of input. Here are design to make life easier.

## Example:

Here are some examples to should easily and quickly we can create so many types of search-bars.

<!--
![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b4c4662d-8a9c-48a2-817d-000ff8f5f6b6/Screenshot_2021-01-18_at_7.51.08_PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b4c4662d-8a9c-48a2-817d-000ff8f5f6b6/Screenshot_2021-01-18_at_7.51.08_PM.png) -->

```SnackPlayer name=Search%20Bar
import React from "react";
import { VStack, Input, Button, Icon, Text, NativeBaseProvider, Center } from "native-base";

function SearchBar(){
return   <VStack w="90%" space={4}>
      <Input
        placeholder="Search..."
        variant="filled"
        size="lg"
        w="100%"
        borderRadius="pill"
        InputRightElement={
          <Button colorScheme="info" borderRadius="pill" height={12}>
            <Icon type="FontAwesome5" name="search" />
          </Button>
        }
      />
      <Input
        placeholder="Search..."
        variant="filled"
        size="lg"
        w="100%"
        InputRightElement={
          <Button height={12} bg="transparent">
            <Icon type="FontAwesome5" name="search" />
          </Button>
        }
      />
      <Input
        placeholder="Search..."
        variant="rounded"
        size="lg"
        w="100%"
        InputRightElement={
          <Button
            border={1}
            borderRadius="pill"
            height={12}
            width={16}
            bg="transparent"
          >
            <Icon type="FontAwesome5" name="search" />
          </Button>
        }
      />
    </VStack>
}

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <SearchBar/>
      </Center>
    </NativeBaseProvider>
  );
}
```
