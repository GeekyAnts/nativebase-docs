---
id: typeAhead
title: TypeAhead(Autocomplete)
---

A Typeahead component and hook that helps you in implementing Autocomplete Inputs.

## Import

```jsx
import { useTypeahead, Typeahead } from 'native-base';
```

## Typeahead Component Example

```SnackPlayer name=Typeahead%20Typeahead Component Example
import React from "react";
import {
  Typeahead,
  Box,
  Text,
  Icon,
  Heading,
  useColorMode,
  NativeBaseProvider,
} from "native-base";

let countries = [
  "Afghanistan",
  "Australia",
  "India",
  "USA",
  "Germany",
  "France",
  "Iceland",
  "Russia",
  "Japan",
  "China",
  "Denmark",
  "Norway",
];

export function TypeaheadUsingComponent() {
  const { colorMode } = useColorMode();
  return (
    <Box>
      <Heading>Typeahead</Heading>
      <Typeahead
        mt={4}
        size="2xl"
        numberOfItems={6}
        data={countries}
        renderItem={(item: any) => {
          return (
            <Box bg={colorMode === "light" ? "gray.100" : "gray.600"} p={4}>
              <Text>{item}</Text>
            </Box>
          );
        }}
        toggleIcon={({ isOpen }: any) => {
          return isOpen ? (
            <Icon name="arrow-drop-up" type="MaterialIcons" size={12} />
          ) : (
            <Icon name="arrow-drop-down" type="MaterialIcons" size={12} />
          );
        }}
      />
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <TypeaheadUsingComponent />
    </NativeBaseProvider>
  );
}
```

## useTypeahead Hook Example

```SnackPlayer name=Typeahead%20TypeaheadHooks
import React from "react";
import {
  useTypeahead,
  Box,
  Input,
  Button,
  Text,
  Icon,
  IconButton,
  NativeBaseProvider,
} from "native-base";
import { ScrollView } from "react-native";

let countries = [
  "Afghanistan",
  "Australia",
  "India",
  "USA",
  "Germany",
  "France",
  "Iceland",
  "Russia",
  "Japan",
  "China",
  "Denmark",
  "Norway",
];

export function TypeaheadUsingHook() {
  const [inputItems, setInputItems] = React.useState(countries);

  const {
    isOpen,
    getInputProps,
    getMenuItemProps,
    getMenuProps,
    getToggleButtonProps,
  } = useTypeahead({
    items: inputItems,
    itemToString: (item) => item.toString(),
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        countries.filter((item) =>
          item.toLowerCase().startsWith(inputValue.toLowerCase())
        )
      );
    },
  });

  return (
    <Box width="100%" flexDirection="row">
      <Box flex={1}>
        <Input size="2xl" {...getInputProps()} />
      </Box>
      <Box>
        <IconButton
          bg="gray.300"
          {...getToggleButtonProps()}
          icon={
            isOpen ? (
              <Icon name="arrow-drop-up" type="MaterialIcons" size={12} />
            ) : (
              <Icon name="arrow-drop-down" type="MaterialIcons" size={12} />
            )
          }
        />
      </Box>
      <Box
        position="absolute"
        top={55}
        width="100%"
        height="200"
        {...getMenuProps()}
      >
        <ScrollView>
          {isOpen &&
            inputItems.map((item, index) => (
              <Button
                key={`${item}${index}`}
                {...getMenuItemProps(item, index)}
              >
                <Text>{item}</Text>
              </Button>
            ))}
        </ScrollView>
      </Box>
    </Box>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <TypeaheadUsingHook />
    </NativeBaseProvider>
  );
}
```

## Props

### Typeahead Component

| Name                 | Type           | Description                                                                                                                                                          | Default |
| -------------------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| data                 | Array          | Array of items that you need to search for autocomplete.                                                                                                             | -       |
| renderItem           | function       | expects a callback function that returns the JSX Element that you want to be rendered in dropdown. It requires a variable which is an Item from data array provided. | -       |
| toggleIcon           | function       | Function to control the design of Toggle button. It exposes isOpen which is a boolean that tells if the dropdown is open or not.                                     | -       |
| dropdownHeight       | number, string | height of the Typeahead dropdown                                                                                                                                     | 200px   |
| numberOfItems        | number         | Total number of items to be shown at a time in the dropdown.                                                                                                         | -       |
| inputValue           | string         | To set Typeahead's value. Mainly used in controlled input situations.                                                                                                | -       |
| onSelectedItemChange | function       | Callback function that gets called when selected Item changes in Typeahead.                                                                                          | -       |

### useTypeahead Hook

| Name                 | Type     | Description                                              | Default |
| -------------------- | -------- | -------------------------------------------------------- | ------- |
| isOpen               | boolean  | tells if the dropdown is open or not.                    | -       |
| items                | Array    | Array of items that you need to search for autocomplete. | -       |
| itemToString         | function |                                                          | -       |
| selectedItem         | any      |                                                          | -       |
| onInputValueChange   | function |                                                          | -       |
| onSelectedItemChange | function |                                                          | -       |
