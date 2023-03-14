---
id: alert
title: Alert
---

import { ComponentTheme } from '../src/components';

`Alerts` convey a state that can influence a system, feature, or page.

```jsx isShowcase
import React from 'react';
import {
  Alert,
  VStack,
  HStack,
  IconButton,
  CloseIcon,
  Box,
  Heading,
} from 'native-base';

export const Example = () => {
  return (
    <Alert shadow={2} maxW="400" w="100%" colorScheme="info">
      <VStack space={1} flexShrink={1} w="100%">
        <HStack
          flexShrink={1}
          space={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <HStack space={2} flexShrink={1} alignItems="center">
            <Alert.Icon />
            <Heading fontSize="md" fontWeight="medium" color="coolGray.800">
              We are going live in July!
            </Heading>
          </HStack>
          <IconButton
            variant="unstyled"
            icon={<CloseIcon size="3" color="coolGray.600" />}
          />
        </HStack>
        <Box pl="6" _text={{ color: 'coolGray.600' }}>
          We are happy to announce that we are going live on July 28th. Get
          ready!
        </Box>
      </VStack>
    </Alert>
  );
};
```

## Import

NativeBase exports 5 Alert related components:

- `Alert`: The wrapper for alert components.
- `Alert.Icon`: The visual icon for the alert that changes based on the `status` prop.
  <!-- - `Alert.Title`: The title of the alert to be announced by screen readers. -->
  <!-- - `Alert.Description`: The description of the alert to be announced by screen readers. -->

```jsx
import { Alert } from 'native-base';
```

## Examples

### Basic

```ComponentSnackPlayer path=components,composites,Alert,usage.tsx

```

### Status

```ComponentSnackPlayer path=components,composites,Alert,status.tsx

```

### Variant

```ComponentSnackPlayer path=components,composites,Alert,variant.tsx

```

### Composition

```ComponentSnackPlayer path=components,composites,Alert,composition.tsx

```

### Action

```ComponentSnackPlayer path=components,composites,Alert,action.tsx

```

## Props

### Alert

```ComponentPropTable path=composites,Alert,Alert.tsx

```

### Alert.Icon

```ComponentPropTable path=composites,Alert,AlertIcon.tsx

```

### Alert.Title

```ComponentPropTable path=composites,Alert,AlertTitle.tsx

```

### Alert.Description

```ComponentPropTable path=composites,Alert,AlertDescription.tsx

```

## Styling

<ComponentTheme name="alert" />

## Accessibility

Alert has `role` set to `alert`.
