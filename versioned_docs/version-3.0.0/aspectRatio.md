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
    <AspectRatio height={32} ratio={4/3}>
      <Box bg="emerald.400" rounded="lg"/>
    </AspectRatio>
  );
}

// Example template which wraps component with NativeBaseProvider
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
    <AspectRatio ratio={0.87} height={200}>
      <Image
        resizeMode="cover"
        source={{
          uri: "https://alpha.nativebase.io/img/icon.png",
        }}
      />
    </AspectRatio>
  );
}

// Example template which wraps component with NativeBaseProvider
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
