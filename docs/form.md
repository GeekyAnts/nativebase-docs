---
id: form
title: Form with Validation
---

Apps often require users to enter information into a text field. For example, you might require users to log in with an email address and password combination.

To make apps secure and easy to use, check whether the information the user has provided is valid. If the user has correctly filled out the form, process the information. If the user submits incorrect information, display a friendly error message letting them know what went wrong.

In this example, learn how to add validation to a form that has a single text field using the following steps:

1. Create an Input wrapped in FormControl.
2. Add validation logic.
3. Create a button to validate and submit the form.

## 1. Create an Input wrapped in FormControl.

Description

```SnackPlayer name=Form%20Example
import React from "react";
import {
  VStack,
  FormControl,
  Input,
  NativeBaseProvider,
} from "native-base";

function BuildingAFormExample() {
  const [formData, setData] = React.useState({});

  return (
    <VStack width="80%">
      <FormControl isRequired>
        <FormControl.Label>Name</FormControl.Label>
        <Input
          placeholder="John"
          onChangeText={(value) => setData({ ...formData, name: value })}
        />
        <FormControl.HelperText>
          Name should contain atleast 3 character.
        </FormControl.HelperText>
        <FormControl.ErrorMessage>Error Name</FormControl.ErrorMessage>
      </FormControl>
    </VStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <BuildingAFormExample />
    </NativeBaseProvider>
  );
}

```

## 2. Add validation logic.

Description

```SnackPlayer name=Form%20Example(Validation)
import React from 'react';
import {
  VStack,
  FormControl,
  Input,
  NativeBaseProvider
} from 'native-base';


function  BuildingAFormExample() {
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
    <VStack width="80%">
      <FormControl isRequired >
        <FormControl.Label>Name</FormControl.Label>
        <Input
          placeholder="John"
          onChangeText={(value) => setData({ ...formData, name: value })}
        />
        <FormControl.HelperText>
          Name should contain atleast 3 character.
        </FormControl.HelperText>
        <FormControl.ErrorMessage>{errors.name}</FormControl.ErrorMessage>
      </FormControl>
    </VStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <BuildingAFormExample />
    </NativeBaseProvider>
  );
}
```

## 3. Create a button to validate and submit the form.

Description

```SnackPlayer name=Form%20Example(Validate and Submit)
import React from 'react';
import {
  VStack,
  Button,
  FormControl,
  Input,
  NativeBaseProvider
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
    <VStack width="80%" space={4}>
      <FormControl isRequired isInvalid={'name' in errors}>
        <FormControl.Label>Name</FormControl.Label>
        <Input
          placeholder="John"
          onChangeText={(value) => setData({ ...formData, name: value })}
        />
        <FormControl.HelperText>
          Name should contain atleast 3 character.
        </FormControl.HelperText>
        <FormControl.ErrorMessage>{errors.name}</FormControl.ErrorMessage>
      </FormControl>
      <Button onPress={onSubmit} colorScheme="amber">
        Submit
      </Button>
    </VStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <BuildingAFormExample />
    </NativeBaseProvider>
  );
}
```

Internal link for Community Integration ( Formik and React Hook Forms ).

# Community Integration

NativeBase can be used with other popular Form libraries like Formik and React Hook Forms as well. For more details checkout Community Integration section of the docs.
