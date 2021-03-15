---
id: input
title: Input
---

The `Input` component is a component that is used to get user input in a text field.

## Implements

- [`TextInput`](https://reactnative.dev/docs/textinput) from [`React Native`](https://reactnative.dev)
- [`Box`](box.md)

## Import

```jsx
import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from 'native-base';
```

## Examples

### Basic

```SnackPlayer name=Input%20Basic
import React from 'react';
import { Input, NativeBaseProvider, Center } from 'native-base';

function InputComponent () {
  return <Input p={3} w="90%" placeholder="Default Input Box" />;
};
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <InputComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Input Sizes

```SnackPlayer name=Image%20Sizes
import React from 'react';
import { Input, NativeBaseProvider,Stack,Center,Heading } from 'native-base';

function InputComponent () {
  return (
    <Stack space={4} mx={8}>
      <Center>
        <Heading>Input Sizes</Heading>
      </Center>
      <Input size="xs" placeholder="xs Input" />
      <Input size="sm" placeholder="sm Input" />
      <Input size="md" placeholder="md Input" />
      <Input size="lg" placeholder="lg Input" />
      <Input size="xl" placeholder="xl Input" />
      <Input size="2xl" placeholder="2xl Input" />
    </Stack>
  );
};
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <InputComponent />
        </Center>
    </NativeBaseProvider>
  );
}
```

### Input Variants

```SnackPlayer name=Image%20Variants
import React from 'react';
import { Input, NativeBaseProvider,Stack,Center,Heading } from 'native-base';

function InputComponent () {
  return (
    <Stack space={4} mx={8}>
      <Center>
        <Heading>Input Variants</Heading>
      </Center>
      <Input variant="outline" placeholder="Outline" />
      <Input variant="filled" placeholder="Filled" />
      <Input variant="underlined" placeholder="Underlined" />
      <Input variant="unstyled" placeholder="Unstyled" />
      <Input variant="rounded" placeholder="round" />
    </Stack>
  );
};
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <InputComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Input Addons

```SnackPlayer name=Image%20Addons
import React from 'react';
import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  NativeBaseProvider,
  Stack,
  Text,
  Center,
} from 'native-base';

function InputComponent() {
  return (
    <Stack space={4}>
      <InputGroup>
        <InputLeftAddon children={'https://'} />
        <Input w="70%" placeholder="nativebase" />
        <InputRightAddon children={'.io'} />
      </InputGroup>
    </Stack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <InputComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Input Elements

```SnackPlayer name=Image%20Input%20Elements
import React from 'react';
import { Input, NativeBaseProvider,Icon, Center } from 'native-base';

function InputComponent () {
  return (
    <Input
      w="90%"
      InputLeftElement={
        <Icon name="phone" fontSize="xl" type="MaterialIcons" />
      }
      InputRightElement={
        <Icon name="person" fontSize="xl" type="MaterialIcons" />
      }
      placeholder="Left and Right InputElement"
    />
  );
};
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <InputComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Password Input

```SnackPlayer name=Image%20Password%20Input
import React from 'react';
import { Input, NativeBaseProvider,Button, Center } from 'native-base';

function InputComponent () {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Input
      w="70%"
      type={show ? 'text' : 'password'}
      InputRightElement={
        <Button
          ml={1}
          roundedLeft={0}
          roundedRight="md"
          colorScheme="default"
          onPress={handleClick}
        >
          {show ? 'Hide' : 'Show'}
        </Button>
      }
      placeholder="Password"
    />
  );
};
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <InputComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Controlled Input

```SnackPlayer name=Image%20Controlled%20Input
import React from 'react';
import { Input, NativeBaseProvider, Center } from 'native-base';

function InputComponent () {
  const [value, setValue] = React.useState('');
  const handleChange = (event: any) => setValue(event.target.value);
  return (
    <Input
      value={value}
      onChange={handleChange}
      placeholder="Value Controlled Input"
    />
  );
};
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <InputComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Form Controlled

```SnackPlayer name=Image%20Input%20Focused%20and%20Error%20Border%20Colors
import React from 'react';
import { Input, NativeBaseProvider, FormControl, Center } from 'native-base';

function InputComponent () {
  return (
    <FormControl isRequired isInvalid p={2}>
      <FormControl.Label>Form Controlled Input</FormControl.Label>
      <Input placeholder="FormControl is providing me isInvalid prop" my={2} size='xs' p={1} />
      <FormControl.HelperText>I am a Helper text 😊</FormControl.HelperText>
      <FormControl.ErrorMessage>
        I'll only appear when FormControl have isInvalid props.
      </FormControl.ErrorMessage>
    </FormControl>
  );
};
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <InputComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Input Focused and Error Border Colors

```SnackPlayer name=Image%20Input%20Focused%20and%20Error%20Border%20Colors
import React from 'react';
import { Input, NativeBaseProvider,Stack, Center } from 'native-base';

function InputComponent () {
  return (
    <Stack space={4}>
      <Input
        placeholder="focusBorderColor Example"
        focusBorderColor="green.400"
      />
      <Input
        placeholder="focusBorderColor Example"
        focusBorderColor="pink.400"
      />
      <Input placeholder="Invalid Input Example" isInvalid />
      <Input
        placeholder="errorBorderColor Example"
        isInvalid
        errorBorderColor="yellow"
      />
    </Stack>
  );
};
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <InputComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Props

| Name              | Type                                                     | Description                                                                                           | Default   |
| ----------------- | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | --------- |
| variant           | `filled`, `outline`, `rounded`, `underlined`, `unstyled` | The variant of the input style to use.                                                                | `outline` |
| isDisabled        | boolean                                                  | If true, the input will be disabled.                                                                  | -         |
| isInvalid         | boolean                                                  | If true, the input will indicate an error.                                                            | -         |
| isReadOnly        | boolean                                                  | If true, prevents the value of the input from being edited.                                           | -         |
| size              | `2xl`, `lg`, `md`, `sm`, `xl`, `xs`                      | The size of the button.                                                                               | `md`      |
| onChange          | function                                                 | Callback for on change on input value.                                                                | -         |
| placeholder       | string                                                   | The placeholder attribute specifies a short hint that describes the expected value of an input field. | -         |
| isFullWidth       | boolean                                                  | If true, the input element will span the full width of its parent                                     | -         |
| focusBorderColor  | string                                                   | The border color when the input is focused.                                                           | -         |
| errorBorderColor  | string                                                   | The border color when isInvalid is set to true.                                                       | -         |
| ariaLabel         | string                                                   | An accessible label for the input.                                                                    | -         |
| InputLeftElement  | JSX.Element                                              | If given, adds the provided element to the left of the input.                                         | -         |
| InputRightElement | JSX.Element                                              | If given, adds the provided element to the right of the input.                                        | -         |
| type              | `password`, string, text                                 | Using the type `password`, user can mask the input.                                                   | -         |
| label             | string                                                   | If given, adds a floating label to the input.                                                         | -         |
| \_label           | [`TextProps`](text.md#props)                             | Props to be passed to label to change its text styling.                                               | -         |

Apart from these all the [Native TextInput Props](https://reactnative.dev/docs/textinput#props) from React Native can be passed to Input.
