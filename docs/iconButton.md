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
      accessibilityLabel="search"
      colorScheme="emerald"
      variant="outline"
      icon={<Icon name={'search'} />}
    />
  );
}

// Example template which wraps component with NativeBaseProvider
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
import { Stack, IconButton, Icon, NativeBaseProvider, Center } from 'native-base';
function IconButtonExample () {
  return (
    <Stack space={4}>
      {['sm', 'md', 'lg'].map((size: any) => (
        <IconButton
          accessibilityLabel="menu"
          size={size}
          variant="solid"
          colorScheme="emerald"
          icon={<Icon name={'menu'} color="white"/>}
        />
      ))}
    </Stack>
  );
}

// Example template which wraps component with NativeBaseProvider
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
import { Stack, IconButton, Icon, NativeBaseProvider, Center } from 'native-base';
function IconButtonExample () {
  return (
    <Stack space={4}>
      {['outline', 'solid', 'ghost'].map((variant: any) => (
        <IconButton
          accessibilityLabel="menu"
          key={variant}
          variant={variant}
          colorScheme="teal"
          icon={
            <Icon
              name={'menu'}
              color={variant === 'solid' ? 'white' : undefined}
            />
          }
        />
      ))}
    </Stack>
  );
}

// Example template which wraps component with NativeBaseProvider
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

| Name               | Type        | Description                                                                                             | Default |
| ------------------ | ----------- | ------------------------------------------------------------------------------------------------------- | ------- |
| icon               | JSX.Element | The icon to be used. Refer to the [`Icon`](icon.md) section of the docs for the available icon options. | -       |
| accessibilityLabel | string      | A11y: A label that describes the button                                                                 | -       |

## Accessibility

- Use accessibilityLabel for labelling icon buttons to make sure it's announced by screen reader devices.
