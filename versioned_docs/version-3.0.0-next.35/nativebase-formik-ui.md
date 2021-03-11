import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

NativeBase FormikUI Components. No need of using and managing formik hooks manually just use these components and NativeBase will do that for you.

## Installation

To **Install NativeBase-Formik-UI** just copy this and paste in your terminal.

<Tabs
defaultValue='yarn'
values={[
{ label: 'Yarn', value: 'yarn' },
{ label: 'npm', value: 'npm' }
]}>

<TabItem value="yarn">

```bash
yarn add @native-base/formik-ui
```

</TabItem>

<TabItem value="npm">

```bash
npm i @native-base/formik-ui
```

</TabItem>

</Tabs>

## Checkbox

### Basic

```SnackPlayer name=Formik%20Checkbox%20Basic
import React from 'react';
import {
  CheckboxControl,
  Text,
  SubmitButton,
  ResetButton,
  Box,
  ButtonGroup,
} from '@native-base/formik-ui';
import { Formik } from 'formik';
import { Heading, Center, NativeBaseProvider } from 'native-base';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  tnc: Yup.boolean().equals([true], 'Terms and Condition must be checked !'),
  newsletter: Yup.boolean(),
});

function FormikCheckboxBasicExample() {
  const onSubmit = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(values);
  };
  return (
    <Formik
      initialValues={{
        tnc: true,
        newsletter: false,
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ values, errors }) => (
        <Box>
          <Heading>Checkbox FormControl</Heading>
          <CheckboxControl name="tnc" label="Checkbox Control Label" mt={4}>
            <Text mx={2}>Terms and Conditions</Text>
          </CheckboxControl>
          <CheckboxControl name="newsletter" mt={4}>
            <Text mx={2}>Subscribe to Our Newsletter</Text>
          </CheckboxControl>
          <Box pb={4} />
          <ButtonGroup spacing={6}>
            <SubmitButton colorScheme="teal">Next</SubmitButton>
            <ResetButton colorScheme="yellow">Reset</ResetButton>
          </ButtonGroup>
          <Box mt={4} bg="gray.100" p={3}>
            <Heading size="sm" mb={2}>
              Current State
            </Heading>
            Values: {JSON.stringify(values, null, 2)}
            Errors: {JSON.stringify(errors, null, 2)}
          </Box>
        </Box>
      )}
    </Formik>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <FormikCheckboxBasicExample />
      </Center>
    </NativeBaseProvider>
  );
}

```

<br/>

### Custom

```SnackPlayer name=Formik%20Checkbox%20with%20FormControl
import React from 'react';
import {
  Checkbox,
  Text,
  SubmitButton,
  ResetButton,
  Box,
  ButtonGroup,
} from '@native-base/formik-ui';
import { Formik } from 'formik';
import { Heading, FormControl, Center, NativeBaseProvider } from 'native-base';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  tnc: Yup.boolean().equals([true], 'Terms and Condition must be checked !'),
  newsletter: Yup.boolean(),
});

function FormikCheckboxCustomExample() {
  const onSubmit = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(values);
  };
  return (
    <Formik
      initialValues={{
        tnc: true,
        newsletter: false,
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ values, errors }) => (
        <Box>
          <Heading>Custom Checkbox using FormControl</Heading>
          <FormControl mt={4} isRequired isInvalid={errors.tnc}>
            <FormControl.Label>Custom Label</FormControl.Label>
            <Checkbox name="tnc" mt={4}>
              <Text mx={2}>Terms and Conditions</Text>
            </Checkbox>
            <FormControl.ErrorMessage>{errors.tnc}</FormControl.ErrorMessage>
          </FormControl>
          <FormControl>
            <Checkbox name="newsletter" mt={4}>
              <Text mx={2}>Subscribe to Our Newsletter</Text>
            </Checkbox>
            <FormControl.ErrorMessage>
              {errors.newsletter}
            </FormControl.ErrorMessage>
          </FormControl>
          <Box pb={4} />
          <ButtonGroup spacing={6}>
            <SubmitButton colorScheme="teal">Next</SubmitButton>
            <ResetButton colorScheme="yellow">Reset</ResetButton>
          </ButtonGroup>
          <Box mt={4} bg="gray.100" p={3}>
            <Heading size="sm" mb={2}>
              Current State
            </Heading>
            Values: {JSON.stringify(values, null, 2)}
            Errors: {JSON.stringify(errors, null, 2)}
          </Box>
        </Box>
      )}
    </Formik>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <FormikCheckboxCustomExample />
      </Center>
    </NativeBaseProvider>
  );
}

```

## Input

### Basic

```SnackPlayer name=Formik%20Input%20Basic
import React from 'react';
import {
  InputControl,
  SubmitButton,
  ResetButton,
  Box,
  ButtonGroup,
  NativeBaseProvider
} from '@native-base/formik-ui';
import { Formik } from 'formik';
import { Heading, Center, NativeBaseProvider } from 'native-base';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: Yup.string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

export default function () {
  const onSubmit = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(values);
  };
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ values, errors }) => (
        <Box>
          <Heading>Login Form using FormControlled Input</Heading>
          <InputControl
            mt={4}
            name="email"
            label="Email Address"
            placeholder="jane.doe@example.com"
            isRequired
          />
          <InputControl
            mt={4}
            name="password"
            label="Password"
            type="password"
            placeholder="MyPassword"
            isRequired
          />
          <Box pb={4} />
          <ButtonGroup spacing={6}>
            <SubmitButton colorScheme="info">Login</SubmitButton>
            <ResetButton colorScheme="yellow">Reset</ResetButton>
          </ButtonGroup>
          <Box mt={4} bg="gray.100" p={3}>
            <Heading size="sm" mb={2}>
              Current State
            </Heading>
            Values: {JSON.stringify(values, null, 2)}
            Errors: {JSON.stringify(errors, null, 2)}
          </Box>
        </Box>
      )}
    </Formik>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <FormikInputCustomExample />
      </Center>
    </NativeBaseProvider>
  );
}
```

<br/>

### Custom

```SnackPlayer name=Formik%20Input%20with%20FormControl
import React from 'react';
import {
  Input,
  SubmitButton,
  ResetButton,
  Box,
  ButtonGroup,
} from '@native-base/formik-ui';
import { Formik } from 'formik';
import { Heading, FormControl, Center, NativeBaseProvider } from 'native-base';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: Yup.string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

function FormikInputBasicExample() {
  const onSubmit = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(values);
  };
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ values, errors }) => (
        <Box>
          <Heading>Login form using Custom FormControl</Heading>
          <FormControl mt={4} isRequired isInvalid={errors.email}>
            <FormControl.Label color="teal.600">
              Email Address
            </FormControl.Label>
            <Input name="email" mt={2} placeholder="jane.doe@example.com" />
            <FormControl.ErrorMessage>{errors.email}</FormControl.ErrorMessage>
          </FormControl>
          <FormControl mt={4} isRequired isInvalid={errors.password}>
            <FormControl.Label color="orange.600">Password</FormControl.Label>
            <Input
              name="password"
              type="password"
              mt={2}
              placeholder="MyPassword"
            />
            <FormControl.ErrorMessage>
              {errors.password}
            </FormControl.ErrorMessage>
          </FormControl>
          <Box pb={4} />
          <ButtonGroup spacing={6}>
            <SubmitButton colorScheme="info">Login</SubmitButton>
            <ResetButton colorScheme="yellow">Reset</ResetButton>
          </ButtonGroup>
          <Box mt={4} bg="gray.100" p={3}>
            <Heading size="sm" mb={2}>
              Current State
            </Heading>
            Values: {JSON.stringify(values, null, 2)}
            Errors: {JSON.stringify(errors, null, 2)}
          </Box>
        </Box>
      )}
    </Formik>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <FormikInputBasicExample />
      </Center>
    </NativeBaseProvider>
  );
}
```

## NumberInput

### Basic

```SnackPlayer name=Formik%20NumberInput%20Basic
import React from 'react';
import {
  NumberInputControl,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  SubmitButton,
  ResetButton,
  Box,
  ButtonGroup,
} from '@native-base/formik-ui';
import { Formik } from 'formik';
import { Heading, Center, NativeBaseProvider } from 'native-base';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  age: Yup.number()
    .min(18, ({ min }) => `Age must be at least ${min} years old`)
    .required('Please specify your age, it is important.'),
});

function FormikNumberInputBasicExample() {
  const onSubmit = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(values);
  };
  return (
    <Formik
      initialValues={{
        age: 0,
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ values, errors }) => (
        <Box mt={4}>
          <Heading>Let's check if you are eligible.</Heading>
          <NumberInputControl mt={4} name="age" label="Age ?">
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInputControl>
          <Box pb={4} />
          <ButtonGroup spacing={6}>
            <SubmitButton colorScheme="teal">Next</SubmitButton>
            <ResetButton colorScheme="yellow">Reset</ResetButton>
          </ButtonGroup>
          <Box mt={4} bg="gray.100" p={3}>
            <Heading size="sm" mb={2}>
              Current State
            </Heading>
            Values: {JSON.stringify(values, null, 2)}
            Errors: {JSON.stringify(errors, null, 2)}
          </Box>
        </Box>
      )}
    </Formik>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <FormikNumberInputBasicExample />
      </Center>
    </NativeBaseProvider>
  );
}
```

<br/>

### Custom

```SnackPlayer name=Formik%20NumberInput%20with%20FormControl
import React from 'react';
import {
  NumberInput,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  SubmitButton,
  ResetButton,
  Box,
  ButtonGroup,
} from '@native-base/formik-ui';
import { Formik } from 'formik';
import { Heading, FormControl, Center, NativeBaseProvider } from 'native-base';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  age: Yup.number().min(
    18,
    ({ min }) => `Age must be at least ${min} years old`
  ),
});

function FormikNumberInputCustomExample() {
  const onSubmit = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(values);
  };
  return (
    <Formik
      initialValues={{
        age: 0,
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ values, errors }) => (
        <Box mt={4}>
          <Heading>Let's check if you are eligible.</Heading>
          <FormControl mt={4} isInvalid={errors.age}>
            <FormControl.Label>What's your Age?</FormControl.Label>
            <NumberInput mt={2} name="age">
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <FormControl.ErrorMessage>{errors.age}</FormControl.ErrorMessage>
          </FormControl>
          <Box pb={4} />
          <ButtonGroup spacing={6}>
            <SubmitButton colorScheme="teal">Next</SubmitButton>
            <ResetButton colorScheme="yellow">Reset</ResetButton>
          </ButtonGroup>
          <Box mt={4} bg="gray.100" p={3}>
            <Heading size="sm" mb={2}>
              Current State
            </Heading>
            Values: {JSON.stringify(values, null, 2)}
            Errors: {JSON.stringify(errors, null, 2)}
          </Box>
        </Box>
      )}
    </Formik>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <FormikNumberInputCustomExample />
      </Center>
    </NativeBaseProvider>
  );
}
```

## PinInput

### Basic

```SnackPlayer name=Formik%20PinInput%20Basic
import React from 'react';
import {
  PinInputControl,
  PinInput,
  SubmitButton,
  ResetButton,
  Box,
  ButtonGroup,
} from '@native-base/formik-ui';
import { Formik } from 'formik';
import { Heading, Center, NativeBaseProvider } from 'native-base';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  otp: Yup.string().required(
    'Please specify your otp, it is required to proceed forward.'
  ),
});

function FormikPinInputBasicExample() {
  const onSubmit = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(values);
  };
  return (
    <Formik
      initialValues={{
        otp: '',
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ values, errors }) => (
        <Box mt={4}>
          <Heading>Verify your Phone Number</Heading>
          <PinInputControl mt={4} name="otp" label="Enter Your Otp" isRequired>
            <PinInput.Field />
            <PinInput.Field />
            <PinInput.Field />
            <PinInput.Field />
          </PinInputControl>
          <Box pb={4} />
          <ButtonGroup spacing={6}>
            <SubmitButton colorScheme="teal">Next</SubmitButton>
            <ResetButton colorScheme="yellow">Reset</ResetButton>
          </ButtonGroup>
          <Box mt={4} bg="gray.100" p={3}>
            <Heading size="sm" mb={2}>
              Current State
            </Heading>
            Values: {JSON.stringify(values, null, 2)}
            Errors: {JSON.stringify(errors, null, 2)}
          </Box>
        </Box>
      )}
    </Formik>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <FormikPinInputBasicExample />
      </Center>
    </NativeBaseProvider>
  );
}
```

<br/>

### Custom

```SnackPlayer name=Formik%20PinInput%20with%20FormControl
import React from 'react';
import {
  PinInput,
  SubmitButton,
  ResetButton,
  Box,
  ButtonGroup,
} from '@native-base/formik-ui';
import { Formik } from 'formik';
import { Heading, FormControl, Center, NativeBaseProvider } from 'native-base';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  otp: Yup.string().required('Please specify your otp, it is important.'),
});

function FormikPinInputCustomExample() {
  const onSubmit = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(values);
  };
  return (
    <Formik
      initialValues={{
        otp: '',
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      enablereinitialize
    >
      {({ values, errors }) => (
        <Box mt={4}>
          <Heading>Confirm Your Identity</Heading>
          <FormControl mt={4} isInvalid={errors.otp}>
            <FormControl.Label>
              Please enter the OTP. Trust me , I won't steal anything 😉 .
            </FormControl.Label>
            <PinInput mt={2} name="otp">
              <PinInput.Field />
              <PinInput.Field />
              <PinInput.Field />
              <PinInput.Field />
            </PinInput>
            <FormControl.ErrorMessage>{errors.otp}</FormControl.ErrorMessage>
          </FormControl>
          <Box pb={4} />
          <ButtonGroup spacing={6}>
            <SubmitButton colorScheme="teal">Next</SubmitButton>
            <ResetButton colorScheme="yellow">Reset</ResetButton>
          </ButtonGroup>
          <Box mt={4} bg="gray.100" p={3}>
            <Heading size="sm" mb={2}>
              Current State
            </Heading>
            Values: {JSON.stringify(values, null, 2)}
            Errors: {JSON.stringify(errors, null, 2)}
          </Box>
        </Box>
      )}
    </Formik>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <FormikPinInputCustomExample />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Radio

### Basic

```SnackPlayer name=Formik%20Radio%20Basic
import React from 'react';
import {
  Radio,
  RadioGroupControl,
  HStack,
  SubmitButton,
  ResetButton,
  Box,
  ButtonGroup,
  Text,
} from '@native-base/formik-ui';
import { Formik } from 'formik';
import { Heading, Center, NativeBaseProvider } from 'native-base';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  color: Yup.string().required(),
});

function FormikRadioBasicExample() {
  const onSubmit = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(values);
  };
  return (
    <Formik
      initialValues={{
        color: '',
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ values, errors }) => (
        <Box mt={4}>
          <Heading>Let's Try to Know You More.</Heading>
          <RadioGroupControl
            mt={4}
            name="color"
            label="What's your favourite Color ?"
          >
            <HStack space={4}>
              <Radio value="#ff0000">
                <Text ml={2}>Red</Text>
              </Radio>
              <Radio value="#00ff00">
                <Text ml={2}>Green</Text>
              </Radio>
              <Radio value="#0000ff">
                <Text ml={2}>Blue</Text>
              </Radio>
              <Radio value="other">
                <Text ml={2}>Other</Text>
              </Radio>
            </HStack>
          </RadioGroupControl>
          <Box pb={4} />
          <ButtonGroup spacing={6}>
            <SubmitButton colorScheme="teal">Next</SubmitButton>
            <ResetButton colorScheme="yellow">Reset</ResetButton>
          </ButtonGroup>
          <Box mt={4} bg="gray.100" p={3}>
            <Heading size="sm" mb={2}>
              Current State
            </Heading>
            Values: {JSON.stringify(values, null, 2)}
            Errors: {JSON.stringify(errors, null, 2)}
          </Box>
        </Box>
      )}
    </Formik>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <FormikRadioBasicExample />
      </Center>
    </NativeBaseProvider>
  );
}
```

<br/>

### Custom

```SnackPlayer name=Formik%20Radio%20with%20FormControl
import React from 'react';
import {
  Radio,
  RadioGroup,
  HStack,
  SubmitButton,
  ResetButton,
  Box,
  ButtonGroup,
  Text,
} from '@native-base/formik-ui';
import { Formik } from 'formik';
import { Heading, FormControl, Center, NativeBaseProvider } from 'native-base';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  color: Yup.string().required(),
});

function FormikRadioCustomExample() {
  const onSubmit = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(values);
  };
  return (
    <Formik
      initialValues={{
        color: '',
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ values, errors }) => (
        <Box mt={4}>
          <Heading>Let's Try to Know You More.</Heading>
          <FormControl mt={4} isRequired isInvalid={errors.color}>
            <FormControl.Label>What's your favourite Color ?</FormControl.Label>
            <RadioGroup
              mt={2}
              name="color"
              label="What's your favourite Color ?"
            >
              <HStack space={4}>
                <Radio value="#ff0000">
                  <Text ml={2}>Red</Text>
                </Radio>
                <Radio value="#00ff00">
                  <Text ml={2}>Green</Text>
                </Radio>
                <Radio value="#0000ff">
                  <Text ml={2}>Blue</Text>
                </Radio>
                <Radio value="other">
                  <Text ml={2}>Other</Text>
                </Radio>
              </HStack>
            </RadioGroup>
            <FormControl.ErrorMessage>{errors.color}</FormControl.ErrorMessage>
          </FormControl>
          <Box pb={4} />
          <ButtonGroup spacing={6}>
            <SubmitButton colorScheme="teal">Next</SubmitButton>
            <ResetButton colorScheme="yellow">Reset</ResetButton>
          </ButtonGroup>
          <Box mt={4} bg="gray.100" p={3}>
            <Heading size="sm" mb={2}>
              Current State
            </Heading>
            Values: {JSON.stringify(values, null, 2)}
            Errors: {JSON.stringify(errors, null, 2)}
          </Box>
        </Box>
      )}
    </Formik>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <FormikRadioCustomExample />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Select

### Basic

```SnackPlayer name=Formik%20Select%20Basic
import React from 'react';
import {
  SelectControl,
  Select,
  Icon,
  SubmitButton,
  ResetButton,
  Box,
  ButtonGroup,
} from '@native-base/formik-ui';
import { Formik } from 'formik';
import { Heading, Center, NativeBaseProvider } from 'native-base';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  language: Yup.string().required(),
});

function FormikSelectBasicExample() {
  const onSubmit = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(values);
  };
  return (
    <Formik
      initialValues={{
        language: '',
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ values, errors }) => (
        <Box mt={4}>
          <Heading>
            {values.language === ''
              ? 'Please Tell Your Favourite Programming Language'
              : 'You said you love ' + values.language + ' 👌🏻'}
          </Heading>
          <SelectControl
            mt={4}
            name="language"
            label="Pick language"
            placeholder="Pick language"
            width={150}
            selectedItemBg={'teal.400'}
            dropdownOpenIcon={
              <Icon name="arrow-drop-up" type="MaterialIcons" size={6} />
            }
            dropdownCloseIcon={
              <Icon name="arrow-drop-down" type="MaterialIcons" size={6} />
            }
          >
            <Select.Item label="JavaScript" value="js" />
            <Select.Item label="C++" value="cpp" />
            <Select.Item label="Python" value="py" />
            <Select.Item label="TypeScript" value="ts" />
            <Select.Item label="Java" value="java" />
          </SelectControl>
          <Box pb={4} />
          <ButtonGroup spacing={6}>
            <SubmitButton colorScheme="teal">Next</SubmitButton>
            <ResetButton colorScheme="yellow">Reset</ResetButton>
          </ButtonGroup>
          <Box mt={4} bg="gray.100" p={3}>
            <Heading size="sm" mb={2}>
              Current State
            </Heading>
            Values: {JSON.stringify(values, null, 2)}
            Errors: {JSON.stringify(errors, null, 2)}
          </Box>
        </Box>
      )}
    </Formik>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <FormikSelectBasicExample />
      </Center>
    </NativeBaseProvider>
  );
}
```

<br/>

### Custom

```SnackPlayer name=Formik%20Select%20with%20FormControl
import React from 'react';
import {
  SelectFormik,
  Select,
  Icon,
  SubmitButton,
  ResetButton,
  Box,
  ButtonGroup,
} from '@native-base/formik-ui';
import { Formik } from 'formik';
import { Heading, FormControl, Center, NativeBaseProvider } from 'native-base';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  language: Yup.string().required(),
});

function FormikSelectCustomExample() {
  const onSubmit = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(values);
  };
  return (
    <Formik
      initialValues={{
        language: '',
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ values, errors }) => (
        <Box mt={4}>
          <Heading>
            {values.language === ''
              ? 'Please Tell Your Favourite Programming Language'
              : 'You said you love ' + values.language + ' 👌🏻'}
          </Heading>
          <FormControl mt={4} isInvalid={errors.language}>
            <SelectFormik
              variant="styled"
              name="language"
              label="Pick language"
              placeholder="Pick language"
              width={150}
              selectedItemBg={'teal.400'}
              dropdownOpenIcon={
                <Icon name="arrow-drop-up" type="MaterialIcons" size={6} />
              }
              dropdownCloseIcon={
                <Icon name="arrow-drop-down" type="MaterialIcons" size={6} />
              }
            >
              <Select.Item label="JavaScript" value="js" />
              <Select.Item label="C++" value="cpp" />
              <Select.Item label="Python" value="py" />
              <Select.Item label="TypeScript" value="ts" />
              <Select.Item label="Java" value="java" />
            </SelectFormik>
            <FormControl.ErrorMessage>
              {errors.language}
            </FormControl.ErrorMessage>
          </FormControl>
          <Box pb={4} />
          <ButtonGroup spacing={6}>
            <SubmitButton colorScheme="teal">Next</SubmitButton>
            <ResetButton colorScheme="yellow">Reset</ResetButton>
          </ButtonGroup>
          <Box mt={4} bg="gray.100" p={3}>
            <Heading size="sm" mb={2}>
              Current State
            </Heading>
            Values: {JSON.stringify(values, null, 2)}
            Errors: {JSON.stringify(errors, null, 2)}
          </Box>
        </Box>
      )}
    </Formik>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <FormikSelectCustomExample />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Slider

### Basic

```SnackPlayer name=Formik%20Slider%20Basic
import React from 'react';
import {
  Slider,
  SliderControl,
  SubmitButton,
  ResetButton,
  Box,
  ButtonGroup,
  Text,
} from '@native-base/formik-ui';
import { Formik } from 'formik';
import { Heading, Center, NativeBaseProvider } from 'native-base';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  rating: Yup.number()
    .required()
    .min(4, ({ min }) => `Come on we deserve at least ${min}`),
});

function FormikSliderBasicExample() {
  const onSubmit = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(values);
  };
  return (
    <Formik
      initialValues={{
        rating: 0,
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ values, errors }) => (
        <Box mt={4}>
          <Heading>Rate NativeBase-Formik-UI (0-10) 😬</Heading>
          <Text>You have rated us {Math.floor(values.rating)}</Text>
          <SliderControl
            name="rating"
            label="Slider Label"
            mt={4}
            colorScheme="cyan"
            min={0}
            max={10}
          >
            <Slider.Track>
              <Slider.FilledTrack />
            </Slider.Track>
            <Slider.Thumb />
          </SliderControl>
          <Box pb={4} />
          <ButtonGroup spacing={6}>
            <SubmitButton colorScheme="teal">Next</SubmitButton>
            <ResetButton colorScheme="yellow">Reset</ResetButton>
          </ButtonGroup>
          <Box mt={4} bg="gray.100" p={3}>
            <Heading size="sm" mb={2}>
              Current State
            </Heading>
            Values: {JSON.stringify(values, null, 2)}
            Errors: {JSON.stringify(errors, null, 2)}
          </Box>
        </Box>
      )}
    </Formik>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <FormikSliderBasicExample />
      </Center>
    </NativeBaseProvider>
  );
}
```

<br/>

### Custom

```SnackPlayer name=Formik%20Slider%20with%20FormControl
import React from 'react';
import {
  Slider,
  SubmitButton,
  ResetButton,
  Box,
  ButtonGroup,
  Text,
} from '@native-base/formik-ui';
import { Formik } from 'formik';
import { Heading, FormControl, Center, NativeBaseProvider } from 'native-base';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  rating: Yup.number()
    .required()
    .min(4, ({ min }) => `Come on we deserve at least ${min}`),
});

function FormikSliderCustomExample() {
  const onSubmit = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(values);
  };
  return (
    <Formik
      initialValues={{
        rating: 0,
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ values, errors }) => (
        <Box mt={4}>
          <Heading>Rate NativeBase-Formik-UI (0-10) 😬</Heading>
          <Text>You have rated us {Math.floor(values.rating)}</Text>
          <FormControl isInvalid={errors.rating}>
            <FormControl.Label>Slider Label</FormControl.Label>
            <Slider name="rating" colorScheme="cyan" min={0} max={10}>
              <Slider.Track>
                <Slider.FilledTrack />
              </Slider.Track>
              <Slider.Thumb />
            </Slider>
            <FormControl.ErrorMessage>{errors.rating}</FormControl.ErrorMessage>
          </FormControl>
          <Box pb={4} />
          <ButtonGroup spacing={6}>
            <SubmitButton colorScheme="teal">Next</SubmitButton>
            <ResetButton colorScheme="yellow">Reset</ResetButton>
          </ButtonGroup>
          <Box mt={4} bg="gray.100" p={3}>
            <Heading size="sm" mb={2}>
              Current State
            </Heading>
            Values: {JSON.stringify(values, null, 2)}
            Errors: {JSON.stringify(errors, null, 2)}
          </Box>
        </Box>
      )}
    </Formik>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <FormikSliderCustomExample />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Switch

### Basic

```SnackPlayer name=Formik%20Switch%20Basic
import React from 'react';
import {
  SwitchControl,
  SubmitButton,
  ResetButton,
  Box,
  ButtonGroup,
  Icon,
} from '@native-base/formik-ui';
import { Formik } from 'formik';
import { Heading, Center, NativeBaseProvider } from 'native-base';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  switchon: Yup.boolean().equals([true]),
});

function FormikSwitchBasicExample() {
  const onSubmit = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(values);
  };
  return (
    <Formik
      initialValues={{
        switchon: false,
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ values, errors }) => (
        <Box mt={4}>
          <Heading>
            Light is Switched {values.switchon ? 'On ' : 'Off '}
            <Icon
              name={values.switchon ? 'light-up' : 'md-moon'}
              type={values.switchon ? 'Entypo' : 'Ionicons'}
              size={6}
            />
          </Heading>
          <SwitchControl name="switchon" label="Toggle Switch" mt={4} />
          <Box pb={4} />
          <ButtonGroup spacing={6}>
            <SubmitButton colorScheme="teal">Next</SubmitButton>
            <ResetButton colorScheme="yellow">Reset</ResetButton>
          </ButtonGroup>
          <Box mt={4} bg="gray.100" p={3}>
            <Heading size="sm" mb={2}>
              Current State
            </Heading>
            Values: {JSON.stringify(values, null, 2)}
            Errors: {JSON.stringify(errors, null, 2)}
          </Box>
        </Box>
      )}
    </Formik>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <FormikSwitchBasicExample />
      </Center>
    </NativeBaseProvider>
  );
}
```

<br/>

### Custom

```SnackPlayer name=Formik%20Switch%20with%20FormControl
import React from 'react';
import {
  Switch,
  SubmitButton,
  ResetButton,
  Box,
  ButtonGroup,
  Icon,
} from '@native-base/formik-ui';
import { Formik } from 'formik';
import { Heading, FormControl, Center, NativeBaseProvider } from 'native-base';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  switchon: Yup.boolean().equals([true]),
});

function FormikSwitchCustomExample() {
  const onSubmit = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(values);
  };
  return (
    <Formik
      initialValues={{
        switchon: false,
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ values, errors }) => (
        <Box mt={4}>
          <Heading>
            Light is Switched {values.switchon ? 'On ' : 'Off '}
            <Icon
              name={values.switchon ? 'light-up' : 'md-moon'}
              type={values.switchon ? 'Entypo' : 'Ionicons'}
              size={6}
            />
          </Heading>
          <FormControl mt={4} isInvalid={errors.switchon}>
            <FormControl.Label>Toggle Switch</FormControl.Label>
            <Switch mt={2} name="switchon" label="Toggle Switch" />
            <FormControl.ErrorMessage>
              {errors.switchon}
            </FormControl.ErrorMessage>
          </FormControl>
          <Box pb={4} />
          <ButtonGroup spacing={6}>
            <SubmitButton colorScheme="teal">Next</SubmitButton>
            <ResetButton colorScheme="yellow">Reset</ResetButton>
          </ButtonGroup>
          <Box mt={4} bg="gray.100" p={3}>
            <Heading size="sm" mb={2}>
              Current State
            </Heading>
            Values: {JSON.stringify(values, null, 2)}
            Errors: {JSON.stringify(errors, null, 2)}
          </Box>
        </Box>
      )}
    </Formik>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <FormikSwitchCustomExample />
      </Center>
    </NativeBaseProvider>
  );
}
```

## TextArea

### Basic

```SnackPlayer name=Formik%20TextArea%20Basic
import React from 'react';
import {
  TextAreaControl,
  SubmitButton,
  ResetButton,
  Box,
  ButtonGroup,
} from '@native-base/formik-ui';
import { Formik } from 'formik';
import { Heading, Center, NativeBaseProvider } from 'native-base';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  bio: Yup.string().required(),
});

function FormikTextareaBasicExample() {
  const onSubmit = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(values);
  };
  return (
    <Formik
      initialValues={{
        bio: '',
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ values, errors }) => (
        <Box mt={4}>
          <Heading>Tell us about yourself 🥷</Heading>
          <TextAreaControl
            name="bio"
            h="100"
            mt={4}
            label="Describe You"
            placeholder="About me..."
            isRequired
          />
          <Box pb={4} />
          <ButtonGroup spacing={6}>
            <SubmitButton colorScheme="teal">Next</SubmitButton>
            <ResetButton colorScheme="yellow">Reset</ResetButton>
          </ButtonGroup>
          <Box mt={4} bg="gray.100" p={3}>
            <Heading size="sm" mb={2}>
              Current State
            </Heading>
            Values: {JSON.stringify(values, null, 2)}
            Errors: {JSON.stringify(errors, null, 2)}
          </Box>
        </Box>
      )}
    </Formik>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <FormikTextareaBasicExample />
      </Center>
    </NativeBaseProvider>
  );
}
```

<br/>

### Custom

```SnackPlayer name=Formik%20TextArea%20with%20FormControl
import React from 'react';
import {
  TextArea,
  SubmitButton,
  ResetButton,
  Box,
  ButtonGroup,
} from '@native-base/formik-ui';
import { Formik } from 'formik';
import { Heading, FormControl, Center, NativeBaseProvider } from 'native-base';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  bio: Yup.string().required(),
});

function FormikTextareaCustomExample() {
  const onSubmit = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(values);
  };
  return (
    <Formik
      initialValues={{
        bio: '',
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ values, errors }) => (
        <Box mt={4}>
          <Heading>Tell us about yourself 🥷</Heading>
          <FormControl mt={4} isInvalid={errors.bio} isRequired>
            <FormControl.Label>Describe You</FormControl.Label>
            <TextArea name="bio" h="100" mt={2} placeholder="About me..." />
            <FormControl.ErrorMessage>{errors.bio}</FormControl.ErrorMessage>
          </FormControl>
          <Box pb={4} />
          <ButtonGroup spacing={6}>
            <SubmitButton colorScheme="teal">Next</SubmitButton>
            <ResetButton colorScheme="yellow">Reset</ResetButton>
          </ButtonGroup>
          <Box mt={4} bg="gray.100" p={3}>
            <Heading size="sm" mb={2}>
              Current State
            </Heading>
            Values: {JSON.stringify(values, null, 2)}
            Errors: {JSON.stringify(errors, null, 2)}
          </Box>
        </Box>
      )}
    </Formik>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <FormikTextareaCustomExample />
      </Center>
    </NativeBaseProvider>
  );
}
```

> **Note**: `@native-base/formik-ui` provides some basic helper components from `native-base` so you don't have to keep track of those components, but it's not possible to provide each and every component , therefore there can be situations where you have to import components from `native-base` separately.

## Props

- `name` : ( **string** ) Name of the form field, this will be the key in the formik state.
- `label` : ( **string** ) FormControl Label Value will be displayed over the form element, you can skip this ,for some custom label.

Rest you can pass all the other props related to that specific component.
