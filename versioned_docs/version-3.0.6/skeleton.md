---
id: skeleton
title: Skeleton
---

import { ComponentTheme } from '../src/components';

`Skeleton` is used to display the loading state of a component.

## Implements

- [`Box`](box.md)

## Examples

### Usage

```SnackPlayer name=Skeleton%20Usage
import React from 'react';
import { NativeBaseProvider, Skeleton, Stack, Text, Center } from 'native-base';
function SkeletonComponent() {
  return (
    <Stack width="90%">
      <Skeleton variant="text" height={6} />
      <Skeleton my={2} height={6} variant="rect" />
      <Skeleton my={2} height={6} variant="circle" size={20} />
    </Stack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <SkeletonComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Color

```SnackPlayer name=Skeleton%20Color
import React from 'react';
import { NativeBaseProvider, Skeleton, VStack, Center } from 'native-base';
function SkeletonComponent () {
  return (
    <VStack space={5} width="90%">
      <Skeleton startColor="pink.600" endColor="purple.400" height="20px" />
      <Skeleton startColor="#0dead0" endColor="#0face0" height="20px" />
      <Skeleton
        startColor="warning.200"
        endColor="danger.200"
        size={20}
        variant="circle"
      />
    </VStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <SkeletonComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### IsLoaded

```SnackPlayer name=Skeleton%20IsLoaded
import React from 'react';
import { NativeBaseProvider, Box, Skeleton, Stack, Text, Avatar, HStack, Image, Center } from 'native-base';
function Composition({ loaded }: any) {
  return (
    <Stack size={200}>
      <HStack alignItems="center">
        {loaded ? (
          <Avatar
            name="Ankur Kedia"
            source={{
              uri: 'https://nativebase.github.io/img/icon.png',
            }}
          />
        ) : (
          <Skeleton variant="circle" size={12} />
        )}
        <Text fontWeight="bold" fontSize="lg" ml={2}>
          {loaded ? 'NativeBase' : <Skeleton>NativeBase</Skeleton>}
        </Text>
      </HStack>
      <Box size={200} mt={1}>
        {loaded ? (
          <Image
            source={{
              uri: 'https://www.w3schools.com/css/img_lights.jpg',
            }}
            alt="NativeBase logo"
          />
        ) : (
          <Skeleton variant="rect" height="100%" />
        )}
      </Box>
    </Stack>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <HStack space={10}>
          <Composition />
          <Composition loaded />
        </HStack>
      </Center>
    </NativeBaseProvider>
  );
}
```

## Props

`Skeleton` composes [`Box`](box.md) so you can pass all [`Box props`](box.md#props) to it.

| Name       | Type                     | Description                       | Default |
| ---------- | ------------------------ | --------------------------------- | ------- |
| startColor | string                   | The color at the animation start. | -       |
| endColor   | string                   | The color at the animation end.   | -       |
| variant    | `circle`, `rect`, `text` | Variation of Skeleton to use      | `text`  |
| size       | number, string           | The size of the Skeleton          | -       |

## Styling

<ComponentTheme name="skeleton" />
