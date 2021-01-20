---
id: iconButton
title: IconButton
---

`IconButton` composes the `Button` component except that it renders only an icon.

## Implements

- `Button` from native-base/Button

## Example

```SnackPlayer name=IconButton%20Example
import React from 'react';
import { IconButton, Icon, NativeBaseProvider } from 'native-base';
function IconButtonExample () {
  return (
    <IconButton
      colorScheme="blue"
      variant="outline"
      icon={<Icon name={'search'} size={'lg'} />}
    />
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <IconButtonExample />
    </NativeBaseProvider>
  );
}
```

## Example (Sizes)

```SnackPlayer name=IconButton%20Example(Sizes)
import React from 'react';
import { HStack, IconButton, Icon, NativeBaseProvider } from 'native-base';
function IconButtonExample () {
  return (
    <HStack space={4}>
      {['sm', 'md', 'lg'].map((size: any) => (
        <IconButton
          size={size}
          variant="solid"
          colorScheme="blue"
          icon={<Icon name={'menu'} size={'lg'} />}
        />
      ))}
    </HStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <IconButtonExample />
    </NativeBaseProvider>
  );
}
```

## Example (Variants)

```SnackPlayer name=IconButton%20Example(Variants)
import React from 'react';
import { HStack, IconButton, Icon, NativeBaseProvider } from 'native-base';
function IconButtonExample () {
  return (
    <HStack space={4}>
      {['outline', 'solid', 'ghost'].map((variant: any) => (
        <IconButton
          variant={variant}
          colorScheme='teal'
          icon={<Icon name={'menu'} size={'lg'} />}
        />
      ))}
    </HStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <IconButtonExample />
    </NativeBaseProvider>
  );
}
```

## Props

### IconButton

| Name        | Type                                  | Description                                                                                 | Default |
| ----------- | ------------------------------------- | ------------------------------------------------------------------------------------------- | ------- |
| colorScheme | string                                | The color scheme of the button.                                                             | gray    |
| variant     | ghost, link, outline, solid, unstyled | The variant of the button style to use.                                                     | ghost   |
| isDisabled  | boolean                               | If true, the button will be disabled.                                                       | -       |
| isLoading   | boolean                               | If true, the button will show a spinner.                                                    | -       |
| size        | lg, md, sm, xs                        | The size of the button.                                                                     | md      |
| icon        | string                                | The icon to be used. Refer to the Icons section of the docs for the available icon options. | -       |
| Component   |                                       |                                                                                             |         |
