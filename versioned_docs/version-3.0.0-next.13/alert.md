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
- `AlertCloseButton`: The visual icon for the alert that changes based on the status prop.

```jsx
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  AlertCloseButton,
} from "native-base";
```

## Usage

```SnackPlayer name=Alert%20Usage
import React from "react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
  AlertIcon,
  AlertCloseButton,
  Box,
  NativeBaseProvider,
} from "native-base";
function AlertComponent() {
  return (
    <Box mx={3}>
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>Error Alert</AlertTitle>
        <AlertDescription>description goes here</AlertDescription>
        <AlertCloseButton />
      </Alert>
    </Box>
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
  AlertCloseButton,
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
        <AlertCloseButton />
      </Alert>

      <Alert status="success">
        <AlertIcon />
        <AlertDescription>
          Data uploaded to the server. Fire on!
        </AlertDescription>
        <AlertCloseButton />
      </Alert>

      <Alert status="warning">
        <AlertIcon />
        <AlertDescription>Seems your account is about expire</AlertDescription>
        <AlertCloseButton />
      </Alert>

      <Alert status="default">
        <AlertIcon />
        <AlertDescription>
          NativeBase is going live soon . Get ready!
        </AlertDescription>
        <AlertCloseButton />
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
  AlertCloseButton,
  NativeBaseProvider,
} from "native-base";

function AlertComponent() {
  return (
    <Stack space={4} mx={3}>
      <Alert variant="solid" status="success">
        <AlertIcon />
        <AlertTitle>Alert Solid Variant</AlertTitle>
        <AlertCloseButton />
      </Alert>
      <Alert variant="left-accent" status="success">
        <AlertIcon />
        <AlertTitle>Alert Left Accent Variant</AlertTitle>
        <AlertCloseButton />
      </Alert>
      <Alert variant="top-accent" status="success">
        <AlertIcon />
        <AlertTitle>Alert Top Accent Variant</AlertTitle>
        <AlertCloseButton />
      </Alert>
      <Alert status="success">
        <AlertIcon />
        <AlertTitle>Alert Default/Subtle Variant</AlertTitle>
        <AlertCloseButton />
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
  AlertDescription,
  AlertTitle,
  AlertIcon,
  AlertCloseButton,
  Box,
  NativeBaseProvider,
} from "native-base";

function AlertComponent() {
  return (
    <Box mx={3}>
      <Alert
        status="success"
        variant="subtle"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="200px"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1}>
          Application submitted!
        </AlertTitle>
        <AlertDescription>
          Thanks for submitting your application. Our team will get back to you
          soon.
        </AlertDescription>

        <AlertCloseButton />
      </Alert>
    </Box>
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
| Name      | Type                                   | Description                            | Default |
|-----------|----------------------------------------|----------------------------------------|---------|
| status    | error, info, success, warning          | The status of the alert.               | info    |
| variant   | left-accent, solid, subtle, top-accent | The variant of the alert style to use. | subtle  |
| Component |                                        |                                        |         |

### AlertIcon

`AlertIcon` composes `Icon` and changes the icon based on the status prop.

### AlertTitle

`AlertTitle` composes the `Box` component.

### AlertDescription

`AlertDescription` composes the `Box` component.

### AlertCloseButton

`AlertCloseButton` composes `Icon` and changes the icon based on the status prop. It's position is fixed at top-right.
