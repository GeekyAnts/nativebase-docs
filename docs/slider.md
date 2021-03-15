---
id: slider
title: Slider
---

The `Slider` is used to allow users to make selections from a range of values.

## Import

NativeBase exports 4 slider-related components:

- `Slider`: The wrapper that provides context and functionality for all children.
- `Slider.Track`: The empty part of the slider that shows the track.
- `Slider.FilledTrack`: The filled part of the slider.
- `Slider.Thumb`: The handle that's used to change the slider value.

```jsx
import { Slider } from 'native-base';
```

## Examples

### Basic

```SnackPlayer name=Slider%20Usage
import React from 'react';
import { Slider, Center, Box, NativeBaseProvider } from 'native-base';

function SliderComponent() {
  return (
    <Box w={48}>
      <Slider defaultValue={70}>
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>
    </Box>
  );
}

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <SliderComponent />
      </Center>
    </NativeBaseProvider>
  );
}

```

### Color

```SnackPlayer name=Slider%20Color
import React from 'react';
import { Slider, Center, Box, NativeBaseProvider } from 'native-base';

function SliderComponent() {
  return (
    <Box w={48}>
      <Slider defaultValue={70} colorScheme="pink.200">
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>
    </Box>
  );
}

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <SliderComponent />
      </Center>
    </NativeBaseProvider>
  );
}

```

### Value

```SnackPlayer name=Slider%20Value
import React from 'react';
import { Slider, Center, Text, Box, NativeBaseProvider } from 'native-base';

function SliderComponent() {
  const [onChangeValue, setOnChangeValue] = React.useState(70);
  const [onChangeEndValue, setOnChangeEndValue] = React.useState(70);
  return (
    <Box alignItems="center" w={48}>
      <Text>onChangeValue - {onChangeValue}</Text>
      <Text mt={4}>onChangeEndValue - {onChangeEndValue}</Text>

      <Box mx={5} width="80%" mt={4}>
        <Slider
          defaultValue={70}
          colorScheme="cyan"
          onChange={(v: any) => {
            setOnChangeValue(Math.floor(v));
          }}
          onChangeEnd={(v: any) => {
            v && setOnChangeEndValue(Math.floor(v));
          }}
        >
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
      </Box>
    </Box>
  );
}

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <SliderComponent />
      </Center>
    </NativeBaseProvider>
  );
}

```

### Size

```SnackPlayer name=Slider%20Size
import React from 'react';
import { Center, Slider, Stack, NativeBaseProvider } from 'native-base';

function SliderComponent() {
  return (
    <Stack space={4} w={48}>
      <Slider defaultValue={40} colorScheme="red" size="lg">
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>
      <Slider defaultValue={60} colorScheme="purple">
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>
      <Slider defaultValue={80} colorScheme="green" size="sm">
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>
    </Stack>
  );
}

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <SliderComponent />
      </Center>
    </NativeBaseProvider>
  );
}

```

### Customised

```SnackPlayer name=Slider%20Customized
import React from 'react';
import { Slider, Center, Icon, NativeBaseProvider, Box } from 'native-base';

function SliderComponent() {
  return (
    <Box w={48}>
      <Slider defaultValue={70} colorScheme="purple" w={48}>
        <Slider.Track bg="orange.100">
          <Slider.FilledTrack bg="orange.400" />
        </Slider.Track>
        <Slider.Thumb>
          <Icon name="circle" type="MaterialIcons" />
        </Slider.Thumb>
      </Slider>
    </Box>
  );
}

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <SliderComponent />
      </Center>
    </NativeBaseProvider>
  );
}

```

### Form Controlled

```SnackPlayer name=Slider%20Form Controlled
import React from 'react';
import {
  FormControl,
  Slider,
  VStack,
  NativeBaseProvider,
  Center
} from 'native-base';

function SliderComponent () {
  return (
    <VStack space={4} mx={10}>
      <FormControl isRequired isInvalid isDisabled>
        <FormControl.Label>Just Slide</FormControl.Label>
        <Slider defaultValue={50}>
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
        <FormControl.HelperText>We'll keep this between us.</FormControl.HelperText>
        <FormControl.ErrorMessage>Don't worry, it's just an example.</FormControl.ErrorMessage>
      </FormControl>
    </VStack>
  );
}

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <SliderComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Props

### Slider

| Name            | Type                     | Description                                                                                                       | Default      |
| --------------- | ------------------------ | ----------------------------------------------------------------------------------------------------------------- | ------------ |
| value           | number                   | The value of the slider in controlled mode                                                                        | -            |
| defaultValue    | number                   | The initial value of the slider in uncontrolled mode                                                              | -            |
| min             | number                   | The minimum allowed value of the slider. Cannot be greater than max.                                              | 0            |
| max             | number                   | The maximum allowed value of the slider. Cannot be less than min.                                                 | 100          |
| step            | number                   | The step in which increments/decrements have to be made                                                           | -            |
| colorScheme     | string                   | The color of the radio when it's checked. This should be one of the color keys in the theme (e.g."green", "red"). | default      |
| size            | `lg`, `md`, `sm`         | The size (width and height) of the slider.                                                                        | `md`         |
| id              | string                   | The base id to use for the slider and its components                                                              | -            |
| isDisabled      | boolean                  | If true, the slider will be disabled                                                                              | -            |
| isReadOnly      | boolean                  | If true, the slider will be in read-only state                                                                    |              |
| isReversed      | boolean                  | If true, the value will be incremented or decremented in reverse.                                                 |              |
| icon            | JSX.Element              | If given, will use this icon instead of the default.                                                              | -            |
| isInvalid       | boolean                  | If true, the checkbox is marked as invalid. Changes style of unchecked state.                                     | -            |
| onChange        | function                 | function gets called whenever the slider handle is being dragged or clicked                                       | -            |
| onChangeEnd     | function                 | function gets called whenever the user stops dragging the slider handle.                                          | -            |
| aria-label      | string                   | The static string to use used for aria-label if no visible label is used.                                         | -            |
| aria-labelledby | string                   | The static string aria-labelledby that points to the ID of the element that serves as label for the slider        | -            |
| aria-valuetext  | string                   | The static string to use used for aria-valuetext                                                                  | -            |
| orientation     | `horizontal`, `vertical` | Sets the orientation of the slider.                                                                               | `horizontal` |

### Children components

- `Slider.Track`, `Slider.FilledTrack`, and `Slider.Thumb` composes the [`Box`](box.md) component.
