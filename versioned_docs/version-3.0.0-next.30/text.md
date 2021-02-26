---
id: text
title: Text
---

`Text` is used to render text and paragraphs within an interface.

## Implements

- [`Text`](https://reactnative.dev/docs/text) from [React Native](https://reactnative.dev)

## Import

```jsx
import { Text } from 'native-base';
```

## Examples

### ChangingFontSize

```SnackPlayer name=Text%20ChangingFontSize
import React from 'react';
import { Text, VStack, NativeBaseProvider, Center } from 'native-base';

function TextComponent () {
  return (
    <VStack space={2} alignItems="center">
      <Text fontSize="xs">Extra Small</Text>
      <Text fontSize="sm">Small</Text>
      <Text fontSize="md">Medium</Text>
      <Text fontSize="lg">Large</Text>
      <Text fontSize="xl">Extra Large</Text>
      <Text fontSize="2xl">2 Extra Large</Text>
      <Text fontSize="3xl">3 Extra Large</Text>
      <Text fontSize="4xl">4 Extra Large</Text>
      <Text fontSize="5xl">5 Extra Large</Text>
      <Text fontSize="6xl">6 Extra Large</Text>
    </VStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <TextComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Truncated

```SnackPlayer name=Text%20Truncated
import React from 'react';
import { Text, VStack, Heading, NativeBaseProvider, Center } from 'native-base';

function TextComponent () {
  return (
    <VStack space={2} alignItems="center">
      <Heading mt={3}>Truncated </Heading>
      <Text isTruncated>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups.
      </Text>
      <Heading mt={3}>With Two lines </Heading>
      <Text noOfLines={2}>
        "The quick brown fox jumps over the lazy dog" is an English-language
        pangram—a sentence that contains all of the letters of the English
        alphabet. Owing to its existence, Chakra was created.
      </Text>
    </VStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <TextComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Nested

```SnackPlayer name=Text%20Nested
import React from 'react';
import { Text, VStack, NativeBaseProvider, Center } from 'native-base';

function TextComponent () {
  return (
    <VStack space={2} alignItems="center">
      <Text>
        This is the <Text bold>nested</Text> example.
      </Text>
    </VStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <TextComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Overridden

```SnackPlayer name=Text%20Overridden
import React from 'react';
import { Text, VStack, NativeBaseProvider, Center } from 'native-base';

function TextComponent () {
  return (
    <VStack space={2} alignItems="center">
      <Text fontSize={20}>Custom font-size value for this text</Text>
      <Text bold>Bold</Text>
      <Text italic>Italic</Text>
      <Text underline>Underline</Text>
      <Text highlight>Highlighted</Text>
      <Text>
        H<Text sub>2</Text>O
      </Text>
      <Text underline>Underline</Text>
      <Text strikeThrough>StrikeThrough</Text>
      <Text bold italic underline>
        Bold, Italic & Underline
      </Text>
    </VStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <TextComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Props

| Name          | Type                                        | Description                                                                                        | Default |
| ------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------- | ------- |
| fontSize      | `2xl`, `lg`, `md`, `sm`, `xl`, `xs`, number | The size of font.                                                                                  | -       |
| noOfLines     | number                                      | Used to truncate text at a specific number of lines                                                | -       |
| isTruncated   | boolean                                     | If true, it'll render an ellipsis when the text exceeds the width of the viewport or maxWidth set. | -       |
| bold          | boolean                                     | Make the text bold.                                                                                | -       |
| italic        | boolean                                     | Make the text italic.                                                                              | -       |
| underline     | boolean                                     | Underline the text .                                                                               | -       |
| strikeThrough | boolean                                     | a horizontal line through its center.                                                              | -       |
| sub           | boolean                                     | text will have smaller font size.                                                                  | -       |
| highlight     | boolean                                     | Highlight the text with a yellow background.                                                       | -       |
