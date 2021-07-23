---
id: tabs
title: Tabs
---

Tabs are used to communicate a state that affects a system, feature or page.

## Import

NativeBase exports 5 modal-related components:

- **Tabs**: Provides context and state for all components
- **Tabs.Bar**: Wrapper for the `Tab` components
- **Tabs.Tab**: element that serves as a label for one of the tab view and can be activated to display that panel.
- **Tabs.Views**: Wrapper for the `Tabs.View` components
- **Tabs.View**: element that contains the content associated with a tab

```jsx
import { Tabs } from 'native-base';
```

## Examples

### Usage

```SnackPlayer name=Tab%20Usage
import React from 'react';
import { Tabs, NativeBaseProvider, Center } from 'native-base';

function TabComponent() {
  return (
    <Tabs>
      <Tabs.Bar>
        <Tabs.Tab>One</Tabs.Tab>
        <Tabs.Tab>Two</Tabs.Tab>
        <Tabs.Tab>Three</Tabs.Tab>
      </Tabs.Bar>
      <Tabs.Views>
        <Tabs.View>One</Tabs.View>
        <Tabs.View>Two</Tabs.View>
        <Tabs.View>Three</Tabs.View>
      </Tabs.Views>
    </Tabs>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <TabComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Composition

```SnackPlayer name=Tab%20Composition
import React from 'react';
import {
  Box,
  Heading,
  Tabs,
  Text,
  NativeBaseProvider,
  Center
} from 'native-base';

function TabComponent() {
  return (
    <Box width="100%" p={3}>
      <Heading>This is an example for Tabs</Heading>
      <Tabs my={10}>
        <Tabs.Bar>
          <Tabs.Tab>One</Tabs.Tab>
          <Tabs.Tab>Two</Tabs.Tab>
          <Tabs.Tab>Three</Tabs.Tab>
        </Tabs.Bar>
        <Tabs.Views>
          <Tabs.View>One</Tabs.View>
          <Tabs.View>Two</Tabs.View>
          <Tabs.View>Three</Tabs.View>
        </Tabs.Views>
      </Tabs>
      <Text>To show how tabs behaves around other components.</Text>
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <TabComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Variant

```SnackPlayer name=Tab%20Variant
import React from 'react';
import { VStack, Tabs, NativeBaseProvider, Center } from 'native-base';

function TabComponent() {
  return (
    <VStack width="100%" p={3} space={7}>
      <Tabs variant="line">
        <Tabs.Bar>
          <Tabs.Tab>One</Tabs.Tab>
          <Tabs.Tab>Two</Tabs.Tab>
          <Tabs.Tab>Three</Tabs.Tab>
        </Tabs.Bar>
        <Tabs.Views>
          <Tabs.View>One</Tabs.View>
          <Tabs.View>Two</Tabs.View>
          <Tabs.View>Three</Tabs.View>
        </Tabs.Views>
      </Tabs>
      <Tabs variant="enclosed">
        <Tabs.Bar>
          <Tabs.Tab>One</Tabs.Tab>
          <Tabs.Tab>Two</Tabs.Tab>
          <Tabs.Tab>Three</Tabs.Tab>
        </Tabs.Bar>
        <Tabs.Views>
          <Tabs.View>One</Tabs.View>
          <Tabs.View>Two</Tabs.View>
          <Tabs.View>Three</Tabs.View>
        </Tabs.Views>
      </Tabs>
      <Tabs variant="enclosed-colored">
        <Tabs.Bar>
          <Tabs.Tab>One</Tabs.Tab>
          <Tabs.Tab>Two</Tabs.Tab>
          <Tabs.Tab>Three</Tabs.Tab>
        </Tabs.Bar>
        <Tabs.Views>
          <Tabs.View>One</Tabs.View>
          <Tabs.View>Two</Tabs.View>
          <Tabs.View>Three</Tabs.View>
        </Tabs.Views>
      </Tabs>
      <Tabs variant="soft-rounded">
        <Tabs.Bar>
          <Tabs.Tab>One</Tabs.Tab>
          <Tabs.Tab>Two</Tabs.Tab>
          <Tabs.Tab>Three</Tabs.Tab>
        </Tabs.Bar>
        <Tabs.Views>
          <Tabs.View>One</Tabs.View>
          <Tabs.View>Two</Tabs.View>
          <Tabs.View>Three</Tabs.View>
        </Tabs.Views>
      </Tabs>
      <Tabs variant="solid-rounded">
        <Tabs.Bar>
          <Tabs.Tab>One</Tabs.Tab>
          <Tabs.Tab>Two</Tabs.Tab>
          <Tabs.Tab>Three</Tabs.Tab>
        </Tabs.Bar>
        <Tabs.Views>
          <Tabs.View>One</Tabs.View>
          <Tabs.View>Two</Tabs.View>
          <Tabs.View>Three</Tabs.View>
        </Tabs.Views>
      </Tabs>
    </VStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <TabComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### TabsAlignment

```SnackPlayer name=Tab%20TabsAlignment
import React from 'react';
import { VStack, Tabs, NativeBaseProvider, Center } from 'native-base';

function TabComponent() {
  return (
    <VStack width="100%" p={3} space={7}>
      <Tabs align="start">
        <Tabs.Bar>
          <Tabs.Tab>One</Tabs.Tab>
          <Tabs.Tab>Two</Tabs.Tab>
          <Tabs.Tab>Three</Tabs.Tab>
        </Tabs.Bar>
        <Tabs.Views>
          <Tabs.View>One</Tabs.View>
          <Tabs.View>Two</Tabs.View>
          <Tabs.View>Three</Tabs.View>
        </Tabs.Views>
      </Tabs>
      <Tabs align="center">
        <Tabs.Bar>
          <Tabs.Tab>One</Tabs.Tab>
          <Tabs.Tab>Two</Tabs.Tab>
          <Tabs.Tab>Three</Tabs.Tab>
        </Tabs.Bar>
        <Tabs.Views>
          <Tabs.View>One</Tabs.View>
          <Tabs.View>Two</Tabs.View>
          <Tabs.View>Three</Tabs.View>
        </Tabs.Views>
      </Tabs>
      <Tabs align="end">
        <Tabs.Bar>
          <Tabs.Tab>One</Tabs.Tab>
          <Tabs.Tab>Two</Tabs.Tab>
          <Tabs.Tab>Three</Tabs.Tab>
        </Tabs.Bar>
        <Tabs.Views>
          <Tabs.View>One</Tabs.View>
          <Tabs.View>Two</Tabs.View>
          <Tabs.View>Three</Tabs.View>
        </Tabs.Views>
      </Tabs>
    </VStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <TabComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Colors

```SnackPlayer name=Tab%20Colors
import React from 'react';
import { VStack, Tabs, NativeBaseProvider, Center } from 'native-base';

function TabComponent() {
  return (
    <VStack width="100%" p={3} space={7}>
      <Tabs colorScheme="danger">
        <Tabs.Bar>
          <Tabs.Tab>One</Tabs.Tab>
          <Tabs.Tab>Two</Tabs.Tab>
          <Tabs.Tab>Three</Tabs.Tab>
        </Tabs.Bar>
        <Tabs.Views>
          <Tabs.View>One</Tabs.View>
          <Tabs.View>Two</Tabs.View>
          <Tabs.View>Three</Tabs.View>
        </Tabs.Views>
      </Tabs>
      <Tabs colorScheme="warning">
        <Tabs.Bar>
          <Tabs.Tab>One</Tabs.Tab>
          <Tabs.Tab>Two</Tabs.Tab>
          <Tabs.Tab>Three</Tabs.Tab>
        </Tabs.Bar>
        <Tabs.Views>
          <Tabs.View>One</Tabs.View>
          <Tabs.View>Two</Tabs.View>
          <Tabs.View>Three</Tabs.View>
        </Tabs.Views>
      </Tabs>
      <Tabs colorScheme="teal">
        <Tabs.Bar>
          <Tabs.Tab>One</Tabs.Tab>
          <Tabs.Tab>Two</Tabs.Tab>
          <Tabs.Tab>Three</Tabs.Tab>
        </Tabs.Bar>
        <Tabs.Views>
          <Tabs.View>One</Tabs.View>
          <Tabs.View>Two</Tabs.View>
          <Tabs.View>Three</Tabs.View>
        </Tabs.Views>
      </Tabs>
      <Tabs colorScheme="orange">
        <Tabs.Bar>
          <Tabs.Tab>One</Tabs.Tab>
          <Tabs.Tab>Two</Tabs.Tab>
          <Tabs.Tab>Three</Tabs.Tab>
        </Tabs.Bar>
        <Tabs.Views>
          <Tabs.View>One</Tabs.View>
          <Tabs.View>Two</Tabs.View>
          <Tabs.View>Three</Tabs.View>
        </Tabs.Views>
      </Tabs>
      <Tabs colorScheme="info">
        <Tabs.Bar>
          <Tabs.Tab>One</Tabs.Tab>
          <Tabs.Tab>Two</Tabs.Tab>
          <Tabs.Tab>Three</Tabs.Tab>
        </Tabs.Bar>
        <Tabs.Views>
          <Tabs.View>One</Tabs.View>
          <Tabs.View>Two</Tabs.View>
          <Tabs.View>Three</Tabs.View>
        </Tabs.Views>
      </Tabs>
    </VStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <TabComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Sizes

```SnackPlayer name=Tab%20Sizes
import React from 'react';
import { VStack, Tabs, NativeBaseProvider, Center} from 'native-base';

function TabComponent() {
  return (
    <VStack width="100%" p={3} space={7}>
      {/* Small Tabs */}
      <Tabs size="sm">
        <Tabs.Bar>
          <Tabs.Tab>One</Tabs.Tab>
          <Tabs.Tab>Two</Tabs.Tab>
          <Tabs.Tab>Three</Tabs.Tab>
        </Tabs.Bar>
        <Tabs.Views>
          <Tabs.View>One</Tabs.View>
          <Tabs.View>Two</Tabs.View>
          <Tabs.View>Three</Tabs.View>
        </Tabs.Views>
      </Tabs>
      {/* Medium Tabs (default) */}
      <Tabs size="md">
        <Tabs.Bar>
          <Tabs.Tab>One</Tabs.Tab>
          <Tabs.Tab>Two</Tabs.Tab>
          <Tabs.Tab>Three</Tabs.Tab>
        </Tabs.Bar>
        <Tabs.Views>
          <Tabs.View>One</Tabs.View>
          <Tabs.View>Two</Tabs.View>
          <Tabs.View>Three</Tabs.View>
        </Tabs.Views>
      </Tabs>
      {/* Large Tabs (default) */}
      <Tabs size="lg">
        <Tabs.Bar>
          <Tabs.Tab>One</Tabs.Tab>
          <Tabs.Tab>Two</Tabs.Tab>
          <Tabs.Tab>Three</Tabs.Tab>
        </Tabs.Bar>
        <Tabs.Views>
          <Tabs.View>One</Tabs.View>
          <Tabs.View>Two</Tabs.View>
          <Tabs.View>Three</Tabs.View>
        </Tabs.Views>
      </Tabs>
    </VStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <TabComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### FittedTabs

```SnackPlayer name=Tab%20FittedTabs
import React from 'react';
import { Box, Tabs, NativeBaseProvider, Center } from 'native-base';

function TabComponent() {
  return (
    <Box width="100%" p={3}>
      <Tabs isFitted>
        <Tabs.Bar>
          <Tabs.Tab>One</Tabs.Tab>
          <Tabs.Tab>Two</Tabs.Tab>
          <Tabs.Tab>Three</Tabs.Tab>
        </Tabs.Bar>
        <Tabs.Views>
          <Tabs.View>One</Tabs.View>
          <Tabs.View>Two</Tabs.View>
          <Tabs.View>Three</Tabs.View>
        </Tabs.Views>
      </Tabs>
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <TabComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### TabBarOnly

```SnackPlayer name=Tab%20TabBarOnly
import React from 'react';
import { Tabs, NativeBaseProvider, Center } from 'native-base';

function TabComponent() {
  return (
    <Tabs>
      <Tabs.Bar>
        <Tabs.Tab>One</Tabs.Tab>
        <Tabs.Tab>Two</Tabs.Tab>
        <Tabs.Tab>Three</Tabs.Tab>
        <Tabs.Tab>Four</Tabs.Tab>
      </Tabs.Bar>
    </Tabs>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <TabComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Props

`Tabs` implements **[Box](box.md)**, so all the Box Props can be passed to it.

### Tabs

| Name         | Type                                                                                 | Description                                                                                                       | Default |
| ------------ | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- | ------- |
| align        | `center`, `end`, `start`                                                             | The alignments of the tab.                                                                                        | `start` |
| colorScheme  | string                                                                               | The color of the radio when it's checked. This should be one of the color keys in the theme (e.g."green", "red"). | -       |
| defaultIndex | number                                                                               | The index of the open tab.                                                                                        | -       |
| index        | number                                                                               | If given, update the default open tab.                                                                            | 0       |
| size         | `lg`, `md`, `sm`                                                                     | The size of the tab.                                                                                              | `md`    |
| isFitted     | boolean                                                                              | The tabs will spread in the TabBar.                                                                               | -       |
| onChange     | function                                                                             | The callback invoked when tab is changed.                                                                         | -       |
| variant      | `enclosed`, `enclosed-colored`, `line`, `soft-rounded`, `solid-box`, `solid-rounded` | The variant of the tabs style to use.                                                                             | `line`  |

`Tabs.Bar`, `Tabs.Tab`, `Tabs.Views`, `Tabs.View` all implement [`Box`](box.md), all the props of Box can be passed to it.

## Accessibility

### Keyboard

- `ArrowRight` Moves focus to the next tab
- `ArrowLeft` Moves focus to the previous tab
- `Tab` When focus moves into the tab list, places focus on the active tab element
- `Home` Moves focus to the first tab
- `End` Moves focus to the last tab

### ARIA roles

- Tab has role set to `tab`
- `aria-selected` is set to true when a tab is selected and all other Tabs have it set to false
- `aria-controls` is set to the tabpanel's id
- Tablist has `role` set to `tablist`
- TabPanel has `role` set to `tabpanel`
- `aria-labelledby` is set to the id of the Tab that labels the TabPanel
