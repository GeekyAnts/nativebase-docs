---
id: overlay
title: Overlay
---

The overlay is the fundamental component for positioning and controlling new components on top of existing ones.

## Import

```jsx
import { Overlay, useOverlay } from "native-base";
```

## Usage

```SnackPlayer name=Overlay%20Usage
import React from 'react';
import { Button, useOverlay, VStack, NativeBaseProvider } from 'native-base';

function OverlayComponent () {
  const { closeOverlay, setOverlayComponent } = useOverlay();

  return (
    <VStack space={3}>
      <Button
        onPress={() =>
          setOverlayComponent(
            <Button onPress={closeOverlay}>Press to close Overlay</Button>
          )
        }
      >
        Show Overlay
      </Button>
    </VStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <OverlayComponent />
    </NativeBaseProvider>
  );
}
```

## Customised

```SnackPlayer name=Overlay%20Customized
import React from 'react';
import { ToastProvider, Button, useOverlay, VStack, NativeBaseProvider } from 'native-base';

function OverlayComponent () {
  const [disableOverlay, setDisableOverlay] = React.useState(false);
  const { closeOverlay, setOverlayComponent } = useOverlay();

  return (
    <VStack space={3}>
      <Button
        onPress={() =>
          setOverlayComponent(
            <Button onPress={closeOverlay}>Press to close Overlay</Button>,
            { disableOverlay, position: 'top', backgroundColor: '#5511ff44' }
          )
        }
      >
        Show Overlay
      </Button>
      <Button
        onPress={() => {
          setDisableOverlay(!disableOverlay);
        }}
      >
        {disableOverlay ? 'Enable ' : 'Disable '}Overlay
      </Button>
      <Button onPress={closeOverlay}>Hide Overlay</Button>
      <ToastProvider />
    </VStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <OverlayComponent />
    </NativeBaseProvider>
  );
}
```

## Props

[Overlay](https://www.notion.so/6d40ce662d6b4a5fb1dc97fa69fcaf98)
