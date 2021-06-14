---
id: buildingAppBar
title: AppBar
---

The top app bar provides content and actions related to the current screen. It’s used for branding, screen titles, navigation, and actions.

## Example:

We can easily create it using basic layout components from NativeBase.

```SnackPlayer name=App%20Bar
import React from "react";
import { VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';


function AppBar(){
  return (
    <VStack space={4} flex={1} >
      <HStack bg='primary.300' justifyContent='space-between'>
        <HStack alignItems='center'>
          <IconButton icon={<Icon as={<MaterialIcons name='menu' />} />} />
          <Text fontWeight='bold'>Home</Text>
        </HStack>
        <HStack>
          <IconButton icon={<Icon as={<MaterialIcons name='favorite' />} size='sm' />} />
          <IconButton icon={<Icon as={<MaterialIcons name='search' />} />} size='sm' />
          <IconButton icon={<Icon as={<MaterialIcons name='more-vert' />} size='sm' />} />
        </HStack>
      </HStack>
    </VStack>
  )
}

export default function () {
  return (
    <NativeBaseProvider>
      <AppBar/>
    </NativeBaseProvider>
  );
}
```
