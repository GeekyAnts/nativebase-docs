---
id: snackBar
title: SnackBar
---

Snackbars inform users of a process that an app has performed or will perform. They appear temporarily, towards the bottom of the screen. They shouldn’t interrupt the user experience, and they don’t require user input to disappear.

## Import

```jsx
import { Snackbar } from "native-base";
```

## Usage

```SnackPlayer name=SnackBar%20Usage
import React from 'react';
import { Snackbar, Text, Box, NativeBaseProvider } from 'native-base';
function SnackbarExample () {
  return (
    <>
      <Text>Snackbar will stay for 10 secs, default is 5 sec.</Text>
      <Snackbar duration={10000}>
        <Box p="40px" color="white" mt="4" bg="teal.500" rounded="md">
          Snackbar
        </Box>
      </Snackbar>
    </>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <SnackbarExample />
    </NativeBaseProvider>
  );
}
```

## Using Hook

```SnackPlayer name=SnackBar%20Hooks
import React from 'react';
import {
  Button,
  Alert,
  AlertIcon,
  AlertDescription,
  useSnackbar,
  VStack,
  NativeBaseProvider
} from 'native-base';
function SnackbarExample () {
  const { setSnackbar } = useSnackbar();
  const template = (
    <Alert status="success">
      <AlertIcon />
      <AlertDescription>Welldone, we are proud of you.</AlertDescription>
    </Alert>
  );
  return (
    <VStack space={3}>
      <Button
        onPress={() =>
          setSnackbar(template, {
            accessibilityAnnouncement: 'Welldone, we are proud of you.',
          })
        }
      >
        Get Default Snackbar
      </Button>
      <Button
        onPress={() =>
          setSnackbar(template, {
            enableOverlay: true,
            placement: 'top',
            accessibilityAnnouncement: 'Welldone, we are proud of you.',
          })
        }
      >
        Get Snackbar With Overlay
      </Button>
    </VStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <SnackbarExample />
    </NativeBaseProvider>
  );
}
```

## Props

### Actionsheet

Implement `Slide`, all props of Box can be passed.
