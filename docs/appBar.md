---
id: appBar
title: AppBar
---

The AppBar component can be used to create app headers.

## Usage

```SnackPlayer name=AppBar%20Usage
import React from "react";
import {
  AppBar,
  IconButton,
  Icon,
  Text,
  VStack,
  NativeBaseProvider,
  Center
} from "native-base";

function AppBarComponent() {
  return (
    <AppBar>
      <AppBar.Left>
        <IconButton
          accessibilityLabel="Navigate back"
          icon={
            <Icon name="arrow-left" type="MaterialCommunityIcons" size={8} />
          }
        />
      </AppBar.Left>

      <AppBar.Content>
        <VStack space={1}>
          <Text fontWeight="bold" fontSize="lg" isTruncated color="white">
            Title
          </Text>
          <Text isTruncated color="white">
            Subtitle
          </Text>
        </VStack>
      </AppBar.Content>

      <AppBar.Right space={2}>
        <IconButton
          accessibilityLabel="Search"
          icon={<Icon name="search" size={6} color="white" />}
        />
        <IconButton
          accessibilityLabel="More"
          icon={<Icon name="more-vert" size={6} color="white" />}
        />
      </AppBar.Right>
    </AppBar>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <AppBarComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Props

Implements `Box`, all props of Box can be passed.

### AppBar Props

| Name            | Type   | Description                                                            | Default |
| --------------- | ------ | ---------------------------------------------------------------------- | ------- |
| statusBarHeight | number | Defaults to SafeAreaView on iOS and Statusbar.height on android.       | -       |
| space           | number | Space between AppBar.Left, AppBar.Content and AppBar.Right components. | 2       |

## AppBar.Left Props

Implements `HStack` , all the props of HStack can be passed.

## AppBar.Content Props

Implements `HStack` , all the props of HStack can be passed.

## AppBar.Right Props

Implements `HStack` , all the props of HStack can be passed.
