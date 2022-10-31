---
id: use-sx
title: useSx
---

`useTheme` is custom hook which provides headless NativeBase to resolve your style props.

## Import

```jsx
import { useSx } from "native-base";
```

- It can be used to create custom component with NativeBase theme engine.
- It support resopnsive styling.

<br/>
:::note

useSx doesn't support `resopnsive` style with `SSR`.
:::

## Example

```jsx
import { useSx } from "native-base";

export const Example = () => {
  const sx = useSx();
  return (
    <View
      style={[
        sx({
          p: 2,
          bg: ["blue.300", "violet.400", "red.400"],
          width: 48,
          height: 48,
        }),
      ]}
    >
      <Text style={sx({ color: ["orange.900", "white", "black"] })}>
        New Feat useSx in NativeBase
      </Text>
    </View>
  );
};
```

## Example with TypeScript

```jsx
import { useSx } from "native-base";
import type { StyledProps } from "native-base";

const textStyle: StyledProps = {
  color: ["orange.900", "white", "black"],
  textAlign: "center",
};
const containerStyle: StyledProps = {
  p: 2,
  bg: ["blue.300", "violet.400", "red.400"],
  width: 48,
  height: 48,
};

export const Example = () => {
  const sx = useSx();
  return (
    <View style={sx(containerStyle)}>
      <Text style={sx(textStyle)}>New Feat useSx in NativeBase</Text>
    </View>
  );
};
```

:::note

`Size` prop will be always converted into `width` and `height`.
:::

### What doesn't support?

- variants can't be used in useSx.
- Pseudo props, internal pseudo props.
