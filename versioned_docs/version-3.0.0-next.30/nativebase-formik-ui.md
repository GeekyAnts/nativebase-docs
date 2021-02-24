import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

NativeBase Formik Integrated Components. No need of managing and using formik hooks just use these components and NativeBase will do that for you.

## Installation

To **Install NativeBase-Formik-UI** just copy this and paste in your terminal.\_

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
import { Heading, NativeBaseProvider } from 'native-base';
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
      <FormikCheckboxBasicExample />
    </NativeBaseProvider>
  );
}

```

<br/>

### Custom

```SnackPlayer name=Formik%20Checkbox%20Custom
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
import { Heading, FormControl, NativeBaseProvider } from 'native-base';
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
            <FormControl.ErrorMessage>{errors.newsletter}</FormControl.ErrorMessage>
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
      <FormikCheckboxCustomExample />
    </NativeBaseProvider>
  );
}

```

## Input

### Basic

```SnackPlayer name=Formik%20Input%20Basic
import React from 'react';
import {
  Input,
  SubmitButton,
  ResetButton,
  Box,
  ButtonGroup,
} from '@native-base/formik-ui';
import { Formik } from 'formik';
import { Heading, FormControl,     NativeBaseProvider } from 'native-base';
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
            <FormControl.Label color="teal.600">Email Address</FormControl.Label>
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
            <FormControl.ErrorMessage>{errors.password}</FormControl.ErrorMessage>
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
      <FormikInputBasicExample />
    </NativeBaseProvider>
  );
}
```

<br/>

### Custom

```SnackPlayer name=Formik%20Input%20Custom
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
import { Heading, NativeBaseProvider } from 'native-base';
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
      <FormikInputCustomExample />
    </NativeBaseProvider>
  );
}
```

## NumberInput

### Basic

```SnackPlayer name=Formik%20NumberInput%20Basic
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
import { Heading,   FormControl,   NativeBaseProvider } from 'native-base';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  age: Yup.number().min(
    18,
    ({ min }) => `Age must be at least ${min} years old`
  ),
  // .required('Please specify your age, it is important.'),
});

export default function FormikNumberInputBasicExample() {
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
      <FormikNumberInputBasicExample />
    </NativeBaseProvider>
  );
}
```

<br/>

### Custom

```SnackPlayer name=Formik%20NumberInput%20Custom
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
import { Heading, NativeBaseProvider } from 'native-base';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  age: Yup.number()
    .min(18, ({ min }) => `Age must be at least ${min} years old`)
    .required('Please specify your age, it is important.'),
});

export default function () {
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
      <FormikNumberInputCustomExample />
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
import { Heading, NativeBaseProvider } from 'native-base';
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
            label="What's your faviourate Color ?"
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
      <FormikRadioBasicExample />
    </NativeBaseProvider>
  );
}
```

<br/>

### Custom

```SnackPlayer name=Formik%20Radio%20Custom
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
import { Heading, FormControl,     NativeBaseProvider } from 'native-base';
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
            <FormControl.Label>What's your faviourate Color ?</FormControl.Label>
            <RadioGroup
              mt={2}
              name="color"
              label="What's your faviourate Color ?"
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
      <FormikRadioCustomExample />
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
import { Heading, NativeBaseProvider } from 'native-base';
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
              ? 'Please Tell Your Faviorate Programming Language'
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
      <FormikSelectBasicExample />
    </NativeBaseProvider>
  );
}
```

<br/>

### Custom

```SnackPlayer name=Formik%20Select%20Custom
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
import { Heading, FormControl,   NativeBaseProvider } from 'native-base';
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
              ? 'Please Tell Your Faviorate Programming Language'
              : 'You said you love ' + values.language + ' 👌🏻'}
          </Heading>
          <FormControl mt={4} isInvalid={errors.language}>
            <SelectFormik
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
            <FormControl.ErrorMessage>{errors.language}</FormControl.ErrorMessage>
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
      <FormikSelectCustomExample />
    </NativeBaseProvider>
  );
}
```

## Slider

### Basic

```SnackPlayer name=Formik%20Slider%20Basic
import React from 'react';
import {
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderControl,
  SubmitButton,
  ResetButton,
  Box,
  ButtonGroup,
  Text,
} from '@native-base/formik-ui';
import { Formik } from 'formik';
import { Heading, NativeBaseProvider } from 'native-base';
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
          <Heading>Rate NativeBase V3 Formik Integration (0-10) 😬</Heading>
          <Text>You have rated us {Math.floor(values.rating)}</Text>
          <SliderControl
            name="rating"
            label="Slider Label"
            mt={4}
            colorScheme="cyan"
            min={0}
            max={10}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
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
      <FormikSliderBasicExample />
    </NativeBaseProvider>
  );
}
```

<br/>

### Custom

```SnackPlayer name=Formik%20Slider%20Custom
import React from 'react';
import {
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Slider,
  SubmitButton,
  ResetButton,
  Box,
  ButtonGroup,
  Text,
} from '@native-base/formik-ui';
import { Formik } from 'formik';
import { Heading, FormControl,     NativeBaseProvider } from 'native-base';
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
          <Heading>Rate NativeBase V3 Formik Integration (0-10) 😬</Heading>
          <Text>You have rated us {Math.floor(values.rating)}</Text>
          <FormControl isInvalid={errors.rating}>
            <FormControl.Label>Slider Label</FormControl.Label>
            <Slider name="rating" colorScheme="cyan" min={0} max={10}>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
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
      <FormikSliderCustomExample />
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
import { Heading, NativeBaseProvider } from 'native-base';
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
      <FormikSwitchBasicExample />
    </NativeBaseProvider>
  );
}
```

<br/>

### Custom

```SnackPlayer name=Formik%20Switch%20Custom
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
import { Heading, FormControl,     NativeBaseProvider } from 'native-base';
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
            <FormControl.ErrorMessage>{errors.switchon}</FormControl.ErrorMessage>
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
      <FormikSwitchCustomExample />
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
import { Heading, NativeBaseProvider } from 'native-base';
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
      <FormikTextareaBasicExample />
    </NativeBaseProvider>
  );
}
```

<br/>

### Custom

```SnackPlayer name=Formik%20TextArea%20Custom
import React from 'react';
import {
  TextArea,
  SubmitButton,
  ResetButton,
  Box,
  ButtonGroup,
  NativeBaseProvider
} from '@native-base/formik-ui';
import { Formik } from 'formik';
import { Heading, FormControl,     NativeBaseProvider } from 'native-base';
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
      <FormikTextareaCustomExample />
    </NativeBaseProvider>
  );
}
```

> **Note**: `@native-base/formik-ui` provides some basic helper components from `native-base` so you don't have to keep track of those components, but it's not possible to provide each and every component , therefore there can be situation where you have to import components from `native-base` manually.

## Props

- `name` : ( **string** ) Name of the form field, this will be the key in the formik state.
- `label` : ( **string** ) FormControl Label Value will be displayed over the form element, you can skip this ,for some custom label.

Rest you can pass all the other props related to that specific component.
