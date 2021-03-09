---
id: aspectRatio
title: AspectRatio
---

## Implements

- [`Box`](box.md)

## Example

### Basic

```SnackPlayer name=AspectRatio%20Example
import React from "react";
import { AspectRatio, Box, NativeBaseProvider, Center } from "native-base";
function Component() {
  return (
    <AspectRatio height={200} bg="black" ratio={4/3}>
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

### Embed Image

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

`AspectRatio` implements **[Box](box.md)**, so all the Box props can be passed to it.

| Name  | Type   | Description                                    | Default |
| ----- | ------ | ---------------------------------------------- | ------- |
| ratio | number | The aspect ratio(width/height) of the content. | `4/3`   |
