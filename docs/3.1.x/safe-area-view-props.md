---
id: safe-area-view-props
title: SafeAreaView Props
---

To make your components respect the [SafeAreaView](https://reactnative.dev/docs/safeareaview) of the device, we have provided some props that you can use with Box component. They apply a safe padding to your component in the parts decided by the passed props. These props accept either a boolean or a number. If a Boolean is passed, then the component takes a flexible inset and adjusts its children according to the device. If a number is passed, then it provides a fixed inset in the chosen direction.

- `safeArea`: Apply safe padding to all edges.
- `safeAreaX`: Apply safe padding to x direction.
- `safeAreaY`: Apply safe padding to y direction.
- `safeAreaTop`: Apply safe padding to top.
- `safeAreaBottom`: Apply safe padding to bottom.
- `safeAreaLeft`: Apply safe padding to left.
- `safeAreaRight`: Apply safe padding to right.

Internally, NativeBase uses [useSafeAreaInsets](https://docs.expo.dev/versions/latest/sdk/safe-area-context/#hooks) hook of [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context).

:::info

SafeAreaView props can only be applied on [Box](box.md) as of now. To make your App SafeArea safe, just wrap your app with a Box and pass safeArea props to it.

:::

## Examples

### Flexible SafeArea

```jsx isLive=true
import React from 'react';
import { NativeBaseProvider, Box, Text } from 'native-base';
function MyComponent() {
  return (
    // This would look different on devices with different insets
    <Box bg="teal.400" rounded="xl" size={24} safeArea>
      <Text>NativeBase</Text>
    </Box>
  );
}

// Example template which wraps component with NativeBaseProvider
export function Example() {
  return (
    <NativeBaseProvider>
      <MyComponent />
    </NativeBaseProvider>
  );
}
```

### Fixed SafeArea

```jsx isLive=true
import React from 'react';
import { NativeBaseProvider, Box, Text } from 'native-base';
function MyComponent() {
  return (
    // This would look same on all devices
    <Box bg="teal.400" rounded="xl" size={24} safeAreaTop={8}>
      <Text>NativeBase</Text>
    </Box>
  );
}

// Example template which wraps component with NativeBaseProvider
export function Example() {
  return (
    <NativeBaseProvider>
      <MyComponent />
    </NativeBaseProvider>
  );
}
```

### Using Hook

If you want to add the SafeAreaView props to other components, you can use the hook. Since `SafeAreaView` props add relevant padding to the components, you will need to pass the padding manually that you are applying to the component for it to return the SafeArea adjusted padding.

```jsx isLive=true
import React from 'react';
import { NativeBaseProvider, Box, Text, useSafeArea } from 'native-base';
function MyComponent() {
  const safeAreaProps = useSafeArea({ safeAreaTop: true, pt: 2 });
  return (
    // This would look same on all devices
    <Box bg="teal.400" rounded="xl" size={24} {...safeAreaProps}>
      <Text>NativeBase</Text>
    </Box>
  );
}

// Example template which wraps component with NativeBaseProvider
export function Example() {
  return (
    <NativeBaseProvider>
      <MyComponent />
    </NativeBaseProvider>
  );
}
```
