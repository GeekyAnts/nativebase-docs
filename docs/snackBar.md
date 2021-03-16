---
id: snackBar
title: SnackBar
---

`Snackbar` informs users about a process that an app has performed or will perform. It appears temporarily, towards the bottom of the screen. It shouldn’t interrupt the user experience and doesn't require user input to disappear.

## Import

```jsx
import { Snackbar } from 'native-base';
```

## Example

### Usage

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

### Using Hook

```SnackPlayer name=SnackBar%20Hooks
import React from 'react';
import {
  Button,
  Alert,
  useSnackbar,
  VStack,
  NativeBaseProvider,
  Center
} from 'native-base';
function SnackbarExample () {
  const { setSnackbar } = useSnackbar();
  const template = (
    <Alert status="success">
      <Alert.Icon />
      <Alert.Description>Welldone, we are proud of you.</Alert.Description>
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

Implement [`Slide`](transition.md#slide), all props of [`Box`](box.md) and [`Slide`](transition.md#slide) can be passed.

| Name                      | Type   | Description                                                    | Default |
| ------------------------- | ------ | -------------------------------------------------------------- | ------- |
| autoHideDuration          | number | The number of milliseconds to wait before dismissing snackbar. | -       |
| accessibilityAnnouncement | string | String to be announced by the screen reader.                   | -       |
| accessibilityLiveRegion   | `none` , `polite` , `assertive`   | To read the content to Talkback and screen reader on web. [Read more](https://reactnative.dev/docs/accessibility#accessibilityliveregion-android)              | polite        |
## Accessibility
- On Android and Web, Snackbar renders under a View with accessibilityLiveRegion which announces the content rendered inside it to screen reader devices.
- On iOS, accessibilityLiveRegion is not supported yet, so we use the [accessibilityAnnouncement](https://reactnative.dev/docs/accessibilityinfo#announceforaccessibility) to announce the content.