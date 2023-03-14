---
id: tooltip
title: Tooltip
---

import { ComponentTheme } from '../src/components';

A tooltip provides a brief, informative message when a user interacts with an element. Methods of tooltip initiation include: through a mouse-hover gesture or a keyboard-hover gesture.

```jsx isShowcase
import React from "react";
import { Tooltip, Button } from "native-base";

export function Example() {
  return (
    <Tooltip label="Hey, I'm here!" openDelay={500}>
      <Button shadow={2}>More</Button>
    </Tooltip>
  );
}
```

## Import

```jsx
import { Tooltip } from "native-base";
```

## Examples

### Basic

```ComponentSnackPlayer path=components,composites,Tooltip,Basic.tsx

```

### Positions

```ComponentSnackPlayer path=components,composites,Tooltip,TooltipPositions.tsx

```

### Customizing tooltip

Tooltip is a wrapper around [Box](box.md). So, it also accepts all the [Box](box.md#h2-props) props.

```ComponentSnackPlayer path=components,composites,Tooltip,CustomTooltip.tsx

```

<br />

:::tip

You can pass custom backgroundColor using `bg` or `backgroundColor`, `borderColor` and `borderWidth` to Tooltip.

:::

## Props

```ComponentPropTable path=composites,Tooltip,Tooltip.tsx

```

## Styling

<ComponentTheme name="tooltip" />

## Accessibility

Adheres to the [Tooltip WAI-ARIA design pattern.](https://www.w3.org/TR/wai-aria-1.1/#tooltip)

### Keyboard Interactions

| Name  | Description                                |
| ----- | ------------------------------------------ |
| Space | If open, closes the tooltip without delay. |
| Enter | If open, closes the tooltip without delay. |
| Tab   | Moves focus to the next focusable element. |
| Esc   | If open, closes the tooltip without delay. |
