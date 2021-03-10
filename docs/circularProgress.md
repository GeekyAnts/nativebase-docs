---
id: circularProgress
title: CircularProgress
---

Circular Progress is used to indicate the progress for determinate and indeterminate processes.

## Import

```jsx
import { CircularProgress } from 'native-base';
```

## Examples

### Usage

```SnackPlayer name=CircularProgress%20Usage
import React from 'react';
import {
  CircularProgress,
  Heading,
  Center,
  NativeBaseProvider,
} from 'native-base';
function CircularProgressComponent() {
  return (
    <Center>
      <Heading size="md">Default CircularProgress</Heading>
      <CircularProgress mt={6} value={80} />
    </Center>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <CircularProgressComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### CircularProgress Sizes

You can add a size prop to the CircularProgress to add a custom size or choose from defined sizes.

```SnackPlayer name=CircularProgress%20Sizes
import React from 'react';
import {
  CircularProgress,
  Heading,
  Center,
  NativeBaseProvider,
} from 'native-base';
function CircularProgressComponent() {
  return (
    <Center>
      <Heading size="md">Changing the size</Heading>
      <CircularProgress mt={6} value={60} size={60} />
    </Center>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <CircularProgressComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### CircularProgress Thickness

You can add the thickness prop to update the thickness of the progress ring.

```SnackPlayer name=CircularProgress%20Thickness
import React from 'react';
import {
  CircularProgress,
  Heading,
  Center,
  NativeBaseProvider,
} from 'native-base';
function CircularProgressComponent() {
  return (
    <Center>
      <Heading size="md">Changing the thickness</Heading>
      <CircularProgress mt={6} value={30} thickness={7} />
    </Center>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <CircularProgressComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### CircularProgress Color

You can add the color prop to apply any color that the theme contains.

```SnackPlayer name=CircularProgress%20Color
import React from 'react';
import {
  CircularProgress,
  Heading,
  Center,
  NativeBaseProvider,
} from 'native-base';
function CircularProgressComponent() {
  return (
    <Center>
      <Heading size="md">Changing the color</Heading>
      <CircularProgress mt={6} value={50} color="red.200" />
    </Center>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <CircularProgressComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## CircularProgress TrackColor

You can add the trackColor prop to apply any color that the theme contains to the CircularProgress track.

```SnackPlayer name=CircularProgress%20TrackColor
import React from 'react';
import {
  CircularProgress,
  Heading,
  Center,
  NativeBaseProvider,
} from 'native-base';
function CircularProgressComponent() {
  return (
    <Center>
      <Heading>Changing the Track Color</Heading>
      <CircularProgress mt={6} value={50} trackColor="blue.100" />
    </Center>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <CircularProgressComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## CircularProgress Min and Max

You can add min and max props to manage what is the start and end value of your CircularProgress.

```SnackPlayer name=CircularProgress%min%20max
import React from 'react';
import {
  CircularProgress,
  Heading,
  Center,
  NativeBaseProvider,
} from 'native-base';
function CircularProgressComponent() {
  return (
    <Center>
      <Heading>Min and Max</Heading>
      <CircularProgress
        mt={6}
        value={550}
        max={1000}
        min={100}
        size={100}
        color="red.200"
      />
    </Center>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <CircularProgressComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### CircularProgress Label

```SnackPlayer name=CircularProgress%20Label
import React from 'react';
import {
  CircularProgress,
  Heading,
  NativeBaseProvider,
  Center,
} from 'native-base';
function CircularProgressComponent() {
  return (
    <Center>
      <Heading size="md">Adding label</Heading>
      <CircularProgress
        mt={6}
        value={45}
        size={60}
        color="red.200"
        _text={{ color: 'blue.400' }}
      >
        45%
      </CircularProgress>
    </Center>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <CircularProgressComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Indeterminate Progress

Setting the progress to indeterminate means that the value can't be determined upfront. Pass the isIndeterminate prop to activate this state.

```SnackPlayer name=CircularProgress%20Indeterminate Progress
import React from 'react';
import {
  CircularProgress,
  Center,
  Heading,
  NativeBaseProvider,
} from 'native-base';
function CircularProgressComponent() {
  return (
    <Center>
      <Heading size="md">Indeterminate Progress</Heading>
      <CircularProgress mt={6} value={50} isIndeterminate color="red.200">
        50%
      </CircularProgress>
    </Center>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <CircularProgressComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Props

| Name            | Type                                                   | Description                                                                           | Default |
| --------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------- | ------- |
| size            | `4xl`,`3xl`,`2xl`, `xl`,`lg`, `md`, `sm`, `xs`, number | The size of circular progress.                                                        | `lg`    |
| max             | number                                                 | Maximum value defining 100% progress made (must be higher than 'min')                 | -       |
| min             | number                                                 | Minimum value defining 'no progress' (must be lower than 'max')                       | -       |
| value           | number                                                 | Current progress (must be between min/max)                                            | -       |
| isIndeterminate | boolean                                                | Puts the component into indeterminate state. When passed, the 'value' prop is ignored | -       |
| thickness       | number, string                                         | The thickness of the progress indicator                                               | -       |
| trackColor      | string                                                 | The color name of the progress track. Use a color key from the theme object           | -       |
| color           | string                                                 | The color of the progress indicator. Use a color key from the theme object            | -       |
| \_text          | [TextProps](text.md#props)                             | Text styling for Label Text.                                                          | -       |
