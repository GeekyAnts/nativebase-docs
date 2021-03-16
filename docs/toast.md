---
id: toast
title: Toast
---

`Toast` is used to show alerts on top of an overlay. `Toast` will close itself when the close button is clicked, or after a timeout — the default is 5 seconds. The toast component is used to give feeback to users after an action has taken place.

## Import

```jsx
import { useToast } from 'native-base';
```

## Examples

### Basic

```SnackPlayer name=Toast%20Basic
import React from 'react';
import { Button, useToast, VStack, NativeBaseProvider, Center } from 'native-base';

function ToastComponent () {
  const toast = useToast();
  return (
      <Button
      onPress={() => {
        toast({
          position: 'top',
          title: 'Toast Top',
        });
      }}
    >
		 Toast
    </Button>
  )
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <ToastComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Position

```SnackPlayer name=Toast%20Position
import React from 'react';
import { Button, useToast, VStack, NativeBaseProvider, Center } from 'native-base';

function ToastComponent () {
  const toast = useToast();
  return (
      <VStack space={2}>
        <Button
          onPress={() => {
            toast({
              position: 'top',
              title: 'Top Toast',
            });
          }}
        >
          Top
        </Button>
        <Button
          onPress={() => {
            toast({
              position: 'center',
              title: 'Center',
            });
          }}
        >
          Center
        </Button>
        <Button
          mx={2}
          onPress={() => {
            toast({
              title: 'Bottom',
            });
          }}
        >
          Botton
        </Button>
      </VStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <ToastComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Offset

```SnackPlayer name=Toast%20Offset
import React from 'react';
import { Button, useToast, NativeBaseProvider, Center } from 'native-base';

function ToastComponent () {
  const toast = useToast();

  return (
      <Button
        onPress={() => {
          toast({
            position: 'center',
            duration: 1000,
            title: 'Toast Center',
            offset: { x: 100, y: 100 },
          });
        }}
      >
        Buttom
      </Button>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <ToastComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Props

| Name     | Type                      | Description                                             | Default  |
| -------- | ------------------------- | ------------------------------------------------------- | -------- |
| title    | string                    | The title of the toast.                                 | -        |
| \_title  | TextProps                 | Object that contains props for Title styling.           | -        |
| duration | `long`, `short`, number   | The duration of toast. If number, then in mili-seconds. | 2000     |
| position | `bottom`, `center`, `top` | The position at which toast will appear.                | `bottom` |
| offset   | {x: number y: number}     | The offset of toast from regular position.              | -        |
| accessibilityLiveRegion   | `none` , `polite` , `assertive`   | To read the content to Talkback and screen reader on web. [Read more](https://reactnative.dev/docs/accessibility#accessibilityliveregion-android)              | polite        |
| accessibilityAnnouncement   | string   | Toast description to be announced on iOS devices.             | -        |

## Accessibility
- On Android and Web, Toast renders under a View with accessibilityLiveRegion which announces the content rendered inside it to screen reader devices.
- On iOS, accessibilityLiveRegion is not supported yet, so we use the [accessibilityAnnouncement](https://reactnative.dev/docs/accessibilityinfo#announceforaccessibility) to announce the content. 