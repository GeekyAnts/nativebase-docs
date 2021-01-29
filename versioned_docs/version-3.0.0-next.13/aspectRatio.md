---
id: aspectRatio
title: AspectRatio
---

## Implements

- `Box` from native-base/Box

## Example

```SnackPlayer name=AspectRatio%20Example
import React from "react";
import { AspectRatio, Box, NativeBaseProvider } from "native-base";
function AspectRationComponent() {
  return (
    <AspectRatio height={200} bg="black">
      <Box bg="red.400" />
    </AspectRatio>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <AspectRationComponent />
    </NativeBaseProvider>
  );
}
```

## Example (Embed Image)

```SnackPlayer name=AspectRatio%20ExampleEmbedImage
import React from "react";
import { AspectRatio, Image, NativeBaseProvider } from "native-base";
function AspectRationComponent() {
  return (
    <AspectRatio ratio={0.5} height={200}>
      <Image
        resizeMode="cover"
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
    </AspectRatio>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <AspectRationComponent />
    </NativeBaseProvider>
  );
}

```

## Props

**AspectRatio** implements Box , so all the **Box** props can be passed to **AspectRatio**.
