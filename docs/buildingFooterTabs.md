---
id: buildingFooterTabs
title: Footer
---

With NativeBase v3 we have removed FooterTab components because as it's very simple to create it using HStack component. Here is an example of how we can make Footer in our Apps.

## Example

```SnackPlayer name=Footer dependencies=react-native-linear-gradient
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
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign, Ionicons, FontAwesome } from '@expo/vector-icons';

export default function App() {
  const [selected, setSelected] = React.useState(1);
  return (
    <NativeBaseProvider>
       <Box flex={1} bg="white" safeAreaTop>
        <Center flex={1}>
          <Text fontSize="lg">Body Text</Text>
        </Center>
        <HStack bg="purple.500" alignItems="center" safeAreaBottom shadow={6}>
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
                as={<AntDesign name="heart" />}
                color="white"
                size="sm"
              />

              <Text color="white">Favorites</Text>
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
                as={<Ionicons name="musical-note" />}
                color="white"
                size="sm"
              />

              <Text color="white">Music</Text>
            </Center>
          </Pressable>
          <Pressable
            cursor="pointer"
            opacity={selected === 2 ? 1 : 0.5}
            py={2}
            flex={1}
            onPress={() => setSelected(2)}
          >
            <Center>
              <Icon
                mb={1}
                as={<Ionicons name="location-sharp" />}
                color="white"
                size="sm"
              />

              <Text color="white">Places</Text>
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
                as={<FontAwesome name="newspaper-o" />}
                color="white"
                size="sm"
              />
              <Text color="white">News</Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
}

```
