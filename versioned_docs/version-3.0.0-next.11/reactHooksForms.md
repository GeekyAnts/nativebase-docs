---
id: reactHookForms
title: React Hook Forms
---

A Performant, flexible and extensible forms with easy-to-use validation. And below are some examples showing its integration with NativeBase.

## Usage

```jsx
import {
  VStack,
  Input,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from 'native-base';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
}

export default function () {
  const { control, handleSubmit, errors } = useForm<IFormInput>();
  const onSubmit = (data: IFormInput) => {
    console.log('submiting with ', data);
  };
  return (
    <VStack width="80%" space={4}>
      <FormControl isRequired isInvalid={'firstName' in errors}>
        <FormLabel>First Name</FormLabel>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <Input
              onBlur={onBlur}
              placeholder="John"
              onChangeText={(val) => onChange(val)}
              value={value}
            />
          )}
          name="firstName"
          rules={{ required: 'Field is required', minLength: 3 }}
          defaultValue=""
        />
        <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={'lastName' in errors}>
        <FormLabel>Last Name</FormLabel>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <Input
              onBlur={onBlur}
              placeholder="Doe"
              onChangeText={(val) => onChange(val)}
              value={value}
            />
          )}
          name="lastName"
          defaultValue=""
        />
        <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={'age' in errors}>
        <FormLabel>Age</FormLabel>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <Input
              onBlur={onBlur}
              placeholder="24"
              onChangeText={(val) => onChange(val)}
              value={value}
            />
          )}
          name="age"
          rules={{ min: 18, required: 'Age is required' }}
          defaultValue=""
        />
        <FormErrorMessage>
          {errors.age?.type === 'required'
            ? errors.age?.message
            : errors.age?.type === 'min' ?? 'Under age'}
        </FormErrorMessage>
      </FormControl>
      <Button onPress={handleSubmit(onSubmit)} colorScheme="pink">
        Submit
      </Button>
    </VStack>
  );
}
```

## Radio and Checkbox

```jsx
import {
  VStack,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  RadioGroup,
  Radio,
  CheckboxGroup,
  Checkbox,
  Text,
  Icon,
} from 'native-base';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

interface IFormInput {
  hobbies: string;
  gender: number;
}

export default function () {
  const { control, handleSubmit, errors } = useForm<IFormInput>();
  const onSubmit = (data: IFormInput) => {
    console.log('submiting with ', data);
  };
  return (
    <VStack width="80%" space={4}>
      <FormControl isRequired isInvalid={'hobbies' in errors}>
        <FormLabel>Hobbies</FormLabel>
        <Controller
          control={control}
          render={({ onChange }) => (
            <CheckboxGroup
              onChange={(values) => {
                onChange(values);
              }}
              flexDirection="row"
            >
              <Checkbox
                value="dart"
                colorScheme="orange"
                icon={<Icon name="bullseye" type="MaterialCommunityIcons" />}
              >
                <Text mx={2}>Darts</Text>
              </Checkbox>
              <Checkbox
                value="movie"
                colorScheme="dark"
                icon={<Icon name="bat" type="MaterialCommunityIcons" />}
              >
                <Text mx={2}>Movie</Text>
              </Checkbox>
              <Checkbox
                colorScheme="red"
                value="camping"
                icon={<Icon name="campfire" type="MaterialCommunityIcons" />}
              >
                <Text mx={2}>Camping</Text>
              </Checkbox>
              <Checkbox
                value="chess"
                colorScheme="blue"
                icon={
                  <Icon name="chess-knight" type="MaterialCommunityIcons" />
                }
              >
                <Text mx={2}>Chess</Text>
              </Checkbox>
            </CheckboxGroup>
          )}
          rules={{ required: 'Atleast 1 hobbie needed' }}
          name="hobbies"
          defaultValue=""
        />
        <FormErrorMessage>{errors.hobbies?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={'gender' in errors}>
        <FormLabel>Gender</FormLabel>
        <Controller
          control={control}
          render={({ onChange }) => (
            <RadioGroup
              name="gender"
              flexDirection="row"
              onChange={(val) => onChange(val)}
            >
              <Radio value="male" colorScheme="blue">
                <Text mx={2}>Male</Text>
              </Radio>
              <Radio value="female" colorScheme="pink">
                <Text mx={2}>Female</Text>
              </Radio>
            </RadioGroup>
          )}
          name="gender"
          rules={{ required: 'Gender is required' }}
        />
        <FormErrorMessage>{errors.gender?.message}</FormErrorMessage>
      </FormControl>
      <Button onPress={handleSubmit(onSubmit)} colorScheme="pink">
        Submit
      </Button>
    </VStack>
  );
}
```

## Select

```jsx
import {
  VStack,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Select,
  Icon,
} from 'native-base';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

interface IFormInput {
  language: number;
}

export default function () {
  const { control, handleSubmit, errors } = useForm<IFormInput>();
  const onSubmit = (data: IFormInput) => {
    console.log('submiting with ', data);
  };
  return (
    <VStack width="80%" space={4}>
      <FormControl isRequired isInvalid={'language' in errors}>
        <FormLabel>Fav language:</FormLabel>
        <Controller
          control={control}
          render={({ onChange, value }) => (
            <Select
              placeholder="Pick language"
              selectedValue={value}
              width={150}
              onValueChange={(itemValue: string) => {
                onChange(itemValue);
              }}
              selectedItemBg={'teal.400'}
              dropdownOpenIcon={
                <Icon name="arrow-drop-up" type="MaterialIcons" size={6} />
              }
              dropdownCloseIcon={
                <Icon name="arrow-drop-down" type="MaterialIcons" size={6} />
              }
            >
              <Select.Item label="JavaScript" value="js" />
              <Select.Item label="TypeScript" value="ts" />
              <Select.Item label="Java" value="java" />
            </Select>
          )}
          name="language"
          rules={{ required: 'Field is required' }}
          defaultValue="js"
        />
        <FormErrorMessage>{errors.language?.message}</FormErrorMessage>
      </FormControl>
      <Button onPress={handleSubmit(onSubmit)} colorScheme="pink">
        Submit
      </Button>
    </VStack>
  );
}
```

## Slider

```jsx
import {
  VStack,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from 'native-base';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

interface IFormInput {
  like: number;
}

export default function () {
  const { control, handleSubmit, errors } = useForm<IFormInput>();
  const onSubmit = (data: IFormInput) => {
    console.log('submiting with ', data);
  };
  return (
    <VStack width="80%" space={4}>
      <FormControl isRequired isInvalid={'like' in errors}>
        <FormLabel>Amount you like NativeBase</FormLabel>
        <Controller
          control={control}
          render={({ onChange, value }) => (
            <Slider onChange={(val) => onChange(val)} defaultValue={value}>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          )}
          name="like"
          rules={{ required: 'Field is required', minLength: 3 }}
          defaultValue={100}
        />
        <FormErrorMessage>{errors.like?.message}</FormErrorMessage>
      </FormControl>
      <Button onPress={handleSubmit(onSubmit)} colorScheme="pink">
        Submit
      </Button>
    </VStack>
  );
}
```

## Textarea

```jsx
import {
  VStack,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  TextArea,
} from 'native-base';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

interface IFormInput {
  thought: string;
}

export default function () {
  const { control, handleSubmit, errors } = useForm<IFormInput>();
  const onSubmit = (data: IFormInput) => {
    console.log('submiting with ', data);
  };
  return (
    <VStack width="80%" space={4}>
      <FormControl isRequired isInvalid={'thought' in errors}>
        <FormLabel>What do you think?</FormLabel>
        <Controller
          control={control}
          render={({ onChange, value }) => (
            <TextArea
              placeholder="TextArea"
              onChangeText={(val) => onChange(val)}
              defaultValue={value}
            />
          )}
          name="thought"
          rules={{ required: 'Field is required', minLength: 3 }}
          defaultValue="I love Nativebase."
        />
        <FormErrorMessage>{errors.thought?.message}</FormErrorMessage>
      </FormControl>
      <Button onPress={handleSubmit(onSubmit)} colorScheme="pink">
        Submit
      </Button>
    </VStack>
  );
}
```

## Switch

```jsx
import {
  VStack,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Switch,
} from 'native-base';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

interface IFormInput {
  rememberMe: boolean;
}

export default function () {
  const { control, handleSubmit, errors } = useForm<IFormInput>();
  const onSubmit = (data: IFormInput) => {
    console.log('submiting with ', data);
  };
  return (
    <VStack width="80%" space={4}>
      <FormControl isInvalid={'rememberMe' in errors}>
        <FormLabel>Remenber me:</FormLabel>
        <Controller
          control={control}
          render={({ onChange, value }) => (
            <Switch
              onToggle={(val: boolean) => onChange(val)}
              isChecked={value}
            />
          )}
          name="rememberMe"
          defaultValue={true}
        />
        <FormErrorMessage>{errors.rememberMe?.message}</FormErrorMessage>
      </FormControl>
      <Button onPress={handleSubmit(onSubmit)} colorScheme="pink">
        Submit
      </Button>
    </VStack>
  );
}
```

## NumberInput

```jsx
import {
  VStack,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from 'native-base';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

interface IFormInput {
  version: boolean;
}

export default function () {
  const { control, handleSubmit, errors } = useForm<IFormInput>();
  const onSubmit = (data: IFormInput) => {
    console.log('submiting with ', data);
  };
  return (
    <VStack width="80%" space={4}>
      <FormControl isRequired isInvalid={'version' in errors}>
        <FormLabel>Current Native Base Version:</FormLabel>
        <Controller
          control={control}
          render={({ onChange, value }) => (
            <NumberInput
              onChange={(val: any) => onChange(val)}
              defaultValue={value}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          )}
          name="version"
          rules={{ required: 'Field is required' }}
          defaultValue={3}
        />
        <FormErrorMessage>{errors.version?.message}</FormErrorMessage>
      </FormControl>
      <Button onPress={handleSubmit(onSubmit)} colorScheme="pink">
        Submit
      </Button>
    </VStack>
  );
}
```

## PinInput

```jsx
import {
  VStack,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  PinInput,
  PinInputField,
} from 'native-base';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

interface IFormInput {
  otp: string;
}

export default function () {
  const { control, handleSubmit, errors } = useForm<IFormInput>();
  const onSubmit = (data: IFormInput) => {
    console.log('submiting with ', data);
  };
  return (
    <VStack width="80%" space={4}>
      <FormControl isRequired isInvalid={'otp' in errors}>
        <FormLabel>OTP:</FormLabel>
        <Controller
          control={control}
          render={({ onChange, value }) => (
            <PinInput onChange={(val: any) => onChange(val)} value={value}>
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          )}
          name="otp"
          rules={{ required: 'Field is required', minLength: 4, maxLength: 4 }}
        />
        <FormErrorMessage>{errors.otp?.message}</FormErrorMessage>
      </FormControl>
      <Button onPress={handleSubmit(onSubmit)} colorScheme="pink">
        Submit
      </Button>
    </VStack>
  );
}
```
