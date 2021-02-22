---
id: circularProgress
title: CircularProgress
---

Circular Progress is used to indicate the progress for determinate and indeterminate processes.

## Import

```jsx
import { CircularProgress, CircularProgressLabel } from 'native-base';
```

## Usage

```SnackPlayer name=CircularProgress%20Usage
import React from 'react';
import { CircularProgress, Heading, Center, NativeBaseProvider } from 'native-base';
function CircularProgressComponent () {
  return (
    <Center>
      <Heading>Default CircularProgress</Heading>
      <CircularProgress mt={6} value={80} />
    </Center>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <CircularProgressComponent />
    </NativeBaseProvider>
  );
}
```

## CircularProgress Sizes

You can add a size prop to the CircularProgress to add a custom size or choose from defined sizes.

```SnackPlayer name=CircularProgress%20Sizes
import React from 'react';
import { CircularProgress, Heading, Center, NativeBaseProvider } from 'native-base';
function CircularProgressComponent () {
  return (
    <Center>
      <Heading>Changing the size</Heading>
      <CircularProgress mt={6} value={60} size={60} />
    </Center>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <CircularProgressComponent />
    </NativeBaseProvider>
  );
}
```

## CircularProgress Thickness

You can add the thickness prop to update the thickness of the progress ring.

```SnackPlayer name=CircularProgress%20Thickness
import React from 'react';
import { CircularProgress, Heading, Center, NativeBaseProvider } from 'native-base';
function CircularProgressComponent () {
  return (
    <Center>
      <Heading>Changing the thickness</Heading>
      <CircularProgress mt={6} value={30} thickness={7} />
    </Center>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <CircularProgressComponent />
    </NativeBaseProvider>
  );
}
```

## CircularProgress Color

You can add the color prop to apply any color that the theme contains.

```SnackPlayer name=CircularProgress%20Color
import React from 'react';
import { CircularProgress, Heading, Center, NativeBaseProvider } from 'native-base';
function CircularProgressComponent () {
  return (
    <Center>
      <Heading>Changing the color</Heading>
      <CircularProgress mt={6} value={50} color="red.200" />
    </Center>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <CircularProgressComponent />
    </NativeBaseProvider>
  );
}
```

## CircularProgress Label

```SnackPlayer name=CircularProgress%20Label
import React from 'react';
import {
  CircularProgress,
  Heading,
  Center,
  CircularProgressLabel,
  NativeBaseProvider
} from 'native-base';
function CircularProgressComponent () {
  return (
    <Center>
      <Heading>Adding label</Heading>
      <CircularProgress mt={6} value={45} size={60} color="red.200">
        <CircularProgressLabel>45%</CircularProgressLabel>
      </CircularProgress>
    </Center>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <CircularProgressComponent />
    </NativeBaseProvider>
  );
}
```

## Indeterminate Progress

Setting the progress to indeterminate means that the value can't be determined upfront. Pass the isIndeterminate prop to activate this state.

```SnackPlayer name=CircularProgress%20Indeterminate Progress
import React from 'react';
import {
  CircularProgress,
  CircularProgressLabel,
  Center,
  Heading,
  NativeBaseProvider
} from 'native-base';
function CircularProgressComponent () {
  return (
    <Center>
      <Heading>Indeterminate Progress</Heading>
      <CircularProgress mt={6} value={50} isIndeterminate color="red.200">
        <CircularProgressLabel>50%</CircularProgressLabel>
      </CircularProgress>
    </Center>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <CircularProgressComponent />
    </NativeBaseProvider>
  );
}
```

## Props

### CircularProgress

| Name            | Type                                      | Description                                                                           | Default |
| --------------- | ----------------------------------------- | ------------------------------------------------------------------------------------- | ------- |
| size            | 2xl, 3xl, 4xl, lg, md, number, sm, xl, xs | The size of circular progress.                                                        | -       |
| max             | number                                    | Maximum value defining 100% progress made (must be higher than 'min')                 | -       |
| min             | number                                    | Minimum value defining 'no progress' (must be lower than 'max')                       | -       |
| value           | number                                    | Current progress (must be between min/max)                                            | -       |
| isIndeterminate | boolean                                   | Puts the component into indeterminate state. When passed, the 'value' prop is ignored | -       |
| thickness       | number, string                            | The thickness of the progress indicator                                               | -       |
| trackColor      | string                                    | The color name of the progress track. Use a color key from the theme object           | -       |
| color           | string                                    | The color of the progress indicator. Use a color key from the theme object            | -       |
