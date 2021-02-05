---
id: alert
title: Alert
---

Alerts are used to communicate a state that affects a system, feature or page.

## Import

NativeBase exports 5 modal-related components:

- `Alert`: The wrapper for alert components.
- `AlertIcon`: The visual icon for the alert that changes based on the `status` prop.
- `AlertTitle`: The title of the alert to be announced by screen readers.
- `AlertDescription`: The description of the alert to be announced by screen readers.

```jsx
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  AlertCloseButton,
} from 'native-base';
```

## Usage

```SnackPlayer name=Alert%20Usage
import React from "react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
  AlertIcon,
  Box,
  NativeBaseProvider,
} from "native-base";
function AlertComponent() {
  return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>Error Alert</AlertTitle>
        <AlertDescription>description goes here</AlertDescription>
      </Alert>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <AlertComponent />
    </NativeBaseProvider>
  );
}
```

## Status

```SnackPlayer name=Alert%20Status
import React from "react";
import {
  Stack,
  AlertDescription,
  Alert,
  AlertIcon,
  NativeBaseProvider,
} from "native-base";

function AlertComponent() {
  return (
    <Stack space={3} mx={3}>
      <Alert status="error">
        <AlertIcon />
        <AlertDescription>
          There was an error processing your request
        </AlertDescription>
      </Alert>

      <Alert status="success">
        <AlertIcon />
        <AlertDescription>
          Data uploaded to the server. Fire on!
        </AlertDescription>
      </Alert>

      <Alert status="warning">
        <AlertIcon />
        <AlertDescription>Seems your account is about expire</AlertDescription>
      </Alert>

      <Alert status="default">
        <AlertIcon />
        <AlertDescription>
          NativeBase is going live soon . Get ready!
        </AlertDescription>
      </Alert>
    </Stack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <AlertComponent />
    </NativeBaseProvider>
  );
}
```

## Variant

```SnackPlayer name=Alert%20Variant
import React from "react";
import {
  Alert,
  Stack,
  AlertTitle,
  AlertIcon,
  NativeBaseProvider,
} from "native-base";

function AlertComponent() {
  return (
    <Stack space={4} mx={3}>
      <Alert variant="solid" status="success">
        <AlertIcon />
        <AlertTitle>Alert Solid Variant</AlertTitle>
      </Alert>
      <Alert variant="left-accent" status="success">
        <AlertIcon />
        <AlertTitle>Alert Left Accent Variant</AlertTitle>
      </Alert>
      <Alert variant="top-accent" status="success">
        <AlertIcon />
        <AlertTitle>Alert Top Accent Variant</AlertTitle>
      </Alert>
      <Alert status="success">
        <AlertIcon />
        <AlertTitle>Alert Default/Subtle Variant</AlertTitle>
      </Alert>
    </Stack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <AlertComponent />
    </NativeBaseProvider>
  );
}
```

## Composition

```SnackPlayer name=Alert%20Composition
import React from "react";
import {
  Alert,
  Stack,
  AlertTitle,
  AlertIcon,
  NativeBaseProvider,
} from "native-base";

function AlertComponent() {
  return (
    <Stack space={4} mx={3}>
      <Alert variant="solid" status="success">
        <AlertIcon />
        <AlertTitle>Alert Solid Variant</AlertTitle>
      </Alert>
      <Alert variant="left-accent" status="success">
        <AlertIcon />
        <AlertTitle>Alert Left Accent Variant</AlertTitle>
      </Alert>
      <Alert variant="top-accent" status="success">
        <AlertIcon />
        <AlertTitle>Alert Top Accent Variant</AlertTitle>
      </Alert>
      <Alert status="success">
        <AlertIcon />
        <AlertTitle>Alert Default/Subtle Variant</AlertTitle>
      </Alert>
    </Stack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <AlertComponent />
    </NativeBaseProvider>
  );
}
```

## Props

### Alert

Implement `Box`, all props of Box can be passed.

| Name    | Type                                   | Description                            | Default |
| ------- | -------------------------------------- | -------------------------------------- | ------- |
| status  | error, info, success, warning          | The status of the alert.               | info    |
| variant | left-accent, solid, subtle, top-accent | The variant of the alert style to use. | subtle  |

### AlertIcon

`AlertIcon` composes `Icon` and changes the icon based on the status prop.

### AlertTitle

`AlertTitle` composes the `Box` component.

### AlertDescription

`AlertDescription` composes the `Box` component.
