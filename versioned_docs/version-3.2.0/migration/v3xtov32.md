---
id: migration-guide-three-point-two
title: Upgrading to 3.2.0 from 3.x
---

As we continue to improve NativeBase v3 we got a lot of feature requests and we also revamped our theme to make it more consistent, easy to understand, optimized and promote good practices while writing code.

To do that we had to make some changes to our theme in `v3.2.0`. These are breaking changes if you are using some of the tokens in your project. To make it easy for you to upgrade, we are providing three options:

## Extend previous version's theme for backward compatibility

You need to add `v3CompatibleTheme` to your `NativeBaseProvider` which preserves all the old token that were changed or removed in v3.2.0.

```jsx
import { NativeBaseProvider, extendTheme, v3CompatibleTheme } from "native-base";

// ...
const yourCustomTheme = {
  // ...
}

<NativeBaseProvider
  theme={extendTheme(v3CompatibleTheme, yourCustomTheme)}
>
</NativeBaseProvider>
```
### Note:

We have introduced [strict mode](../strict-mode.md) in `v3.2.0` which is `off` by default. If you don't want to have strict mode, step 1 is enough. If you want to comply with the strict mode, you also need to do these:

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
        