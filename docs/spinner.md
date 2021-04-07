---
id: spinner
title: Spinner
---

## Implements

- [`ActivityIndicator`](https://reactnative.dev/docs/activityindicator) from [`React Native`](https://reactnative.dev)

## Examples

### Basic

```SnackPlayer name=Spinner%20Usage
import React from 'react';
import { Spinner, HStack, Heading, NativeBaseProvider, Center } from 'native-base';

function SpinnerComponent () {
  return (
    <HStack space={2}>
      <Heading color="primary.300">Spinner</Heading>
      <Spinner accessibilityLabel="Loading posts" />
    </HStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <SpinnerComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Colors

```SnackPlayer name=Spinner%20Colors
import React from 'react';
import { Spinner, HStack, NativeBaseProvider,Center } from 'native-base';

function SpinnerComponent () {
  return (
    <HStack space={2}>
      <Spinner color="danger.500" />
      <Spinner color="green.500" />
      <Spinner color="blue.500" />
      <Spinner color="warning.100" />
    </HStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <SpinnerComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Sizes

```SnackPlayer name=Spinner%20Sizes
import React from 'react';
import { Spinner, HStack, NativeBaseProvider, Center } from 'native-base';

function SpinnerComponent () {
  return (
    <HStack space={3}>
      <Spinner size="sm" />
      <Spinner size="lg" />
    </HStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <SpinnerComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Props

Spinner composes [`ActivityIndicator`](https://reactnative.dev/docs/activityindicator) so all `ActivityIndicator` Props can be passed to Spinner.

| Name | Type                            | Description                                         | Default |
| ---- | ------------------------------- | --------------------------------------------------- | ------- |
| size | `sm` , `lg` , `small` , `large` | Applies box shadow and accepts a number from 0 to 9 | -       |
