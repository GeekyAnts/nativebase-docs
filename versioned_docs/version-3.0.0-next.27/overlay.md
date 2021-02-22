---
id: overlay
title: Overlay
---

The overlay is the fundamental component for positioning and controlling new components on top of existing ones.

## Import

```jsx
import { Overlay, useOverlay } from 'native-base';
```

## Usage

```SnackPlayer name=Overlay%20Usage
import React from 'react';
import { Button, useOverlay, NativeBaseProvider } from 'native-base';

function OverlayComponent () {
  const { closeOverlay, setOverlay } = useOverlay();
  return (
    <Button
      onPress={() =>
        setOverlay(
          <Button onPress={closeOverlay}>Press to close Overlay</Button>
        )
      }>
      Show Overlay
    </Button>
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
import { Button, useOverlay, VStack, NativeBaseProvider } from 'native-base';

function OverlayComponent () {
	const [disableOverlay, setDisableOverlay] = React.useState(false);
  const { closeOverlay, setOverlay } = useOverlay();

  return (
    <VStack space={3}>
      <Button
        onPress={() =>
          setOverlay(
            <Button onPress={closeOverlay}>Press to close Overlay</Button>,
            { disableOverlay, position: 'center', backgroundColor: '#5511ff44' }
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

### Overlay

| Name                   | Type                | Description                                       | Default |
| ---------------------- | ------------------- | ------------------------------------------------- | ------- |
| disableOverlay         | boolean             | If true, it disables the overlay.                 | false   |
| position               | bottom, center, top | Vertically position the component on the overlay. | -       |
| defaultBackgroundColor | string              | Set background color of overlay.                  | -       |
| animationDuration      | number              | Duration for fade animation of the overlay.       | -       |
