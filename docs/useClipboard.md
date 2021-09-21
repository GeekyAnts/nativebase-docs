---
id: use-clipboard
title: useClipboard
---

`useClipboard` is a custom hook that handles copying content to clipboard.

## Return Value

The `useClipboard` hook returns an object with the following fields:

- `value` : ( **string** ) The copied value.
- `onCopy` : ( **Function** ) Callback function to copy content.
- `hasCopied` : ( **boolean** ) If **true**, the content has been copied.

## Import

```jsx
import { useClipboard } from 'native-base';
```

## Usage

```SnackPlayer name=useClipboard%20Usage
import React from "react";
import {
  Button,
  HStack,
  VStack,
  Text,
  Input,
  useClipboard,
  NativeBaseProvider,
  Center
} from "native-base";

function UseClipboardExample() {
 const [copyText, setCopyText] = React.useState('Hello');
  const [pasteText, setPasteText] = React.useState('');
  const { value, onCopy } = useClipboard();
  return (
    <VStack space={2}>
      <HStack space={3}>
        <Input
          w="60%"
          placeholder="Copy From"
          onChangeText={(v) => setCopyText(v)}
          value={copyText}
        />
        <Button onPress={() => onCopy(copyText)}>Copy</Button>
      </HStack>
      <HStack space={3}>
        <Input
          w="60%"
          placeholder="Paste Here"
          onChangeText={(v) => setPasteText(v)}
          value={pasteText}
        />
        <Button onPress={() => setPasteText(value)}>Paste</Button>
      </HStack>
    </VStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex="1">
        <UseClipboardExample />
      </Center>
    </NativeBaseProvider>
  );
}
```
