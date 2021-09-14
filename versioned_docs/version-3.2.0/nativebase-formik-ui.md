---
id: nativebase-formik-ui
title: Formik
---

NativeBase provides [Form components](button.md) which can be easily integrated with Formik.

Let's take an example using [FormControl](formControl.md) and [Input](input.md) components

```SnackPlayer name=Formik-example dependencies=formik@2.2.9
import {
  VStack,
  Input,
  Button,
  FormControl,
  NativeBaseProvider,
} from 'native-base';
import React from 'react';
import { Formik } from 'formik';

const validate = (values) => {
   const errors = {};

   if (!values.firstName) {
     errors.firstName = 'Required';
   }

   return errors;
 };

function FormikExample() {
  const onSubmit = (data) => {
    console.log('submiting with ', data);
  };

  return (
 <Formik initialValues={{ firstName: '', lastName: '' }} onSubmit={onSubmit} validate={validate}>
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <VStack width="80%" space="4">
          <FormControl isRequired isInvalid={'firstName' in errors}>
            <FormControl.Label>First Name</FormControl.Label>
            {console.log("errors" , errors)}
            <Input
              onBlur={handleBlur('firstName')}
              placeholder="John"
              onChangeText={handleChange('firstName')}
              value={values.firstName}
            />
            <FormControl.ErrorMessage>
              {errors.firstName}
            </FormControl.ErrorMessage>
          </FormControl>

          <FormControl isInvalid={'lastName' in errors}>
            <FormControl.Label>Last Name</FormControl.Label>
            <Input
              onBlur={handleBlur('lastName')}
              placeholder="Doe"
              onChangeText={handleChange('lastName')}
              value={values.lastName}
            />
            <FormControl.ErrorMessage>
              {errors.lastName}
            </FormControl.ErrorMessage>
          </FormControl>

          <Button onPress={handleSubmit} colorScheme="pink">
            Submit
          </Button>
        </VStack>
      )}
    </Formik>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <FormikExample />
    </NativeBaseProvider>
  );
}
```
