---
id: center
title: Center
---

`Center` is a layout component that centers its child within itself.

## Import

```jsx
import { Center, Square, Circle } from 'native-base';
```

- **Center:** Centers its child, pass `width` and `height`
- **Square:** `Center` but we need to pass `size` (width and height)
- **Circle:** `Center` with round `borderRadius`, pass `size` (width and height)

## Examples

### Basic

Put any child element inside it, give it any width or/and height. It'll ensure the child is centered.

```ComponentSnackPlayer path=composites,Center,Basic.tsx

```

### Icon frames

Center can be used to nicely position icons in the center and add frames around them.

```ComponentSnackPlayer path=composites,Center,WithIcons.tsx

```

### Square and Circle

Square and Circle automatically centers their children.

```ComponentSnackPlayer path=composites,Center,SquareCircle.tsx

```

## Props

```ComponentPropTable path=composites,Center,Center.tsx

```
