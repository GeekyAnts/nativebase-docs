---
id: select
title: Select
---

Select creates a dropdown list of items with the selected item in closed view. You can use native as well as styled one. The native one will have a different look and feel on each platform(Android, iOS and Web). The behaviour and look of styled variant will be same across all platforms.

## Implements

- `Picker` from [`@react-native-picker/picker`](https://github.com/react-native-picker/picker) for `native` variant.
- Composes [`Button`](button.md) and [`Popover`](popOver.md) for `styled` variant.

## Import

```jsx
import { Select } from 'native-base';
```

## Examples

### Basic

```SnackPlayer name=Basic
import React from 'react';
import { Icon, Select, NativeBaseProvider, Center } from 'native-base';

function SelectComponent() {
  let [language, setLanguage] = React.useState('');
  return (
    <Select
      selectedValue={language}
      minWidth={200}
      onValueChange={(itemValue: string) => setLanguage(itemValue)}
    >
      <Select.Item label="JavaScript" value="js" />
      <Select.Item label="TypeScript" value="ts" />
      <Select.Item label="C" value="c" />
      <Select.Item label="Python" value="py" />
      <Select.Item label="Java" value="java" />
    </Select>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <SelectComponent />
      </Center>
    </NativeBaseProvider>
  );
}

```

### Native

```SnackPlayer name=Native
import React from 'react';
import { Icon, Select, NativeBaseProvider, VStack, Text, Center } from 'native-base';

function SelectComponent() {
  let [language, setLanguage] = React.useState('js');
  return (
    <VStack alignItems="center" space={2}>
      <Select
        variant="native" //defaultValue
        selectedValue={language}
        minWidth={200}
        onValueChange={(itemValue: string) => setLanguage(itemValue)}
        androidIconColor="gray.500"
        androidPrompt="Language you love:"
      >
        <Select.Item label="JavaScript" value="js" />
        <Select.Item label="TypeScript" value="ts" />
        <Select.Item label="C" value="c" />
        <Select.Item label="Python" value="py" />
        <Select.Item label="Java" value="java" />
      </Select>
      <Text>{language}</Text>
    </VStack>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <SelectComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Styled

```SnackPlayer name=Styled
import React from 'react';
import { Icon, Select, NativeBaseProvider, VStack, Text, Center } from 'native-base';

function SelectComponent () {
	let [language, setLanguage] = React.useState('js');
  return (
    <VStack alignItems="center" space={2}>
      <Select
        variant="styled"
        placeholder="Pick language"
        _placeholder={{ color: 'teal.500' }}
        selectedValue={language}
        width={150}
        onValueChange={(itemValue: string) => setLanguage(itemValue)}
        selectedItemBg={'blue.500'}
        _selectedItem={{ color: 'white' }}
        // isDisabled
        dropdownOpenIcon={
          <Icon name="arrow-drop-up" type="MaterialIcons" size={6} />
        }
        dropdownCloseIcon={
          <Icon name="arrow-drop-down" type="MaterialIcons" size={6} />
        }
        _item={{ color: 'red.500' }}
      >
        <Select.Item label="JavaScript" value="js" />
        <Select.Item label="TypeScript" value="ts" />
        <Select.Item label="Java" value="java" />
        <Select.Item label="C" value="c" />
        <Select.Item label="Python" value="py" />
      </Select>
      <Text>{language}</Text>
    </VStack>
	);
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <SelectComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Props

### Select

| Name              | Type                         | Description                                                                                                                          | Default    |
| ----------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| variant           | `native`, `styled`           | The variant of the select style to use.                                                                                              | `native`   |
| placeholder       | string                       | The placeholder attribute specifies a short hint that describes the expected value of a selected field (only for styled variant).    | -          |
| \_placeholder     | [`TextProps`](text.md#props) | Text props to be applied to placeholder (only for styled variant).                                                                   | -          |
| selectedValue     | string                       | The default value which is selected.                                                                                                 | -          |
| onValueChange     | function                     | Callback for on change on the input value.                                                                                           | -          |
| selectedItemBg    | string                       | Background color for the selected item (only for styled variant).                                                                    | `blue.500` |
| \_selectedItem    | [`TextProps`](text.md#props) | Text prop for selected item (only for styled variant).                                                                               | -          |
| isDisabled        | boolean                      | If true, the button will be disabled (not supported on ios for native variant).                                                      | -          |
| dropdownIcon      | JSX.Element                  | If given, updates the dropdown Icon (only for styled variant).                                                                       | -          |
| dropdownOpenIcon  | JSX.Element                  | If given, updates the dropdown Icon when opened (only for styled variant).                                                           | -          |
| dropdownCloseIcon | JSX.Element                  | If given, updates the dropdown Icon when closed (only for styled variant).                                                           | -          |
| \_ios             | _StyleProps_                 | Props which you only want to pass to ios device.                                                                                     | -          |
| \_android         | _StyleProps_                 | Props which you only want to pass to android device.                                                                                 | -          |
| \_web             | _StyleProps_                 | Props which you only want to pass to web device.                                                                                     | -          |
| \_item            | [`TextProps`](text.md#props) | TextProps to be applied to the label (only for styled variant).                                                                      | -          |
| androidMode       | `dialog`, `dropdown`         | On Android, specifies how to display the selection items when the user taps on the picker (only for native variant).                 | `dialog`   |
| androidIconColor  | string                       | On Android, specifies color of dropdown triangle. Input value can any color from theme like `default.300` (only for native variant). | -          |
| androidPrompt     | string                       | On Android, prompt string for this picker, used on Android in dialog mode as the title of the dialog (only for native variant).      | -          |

**Select** can be styled using pseudo style props like `_isInvalid`, `_isDisabled` and `_hover`.

### Select Item

| Name       | Type                         | Description                                                                                    | Default |
| ---------- | ---------------------------- | ---------------------------------------------------------------------------------------------- | ------- |
| label      | string                       | The label which will be displayed.                                                             | -       |
| value      | string                       | The value to be used for the item. This is the value that will be returned on form submission. | -       |
| isDisabled | boolean                      | If true, the item will be disabled (only for `styled` variant).                                | -       |
| \_label    | [`TextProps`](text.md#props) | TextProps to be applied to label (only for `styled` variant).                                  | -       |
