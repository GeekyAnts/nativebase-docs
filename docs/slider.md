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

```ComponentSnackPlayer path=primitives,slider,usage.tsx

```

### Color

```ComponentSnackPlayer path=primitives,slider,color.tsx

```

### Value

```ComponentSnackPlayer path=primitives,slider,Value.tsx

```

### Size

```ComponentSnackPlayer path=primitives,slider,Size.tsx

```

### Customised

```ComponentSnackPlayer path=primitives,slider,Customized.tsx

```

### Form Controlled

```ComponentSnackPlayer path=primitives,slider,FormControlled.tsx

```

## Props

### Slider

```ComponentPropTable path=primitives,Slider,Slider.tsx

```

### Children components

- `Slider.Track`, `Slider.FilledTrack`, and `Slider.Thumb` composes the [`Box`](box.md) component.

## Accessibility

- Slider is fully accessibile on native side using swipe gesture on iOS and volume button on Android.
- Keyboard accessibility on web is still in-progress.
