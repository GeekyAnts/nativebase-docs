---
id: spinner
title: Spinner
---

## Implements

- `ActivityIndicator` from react-native
- `color`

## Example

```SnackPlayer name=Spinner%20Usage
import React from 'react';
import { Spinner, NativeBaseProvider } from 'native-base';

function SpinnerComponent () {
  return <Spinner />;
}
export default function () {
  return (
    <NativeBaseProvider>
      <SpinnerComponent />
    </NativeBaseProvider>
  );
}
```

## Example (Colors)

```SnackPlayer name=Spinner%20Example(colors)
import React from 'react';
import { Spinner, HStack, NativeBaseProvider } from 'native-base';

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
      <SpinnerComponent />
    </NativeBaseProvider>
  );
}
```

## Example (Sizes)

```SnackPlayer name=Spinner%20Example(Sizes)
import React from 'react';
import { Spinner, HStack, NativeBaseProvider } from 'native-base';

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
      <SpinnerComponent />
    </NativeBaseProvider>
  );
}
```

## Extra props

- `style`: Applies user-defined styles and accepts a `stylesheet`.
