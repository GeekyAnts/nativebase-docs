---
id: progress
title: Progress
---

`Progress` is used to display the progress status for a task that takes a long time or consists of several steps.

## Import

```jsx
import { Progress } from 'native-base';
```

## Implements

- [`Box`](box.md)

## Examples

### Basic

```SnackPlayer name=Progress%20Usage
import React from 'react';
import { Box, Progress, NativeBaseProvider, Center } from 'native-base';

function ProgressComponent () {
  return (
    <Box w="90%">
      <Progress value={45} />
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
        <Center flex={1}>
        <ProgressComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Progress colorScheme and Sizes

```SnackPlayer name=Progress%20ColorSchemeSizes
import React from 'react';
import { Box, Progress, NativeBaseProvider, Center } from 'native-base';

function ProgressComponent () {
  return (
    <Box w="90%">
      <Progress size="xs" mb={4} value={45} />
      <Progress size="sm" colorScheme="success" mb={4} value={45} />
      <Progress size="md" colorScheme="dark" mb={4} value={45} />
      <Progress size="lg" colorScheme="danger" mb={4} value={65} />
      <Progress size="xl" colorScheme="warning" mb={4} value={75} />
      <Progress size="2xl" colorScheme="light" mb={4} value={75} />
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <ProgressComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Rounded Progress

```SnackPlayer name=Progress%20Rounded
import React from 'react';
import { Box, Progress, NativeBaseProvider, Center } from 'native-base';

function ProgressComponent () {
  return (
    <Box w="90%">
      <Progress rounded="50" size="lg" colorScheme="blue" mb={4} value={65} />
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <ProgressComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Custom Track Color

```SnackPlayer name=Progress%20Custom Track Color
import React from 'react';
import { Box, Progress, Center, Heading, NativeBaseProvider } from 'native-base';

function ProgressComponent () {
  return (
    <Box w="90%">
      <Progress size="lg" colorScheme="warning" bg="teal.200" mb={4} value={75} />
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <ProgressComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Props

| Name        | Type                               | Description                                                                                                       | Default |
| ----------- | ---------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------- |
| value       | number                             | value of Progress.                                                                                                | -       |
| colorScheme | string                             | The color of the radio when it's checked. This should be one of the color keys in the theme (e.g."green", "red"). | default |
| size        | `2xl`, `xl`,`lg`, `md`, `sm`, `xs` | defines height of Progress                                                                                        | `md`    |
