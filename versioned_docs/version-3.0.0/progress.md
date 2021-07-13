---
id: progress
title: Progress
---

import { ComponentTheme } from '../../src/components';

`Progress` is used to display the progress status for a task that takes a long time or consists of several steps.

## Import

```jsx
import { Progress } from 'native-base';
```

## Examples

### Basic

```ComponentSnackPlayer path=composites,Progress,Basic.tsx

```

### Progress colorScheme

```ComponentSnackPlayer path=composites,Progress,ColorScheme.tsx

```

### Sizes

```ComponentSnackPlayer path=composites,Progress,Sizes.tsx

```

### Flat Progress

```ComponentSnackPlayer path=composites,Progress,Flat.tsx

```

### Custom Track Color

```ComponentSnackPlayer path=composites,Progress,CustomBgColor.tsx

```

## Props

```ComponentPropTable path=composites,Progress,index.tsx

```

## Styling

<ComponentTheme name="progress" />

## Accessibility

- On web and mobile, Progress has `role` set to `progressbar` to denote that it is a progress bar.
- On web, `aria-valuenow`, `aria-valuemin` and `aria-valuemax` to ensure the progress percent is visible to screen readers.
- On mobile, [accessibilityValue](https://reactnative.dev/docs/accessibility#accessibilityvalue) is used to ensure it's announced by Talkback and VoiceOver.
