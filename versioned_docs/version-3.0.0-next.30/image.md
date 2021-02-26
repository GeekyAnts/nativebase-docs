---
id: image
title: Image
---

Generic Image components from [React Native](https://reactnative.dev).

## Implements

- [`Image`](https://reactnative.dev/docs/image) from [React Native](https://reactnative.dev).
- You can use all props of React native Image.

## Examples

### Basic

```SnackPlayer name=Image%20Example
import React from 'react';
import { Box, Image, NativeBaseProvider, Center } from 'native-base';
function ImageComponent () {
  return (
    <Box size={200}>
      <Image
        source={{
          uri: 'https://nativebase.io/assets/img/front-page-icon.png',
        }}
      />
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <ImageComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Sizes

```SnackPlayer name=Image%20Example(Sizes)
import React from 'react';
import { HStack, Image, NativeBaseProvider, Center } from 'native-base';
function ImageComponent() {
  return (
    <HStack alignItems="center">
      <Image
        size={12}
        resizeMode="cover"
        source={{
          uri: 'https://nativebase.io/assets/img/front-page-icon.png',
        }}
        alt="nativebase"
      />
      <Image
        size={20}
        resizeMode="cover"
        source={{
          uri: 'https://nativebase.io/assets/img/front-page-icon.png',
        }}
        alt="nativebase"
      />
      <Image
        size={32}
        source={{
          uri: 'https://nativebase.io/assets/img/front-page-icon.png',
        }}
        alt="nativebase"
      />
    </HStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <ImageComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Border

```SnackPlayer name=Image%20Example(Border)
import React from 'react';
import { Image, NativeBaseProvider, Center } from 'native-base';
function ImageComponent() {
  return (
    <Image
      size={150}
      alt="nativebase"
      borderRadius={100}
      source={{
        uri: 'https://nativebase.io/assets/img/front-page-icon.png',
      }}
    />
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <ImageComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Fallback

```SnackPlayer name=Image%20Example(Fallback)
import React from 'react';
import { Image, NativeBaseProvider, Center } from 'native-base';
function ImageComponent () {
  return (
    <Image
      size={150}
      alt="nativebase"
      borderRadius={100}
      source={{
        uri: 'https://-page-icon.png',
        // uri: 'https://nativebase.io/assets/img/front-page-icon.png',
      }}
      fallbackSource={{
        uri: 'https://www.w3schools.com/css/img_lights.jpg',
      }}
    />
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <ImageComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Basic (With Ref)

```SnackPlayer name=Image%20Example(With Ref)
import React from 'react';
import { Box, Image, NativeBaseProvider, Center } from 'native-base';
function ImageComponent () {
  const myRef: any = React.useRef({});
  React.useEffect(() => {
    myRef?.current.setNativeProps({ borderWidth: 10, opacity: 0.5 });
  }, [myRef]);
  return (
    <Box size={200}>
      <Image
        ref={myRef}
        source={{
          uri: 'https://nativebase.io/assets/img/front-page-icon.png',
        }}
      />
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <ImageComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Props

### Image

| Name           | Type                         | Description                                                             | Default |
| -------------- | ---------------------------- | ----------------------------------------------------------------------- | ------- |
| fallbackSource | ImageSourcePropType          | In event there was an error loading the src, specify a fallback source. | -       |
| alt            | string                       | The alt text that describes the image                                   | -       |
| ignoreFallback | boolean                      | Opt out of the fallbackSource logic and show alternative text           | -       |
| size           | number                       | Define the box size of image.                                           | -       |
| \_alt          | [`TextProps`](text.md#props) | Text styling for alt.                                                   | -       |
