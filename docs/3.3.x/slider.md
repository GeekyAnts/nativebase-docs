---
id: slider
title: Slider
---

import { ComponentTheme } from '../src/components';

The `Slider` allows users to select options from a given range of values.

```jsx isShowcase
import React from 'react';
import { Slider, Box, Center, NativeBaseProvider } from 'native-base';
export const Example = () => {
  return (
    <Box mx="5" width="100">
      <Slider
        defaultValue={70}
        minValue={0}
        maxValue={100}
        accessibilityLabel="hello world"
        step={10}
      >
        <Slider.Track shadow={2}>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb shadow={3} />
      </Slider>
    </Box>
  );
};
```

## Import

NativeBase exports 4 slider-related components:

- `Slider`: The wrapper that provides context and functionality for all children.
- `Slider.Track`: The empty part of the slider that shows the track.
- `Slider.FilledTrack`: The filled part of the slider.
- `Slider.Thumb`: The handle that is used to change the slider value.

```jsx
import { Slider } from 'native-base';
```

## Examples

```ComponentSnackPlayer path=components,primitives,Slider,usage.tsx

```

### Color

```ComponentSnackPlayer path=components,primitives,Slider,color.tsx

```

### Value

```ComponentSnackPlayer path=components,primitives,Slider,Value.tsx

```

### Size

```ComponentSnackPlayer path=components,primitives,Slider,Size.tsx

```

### Customised

```ComponentSnackPlayer path=components,primitives,Slider,Customized.tsx

```

### Form Controlled

```ComponentSnackPlayer path=components,primitives,Slider,FormControlled.tsx

```

## Props

### Slider

```ComponentPropTable path=primitives,Slider,Slider.tsx

```

### Children components

- `Slider.Track`, `Slider.FilledTrack`, and `Slider.Thumb` composes the [`Box`](box.md) component.

## Styling

<ComponentTheme name="Slider" fileName="slider" />

## Accessibility

Adheres to the [Slider WAI-ARIA design pattern.](https://www.w3.org/WAI/ARIA/apg/#slidertwothumb)

### Keyboard Interactions

| Name       | Description                                                       |
| ---------- | ----------------------------------------------------------------- |
| ArrowRight | Increments/decrements by the step value depending on orientation. |
| ArrowLeft  | Increments/decrements by the step value depending on orientation. |
| ArrowUp    | Increases the value by the step amount.                           |
| ArrowDown  | Decreases the value by the step amount.                           |
