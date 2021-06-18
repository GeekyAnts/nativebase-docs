---
id: buildingSearchBar
title: SearchBar
---

Search-bar are one of the most commonly seen variation of input. Here are design to make life easier.

## Example

Here are some examples to show how easily and quickly we can create so many types of search-bars.

<!--
![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b4c4662d-8a9c-48a2-817d-000ff8f5f6b6/Screenshot_2021-01-18_at_7.51.08_PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b4c4662d-8a9c-48a2-817d-000ff8f5f6b6/Screenshot_2021-01-18_at_7.51.08_PM.png) -->

```SnackPlayer name=Search%20Bar
import React from "react";
import { VStack, Input, Button, IconButton, Icon, Text, NativeBaseProvider, Center } from "native-base";
import { FontAwesome5 } from '@expo/vector-icons';

function SearchBar(){
  return (
    <VStack mx={2} space={4} w={{base:'90%',sm:'200'}}>
      <Input
        placeholder="Search..."
        variant="filled"
        borderRadius="pill"
        InputRightElement={
          <Button colorScheme="info" borderRadius="pill">
            <Icon size='sm' as={<FontAwesome5 name="search" />}  />
          </Button>
        }
      />
      <Input
        placeholder="Search..."
        variant="filled"
        InputRightElement={
          <IconButton
            borderRadius="pill"
            icon={<Icon size='sm' as={<FontAwesome5 name="search" />} />}
          />
        }
      />
      <Input
        placeholder="Search..."
        variant="rounded"
        InputRightElement={
          <IconButton
            borderRadius="pill"
            icon={<Icon size='sm' as={<FontAwesome5 name="search" />} />}
          />
        }
      />
    </VStack>
  )
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
