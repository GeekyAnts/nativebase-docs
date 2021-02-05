---
id: heading
title: Heading
---

Headings are used for rendering headlines.

`Heading` composes `Text` so you can use all the style props.

## Implements

- `Text` from [react-native](https://reactnative.dev/docs/text)

## Import

```jsx
import { Heading } from 'native-base';
```

## Example

```SnackPlayer name=Heading%20Example
import React from 'react';
import { Heading, NativeBaseProvider } from 'native-base';

function HeadingComponent () {
  return <Heading> I'm a Heading</Heading>;
}
export default function () {
  return (
    <NativeBaseProvider>
      <HeadingComponent />
    </NativeBaseProvider>
  );
}
```

## Example (Sizes)

```SnackPlayer name=Heading%20Example(Sizes)
import React from 'react';
import { Heading, VStack, NativeBaseProvider } from 'native-base';

function HeadingComponent () {
  return (
    <VStack>
      <Heading size="2xl">(2xl) In love with React Native</Heading>
      <Heading size="xl">(xl) In love with React Native</Heading>
      <Heading size="lg">(lg) In love with React Native</Heading>
      <Heading size="md">(md) In love with React Native</Heading>
      <Heading size="sm">(sm) In love with React Native</Heading>
      <Heading size="xs">(xs) In love with React Native</Heading>
    </VStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <HeadingComponent />
    </NativeBaseProvider>
  );
}
```

## Example (Truncate)

```SnackPlayer name=Heading%20Example(Truncate)
import React from 'react';
import { Heading, NativeBaseProvider } from 'native-base';

function HeadingComponent () {
  return (
    <Heading isTruncated>
      Basic text writing, including headings, body text, lists, and more.
    </Heading>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <HeadingComponent />
    </NativeBaseProvider>
  );
}
```

## Example (Overriden)

```SnackPlayer name=Heading%20Example(Overriden)
import React from 'react';
import { Heading, NativeBaseProvider } from 'native-base';

function HeadingComponent () {
  return (
    <Heading size="lg" fontSize={50}>
      I'm overriding this heading
    </Heading>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <HeadingComponent />
    </NativeBaseProvider>
  );
}
```

## Example (Composition)

```SnackPlayer name=Heading%20Example(Composition)
import React from 'react';
import { Box, Text, Button, Heading, NativeBaseProvider } from 'native-base';

function HeadingComponent () {
  return (
    <Box>
      <Heading mb={4}>Modern online and offline payments for Africa</Heading>
      <Text fontSize="xl">
        Paystack helps businesses in Africa get paid by anyone, anywhere in the
        world
      </Text>
      <Button size="lg" colorScheme="green" mt="24px">
        Create a free account
      </Button>
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <HeadingComponent />
    </NativeBaseProvider>
  );
}
```

## Props

### Heading

| Name | Type                    | Description              | Default |
| ---- | ----------------------- | ------------------------ | ------- |
| size | 2xl, lg, md, sm, xl, xs | The size of the heading. | xl      |
