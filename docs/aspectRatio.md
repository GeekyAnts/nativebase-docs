---
id: aspectRatio
title: AspectRatio
---

## Implements

- `Box` from native-base/Box

## Example

```SnackPlayer name=AspectRatio%20Example
import React from "react";
import { AspectRatio, Box, NativeBaseProvider, Center } from "native-base";
function Component() {
  return (
    <AspectRatio height={200} bg="black">
      <Box bg="red.400" />
    </AspectRatio>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Component />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Example (Embed Image)

```SnackPlayer name=AspectRatio%20ExampleEmbedImage
import React from "react";
import { AspectRatio, Image, NativeBaseProvider, Center } from "native-base";
function Component() {
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
      <Center flex={1}>
        <Component />
      </Center>
    </NativeBaseProvider>
  );
}

```

## Props

**AspectRatio** implements **Box** , so all the **Box** props can be passed to **AspectRatio**.

| Name  | Type   | Description                      | Default |
| ----- | ------ | -------------------------------- | ------- |
| ratio | number | The aspect ratio of the content. | -       |
