ZStack aligns items absolutely.

## Implements

- `View` from nativebase

## Import

```jsx
import { ZStack } from "native-base";
```

## Usage

```SnackPlayer name=ZStack%20Usage
import React from "react";
import { ZStack, Box, NativeBaseProvider } from "native-base";

function ZStackComponent() {
  return (
    <ZStack alignItems="center">
      <Box p={16} bg="black" />
      <Box p={10} bg="red.200" />
    </ZStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <ZStackComponent />
    </NativeBaseProvider>
  );
}
```

You can pass `alignItems="center"` `justifyContent="center"` to vertically and horizontally center the children.

```SnackPlayer name=ZStack%20Usage1
import React from "react";
import { ZStack, Box, Text, NativeBaseProvider } from "native-base";

function ZStackComponent() {
  return (
    <Box px={8}>
      <ZStack alignItems="center" justifyContent="center" height="50%">
        <Box p={24} bg="blue.5" />
        <Box p={16} bg="black" />
        <Box p={10} bg="red.2" />
        <Text>Not Inside</Text>
      </ZStack>
      <Text lineHeight={8} letterSpacing={1.2} textAlign="center">
        Pass alignItems="center" and justifyContent="center" to ZStack to
        achieve this structure
      </Text>
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <ZStackComponent />
    </NativeBaseProvider>
  );
}
```

## Props

### ZStack

| Name     | Type    | Description                          | Default |
| -------- | ------- | ------------------------------------ | ------- |
| reversed | boolean | The direction to stack the elements. | -       |
