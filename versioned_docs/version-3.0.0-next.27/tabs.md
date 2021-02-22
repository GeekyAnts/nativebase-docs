---
id: tabs
title: Tabs
---

Tabs are used to communicate a state that affects a system, feature or page.

## Import

NativeBase exports 5 modal-related components:

- **Tabs**: Provides context and state for all components.
- **TabBar**: Wrapper for the `Tab` components.
- **Tab**: Element that serves as a label for one of the tab views and can be activated to display that panel.
- **TabViews**: Wrapper for the `TabPanel` components.
- **TabView**: element that contains the content associated with a tab.

```jsx
import { Tabs, TabBar, Tab, TabViews, TabView } from 'native-base';
```

## Usage

```SnackPlayer name=Tab%20Usage
import React from 'react';
import { Tabs, TabBar, TabViews, Tab, TabView, NativeBaseProvider } from 'native-base';

function TabComponent() {
  return (
    <Tabs>
      <TabBar>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Three</Tab>
      </TabBar>
      <TabViews>
        <TabView>One</TabView>
        <TabView>Two</TabView>
        <TabView>Three</TabView>
      </TabViews>
    </Tabs>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <TabComponent />
    </NativeBaseProvider>
  );
}
```

## Composition

```SnackPlayer name=Tab%20Composition
import React from 'react';
import {
  Box,
  Heading,
  Tabs,
  TabBar,
  TabViews,
  Tab,
  TabView,
  Text,
  NativeBaseProvider
} from 'native-base';

function TabComponent() {
  return (
    <Box width="100%" p={3}>
      <Heading>This is an example for Tabs</Heading>
      <Tabs my={10}>
        <TabBar>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabBar>
        <TabViews>
          <TabView>One</TabView>
          <TabView>Two</TabView>
          <TabView>Three</TabView>
        </TabViews>
      </Tabs>
      <Text>To show how tabs behaves around other components.</Text>
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <TabComponent />
    </NativeBaseProvider>
  );
}
```

## Variant

```SnackPlayer name=Tab%20Variant
import React from 'react';
import { VStack, Tabs, TabBar, TabViews, Tab, TabView, NativeBaseProvider } from 'native-base';

function TabComponent() {
  return (
    <VStack width="100%" p={3} space={7}>
      <Tabs variant="line">
        <TabBar>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabBar>
        <TabViews>
          <TabView>One</TabView>
          <TabView>Two</TabView>
          <TabView>Three</TabView>
        </TabViews>
      </Tabs>
      <Tabs variant="enclosed">
        <TabBar>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabBar>
        <TabViews>
          <TabView>One</TabView>
          <TabView>Two</TabView>
          <TabView>Three</TabView>
        </TabViews>
      </Tabs>
      <Tabs variant="enclosed-colored">
        <TabBar>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabBar>
        <TabViews>
          <TabView>One</TabView>
          <TabView>Two</TabView>
          <TabView>Three</TabView>
        </TabViews>
      </Tabs>
      <Tabs variant="soft-rounded">
        <TabBar>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabBar>
        <TabViews>
          <TabView>One</TabView>
          <TabView>Two</TabView>
          <TabView>Three</TabView>
        </TabViews>
      </Tabs>
      <Tabs variant="solid-rounded">
        <TabBar>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabBar>
        <TabViews>
          <TabView>One</TabView>
          <TabView>Two</TabView>
          <TabView>Three</TabView>
        </TabViews>
      </Tabs>
    </VStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <TabComponent />
    </NativeBaseProvider>
  );
}
```

## TabsAlignment

```SnackPlayer name=Tab%20TabsAlignment
import React from 'react';
import { VStack, Tabs, TabBar, TabViews, Tab, TabView, NativeBaseProvider } from 'native-base';

function TabComponent() {
  return (
    <VStack width="100%" p={3} space={7}>
      <Tabs align="start">
        <TabBar>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabBar>
        <TabViews>
          <TabView>One</TabView>
          <TabView>Two</TabView>
          <TabView>Three</TabView>
        </TabViews>
      </Tabs>
      <Tabs align="center">
        <TabBar>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabBar>
        <TabViews>
          <TabView>One</TabView>
          <TabView>Two</TabView>
          <TabView>Three</TabView>
        </TabViews>
      </Tabs>
      <Tabs align="end">
        <TabBar>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabBar>
        <TabViews>
          <TabView>One</TabView>
          <TabView>Two</TabView>
          <TabView>Three</TabView>
        </TabViews>
      </Tabs>
    </VStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <TabComponent />
    </NativeBaseProvider>
  );
}
```

## Colors

```SnackPlayer name=Tab%20Colors
import React from 'react';
import { VStack, Tabs, TabBar, TabViews, Tab, TabView, NativeBaseProvider } from 'native-base';

function TabComponent() {
  return (
    <VStack width="100%" p={3} space={7}>
      <Tabs colorScheme="danger">
        <TabBar>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabBar>
        <TabViews>
          <TabView>One</TabView>
          <TabView>Two</TabView>
          <TabView>Three</TabView>
        </TabViews>
      </Tabs>
      <Tabs colorScheme="warning">
        <TabBar>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabBar>
        <TabViews>
          <TabView>One</TabView>
          <TabView>Two</TabView>
          <TabView>Three</TabView>
        </TabViews>
      </Tabs>
      <Tabs colorScheme="teal">
        <TabBar>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabBar>
        <TabViews>
          <TabView>One</TabView>
          <TabView>Two</TabView>
          <TabView>Three</TabView>
        </TabViews>
      </Tabs>
      <Tabs colorScheme="orange">
        <TabBar>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabBar>
        <TabViews>
          <TabView>One</TabView>
          <TabView>Two</TabView>
          <TabView>Three</TabView>
        </TabViews>
      </Tabs>
      <Tabs colorScheme="info">
        <TabBar>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabBar>
        <TabViews>
          <TabView>One</TabView>
          <TabView>Two</TabView>
          <TabView>Three</TabView>
        </TabViews>
      </Tabs>
    </VStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <TabComponent />
    </NativeBaseProvider>
  );
}
```

## Size

```SnackPlayer name=Tab%20Sizes
import React from 'react';
import { VStack, Tabs, TabBar, TabViews, Tab, TabView, NativeBaseProvider} from 'native-base';

function TabComponent() {
  return (
    <VStack width="100%" p={3} space={7}>
      {/* Small Tabs */}
      <Tabs size="sm">
        <TabBar>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabBar>
        <TabViews>
          <TabView>One</TabView>
          <TabView>Two</TabView>
          <TabView>Three</TabView>
        </TabViews>
      </Tabs>
      {/* Medium Tabs (default) */}
      <Tabs size="md">
        <TabBar>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabBar>
        <TabViews>
          <TabView>One</TabView>
          <TabView>Two</TabView>
          <TabView>Three</TabView>
        </TabViews>
      </Tabs>
      {/* Large Tabs (default) */}
      <Tabs size="lg">
        <TabBar>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabBar>
        <TabViews>
          <TabView>One</TabView>
          <TabView>Two</TabView>
          <TabView>Three</TabView>
        </TabViews>
      </Tabs>
    </VStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <TabComponent />
    </NativeBaseProvider>
  );
}
```

## FittedTabs

```SnackPlayer name=Tab%20FittedTabs
import React from 'react';
import { Box, Tabs, TabBar, TabViews, Tab, TabView, NativeBaseProvider } from 'native-base';

function TabComponent() {
  return (
    <Box width="100%" p={3}>
      <Tabs isFitted>
        <TabBar>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabBar>
        <TabViews>
          <TabView>One</TabView>
          <TabView>Two</TabView>
          <TabView>Three</TabView>
        </TabViews>
      </Tabs>
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <TabComponent />
    </NativeBaseProvider>
  );
}
```

## TabBarOnly

```SnackPlayer name=Tab%20TabBarOnly
import React from 'react';
import { Tabs, TabBar, Tab, NativeBaseProvider } from 'native-base';

function TabComponent() {
  return (
    <Tabs>
      <TabBar>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Three</Tab>
        <Tab>Four</Tab>
      </TabBar>
    </Tabs>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <TabComponent />
    </NativeBaseProvider>
  );
}
```

## Props

Implement `Box`, all props of Box can be passed.

### Tabs

| Name         | Type                                                                     | Description                                                                                                       | Default |
| ------------ | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- | ------- |
| align        | center, end, start                                                       | The alignments of the tab.                                                                                        | start   |
| colorScheme  | string                                                                   | The color of the radio when it's checked. This should be one of the color keys in the theme (e.g."green", "red"). | -       |
| defaultIndex | number                                                                   | The index of the open tab.                                                                                        | -       |
| index        | number                                                                   | If given, update the default open tab.                                                                            | 0       |
| size         | lg, md, sm                                                               | The size of the tab.                                                                                              | md      |
| isFitted     | boolean                                                                  | The tabs will spread in the TabBar.                                                                               | -       |
| onChange     | function                                                                 | The callback invoked when tab is changed.                                                                         | -       |
| variant      | enclosed, enclosed-colored, line, soft-rounded, solid-box, solid-rounded | The variant of the tabs style to use.                                                                             | line    |

TabBar, Tab, TabViews, TabView all implement `Box`, all the props of Box can be passed to it.
