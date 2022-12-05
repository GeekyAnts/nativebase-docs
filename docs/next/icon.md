---
id: icon
title: Icon
---

NativeBase allows you to use icons in multiples ways:

- Create icon by creating an SVG Icon.
- Create icon using createIcon function and use it as a component.
- Use a third-party icon library ( such as [@expo/vector-icons](https://github.com/expo/vector-icons) ), with `as` prop.

```jsx isShowcase
import React from 'react';
import { CheckIcon, HStack, Text } from 'native-base';

export const Example = () => {
  return (
    <HStack space={2}>
      <CheckIcon size="5" mt="0.5" color="emerald.500" />
      <Text color="coolGray.100" fontSize="md">
        Order Placed Successfully
      </Text>
    </HStack>
  );
};
```

## Examples

### Basic

```ComponentSnackPlayer path=components,primitives,Icon,Basic.tsx

```

Apart from the icons provided by [@expo/vector-icon](https://github.com/expo/vector-icons), you can also create custom icons using SVG. You can use all the components from [react-native-svg](https://github.com/react-native-svg/react-native-svg).

### NativeBase Icons

We provide a set of commonly used interface icons which you can directly use in your project. All our icons are create using [`createIcon`](icon#createicon) function from NativeBase.

```ComponentSnackPlayer path=components,primitives,Icon,AllIcons.tsx

```

### Custom Icon

```ComponentSnackPlayer path=components,primitives,Icon,CustomIcon.tsx

```

### Create Icon

```ComponentSnackPlayer path=components,primitives,Icon,CreateIcon.tsx

```

### Integration with Third Party Icons

```ComponentSnackPlayer path=components,primitives,Icon,ThirdPartyIcons.tsx

```

## Props

### Icon

```ComponentPropTable path=primitives,Icon,Icon.tsx  showStylingProps=true

```

### createIcon

```ComponentPropTable path=primitives,Icon,createIcon.tsx

```
