---
id: button
title: Button
---

The `Button` component is used to trigger an action or event.

## Implements

- [`TouchableOpacity`](https://reactnative.dev/docs/touchableopacity) form react-native**.**

## Import

```jsx
import { Button, ButtonGroup } from 'native-base';
```

- **Button** : The button component with support for custom icons, spinners, etc.
- **ButtonGroup** : Used to group buttons whose actions are related, with an option to flush them together.

## Example

```SnackPlayer name=Button%20Example
import React from 'react';
import { Button, NativeBaseProvider, Center } from 'native-base';

function ButtonComponent () {
  return (
    <Button size="sm" colorScheme="teal" variant={'solid'} _text={{ fontWeight: 700 }}>
      Button Variants
    </Button>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <ButtonComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Example (Sizes)

```SnackPlayer name=Button%20Example(Sizes)
import React from 'react';
import { Button, VStack, NativeBaseProvider, Center } from 'native-base';

function ButtonComponent () {
  return (
    <VStack space={2}>
      {['xs', 'sm', 'md', 'lg'].map((size: any) => (
        <Button size={size} colorScheme="teal">
          Button
        </Button>
      ))}
    </VStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <ButtonComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Example (variants)

```SnackPlayer name=Button%20Example(variants)
import React from 'react';
import { Button, VStack, NativeBaseProvider, Center } from 'native-base';

function ButtonComponent () {
  return (
    <VStack space={2}>
      {['solid', 'outline', 'ghost', 'link'].map((variant: any) => (
        <Button variant={variant} colorScheme="teal">
          Button
        </Button>
      ))}
    </VStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <ButtonComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Example (loading)

```SnackPlayer name=Button%20Example(loading)
import React from 'react';
import { Button, VStack, NativeBaseProvider, Center } from 'native-base';

function ButtonComponent () {
  return (
    <VStack space={2}>
      <Button colorScheme="teal" isLoading>
        Button
      </Button>
      <Button colorScheme="teal" isLoading isLoadingText="Submitting">
        Button
      </Button>
      <Button
        colorScheme="teal"
        isLoading
        isLoadingText="Submitting"
        variant="outline"
      >
        Button
      </Button>
    </VStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <ButtonComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Example (Icons)

```SnackPlayer name=Button%20Example(Icons)
import React from 'react';
import { Button, VStack, Icon, NativeBaseProvider, Center } from 'native-base';

function ButtonComponent () {
  return (
    <VStack space={2}>
      <Button
        startIcon={<Icon name="menu" size={6} type="MaterialIcons" />}
        colorScheme="indigo"
      >
        Menu
      </Button>
      <Button
        isDisabled
        endIcon={<Icon name="menu" size={6} type="MaterialIcons" />}
        colorScheme="cyan"
      >
        Menu
      </Button>
    </VStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <ButtonComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Example (ButtonGroup)

```SnackPlayer name=Button%20Example(ButtonGroup)
import React from 'react';
import { Button, ButtonGroup, NativeBaseProvider, Center } from 'native-base';

function ButtonComponent () {
  return (
    <ButtonGroup variant="solid" spacing={6}>
      <Button colorScheme="blue">Save</Button>
      <Button colorScheme="red">Cancel</Button>
    </ButtonGroup>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <ButtonComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Example (Composition)

```SnackPlayer name=Button%20Example(Composition)
import React from 'react';
import { Button, NativeBaseProvider, Center } from 'native-base';

function ButtonComponent () {
  return (
    <Button
      size="md"
      height="48px"
      width="200px"
      border="2px"
      borderColor="green.500"
    >
      Button
    </Button>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <ButtonComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Example (With Ref)

```SnackPlayer name=Button%20Example(With Ref)
import React from 'react';
import { Button, NativeBaseProvider, Center } from 'native-base';

function ButtonComponent () {
  const myRef: any = React.useRef({});
  React.useEffect(() => {
    myRef?.current.setNativeProps({
      borderWidth: 10,
      opacity: 0.5,
      borderRadius: 10,
    });
  }, [myRef]);
  return (
    <Button size="sm" colorScheme="gray" variant={'solid'} ref={myRef}>
      Button
    </Button>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <ButtonComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Props

### Button

| Name        | Type                                  | Description                                                                                                       | Default |
| ----------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------- |
| ariaLabel   | string                                | An accessible label for the button, useful when you render only an icon in the button.                            | -       |
| highlight   | number                                | Active opacity of the button.                                                                                     | -       |
| colorScheme | string                                | The color of the radio when it's checked. This should be one of the color keys in the theme (e.g."green", "red"). | gray    |
| startIcon   | JSX.Element                           | The start icon element to use in the button.                                                                      | -       |
| endIcon     | JSX.Element                           | The end icon element to use in the button.                                                                        | -       |
| spinner     | JSX.Element                           | The spinner element to use when isLoading is set to true.                                                         | -       |
| variant     | ghost, link, outline, solid, unstyled | The variant of the button style to use.                                                                           | solid   |
| isDisabled  | boolean                               | If true, the button will be disabled.                                                                             | -       |
| isLoading   | boolean                               | If true, the button will show a spinner.                                                                          | -       |
| loadingText | string                                | The label to show in the button when isLoading is true. If no text is passed, it only shows the spinner           | -       |
| size        | lg, md, sm, xs                        | The size of the button.                                                                                           | md      |
| shadow      | number                                | Shadow to apply to button.                                                                                        | -       |
| onPress     | function                              | Callback for onPress.                                                                                             | -       |
| \_text      | TextProps                             | Props to style the child text                                                                                     | -       |
