---
id: slider
title: Slider
---

The `Slider` is used to allow users to make selections from a range of values.

## Import

NativeBase exports 7 modal-related components:

- **`Slider`**: The wrapper that provides context and functionality for all children.
- **`SliderTrack`**: The empty part of the slider that shows the track.
- **`SliderFilledTrack`**: The filled part of the slider.
- **`SliderThumb`**: The handle that's used to change the slider value.

```jsx
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from 'native-base';
```

## Usage

```SnackPlayer name=Slider%20Usage
import React from 'react';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
  NativeBaseProvider
} from 'native-base';

function SliderComponent () {
  return (
    <Box mx={5}>
      <Slider defaultValue={70}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <SliderComponent />
    </NativeBaseProvider>
  );
}
```

## Color

```SnackPlayer name=Slider%20Color
import React from 'react';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
  NativeBaseProvider
} from 'native-base';

function SliderComponent () {
  return (
    <Box mx={5}>
      <Slider defaultValue={70} colorScheme="pink.200">
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <SliderComponent />
    </NativeBaseProvider>
  );
}
```

## Value

```SnackPlayer name=Slider%20Value
import React from 'react';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Stack,
  Text,
  NativeBaseProvider
} from 'native-base';

function SliderComponent () {
  const [onChangeValue, setOnChangeValue] = React.useState(70);
  const [onChangeEndValue, setOnChangeEndValue] = React.useState(70);
  return (
    <Stack mx={5} space={4} alignItems="center">
      <Text>onChangeValue - {onChangeValue}</Text>
      <Text>onChangeEndValue - {onChangeEndValue}</Text>
      <Slider
        defaultValue={70}
        colorScheme="cyan"
        onChange={(v) => {
          setOnChangeValue(Math.floor(v));
        }}
        onChangeEnd={(v) => {
          v && setOnChangeEndValue(Math.floor(v));
        }}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Stack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <SliderComponent />
    </NativeBaseProvider>
  );
}
```

## Size

```SnackPlayer name=Slider%20Size
import React from 'react';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  VStack,
  NativeBaseProvider
} from 'native-base';

function SliderComponent () {
  return (
    <VStack space={4} mx={10}>
      <Slider defaultValue={40} colorScheme="red" size="lg">
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Slider defaultValue={60} colorScheme="purple">
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Slider defaultValue={80} colorScheme="green" size="sm">
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </VStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <SliderComponent />
    </NativeBaseProvider>
  );
}
```

## Customised

```SnackPlayer name=Slider%20Customized
import React from 'react';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Icon,
  NativeBaseProvider
} from 'native-base';

function SliderComponent () {
  return (
    <Slider defaultValue={70} colorScheme="purple">
      <SliderTrack bg="orange.100">
        <SliderFilledTrack bg="orange.400" />
      </SliderTrack>
      <SliderThumb>
        <Icon name="circle" type="MaterialIcons" />
      </SliderThumb>
    </Slider>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <SliderComponent />
    </NativeBaseProvider>
  );
}
```

## Form Controlled

```SnackPlayer name=Slider%20Form Controlled
import React from 'react';
import {
  FormControl,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  VStack,
  NativeBaseProvider
} from 'native-base';

function SliderComponent () {
  return (
    <VStack space={4} mx={10}>
      <FormControl isRequired isInvalid isDisabled>
        <FormControl.Label>Just Slide</FormControl.Label>
        <Slider defaultValue={50}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <FormControl.HelperText>We'll keep this between us.</FormControl.HelperText>
        <FormControl.ErrorMessage>Don't worry, it's just an example.</FormControl.ErrorMessage>
      </FormControl>
    </VStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <SliderComponent />
    </NativeBaseProvider>
  );
}
```

## Props

### nSlider

| Name            | Type                 | Description                                                                                                       | Default    |
| --------------- | -------------------- | ----------------------------------------------------------------------------------------------------------------- | ---------- |
| value           | number               | The value of the slider in controlled mode                                                                        | -          |
| defaultValue    | number               | The initial value of the slider in uncontrolled mode                                                              | -          |
| min             | number               | The minimum allowed value of the slider. Cannot be greater than max.                                              | 0          |
| max             | number               | The maximum allowed value of the slider. Cannot be less than min.                                                 | 100        |
| step            | number               | The step in which increments/decrements have to be made                                                           | -          |
| colorScheme     | string               | The color of the radio when it's checked. This should be one of the color keys in the theme (e.g."green", "red"). | default    |
| size            | lg, md, sm           | The size (width and height) of the slider.                                                                        | md         |
| id              | string               | The base id to use for the slider and its components                                                              | -          |
| isDisabled      | boolean              | If true, the slider will be disabled                                                                              | -          |
| isReadOnly      | boolean              | If true, the slider will be in read-only state                                                                    |            |
| isReversed      | boolean              | If true, the value will be incremented or decremented in reverse.                                                 |            |
| icon            | JSX.Element          | If given, will use this icon instead of the default.                                                              | -          |
| isInvalid       | boolean              | If true, the checkbox is marked as invalid. Changes style of unchecked state.                                     | -          |
| onChange        | function             | function gets called whenever the slider handle is being dragged or clicked                                       | -          |
| onChangeEnd     | function             | function gets called whenever the user stops dragging the slider handle.                                          | -          |
| aria-label      | string               | The static string to use used for aria-label if no visible label is used.                                         | -          |
| aria-labelledby | string               | The static string aria-labelledby that points to the ID of the element that serves as label for the slider        | -          |
| aria-valuetext  | string               | The static string to use used for aria-valuetext                                                                  | -          |
| orientation     | horizontal, vertical | Sets the orientation of the slider.                                                                               | horizontal |

### Child **components**

- `SliderTrack`, `SliderFilledTrack`, and `SliderThumb` composes `Box` component
