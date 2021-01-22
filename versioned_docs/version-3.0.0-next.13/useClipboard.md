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
import { useClipboard } from "native-base";
```

## Usage

```jsx
import React from "react";
import { Button, HStack, VStack, Text, Input, useClipboard } from "native-base";

export default function () {
  const [copyText, setCopyText] = React.useState("Copy Me");
  const [pasteText, setPasteText] = React.useState("");
  const { value, onCopy, hasCopied } = useClipboard();
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
        <Text>{hasCopied ? "Copied" : "Press here"}</Text>
        <Input
          w="60%"
          placeholder="Paste To"
          onChangeText={(v) => setPasteText(v)}
          value={pasteText}
        />
        <Button onPress={() => setPasteText(value)}>Paste</Button>
      </HStack>
    </VStack>
  );
}
```
