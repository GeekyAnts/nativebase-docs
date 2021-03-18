---
id: button
title: Button
---

The `Button` component is used to trigger an action or event.

## Implements

- [`TouchableOpacity`](https://reactnative.dev/docs/touchableopacity) form [`React Native`](https://reactnative.dev)

## Import

```jsx
import { Button, ButtonGroup } from 'native-base';
```

- **Button** : The button component with support for custom icons, spinners, etc.
- **ButtonGroup** : Used to group buttons whose actions are related, with an option to flush them together.

## Examples

### Basic

```SnackPlayer name=Button%20Example
import React from 'react';
import { Button, NativeBaseProvider, Center } from 'native-base';

function ButtonComponent () {
  return (
    <Button colorScheme="emerald">
      Button
    </Button>
  );
}

// Example template which wraps component with NativeBaseProvider
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

### Sizes

```SnackPlayer name=Button%20Sizes
import React from 'react';
import { Button, VStack, NativeBaseProvider, Center } from 'native-base';

function ButtonComponent () {
  return (
    <VStack space={4}>
      {['xs', 'sm', 'md', 'lg'].map((size: any) => (
        <Button size={size} colorScheme="emerald">
          Button
        </Button>
      ))}
    </VStack>
  );
}

// Example template which wraps component with NativeBaseProvider
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

### Variants

```SnackPlayer name=Button%20variants
import React from 'react';
import { Button, VStack, NativeBaseProvider, Center } from 'native-base';

function ButtonComponent () {
  return (
    <VStack space={4}>
      {['solid', 'outline', 'ghost', 'link'].map((variant: any) => (
        <Button variant={variant} colorScheme="emerald">
          Button
        </Button>
      ))}
    </VStack>
  );
}

// Example template which wraps component with NativeBaseProvider
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

### Loading

```SnackPlayer name=Button%20Loading
import React from 'react';
import { Button, VStack, NativeBaseProvider, Center } from 'native-base';

function ButtonComponent () {
  return (
    <VStack space={4}>
      <Button colorScheme="emerald" isLoading>
        Button
      </Button>
      <Button colorScheme="emerald" isLoading isLoadingText="Submitting">
        Button
      </Button>
      <Button
        colorScheme="emerald"
        isLoading
        isLoadingText="Submitting"
        variant="outline"
      >
        Button
      </Button>
    </VStack>
  );
}

// Example template which wraps component with NativeBaseProvider
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

### Icons

```SnackPlayer name=Button%20Icons
import React from 'react';
import { Button, VStack, Icon, NativeBaseProvider, Center } from 'native-base';

function ButtonComponent () {
  return (
    <VStack space={4}>
      <Button
        startIcon={<Icon name="menu" size={6} type="MaterialIcons" color="white"/>}
        colorScheme="indigo"
      >
        Menu
      </Button>
      <Button
        endIcon={<Icon name="menu" size={6} type="MaterialIcons" color="white"/>}
        colorScheme="emerald"
      >
        Menu
      </Button>
    </VStack>
  );
}

// Example template which wraps component with NativeBaseProvider
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

### ButtonGroup

```SnackPlayer name=Button%20ButtonGroup
import React from 'react';
import { Button, ButtonGroup, NativeBaseProvider, Center } from 'native-base';

function ButtonComponent () {
  return (
    <ButtonGroup variant="solid" spacing={4}>
      <Button colorScheme="green">Save</Button>
      <Button colorScheme="red" _text={{color: "white", fontWeight: "semibold"}}>Cancel</Button>
    </ButtonGroup>
  );
}

// Example template which wraps component with NativeBaseProvider
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

<!-- ### Composition

```SnackPlayer name=Button%20Composition
import React from 'react';
import { Button, NativeBaseProvider, Center } from 'native-base';

function ButtonComponent () {
  return (
    <Button
      size="md"
      height="48px"
      width="200px"
      border="2px"
      borderColor="emerald.400"
    >
      Button
    </Button>
  );
}

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <ButtonComponent />
      </Center>
    </NativeBaseProvider>
  );
}
``` -->

### Basic (With Ref)

```SnackPlayer name=Button%20Basic(With Ref)
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
    <Button size="sm" colorScheme="gray" ref={myRef}>
      Button
    </Button>
  );
}

// Example template which wraps component with NativeBaseProvider
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

| Name        | Type                                            | Description                                                                                                       | Default |
| ----------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------- |
| ariaLabel   | string                                          | An accessible label for the button, useful when you render only an icon in the button.                            | -       |
| highlight   | number                                          | Active opacity of the button.                                                                                     | -       |
| colorScheme | string                                          | The color of the radio when it's checked. This should be one of the color keys in the theme (e.g."green", "red"). | gray    |
| startIcon   | JSX.Element                                     | The start icon element to use in the button.                                                                      | -       |
| endIcon     | JSX.Element                                     | The end icon element to use in the button.                                                                        | -       |
| spinner     | JSX.Element                                     | The spinner element to use when isLoading is set to true.                                                         | -       |
| variant     | `ghost`,` link`,` outline`,` solid`,` unstyled` | The variant of the button style to use.                                                                           | solid   |
| isDisabled  | boolean                                         | If true, the button will be disabled.                                                                             | -       |
| isLoading   | boolean                                         | If true, the button will show a spinner.                                                                          | -       |
| loadingText | string                                          | The label to show in the button when isLoading is true. If no text is passed, it only shows the spinner           | -       |
| size        | `lg`, `md`, `sm`, `xs`                          | The size of the button.                                                                                           | `md`    |
| shadow      | number                                          | Shadow to apply to button.                                                                                        | -       |
| onPress     | function                                        | Callback for onPress.                                                                                             | -       |
| \_text      | [`TextProps`](text.md#props)                    | Props to style the child text                                                                                     | -       |

## Accessibility

- Button has `role` set to `button`
- When Button has focus, Space or Enter activates it.
