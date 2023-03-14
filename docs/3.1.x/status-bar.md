---
id: status-bar
title: StatusBar
---

Component to control the app status bar.

## Example

:::note

`StatusBar` component is an `iOS`/`Android` only component, please try the example on the respective devices.

:::

<!-- ```ComponentSnackPlayer path=basic,StatusBar,Basic.tsx

``` -->

```jsx isSnackPlayer name=StatusBar
import React from 'react';
import { StatusBar, Center, NativeBaseProvider } from 'native-base';

const Example = () => {
  return <StatusBar />;
};

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Example />
      </Center>
    </NativeBaseProvider>
  );
};
```

## Props

```ComponentPropTable path=basic,StatusBar,StatusBar.tsx showStylingProps=true

```
