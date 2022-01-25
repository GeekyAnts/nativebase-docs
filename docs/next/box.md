---
id: box
title: Box
---

This is a generic component for low level layout needs. It is similar to a [`div`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div) in HTML.

```jsx isShowcase
import React from "react";
import { Box } from "native-base";
export const Example = () => {
  return (
    <>
      <Box
        p="2"
        bg="primary.500"
        _text={{
          fontSize: "md",
          fontWeight: "medium",
          color: "warmGray.50",
          letterSpacing: "lg",
        }}
        shadow={2}
      >
        This is a Box
      </Box>
    </>
  );
};
```

## Example

### Basic

```ComponentSnackPlayer path=components,primitives,Box,basic.tsx

```

<br/>

### Composition

```ComponentSnackPlayer path=components,primitives,Box,composition.tsx

```

<br/>

### With Linear gradient

If you're using [Expo](https://docs.expo.io/) managed or bare workflow, you can install [expo-linear-gradient](https://docs.expo.io/versions/latest/sdk/linear-gradient/) and configure it in the [NativeBaseProvider](setup-provider#add-external-dependencies-optional) as shown below.

```jsx isLive=true
import React from "react";
import { Box, Center, NativeBaseProvider } from "native-base";
const LinearGradient = require("expo-linear-gradient").LinearGradient;
export const App = () => {
  return (
    <Box
      bg={{
        linearGradient: {
          colors: ["lightBlue.300", "violet.800"],
          start: [0, 0],
          end: [1, 0],
        },
      }}
      p="12"
      rounded="xl"
      _text={{
        fontSize: "md",
        fontWeight: "medium",
        color: "warmGray.50",
        textAlign: "center",
      }}
    >
      This is a Box with Linear Gradient
    </Box>
  );
};

const config = {
  dependencies: {
    "linear-gradient": LinearGradient,
  },
};

export function Example() {
  return (
    <NativeBaseProvider config={config}>
      <Center flex={1} px="3">
        <App />
      </Center>
    </NativeBaseProvider>
  );
}
```

<br/>

If you're not using Expo, you can install [react-native-linear-gradient](https://www.npmjs.com/package/react-native-linear-gradient) and configure in the [NativeBaseProvider](setup-provider#add-external-dependencies-optional) as shown below.

```jsx
import React from "react";
import { Box, NativeBaseProvider } from "native-base";

const App = () => {
  return (
    <Box
      bg={{
        linearGradient: {
          colors: ["lightBlue.300", "violet.800"],
          start: [0, 0],
          end: [1, 0],
        },
      }}
      p="12"
      rounded="lg"
      _text={{ fontSize: "md", fontWeight: "bold", color: "white" }}
    >
      This is a Box with Linear Gradient
    </Box>
  );
};

const config = {
  dependencies: {
    "linear-gradient": require("react-native-linear-gradient").default,
  },
};

export default () => {
  return (
    <NativeBaseProvider config={config}>
      <App />
    </NativeBaseProvider>
  );
};
```

<br/>

### Basic (With Ref)

```ComponentSnackPlayer path=components,primitives,Box,WithRef.tsx

```

<br/>
<br/>

:::tip Common use cases for Box component are:

- Create responsive layouts with ease.
- Provide a shorthand to pass styles via props (`bg` instead of `backgroundColor`).

:::

## Props

```ComponentPropTable path=primitives,Box,index.tsx showStylingProps=true

```
