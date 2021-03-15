`ZStack` aligns items absolutely in the z-axis.

## Implements

- [`View`](view.md)

## Import

```jsx
import { ZStack } from 'native-base';
```

## Examples

```SnackPlayer name=ZStack%20Usage
import React from "react";
import { ZStack, Box, NativeBaseProvider, Center } from "native-base";

function ZStackComponent() {
  return (
    <ZStack mt={-20} ml={-20}>
      <Box bg="emerald.400" size={20} rounded="lg" />
      <Box bg="rose.400" mt={5} ml={5} size={20} rounded="lg" shadow={8} />
      <Box
        bg="lightBlue.400"
        mt={10}
        ml={10}
        size={20}
        rounded="lg"
        shadow={8}
      />
    </ZStack>
  );
}

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <ZStackComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

<br/>

You can pass `alignItems="center"` `justifyContent="center"` to vertically and horizontally center the children.

```SnackPlayer name=ZStack%20Center
import React from "react";
import { ZStack, Box, Text, NativeBaseProvider, Center } from "native-base";

function ZStackComponent() {
  return (
      <ZStack alignItems="center" justifyContent="center">
      <Box bg="emerald.400" size={48} rounded="lg" />
      <Box bg="rose.400" size={32} rounded="lg" shadow={8} />
      <Box bg="lightBlue.400" size={16} rounded="lg" shadow={8} />
    </ZStack>
  );
}

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <ZStackComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Props

| Name     | Type    | Description                          | Default |
| -------- | ------- | ------------------------------------ | ------- |
| reversed | boolean | The direction to stack the elements. | -       |
