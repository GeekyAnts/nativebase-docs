---
id: use-media-query
title: useMediaQuery
---

`useMediaQuery` is a custom hook used to help detect whether a single media query or multiple media queries individually match. React Native does not natively support media queries, so `useMediaQuery` is still limited.

## Import

```jsx
import { useMediaQuery } from 'native-base';
```

## Example

### max-height

```jsx isLive=true
import React from 'react';
import { Text, useMediaQuery, NativeBaseProvider, Center } from 'native-base';

function UseMediaQueryExample() {
  const [isSmaller] = useMediaQuery({ maxHeight: 512 });
  return (
    <Text>
      {isSmaller ? 'Height smaller than 512' : 'Height larger than 512'}
    </Text>
  );
}
export function Example() {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <UseMediaQueryExample />
      </Center>
    </NativeBaseProvider>
  );
}
```

### min-width

```jsx isLive=true
import React from 'react';
import { Text, useMediaQuery, NativeBaseProvider, Center } from 'native-base';

function UseMediaQueryExample() {
  const [isLargerThan512] = useMediaQuery({ minWidth: 512 });
  return (
    <Text>
      {isLargerThan512 ? 'Width larger than 512' : 'Width smaller than 512'}
    </Text>
  );
}
export function Example() {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <UseMediaQueryExample />
      </Center>
    </NativeBaseProvider>
  );
}
```

### orientation

```jsx isLive=true
import React from 'react';
import { Text, useMediaQuery, NativeBaseProvider, Center } from 'native-base';

function UseMediaQueryExample() {
  const [isLandScape, isPortrait] = useMediaQuery([
    { orientation: 'landscape' },
    { orientation: 'portrait' },
  ]);
  return (
    <>
      <Text>{`Landscape Mode: ${isLandScape}`}</Text>
      <Text>{`Portrait Mode: ${isPortrait}`}</Text>
    </>
  );
}
export function Example() {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <UseMediaQueryExample />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Return value

The `useMediaQuery` hook returns an array of booleans, indicating whether the given query matches or queries match.

Why an array? `useMediaQuery` accepts both an object and an array of object, but will always return an array. This way, you can combine multiple media queries which will be individually matched in a single call. The options to use are still limited to `maxWidth`, `minWidth`, `maxHeight`, `minHeight`, `orientation`.
