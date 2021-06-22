---
id: buildingAppBar
title: AppBar
---

The top app bar provides content and actions related to the current screen. It’s used for branding, screen titles, navigation, and actions.

## Example

We can easily create it using basic layout components from NativeBase.

```SnackPlayer name=App%20Bar
import React from "react";
import { VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';

function AppBar(){
  return (
    <Box flex={1} safeArea>
      <HStack bg='primary.600' px={1}
py={2}  justifyContent='space-between' alignItems='center'>
        <HStack space={4} alignItems='center'>
          <IconButton icon={<Icon size="sm" as={<MaterialIcons name='menu' />} color="white" />} />
          <Text color="white" fontSize={20} fontWeight='bold'>Home</Text>
        </HStack>
        <HStack space={2}>
          <IconButton icon={<Icon as={<MaterialIcons name='favorite' />} size='sm' color="white" />} />
          <IconButton icon={<Icon as={<MaterialIcons name='search' />}
          color="white" size='sm'  />} />
          <IconButton icon={<Icon as={<MaterialIcons name='more-vert' />} size='sm' color="white" />} />
        </HStack>
      </HStack>
    </Box>
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
