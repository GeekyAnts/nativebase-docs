---
id: snackBar
title: SnackBar
---

Snackbars inform users about a process that an app has performed or will perform. They appear temporarily, towards the bottom of the screen. They shouldn’t interrupt the user experience and don’t require user input to disappear.

## Import

```jsx
import { Snackbar } from 'native-base';
```

## Usage

```SnackPlayer name=SnackBar%20Usage
import React from 'react';
import { Snackbar, Text, Box, NativeBaseProvider } from 'native-base';
function SnackbarExample () {
  return (
    <>
      <Text>Snackbar will stay for 10 secs, default is 5 sec.</Text>
      <Snackbar
        autoHideDuration={10000}
        accessibilityAnnouncement="Sample warning message"
      >
        <VStack mx={4} space={4}>
          <Alert>
            <AlertIcon />
            <AlertTitle> Hello World</AlertTitle>
          </Alert>
          <Alert status="success">
            <AlertIcon />
            <AlertTitle>Account created</AlertTitle>
            <AlertDescription mt={2} ml={12}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s.
            </AlertDescription>
          </Alert>
        </VStack>
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
            accessibilityAnnouncement: 'Well done, we are proud of you.',
            autoHideDuration: 1000,
          })
        }
      >
        Get Default Snackbar
      </Button>
      <Button
        onPress={() =>
          setSnackbar(template, {
            placement: 'top',
            accessibilityAnnouncement: 'Well done, we are proud of you.',
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

Implement `Slide`, all props of `Box` and `Slide` can be passed.

| Name                      | Type   | Description                                                    | Default |
| ------------------------- | ------ | -------------------------------------------------------------- | ------- |
| autoHideDuration          | number | The number of milliseconds to wait before dismissing snackbar. | -       |
| accessibilityAnnouncement | string | String to be announced by the screen reader.                   | -       |
