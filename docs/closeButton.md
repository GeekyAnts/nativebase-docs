---
id: closeButton
title: CloseButton
---

CloseButton is essentially an IconButton with a close icon. It is used to handle the close functionality in feedback and overlay components like Alerts, Toasts, Drawers and Modals.

## Import

```jsx
import { CloseButton } from 'native-base';
```

## Example

```SnackPlayer name=CloseButton%20Example
import React from 'react';
import { CloseButton, NativeBaseProvider, Center } from 'native-base';
function CloseButtonComponent () {
  return <CloseButton />;
}

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <CloseButtonComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Example (Sizes)

```SnackPlayer name=CloseButton%20Example(Sizes)
import React from 'react';
import { CloseButton, HStack, NativeBaseProvider, Center } from 'native-base';
function CloseButtonComponent () {
  return (
    <HStack space="md">
      <CloseButton size="sm" color="teal.200" />
      <CloseButton size="md" color="red.200" />
      <CloseButton size="lg" color="blue.200" />
    </HStack>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <CloseButtonComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Props

### CloseButton

| Name       | Type       | Description                               | Default |
| ---------- | ---------- | ----------------------------------------- | ------- |
| aria-label | string     | An accessible label for the close button. | -       |
| isDisabled | boolean    | If true, the button will be disabled.     | -       |
| color      | string     | The color of the close icon.              | -       |
| size       | lg, md, sm | The size of the close button.             | md      |
