---
id: heading
title: Heading
---

Headings are used for rendering headlines. `Heading` composes [`Text`](text.md) so you can use all the style props.

## Implements

- [`Text`](https://reactnative.dev/docs/text) from [React Native](https://reactnative.dev)

## Import

```jsx
import { Heading } from 'native-base';
```

## Example

### Basic

```SnackPlayer name=Heading%20Example
import React from 'react';
import { Heading, NativeBaseProvider, Center } from 'native-base';

function HeadingComponent () {
  return <Heading> I'm a Heading</Heading>;
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <HeadingComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Sizes

```SnackPlayer name=Heading%20Example(Sizes)
import React from 'react';
import { Heading, VStack, NativeBaseProvider, Center } from 'native-base';

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
      <Center flex={1}>
        <HeadingComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Truncate

```SnackPlayer name=Heading%20Example(Truncate)
import React from 'react';
import { Heading, NativeBaseProvider, Center } from 'native-base';

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
      <Center flex={1}>
        <HeadingComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Override

```SnackPlayer name=Heading%20Example(Overriden)
import React from 'react';
import { Heading, NativeBaseProvider, Center } from 'native-base';

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
      <Center flex={1}>
        <HeadingComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Composition

```SnackPlayer name=Heading%20Example(Composition)
import React from 'react';
import { Box, Text, Button, Heading, NativeBaseProvider, Center } from 'native-base';

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
      <Center flex={1}>
        <HeadingComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Props

| Name | Type                                | Description              | Default |
| ---- | ----------------------------------- | ------------------------ | ------- |
| size | `2xl`, `xl`, `lg`, `md`,`sm`, `xs`, | The size of the heading. | `xl`    |
