---
id: darkMode
title: Making components dark mode compatible
---

By default, most of Nativebase's components are dark mode compatible. In some scenario, you might need to make your component respond to color mode. There are 2 way to achieve this:

1. By updating component's theme
2. By using useColorModeValue

## 1. By updating component's theme

In this approach we use NB's `extendTheme` function to customise the components and the use themeTools to make the component dark mode compatible.

Note: Changes on the theme will be reflected on the entire application.

```tsx
import React from "react";
import { NativeBaseProvider, themeTools } from "native-base";
import { extendTheme } from "native-base";
import { Content } from "./Content";

export default function () {
  const theme = extendTheme({
    components: {
      Heading: {
        baseStyle: (props: any) => {
          return {
            color: themeTools.mode("red.300", "blue.300")(props),
          };
        },
      },
    },
  });
  return (
    <NativeBaseProvider theme={theme}>
      <Content />
    </NativeBaseProvider>
  );
}
```

In the above example, the Heading component's color property will now respond to change in color, namely in light mode it will be red (red.300) colored and in dark mode it will blue (blue.300) colored.

## 2. By using useColorModeValue

In this approach we use NB's `useColorModeValue` function and update specific props instead of updating the entire theme.

Note: Changes on the theme will be reflected on the entire application.

```tsx
import React from "react";
import { useColorModeValue, Button } from "native-base";

export default function () {
  return (
    <Button
      colorScheme={useColorModeValue("teal", "amber")}
      variant={useColorModeValue("solid", "outline")}
    >
      Sample
    </Button>
  );
}
```

In the above example, you'll get a **solid teal Button** in **light** mode whereas an **outline amber Button** in **dark** mode. You can get creative and make other properties respond to the color mode as well.
