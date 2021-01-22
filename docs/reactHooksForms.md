---
id: react-hook-forms
title: React Hook Forms
---

A Performant, flexible and extensible forms with easy-to-use validation. And below are some examples showing its integration with NativeBase.

## Usage

```SnackPlayer name=ReactHookForms%20Usage
import {
  VStack,
  Input,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  NativeBaseProvider,
} from "native-base";
import React from "react";
import { useForm, Controller } from "react-hook-form";

function FormHookExample() {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log("submiting with ", data);
  };
  return (
    <VStack width="80%" space={4}>
      <FormControl isRequired isInvalid={"firstName" in errors}>
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
          rules={{ required: "Field is required", minLength: 3 }}
          defaultValue=""
        />
        <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={"lastName" in errors}>
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
      <FormControl isRequired isInvalid={"age" in errors}>
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
          rules={{ min: 18, required: "Age is required" }}
          defaultValue=""
        />
        <FormErrorMessage>
          {errors.age?.type === "required"
            ? errors.age?.message
            : errors.age?.type === "min" ?? "Under age"}
        </FormErrorMessage>
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

```SnackPlayer name=ReactHookForms%20Radio
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
  NativeBaseProvider,
} from "native-base";
import React from "react";
import { useForm, Controller } from "react-hook-form";

function FormHookCheckboxExample() {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log("submiting with ", data);
  };
  return (
    <VStack width="80%" space={4}>
      <FormControl isRequired isInvalid={"hobbies" in errors}>
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
          rules={{ required: "Atleast 1 hobbie needed" }}
          name="hobbies"
          defaultValue=""
        />
        <FormErrorMessage>{errors.hobbies?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={"gender" in errors}>
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
          rules={{ required: "Gender is required" }}
        />
        <FormErrorMessage>{errors.gender?.message}</FormErrorMessage>
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

```SnackPlayer name=ReactHookForms%20Select
import {
  VStack,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Select,
  Icon,
  NativeBaseProvider,
} from "native-base";
import React from "react";
import { useForm, Controller } from "react-hook-form";

function FormHookSelectExample() {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log("submiting with ", data);
  };
  return (
    <VStack width="80%" space={4}>
      <FormControl isRequired isInvalid={"language" in errors}>
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
              selectedItemBg={"teal.400"}
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
          rules={{ required: "Field is required" }}
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
export default function () {
  return (
    <NativeBaseProvider>
      <FormHookSelectExample />
    </NativeBaseProvider>
  );
}
```

## Slider

```SnackPlayer name=ReactHookForms%20Slider
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
  NativeBaseProvider,
} from "native-base";
import React from "react";
import { useForm, Controller } from "react-hook-form";

function FormHookSliderExample() {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log("submiting with ", data);
  };
  return (
    <VStack width="80%" space={4}>
      <FormControl isRequired isInvalid={"like" in errors}>
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
          rules={{ required: "Field is required", minLength: 3 }}
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
export default function () {
  return (
    <NativeBaseProvider>
      <FormHookSliderExample />
    </NativeBaseProvider>
  );
}
```

## Textarea

```SnackPlayer name=ReactHookForms%20TextArea
import {
  VStack,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  TextArea,
  NativeBaseProvider,
} from "native-base";
import React from "react";
import { useForm, Controller } from "react-hook-form";

function FormHookTextareaExample() {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log("submiting with ", data);
  };
  return (
    <VStack width="80%" space={4}>
      <FormControl isRequired isInvalid={"thought" in errors}>
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
          rules={{ required: "Field is required", minLength: 3 }}
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
export default function () {
  return (
    <NativeBaseProvider>
      <FormHookTextareaExample />
    </NativeBaseProvider>
  );
}
```

## Switch

```SnackPlayer name=ReactHookForms%20Switch
import {
  VStack,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Switch,
  NativeBaseProvider,
} from "native-base";
import React from "react";
import { useForm, Controller } from "react-hook-form";

function FormHookSwitchExample() {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log("submiting with ", data);
  };
  return (
    <VStack width="80%" space={4}>
      <FormControl isInvalid={"rememberMe" in errors}>
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
export default function () {
  return (
    <NativeBaseProvider>
      <FormHookSwitchExample />
    </NativeBaseProvider>
  );
}
```

## NumberInput

```SnackPlayer name=ReactHookForms%20NumberInput
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
  NativeBaseProvider,
} from "native-base";
import React from "react";
import { useForm, Controller } from "react-hook-form";

function FormHookNumberInputExample() {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log("submiting with ", data);
  };
  return (
    <VStack width="80%" space={4}>
      <FormControl isRequired isInvalid={"version" in errors}>
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
          rules={{ required: "Field is required" }}
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
export default function () {
  return (
    <NativeBaseProvider>
      <FormHookNumberInputExample />
    </NativeBaseProvider>
  );
}
```

## PinInput

```SnackPlayer name=ReactHookForms%20PinInput
import {
  VStack,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  PinInput,
  PinInputField,
  NativeBaseProvider,
} from "native-base";
import React from "react";
import { useForm, Controller } from "react-hook-form";

function FormHookPinInputExample() {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log("submiting with ", data);
  };
  return (
    <VStack width="80%" space={4}>
      <FormControl isRequired isInvalid={"otp" in errors}>
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
          rules={{ required: "Field is required", minLength: 4, maxLength: 4 }}
        />
        <FormErrorMessage>{errors.otp?.message}</FormErrorMessage>
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
      <FormHookPinInputExample />
    </NativeBaseProvider>
  );
}
```
