---
id: nativebase-formik-ui
title: Formik NativeBase Integration
---

NativeBase Formik Integrated Components. No need of managing and using formik hooks just use these components and NativeBase will do that for you.

## Installation

Add using npm

```jsx
npm i @native-base/formik-ui
```

Add using Yarn

```jsx
yarn add @native-base/formik-ui
```

## Checkbox

```jsx
import React from "react";
import {
  CheckboxSingular,
  Text,
  SubmitButton,
  ResetButton,
  Box,
  ButtonGroup,
} from "nativebase-formik-ui";
import { Formik } from "formik";
import { Heading } from "native-base";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  tnc: Yup.boolean().equals([true], "Terms and Condition must be checked !"),
  newsletter: Yup.boolean(),
});

export default function () {
  const onSubmit = async (values: any) => {
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
          <Heading>Next Steps</Heading>
          <CheckboxSingular name="tnc" mt={4}>
            <Text mx={2}>Terms and Conditions</Text>
          </CheckboxSingular>
          <CheckboxSingular name="newsletter" mt={4}>
            <Text mx={2}>Subscribe to Our Newsletter</Text>
          </CheckboxSingular>
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
```

## Input

```jsx
import React from "react";
import {
  Input,
  SubmitButton,
  ResetButton,
  Box,
  ButtonGroup,
} from "nativebase-formik-ui";
import { Formik } from "formik";
import { Heading } from "native-base";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  password: Yup.string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});

export default function () {
  const onSubmit = async (values: any) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(values);
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ values, errors }) => (
        <Box>
          <Heading>Login</Heading>
          <Input
            mt={4}
            name="email"
            label="Email Address"
            placeholder="jane.doe@example.com"
          />
          <Input
            mt={4}
            name="password"
            label="Password"
            type="password"
            placeholder="MyPassword"
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
```

## NumberInput

```jsx
import React from "react";
import {
  NumberInput,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  SubmitButton,
  ResetButton,
  Box,
  ButtonGroup,
} from "nativebase-formik-ui";
import { Formik } from "formik";
import { Heading } from "native-base";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  age: Yup.number().min(
    18,
    ({ min }) => `Age must be at least ${min} years old`
  ),
});

export default function () {
  const onSubmit = async (values: any) => {
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
          <NumberInput mt={4} name="age" label="Age ?">
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
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
```

## Radio

```jsx
import React from "react";
import {
  Radio,
  RadioGroup,
  HStack,
  SubmitButton,
  ResetButton,
  Box,
  ButtonGroup,
  Text,
} from "nativebase-formik-ui";
import { Formik } from "formik";
import { Heading } from "native-base";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  color: Yup.string().required(),
});

export default function () {
  const onSubmit = async (values: any) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(values);
  };
  return (
    <Formik
      initialValues={{
        color: "",
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ values, errors }) => (
        <Box mt={4}>
          <Heading>Let's Try to Know You More.</Heading>
          <RadioGroup
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
          </RadioGroup>
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
```

## Select

```jsx
import React from "react";
import {
  SelectControlled,
  Select,
  Icon,
  SubmitButton,
  ResetButton,
  Box,
  ButtonGroup,
} from "nativebase-formik-ui";
import { Formik } from "formik";
import { Heading } from "native-base";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  language: Yup.string().required(),
});

export default function () {
  const onSubmit = async (values: any) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(values);
  };
  return (
    <Formik
      initialValues={{
        language: "",
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ values, errors }) => (
        <Box mt={4}>
          <Heading>
            {values.language === ""
              ? "Please Tell Your Faviorate Programming Language"
              : "You said you love " + values.language + " 👌🏻"}
          </Heading>
          <SelectControlled
            mt={4}
            name="language"
            label="Pick language"
            placeholder="Pick language"
            width={150}
            selectedItemBg={"teal.400"}
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
          </SelectControlled>
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
```

## Slider

```jsx
import React from "react";
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
} from "nativebase-formik-ui";
import { Formik } from "formik";
import { Heading } from "native-base";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  rating: Yup.number()
    .required()
    .min(4, ({ min }) => `Come on we deserve at least ${min}`),
});

export default function () {
  const onSubmit = async (values: any) => {
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
          <Slider name="rating" colorScheme="cyan" min={0} max={10}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
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
```

## Switch

```jsx
import React from "react";
import {
  SwitchControl,
  SubmitButton,
  ResetButton,
  Box,
  ButtonGroup,
  Icon,
} from "nativebase-formik-ui";
import { Formik } from "formik";
import { Heading } from "native-base";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  switchon: Yup.boolean().equals([true]),
});

export default function () {
  const onSubmit = async (values: any) => {
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
            Light is Switched {values.switchon ? "On " : "Off "}
            <Icon
              name={values.switchon ? "light-up" : "md-moon"}
              type={values.switchon ? "Entypo" : "Ionicons"}
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
```

## TextArea

```jsx
import React from "react";
import {
  TextArea,
  SubmitButton,
  ResetButton,
  Box,
  ButtonGroup,
} from "nativebase-formik-ui";
import { Formik } from "formik";
import { Heading } from "native-base";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  bio: Yup.string().required(),
});

export default function () {
  const onSubmit = async (values: any) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(values);
  };
  return (
    <Formik
      initialValues={{
        bio: "",
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ values, errors }) => (
        <Box mt={4}>
          <Heading>Tell us about yourself 🥷</Heading>
          <TextArea
            name="bio"
            h="100"
            mt={4}
            label="Describe You"
            placeholder="About me..."
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
```

> **Note**: `@native-base/formik-ui` provides some basic helper components from `native-base` so you don't have to keep track of those components, but it's not possible to provide each and every component , therefore there can be situation where you have to import components from `native-base` manually.

## Props

- `name` : ( **string** ) Name of the form field, this will be the key in the formik state.
- `label` : ( **string** ) FormControl Label Value will be displayed over the form element, you can skip this ,for some custom label.

Rest you can pass all the other props related to that specific component.
