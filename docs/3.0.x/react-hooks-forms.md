---
id: react-hook-forms
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
  NativeBaseProvider,
} from 'native-base';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

function FormHookExample() {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log('submiting with ', data);
  };
  return (
    <VStack width="80%" space={4}>
      <FormControl isRequired isInvalid={'firstName' in errors}>
        <FormControl.Label>First Name</FormControl.Label>
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
        <FormControl.ErrorMessage>
          {errors.firstName?.message}
        </FormControl.ErrorMessage>
      </FormControl>
      <FormControl isInvalid={'lastName' in errors}>
        <FormControl.Label>Last Name</FormControl.Label>
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
        <FormControl.ErrorMessage>
          {errors.lastName?.message}
        </FormControl.ErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={'age' in errors}>
        <FormControl.Label>Age</FormControl.Label>
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
        <FormControl.ErrorMessage>
          {errors.age?.type === 'required'
            ? errors.age?.message
            : errors.age?.type === 'min' ?? 'Under age'}
        </FormControl.ErrorMessage>
      </FormControl>
      <Button onPress={handleSubmit(onSubmit)} colorScheme="pink">
        Submit
      </Button>
    </VStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <FormHookExample />
    </NativeBaseProvider>
  );
}
```

## Radio and Checkbox

```jsx
import {
  VStack,
  Button,
  FormControl,
  Radio,
  Checkbox,
  Text,
  Icon,
  NativeBaseProvider,
} from 'native-base';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

function FormHookCheckboxExample() {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log('submiting with ', data);
  };
  return (
    <VStack width="80%" space={4}>
      <FormControl isRequired isInvalid={'hobbies' in errors}>
        <FormControl.Label>Hobbies</FormControl.Label>
        <Controller
          control={control}
          render={({ onChange }) => (
            <Checkbox.Group
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
            </Checkbox.Group>
          )}
          rules={{ required: 'Atleast 1 hobbie needed' }}
          name="hobbies"
          defaultValue=""
        />
        <FormControl.ErrorMessage>
          {errors.hobbies?.message}
        </FormControl.ErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={'gender' in errors}>
        <FormControl.Label>Gender</FormControl.Label>
        <Controller
          control={control}
          render={({ onChange }) => (
            <Radio.Group
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
            </Radio.Group>
          )}
          name="gender"
          rules={{ required: 'Gender is required' }}
        />
        <FormControl.ErrorMessage>
          {errors.gender?.message}
        </FormControl.ErrorMessage>
      </FormControl>
      <Button onPress={handleSubmit(onSubmit)} colorScheme="pink">
        Submit
      </Button>
    </VStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <FormHookCheckboxExample />
    </NativeBaseProvider>
  );
}
```

## Select

```jsx
import {
  VStack,
  Button,
  FormControl,
  Select,
  Icon,
  NativeBaseProvider,
} from 'native-base';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

function FormHookSelectExample() {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log('submiting with ', data);
  };
  return (
    <VStack width="80%" space={4}>
      <FormControl isRequired isInvalid={'language' in errors}>
        <FormControl.Label>Fav language:</FormControl.Label>
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
        <FormControl.ErrorMessage>
          {errors.language?.message}
        </FormControl.ErrorMessage>
      </FormControl>
      <Button onPress={handleSubmit(onSubmit)} colorScheme="pink">
        Submit
      </Button>
    </VStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <FormHookSelectExample />
    </NativeBaseProvider>
  );
}
```

## Slider

```jsx
import {
  VStack,
  Button,
  FormControl,
  Slider,
  NativeBaseProvider,
} from 'native-base';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

function FormHookSliderExample() {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log('submiting with ', data);
  };
  return (
    <VStack width="80%" space={4}>
      <FormControl isRequired isInvalid={'like' in errors}>
        <FormControl.Label>Amount you like NativeBase</FormControl.Label>
        <Controller
          control={control}
          render={({ onChange, value }) => (
            <Slider onChange={(val) => onChange(val)} defaultValue={value}>
              <Slider.Track>
                <Slider.FilledTrack />
              </Slider.Track>
              <Slider.Thumb />
            </Slider>
          )}
          name="like"
          rules={{ required: 'Field is required', minLength: 3 }}
          defaultValue={100}
        />
        <FormControl.ErrorMessage>
          {errors.like?.message}
        </FormControl.ErrorMessage>
      </FormControl>
      <Button onPress={handleSubmit(onSubmit)} colorScheme="pink">
        Submit
      </Button>
    </VStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <FormHookSliderExample />
    </NativeBaseProvider>
  );
}
```

## Textarea

```jsx
import {
  VStack,
  Button,
  FormControl,
  TextArea,
  NativeBaseProvider,
} from 'native-base';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

function FormHookTextareaExample() {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log('submiting with ', data);
  };
  return (
    <VStack width="80%" space={4}>
      <FormControl isRequired isInvalid={'thought' in errors}>
        <FormControl.Label>What do you think?</FormControl.Label>
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
          defaultValue="I love NativeBase."
        />
        <FormControl.ErrorMessage>
          {errors.thought?.message}
        </FormControl.ErrorMessage>
      </FormControl>
      <Button onPress={handleSubmit(onSubmit)} colorScheme="pink">
        Submit
      </Button>
    </VStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <FormHookTextareaExample />
    </NativeBaseProvider>
  );
}
```

## Switch

```jsx
import {
  VStack,
  Button,
  FormControl,
  Switch,
  NativeBaseProvider,
} from 'native-base';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

function FormHookSwitchExample() {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log('submiting with ', data);
  };
  return (
    <VStack width="80%" space={4}>
      <FormControl isInvalid={'rememberMe' in errors}>
        <FormControl.Label>Remenber me:</FormControl.Label>
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
        <FormControl.ErrorMessage>
          {errors.rememberMe?.message}
        </FormControl.ErrorMessage>
      </FormControl>
      <Button onPress={handleSubmit(onSubmit)} colorScheme="pink">
        Submit
      </Button>
    </VStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <FormHookSwitchExample />
    </NativeBaseProvider>
  );
}
```

<!--
## NumberInput

```jsx
import {
  VStack,
  Button,
  FormControl,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NativeBaseProvider,
} from 'native-base';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

function FormHookNumberInputExample() {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log('submiting with ', data);
  };
  return (
    <VStack width='80%' space={4}>
      <FormControl isRequired isInvalid={'version' in errors}>
        <FormControl.Label>Current Native Base Version:</FormControl.Label>
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
          name='version'
          rules={{ required: 'Field is required' }}
          defaultValue={3}
        />
        <FormControl.ErrorMessage>
          {errors.version?.message}
        </FormControl.ErrorMessage>
      </FormControl>
      <Button onPress={handleSubmit(onSubmit)} colorScheme='pink'>
        Submit
      </Button>
    </VStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <FormHookNumberInputExample />
    </NativeBaseProvider>
  );
}
``` -->
<!--
## PinInput

```jsx
import {
  VStack,
  Button,
  FormControl,
  PinInput,
  PinInputField,
  NativeBaseProvider,
} from 'native-base';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

function FormHookPinInputExample() {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log('submiting with ', data);
  };
  return (
    <VStack width='80%' space={4}>
      <FormControl isRequired isInvalid={'otp' in errors}>
        <FormControl.Label>OTP:</FormControl.Label>
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
          name='otp'
          rules={{ required: 'Field is required', minLength: 4, maxLength: 4 }}
        />
        <FormControl.ErrorMessage>
          {errors.otp?.message}
        </FormControl.ErrorMessage>
      </FormControl>
      <Button onPress={handleSubmit(onSubmit)} colorScheme='pink'>
        Submit
      </Button>
    </VStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <FormHookPinInputExample />
    </NativeBaseProvider>
  );
}
``` -->
