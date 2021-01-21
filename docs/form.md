---
id: form
title: Building a form with Validation
---

Apps often require users to enter information into a text field. For example, you might require users to log in with an email address and password combination.

To make apps secure and easy to use, check whether the information the user has provided is valid. If the user has correctly filled out the form, process the information. If the user submits incorrect information, display a friendly error message letting them know what went wrong.

In this example, learn how to add validation to a form that has a single text field using the following steps:

1. Create an Input wrapped in FormControl.
2. Add validation logic.
3. Create a button to validate and submit the form.

## 1. Create an Input wrapped in FormControl.

Description

```tsx
import React from "react";
import {
  VStack,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Input,
} from "native-base";

interface IFormInput {
  name?: any;
}

export default function () {
  const [formData, setData] = React.useState<IFormInput>({});

  return (
    <VStack width="80%">
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="John"
          onChangeText={(value) => setData({ ...formData, name: value })}
        />
        <FormHelperText>
          Name should contain atleast 3 character.
        </FormHelperText>
        <FormErrorMessage>{errors.name}</FormErrorMessage>
      </FormControl>
    </VStack>
  );
}
```

## 2. Add validation logic.

Description

```tsx
import React from "react";
import {
  VStack,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Input,
} from "native-base";

interface IFormInput {
  name?: any;
}

export default function () {
  const [formData, setData] = React.useState<IFormInput>({});
  const [errors, setErrors] = React.useState<IFormInput>({});
  const validate = () => {
    if (formData.name === undefined) {
      setErrors({
        ...errors,
        name: "Name is required",
      });
      return false;
    } else if (formData.name.length < 3) {
      setErrors({
        ...errors,
        name: "Name is too short",
      });
      return false;
    }
    return true;
  };

  return (
    <VStack width="80%">
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="John"
          onChangeText={(value) => setData({ ...formData, name: value })}
        />
        <FormHelperText>
          Name should contain atleast 3 character.
        </FormHelperText>
        <FormErrorMessage>{errors.name}</FormErrorMessage>
      </FormControl>
    </VStack>
  );
}
```

## 3. Create a button to validate and submit the form.

Description

```tsx
import React from "react";
import {
  VStack,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Input,
} from "native-base";

interface IFormInput {
  name?: any;
}

export default function () {
  const [formData, setData] = React.useState<IFormInput>({});
  const [errors, setErrors] = React.useState<IFormInput>({});
  const validate = () => {
    if (formData.name === undefined) {
      setErrors({
        ...errors,
        name: "Name is required",
      });
      return false;
    } else if (formData.name.length < 3) {
      setErrors({
        ...errors,
        name: "Name is too short",
      });
      return false;
    }
    return true;
  };

  const onSubmit = () => {
    validate() ? console.log("Submitted") : console.log("Validation Failed");
  };

  return (
    <VStack width="80%" space={4}>
      <FormControl isRequired isInvalid={"name" in errors}>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="John"
          onChangeText={(value) => setData({ ...formData, name: value })}
        />
        <FormHelperText>
          Name should contain atleast 3 character.
        </FormHelperText>
        <FormErrorMessage>{errors.name}</FormErrorMessage>
      </FormControl>
      <Button onPress={onSubmit} colorScheme="amber">
        Submit
      </Button>
    </VStack>
  );
}
```

Internal link for Community Integration ( Formik and React Hook Forms ).

# Community Integration

Nativebase can be used with other popular Form libraries like Formik and React Hook Forms as well. For more details checkout Community Integration section of the docs.
