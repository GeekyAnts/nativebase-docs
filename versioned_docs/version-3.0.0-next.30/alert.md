---
id: alert
title: Alert
---

`Alerts` are used to communicate a state that affects a system, feature or page.

## Import

NativeBase exports 5 Alert related components:

- `Alert`: The wrapper for alert components.
- `Alert.Icon`: The visual icon for the alert that changes based on the `status` prop.
- `Alert.Title`: The title of the alert to be announced by screen readers.
- `Alert.Description`: The description of the alert to be announced by screen readers.

```jsx
import { Alert } from 'native-base';
```

## Examples

### Basic

```SnackPlayer name=Alert%20Basic
import React from "react";
import { Alert, CloseButton, Box, NativeBaseProvider, Center } from "native-base";
function AlertComponent() {
	return (
    <Box mx={3}>
      <Alert status="error">
        <Alert.Icon />
        <Alert.Title>Error Alert</Alert.Title>
        <Alert.Description>description goes here</Alert.Description>
        <CloseButton />
      </Alert>
    </Box>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <AlertComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Status

```SnackPlayer name=Alert%20Status
import React from "react";
import { Stack, Alert, HStack, NativeBaseProvider, Center } from "native-base";

function AlertComponent() {
	return (
    <HStack>
      {['subtle', 'solid', 'outline'].map((key: any) => (
        <Stack space={3} mx={3}>
          <Alert status="error" variant={key}>
            <Alert.Icon />
            <Alert.Title>This is an error alert</Alert.Title>
          </Alert>
          <Alert status="warning" variant={key}>
            <Alert.Icon />
            <Alert.Title>This is a warning alert</Alert.Title>
          </Alert>
          <Alert status="info" variant={key}>
            <Alert.Icon />
            <Alert.Title>This is an info alert</Alert.Title>
          </Alert>
          <Alert status="success" variant={key}>
            <Alert.Icon />
            <Alert.Title>This is a success alert</Alert.Title>
          </Alert>
        </Stack>
      ))}
    </HStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <AlertComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Variant

```SnackPlayer name=Alert%20Variant
import React from "react";
import { Alert, Stack, NativeBaseProvider, Center } from "native-base";

function AlertComponent() {
	return (
    <Stack space={4} mx={3}>
      <Alert variant="solid" status="teal">
        <Alert.Icon />
        <Alert.Title>Alert Solid Variant</Alert.Title>
      </Alert>
      <Alert variant="left-accent" status="success">
        <Alert.Icon />
        <Alert.Title>Alert Left Accent Variant</Alert.Title>
      </Alert>
      <Alert variant="top-accent" status="error">
        <Alert.Icon />
        <Alert.Title>Alert Top Accent Variant</Alert.Title>
      </Alert>
      <Alert status="warning" variant="subtle">
        <Alert.Icon />
        <Alert.Title>Alert Default/Subtle Variant</Alert.Title>
      </Alert>
      <Alert status="info" variant="outline">
        <Alert.Icon />
        <Alert.Title>Alert Outline Variant</Alert.Title>
      </Alert>
      <Alert status="info" variant="outline-light">
        <Alert.Icon />
        <Alert.Title>Alert Outline Light Variant</Alert.Title>
      </Alert>
    </Stack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <AlertComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Composition

```SnackPlayer name=Alert%20Composition
import React from "react";
import { Alert, CloseButton, Box, VStack, NativeBaseProvider, Center } from "native-base";

function AlertComponent() {
	return (
    <VStack mx={2} space={3}>
      <Alert
        status="success"
        display="flex"
        variant="outline"
        borderColor="gray.200"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="200px"
      >
        <Alert.Icon boxSize="40px" mr={0} />
        <Alert.Title mt={4} mb={2}>
          This is a success alert
        </Alert.Title>
        <Alert.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Alert.Description>
      </Alert>

      <Alert
        status="success"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="200px"
      >
        <Alert.Icon boxSize="40px" mr={0} />
        <Alert.Title mt={4} mb={2}>
          This is a success alert
        </Alert.Title>
        <Alert.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Alert.Description>
      </Alert>

      <Alert status="success">
        <Alert.Icon />
        <Box flex={1}>
          <Alert.Title>This is a success alert</Alert.Title>
          <Alert.Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Alert.Description>
        </Box>
        <CloseButton position="absolute" top={2} right={2} />
      </Alert>
    </VStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <AlertComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Action

```SnackPlayer name=Alert%20Basic
import React from "react";
import { Alert, CloseButton, Collapse, Button, NativeBaseProvider, Center } from "native-base";
function AlertComponent() {
	const [show, setShow] = React.useState(true);
  const handleToggle = (val: boolean) => setShow(val);
  return (
    <>
      <Collapse isOpen={show}>
        <Alert
          status="error"
          action={
            <CloseButton size={'xs'} onPress={() => handleToggle(false)} />
          }
        >
          <Alert.Icon />
          <Alert.Title>Error Alert</Alert.Title>
          <Alert.Description>description goes here</Alert.Description>
        </Alert>
      </Collapse>
      <Button size={'sm'} onPress={() => handleToggle(true)}>
        Re-Open
      </Button>
    </>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <AlertComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Props

### Alert

`Alert` implements **[Box](box.md)**, so all the Box Props can be passed to it.

| Name    | Type                                           | Description                                                                   | Default  |
| ------- | ---------------------------------------------- | ----------------------------------------------------------------------------- | -------- |
| status  | `error`, `info`, `success`, `warning`          | The status of the alert.                                                      | `info`   |
| variant | `left-accent`, `solid`, `subtle`, `top-accent` | The variant of the alert style to use.                                        | `subtle` |
| action  | JSX.Element                                    | The action to display. It renders after the message, at the end of the alert. | -        |

### Alert.Icon

`Alert.Icon` composes [`Icon`](icon.md) and changes the icon based on the status prop.

### Alert.Title

`Alert.Title` composes the [`Text`](text.md) component.

### Alert.Description

`Alert.Description` composes the [`Text`](text.md) component.
