---
id: textField
title: TextField
---

The `TextField` component is a component that is used to get user input in a text field.

## Implements

- [`TextProps`](input.md)
- [`VStack`](VStack.md)

## Import

```jsx
import { TextField } from 'native-base';
```

## Examples

### Basic

```SnackPlayer name=TextField%20Basic
import React from 'react';
import { TextField, NativeBaseProvider, Center } from 'native-base';

function TextFieldComponent () {
  return <TextField w="90%" placeholder="Default TextField" />;
};
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <TextFieldComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### When Invalid

```SnackPlayer name=Image%20Sizes
import React from 'react';
import { TextField, NativeBaseProvider, Stack, Center } from 'native-base';

function TextFieldComponent () {
  const [isInvalid, setIsInvalid] = React.useState(true);
  return (
    <Stack space={4} w="90%">
      <TextField
        isInvalid={isInvalid}
        placeholder="Default TextField"
        helperText="Sample helper text"
        errorMessage="Sample error message"
      />
      <Button onPress={() => setIsInvalid(!isInvalid)}>
        Toggle Invalid State
      </Button>
    </Stack>
  );
};
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <TextFieldComponent />
        </Center>
    </NativeBaseProvider>
  );
}
```

### With Icons

```SnackPlayer name=Image%20Variants
import React from 'react';
import { TextField, NativeBaseProvider, Stack, Center, Icon } from 'native-base';

function TextFieldComponent () {
  const [isInvalid, setIsInvalid] = React.useState(true);
  return (
    <Stack space={4} w="90%">
      <TextField
        bg="gray.300"
        variant="underlined"
        isInvalid={isInvalid}
        helperText="Sample helper text"
        errorMessage="Sample error message"
        placeholder="Default TextField"
        InputLeftElement={
          <Icon
            name="calendar-today"
            size="md"
            my={3}
            ml={3}
            color="muted.500"
          />
        }
        InputRightElement={
          <Icon name="cancel" size="md" my={3} mr={3} color="muted.500" />
        }
      />
      <Button onPress={() => setIsInvalid(!isInvalid)}>
        Toggle Invalid State
      </Button>
    </Stack>
  );
};
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <TextFieldComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Props

| Name                | Type   | Description                                                                                 | Default |
| ------------------- | ------ | ------------------------------------------------------------------------------------------- | ------- |
| helperText          | string | Helper text conveys additional guidance about the text field.                               | -       |
| errorMessage        | string | When text input isn't accepted, an error message can display instructions on how to fix it. | -       |
| \_helperTextProps   | any    | [`Text Props`](text.md#props)                                                               | -       |
| \_errorMessageProps | any    | [`Text Props`](text.md#props)                                                               | -       |

Apart from these all the [Input](input.md#props) can be passed to Input.
