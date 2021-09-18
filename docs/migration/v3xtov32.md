---
id: migration-guide-three-point-two
title: Upgrading to 3.2.0 from 3.x
---

As we continue to improve NativeBase v3 we got a lot of feature requests and we also revamped our theme to make it more consistent, easy to understand, optimized and promote good practices while writing code.

To do that we had to make some changes to our theme in `v3.2.0`. These are breaking changes if you are using some of the tokens in your project. To make it easy for you to upgrade, we are providing three options:

## Option 1 - Extend previous version's theme for backward compatibility

You can use this CLI tool to upgrade to `v3.2.0` and run a codemmod that adds a backward compatible theme to your code.

```bash
npx native-base-upgrade
```

Please follow the instructions after running this. The codemod will add a backward compatible theme to your `NativeBaseProvider`.

If you want to do this manually, you can add this theme to your provider which preserves all the old token that were changed or removed in v3.2.0.

```jsx
import { NativeBaseProvider, extendTheme } from "native-base";

const compatibilityTheme = {
  lineHeights: {
    none: "1",
    shorter: "1.25",
    short: "1.375",
    base: "1.5",
    tall: "1.625",
    taller: "2",
    3: "12px",
    4: "16px",
    5: "20px",
    6: "24px",
    7: "28px",
    8: "32px",
    9: "36px",
    10: "40px",
  },
  letterSpacings: {
    xxs: "-1.5",
    xs: "-0.5",
    sm: "0",
    md: "0.1",
    lg: "0.15",
    xl: "0.25",
    "2xl": "0.4",
    "3xl": "0.5",
    "4xl": "1.25",
    "5xl": "1.5",
  },
  fontSizes: {
    xxs: "10",
  },
  radii: {
    sm: "2",
    md: "4",
    lg: "6",
    xl: "8",
    pill: "25",
  },
  borderWidth: {
    none: "0",
  },
};
// ...
const yourCustomTheme = {
  // ...
}

<NativeBaseProvider
  theme={extendTheme(compatibilityTheme, yourCustomTheme)}
>
</NativeBaseProvider>
```

## Option 2 - Upgrade manually with new theme tokens

If you choose this option, you won't have to carry the baggage of older theme for compatibility. To upgrade manually to `v3.2.0`, follow these steps:

1. Find if any of the tokens on the left-hand side exist in your project for `lineHeight`, `letterSpacing`, `borderRadius` or `fontSize`, and replace them with the new values/tokens from the right-hand side:

   ```js
   {
     // For lineHeight
     "none": "1px",
     "shorter": "1.25px",
     "short": "1.375px",
     "base": "1.5px",
     "tall": "1.625px",
     "taller": "2px",
     "3": "12px",
     "4": "2xs",
     "5": "sm",
     "6": "lg",
     "7": "xl",
     "8": "2xl",
     "9": "36px",
     "10": "3xl"

     // For letterSpacing
     "xxs": "2xs"

     // For borderRadius
     "sm": "xs",
     "md": "sm",
     "lg": "md",
     "xl": "lg",
     "pill": "25"

     // For fontSize
     "xxs": "2xs"

   }
   ```

2. We have introduced [strict mode](../strict-mode.md) in `v3.2.0` which is `off` by default. If you don't want to have strict mode, step 1 is enough. If you want to comply with the strict mode, you also need to do these:

   1. All utility props which take theme tokens as values, now take only string values as a valid type

      This means that if you pass a number value which is supposed to be a theme token, into a utility prop, then it will be treated as invalid and based on you strict mode config will show you an error or a warning.

      ```js
      // Incorrect Way to pass theme tokens to utility props
      <Box p={4} mx={8} /> ❌

      ```

      ```js
      // Correct Way to pass theme tokens to utility props
      <Box p="4" mx="8" /> ✅
      ```

   2. Remove all non token values given to utility props which accept theme tokens. For example, `p="11"` is not supported with the [default theme](../default-theme.md). Pick up another value from default theme tokens or [define a new one yourself](../customizingTheme.md).
   3. If you are using [Icon](../icon.md) with `as` prop, verify this
      ```jsx
        /* correct */
        <Icon as={Ionicons} name="md-checkmark-circle" />
        /* incorrect */
        <Icon as={<Ionicons name="md-checkmark-circle" />} />
        /* incorrect */
        <Icon as={<Ionicons />} name="md-checkmark-circle" />
      ```

## Option 3 - Use the upgrade tool with an experimental flag

To upgrade to `v3.2.0` and also update your code according to the breaking changes introduced in `v3.2.0` without modifying your app's design, you can run the `native-base-upgrade` tool with an experimental flag.

```bash
npx native-base-upgrade --experimental-inline-props
```

As the name suggests, this is an experimental flag and it doesn't handle all the cases. We strongly recommend that you check in your code to a version control software before running this and also verify the changes made by this tool. You might have to upgrade some of the things manually(as explained [here](#option-2---upgrade-manually-with-new-theme-tokens)) even after running this.
