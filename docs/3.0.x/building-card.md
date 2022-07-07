---
id: buildingCard
title: Card
---

A card is a flexible and extensible content container. It comes in caries shapes and sizes and here we'll make few of them.

## Most Commonly used design

This card design widely used where the Header consist of Avatar, accompanied by the Title and Sub-title.

Followed by the image which flows till the very edge.

And lastly a description.

```jsx isLive=true
import React from 'react';
import {
  VStack,
  HStack,
  Avatar,
  Image,
  Text,
  NativeBaseProvider,
  AspectRatio,
  Center,
  Box,
  Stack,
  Heading,
} from 'native-base';

function CardComponent() {
  return (
    <Box bg="white" shadow={2} rounded="lg" maxWidth="90%">
      <Image
        source={{
          uri: 'https://sample-example.nativebase.io/static/media/dawki-river.ebbf5434.png',
        }}
        alt="image base"
        resizeMode="cover"
        height={150}
        roundedTop="md"
      />
      <Text bold position="absolute" color="white" top={0} m={[4, 4, 8]}>
        NEWS
      </Text>
      <Stack space={4} p={[4, 4, 8]}>
        <Text color="gray.400">June 22, 2021</Text>
        <Heading size={['md', 'lg', 'md']} noOfLines={2}>
          The Stunning Dawki River in Meghalaya is So Clear That Boats Appear
          Floating in Air
        </Heading>
        <Text lineHeight={[5, 5, 7]} noOfLines={[4, 4, 2]} color="gray.700">
          With lush green meadows, rivers clear as crystal, pine-covered hills,
          gorgeous waterfalls, lakes and majestic forests, the mesmerizing.
          Meghalaya is truly a Nature lover’s paradise…
        </Text>
      </Stack>
    </Box>
  );
}

export function Example() {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <CardComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```
