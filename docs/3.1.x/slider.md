---
id: slider
title: Slider
---

import { ComponentTheme } from '../../src/components';

The `Slider` is used to allow users to make selections from a range of values.

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

```ComponentSnackPlayer path=primitives,Slider,usage.tsx

```

### Color

```ComponentSnackPlayer path=primitives,Slider,color.tsx

```

### Value

```ComponentSnackPlayer path=primitives,Slider,Value.tsx

```

### Size

```ComponentSnackPlayer path=primitives,Slider,Size.tsx

```

### Customised

```ComponentSnackPlayer path=primitives,Slider,Customized.tsx

```

### Form Controlled

```ComponentSnackPlayer path=primitives,Slider,FormControlled.tsx

```

## Props

### Slider

```ComponentPropTable path=primitives,Slider,Slider.tsx

```

### Children components

- `Slider.Track`, `Slider.FilledTrack`, and `Slider.Thumb` composes the [`Box`](box.md) component.

## Styling

<ComponentTheme name="Slider" />

## Accessibility

Adheres to the [Slider WAI-ARIA design pattern.](https://www.w3.org/WAI/ARIA/apg/#slidertwothumb)

### Keyboard Interactions

| Name       | Description                                                       |
| ---------- | ----------------------------------------------------------------- |
| ArrowRight | Increments/decrements by the step value depending on orientation. |
| ArrowLeft  | Increments/decrements by the step value depending on orientation. |
| ArrowUp    | Increases the value by the step amount.                           |
| ArrowDown  | Decreases the value by the step amount.                           |
