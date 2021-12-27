---
id: progress
title: Progress
---

import { ComponentTheme } from '../src/components';

`Progress` is used to display the progress status for a task that takes a long time or consists of several steps.

```jsx isShowcase
import React from 'react';
import { Box, Progress, Heading, Center } from 'native-base';

export const Example = () => {
  return (
    <Box w="100%">
      <Center mb="10">
        <Heading size="md"> Simple Progress Bar</Heading>
      </Center>
      <Progress shadow={2} value={45} mx="4" />
    </Box>
  );
};
```

## Import

```jsx
import { Progress } from 'native-base';
```

## Examples

### Basic

```ComponentSnackPlayer path=components,composites,Progress,Basic.tsx

```

### Progress colorScheme

```ComponentSnackPlayer path=components,composites,Progress,ColorScheme.tsx

```

### Sizes

```ComponentSnackPlayer path=components,composites,Progress,Sizes.tsx

```

### Flat Progress

```ComponentSnackPlayer path=components,composites,Progress,Flat.tsx

```

### Custom Track Color

```ComponentSnackPlayer path=components,composites,Progress,CustomBgColor.tsx

```

## Props

```ComponentPropTable path=composites,Progress,index.tsx

```

## Styling

<ComponentTheme name="progress" />

## Accessibility

- Adheres to the `progressbar` [role requirements.](https://www.w3.org/TR/wai-aria-1.2/#progressbar)
- On web, `aria-valuenow`, `aria-valuemin` and `aria-valuemax` to ensure the progress percent is visible to screen readers.
- On mobile, [accessibilityValue](https://reactnative.dev/docs/accessibility#accessibilityvalue) is used to ensure it's announced by Talkback and VoiceOver.
