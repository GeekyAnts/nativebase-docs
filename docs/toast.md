---
id: toast
title: Toast
---

Toast is used to show alerts on top of an overlay. Toast will close itself when the close button is clicked, or after a timeout — the default is 5 seconds. The toast component is used to give feeback to users after an action has taken place.

## Import

```jsx
import { useToast } from 'native-base';
```

## Examples

```SnackPlayer name=Toast%20Examples
import React from 'react';
import { Button, useToast, VStack, NativeBaseProvider } from 'native-base';

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
      <ToastComponent />
    </NativeBaseProvider>
  );
}
```

<br/>
<br/>

```SnackPlayer name=Toast%20Example1
import React from 'react';
import { Button, useToast, VStack, NativeBaseProvider } from 'native-base';

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
      <ToastComponent />
    </NativeBaseProvider>
  );
}
```

## Example (Offset)

```SnackPlayer name=Toast%20Examples(offset)
import React from 'react';
import { Button, useToast, NativeBaseProvider } from 'native-base';

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
      <ToastComponent />
    </NativeBaseProvider>
  );
}
```

## Props

### Toast

| Name     | Type                  | Description                                             | Default |
| -------- | --------------------- | ------------------------------------------------------- | ------- |
| title    | string                | The title of the toast                                  | -       |
| duration | long, number, short   | The duration of toast. If number, then in mili-seconds. | 2000    |
| position | bottom, center, top   | The position at which toast will appear.                | bottom  |
| offset   | {x: number y: number} | The offset of toast from regular position.              | -       |
