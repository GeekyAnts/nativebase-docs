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
import { Snackbar, VStack, Alert, AlertIcon, Text, Box, NativeBaseProvider, Center } from 'native-base';
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
            <Alert.Icon />
            <Alert.Title> Hello World</Alert.Title>
          </Alert>
          <Alert status="success">
            <Alert.Icon />
            <Alert.Title>Account created</Alert.Title>
            <Alert.Description mt={2} ml={12}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s.
            </Alert.Description>
          </Alert>
        </VStack>
      </Snackbar>
    </>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <SnackbarExample />
      </Center>
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
  NativeBaseProvider,
  Center
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
      <Center flex={1}>
        <SnackbarExample />
      </Center>
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
