---
id: building-footer-tabs
title: Footer
---

With NativeBase v3 we have removed FooterTab components because as it's very simple to create it using HStack component. Here is an example of how we can make Footer in our Apps.

## Example

```jsx isLive=true
import React from 'react';

import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  HStack,
  Center,
  Pressable,
} from 'native-base';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export function Example() {
  const [selected, setSelected] = React.useState(1);
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="white" safeAreaTop>
           
        <HStack bg="primary.500" alignItems="center" safeAreaBottom shadow={6}>
          <Pressable
            cursor="pointer"
            opacity={selected === 0 ? 1 : 0.5}
            py={2}
            flex={1}
            onPress={() => setSelected(0)}
          >
            <Center>
              <Icon
                mb={1}
                as={<MaterialCommunityIcons name="heart" />}
                color="white"
                size="xs"
              />

              <Text color="white" fontSize={14}>
                Favorites
              </Text>
            </Center>
          </Pressable>
          <Pressable
            cursor="pointer"
            opacity={selected === 1 ? 1 : 0.5}
            py={2}
            flex={1}
            onPress={() => setSelected(1)}
          >
            <Center>
              <Icon
                mb={1}
                as={<MaterialCommunityIcons name="music-note" />}
                color="white"
                size="xs"
              />

              <Text color="white" fontSize={14}>
                Music
              </Text>
            </Center>
          </Pressable>
          <Pressable
            cursor="pointer"
            opacity={selected === 2 ? 1 : 0.6}
            py={2}
            flex={1}
            onPress={() => setSelected(2)}
          >
            <Center>
              <Icon
                mb={1}
                as={<MaterialIcons name="location-pin" />}
                color="white"
                size="xs"
              />

              <Text color="white" fontSize={14}>
                Places
              </Text>
            </Center>
          </Pressable>
          <Pressable
            cursor="pointer"
            opacity={selected === 3 ? 1 : 0.5}
            py={2}
            flex={1}
            onPress={() => setSelected(3)}
          >
            <Center>
              <Icon
                mb={1}
                as={<MaterialCommunityIcons name="newspaper" />}
                color="white"
                size="xs"
              />
              <Text color="white" fontSize={14}>
                News
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
}
```
