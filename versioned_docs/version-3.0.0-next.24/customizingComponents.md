---
id: customizingComponents
title: Customising Components
---

Nativebase theme is complex object which looks like

```tsx
// theme
{
	colors: {...},
	fonts: {...},
	.
	.
	.
	config: {...},
}
```

using NB's `extendTheme` function, we can update theme object. A simple example to illustrate the process of updating the theme.

```tsx
import React from "react";
import { NativeBaseProvider, themeTools } from "native-base";
import { extendTheme } from "native-base";
import { Content } from "./Content";

export default function () {
  const theme = extendTheme({
    components: {
      Button: {
        // Can simply pass default props to change default behaviour of components.
        defaultProps: {
          colorScheme: "red",
        },
      },
      Checkbox: {
        defaultProps: {
          size: "lg",
          colorScheme: "amber",
        },
      },
      Avatar: {
        baseStyle: {
          borderRadius: "md",
        },
      },
      Heading: {
        // Can pass also function, giving you access themeingTools
        baseStyle: (props: any) => {
          return {
            color: themeTools.mode("red.300", "blue.300")(props),
            fontWeight: "normal",
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

From the above example we can observe that we customise components by passing the **components** object with the **key** being the **name** of the **component**. Whereas you set `defaultProps` or `baseStyle` to customise the components.

Both defaultProps and baseStyle can either be simple object or function. You can use object simple use cases while the function when you want to use `themeTools`.
