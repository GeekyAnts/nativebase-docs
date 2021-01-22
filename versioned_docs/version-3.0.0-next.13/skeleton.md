---
id: skeleton
title: Skeleton
---

`Skeleton` is used to display the loading state of some component.

## Implements

- `Skeleton` composes `Box` so you can pass all `Box` props to change it's style.

## Usage

```SnackPlayer name=Skeleton%20Usage
import React from 'react';
import { Skeleton, Stack, NativeBaseProvider } from 'native-base';
function SkeletonComponent () {
  return (
    <Stack width="90%">
      <Skeleton my={2} height="20px" />
      <Skeleton my={2} height="20px" />
      <Skeleton my={2} height="20px" />
    </Stack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <SkeletonComponent />
    </NativeBaseProvider>
  );
}
```

## Wrapped

```SnackPlayer name=Skeleton%20Wrapped
import React from 'react';
import { Skeleton, Stack, Text, Heading, NativeBaseProvider } from 'native-base';
function SkeletonComponent () {
  return (
    <Stack width="90%">
      <Skeleton>
        <Heading>contents wrapped</Heading>
        <Text>won't be visible</Text>
      </Skeleton>
    </Stack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <SkeletonComponent />
    </NativeBaseProvider>
  );
}
```

## Circle

```SnackPlayer name=Skeleton%20Circle
import React from 'react';
import { SkeletonCircle, NativeBaseProvider } from 'native-base';
function SkeletonComponent () {
  return <SkeletonCircle size="100" />;
}
export default function () {
  return (
    <NativeBaseProvider>
      <SkeletonComponent />
    </NativeBaseProvider>
  );
}
```

## Text

```SnackPlayer name=Skeleton%20Text
import React from 'react';
import { SkeletonText, NativeBaseProvider } from 'native-base';
function SkeletonComponent () {
  return <SkeletonText noOfLines={5} />;
}
export default function () {
  return (
    <NativeBaseProvider>
      <SkeletonComponent />
    </NativeBaseProvider>
  );
}
```

## Color

```SnackPlayer name=Skeleton%20Text
import React from 'react';
import { Skeleton, VStack, NativeBaseProvider } from 'native-base';
function SkeletonComponent () {
  return (
    <VStack space={5} width="90%">
      <Skeleton startColor="pink.6" endColor="purple.4" height="20px" />
      <Skeleton startColor="#0dead0" endColor="#0face0" height="20px" />
      <Skeleton startColor="warning.2" endColor="danger.2" height="20px" />
    </VStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <SkeletonComponent />
    </NativeBaseProvider>
  );
}
```

## IsLoaded

```SnackPlayer name=Skeleton%20IsLoaded
import React from 'react';
import { Skeleton, Text, NativeBaseProvider } from 'native-base';
function SkeletonComponent () {
  return (
    <Skeleton isLoaded>
      <Text>NativeBase is cool</Text>
    </Skeleton>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <SkeletonComponent />
    </NativeBaseProvider>
  );
}
```

## Props

### Skeleton

| Name       | Type    | Description                                                     | Default |
| ---------- | ------- | --------------------------------------------------------------- | ------- |
| isLoaded   | boolean | If true, it'll render its children with a nice fade transition. | -       |
| startColor | string  | The color at the animation start.                               | -       |
| endColor   | string  | The color at the animation end.                                 | -       |
| Component  |         |                                                                 |         |

### SkeletonCircle

| Name       | Type           | Description                                                     | Default |
| ---------- | -------------- | --------------------------------------------------------------- | ------- |
| isLoaded   | boolean        | If true, it'll render its children with a nice fade transition. | -       |
| startColor | string         | The color at the animation start.                               | -       |
| endColor   | string         | The color at the animation end.                                 | -       |
| size       | number, string | the size of the circle.                                         | -       |
| Component  |                |                                                                 |         |

### SkeletonText

| Name       | Type    | Description                                                     | Default |
| ---------- | ------- | --------------------------------------------------------------- | ------- |
| isLoaded   | boolean | If true, it'll render its children with a nice fade transition. | -       |
| startColor | string  | The color at the animation start.                               | -       |
| endColor   | string  | The color at the animation end.                                 | -       |
| noOfLines  | number  | Number of lines for paragraph.                                  | -       |
| lineSize   | number  | the height of each line.                                        | -       |
| Component  |         |                                                                 |         |
