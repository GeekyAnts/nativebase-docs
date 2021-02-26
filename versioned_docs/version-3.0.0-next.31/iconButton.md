---
id: iconButton
title: IconButton
---

`IconButton` composes the `Button` component. It is generally used to make an Icon pressable.

## Implements

- [`Button`](button.md)

## Examples

### Basic

```SnackPlayer name=IconButton%20Basic
import React from 'react';
import { IconButton, Icon, NativeBaseProvider, Center } from 'native-base';
function IconButtonExample () {
  return (
    <IconButton
      colorScheme="blue"
      variant="outline"
      icon={<Icon name={'search'} />}
    />
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <IconButtonExample />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Sizes

```SnackPlayer name=IconButton%20Sizes
import React from 'react';
import { HStack, IconButton, Icon, NativeBaseProvider, Center } from 'native-base';
function IconButtonExample () {
  return (
    <HStack space={4}>
      {['sm', 'md', 'lg'].map((size: any) => (
        <IconButton
          size={size}
          variant="solid"
          colorScheme="blue"
          icon={<Icon name={'menu'} />}
        />
      ))}
    </HStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <IconButtonExample />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Variants

```SnackPlayer name=IconButton%20Variants
import React from 'react';
import { HStack, IconButton, Icon, NativeBaseProvider, Center } from 'native-base';
function IconButtonExample () {
  return (
    <HStack space={4}>
      {['outline', 'solid', 'ghost'].map((variant: any) => (
        <IconButton
          variant={variant}
          colorScheme='teal'
          icon={<Icon name={'menu'} />}
        />
      ))}
    </HStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <IconButtonExample />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Props

**IconButton** implements **[Button](button.md)**, so all the **Button** Props can be passed to **IconButton**.

| Name | Type        | Description                                                                                             | Default |
| ---- | ----------- | ------------------------------------------------------------------------------------------------------- | ------- |
| icon | JSX.Element | The icon to be used. Refer to the [`Icon`](icon.md) section of the docs for the available icon options. | -       |
