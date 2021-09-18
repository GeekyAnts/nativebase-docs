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
  Center,
  Heading,
  NativeBaseProvider,
  Box,
  Text,
} from 'native-base';
import React from 'react';
import { Formik } from 'formik';

const validate = (values) => {
  const errors = {};

  if (!values.password) {
    errors.password = 'Required';
  }

  return errors;
};

function FormikExample() {
  const onSubmit = (data) => {
    console.log('submiting with ', data);
  };

  return (
    <Formik
      initialValues={{ password: '', confirmPassword: '' }}
      onSubmit={onSubmit}
      validate={validate}>
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <Box>
          <Heading mb="2">Create new password</Heading>
          <Text mb="5">
            Your new password must be different from previous used passwords and
            must be of at least 8 characters.
          </Text>
          <VStack space="5">
            <VStack space="3">
              <FormControl isRequired isInvalid={'password' in errors}>
                {console.log('errors', errors)}
                <Input
                  type="password"
                  onBlur={handleBlur('password')}
                  placeholder="Password"
                  onChangeText={handleChange('password')}
                  value={values.password}
                />
                <FormControl.ErrorMessage>
                  {errors.password}
                </FormControl.ErrorMessage>
              </FormControl>

              <FormControl isInvalid={'confirmPassword' in errors}>
                <Input
                  onBlur={handleBlur('confirmPassword')}
                  placeholder="Confirm Password"
                  onChangeText={handleChange('confirmPassword')}
                  value={values.confirmPassword}
                />
                <FormControl.ErrorMessage>
                  {errors.confirmPassword}
                </FormControl.ErrorMessage>
              </FormControl>
            </VStack>
            <Button onPress={handleSubmit}>Update Password</Button>
          </VStack>
        </Box>
      )}
    </Formik>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex="1" px="3">
        <FormikExample />
      </Center>
    </NativeBaseProvider>
  );
}

```
