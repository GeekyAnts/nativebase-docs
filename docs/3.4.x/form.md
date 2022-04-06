---
id: form
title: Form with Validation
---

Apps often require users to enter information into a text field. For example, you might require users to log in with an email address and password combination.

To make apps secure and easy to use, check whether the information the user has provided is valid. If the user has correctly filled out the form, process the information. If the user submits incorrect information, display a friendly error message letting them know what went wrong.

## Example

In this example, learn how to add validation to a form that has a single text field using the following steps:

1. Create an Input wrapped in FormControl.
2. Add validation logic.
3. Create a button to validate and submit the form.

### Step 1

Create an Input wrapped in FormControl.

```jsx isLive=true
import React from 'react';
import {
  VStack,
  FormControl,
  Input,
  NativeBaseProvider,
  Center,
} from 'native-base';

function BuildingAFormExample() {
  const [formData, setData] = React.useState({});

  return (
    <VStack width="90%" mx="3" maxW="300px">
      <FormControl isRequired>
        <FormControl.Label _text={{ bold: true }}>Name</FormControl.Label>
        <Input
          placeholder="John"
          onChangeText={(value) => setData({ ...formData, name: value })}
        />
        <FormControl.HelperText _text={{ fontSize: 'xs' }}>
          Name should contain atleast 3 character.
        </FormControl.HelperText>
        <FormControl.ErrorMessage _text={{ fontSize: 'xs' }}>
          Error Name
        </FormControl.ErrorMessage>
      </FormControl>
    </VStack>
  );
}
export function Example() {
  return (
    <Center flex={1}>
      <BuildingAFormExample />
    </Center>
  );
}
```

### Step 2

Add validation logic.

```jsx isLive=true
import React from 'react';
import {
  VStack,
  FormControl,
  Input,
  NativeBaseProvider,
  Center,
} from 'native-base';

function BuildingAFormExample() {
  const [formData, setData] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const validate = () => {
    if (formData.name === undefined) {
      setErrors({
        ...errors,
        name: 'Name is required',
      });
      return false;
    } else if (formData.name.length < 3) {
      setErrors({
        ...errors,
        name: 'Name is too short',
      });
      return false;
    }
    return true;
  };

  return (
    <VStack width="90%" mx="3" maxW="300px">
      <FormControl isRequired>
        <FormControl.Label _text={{ bold: true }}>Name</FormControl.Label>
        <Input
          placeholder="John"
          onChangeText={(value) => setData({ ...formData, name: value })}
        />
        <FormControl.HelperText _text={{ fontSize: 'xs' }}>
          Name should contain atleast 3 character.
        </FormControl.HelperText>
        <FormControl.ErrorMessage _text={{ fontSize: 'xs' }}>
          Error Name
        </FormControl.ErrorMessage>
      </FormControl>
    </VStack>
  );
}
export function Example() {
  return (
    <Center flex={1}>
      <BuildingAFormExample />
    </Center>
  );
}
```

### Step 3

Create a button to validate and submit the form.

```jsx isLive=true
import React from 'react';
import {
  VStack,
  Button,
  FormControl,
  Input,
  NativeBaseProvider,
  Center,
} from 'native-base';

function BuildingAFormExample() {
  const [formData, setData] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const validate = () => {
    if (formData.name === undefined) {
      setErrors({
        ...errors,
        name: 'Name is required',
      });
      return false;
    } else if (formData.name.length < 3) {
      setErrors({
        ...errors,
        name: 'Name is too short',
      });
      return false;
    }
    return true;
  };

  const onSubmit = () => {
    validate() ? console.log('Submitted') : console.log('Validation Failed');
  };

  return (
    <VStack width="90%" mx="3" maxW="300px">
      <FormControl isRequired isInvalid={'name' in errors}>
        <FormControl.Label _text={{ bold: true }}>Name</FormControl.Label>
        <Input
          placeholder="John"
          onChangeText={(value) => setData({ ...formData, name: value })}
        />
        {'name' in errors ? (
          <FormControl.ErrorMessage>Error</FormControl.ErrorMessage>
        ) : (
          <FormControl.HelperText>
            Name should contain atleast 3 character.
          </FormControl.HelperText>
        )}
      </FormControl>
      <Button onPress={onSubmit} mt="5" colorScheme="cyan">
        Submit
      </Button>
    </VStack>
  );
}
export function Example() {
  return (
    <Center flex={1}>
      <BuildingAFormExample />
    </Center>
  );
}
```

## Community Integration

NativeBase can be used with other popular Form libraries like [`Formik`](/formik) and [`React Hook Forms`](react-hooks-forms) as well. For more details checkout Community Integration section of the docs.
