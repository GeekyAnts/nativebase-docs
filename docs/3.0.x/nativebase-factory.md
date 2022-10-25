---
id: nativebase-factory
title: NativeBase Factory
---

NativeBase factory is a function that converts non-nativebase components to nativebase enabled components so you can pass style props to them.

```jsx
import { Factory } from 'native-base';
```

## Usage

```jsx isLive=true
import React from 'react';
import { Factory, NativeBaseProvider, Center } from 'native-base';
import { View } from 'react-native';

function FactoryViewExample() {
  const FactoryView = Factory(View);
  return <FactoryView bg="emerald.400" borderRadius={4} size={16} />;
}

// Example template which wraps component with NativeBaseProvider
export function Example() {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <FactoryViewExample />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Defining component theme

```jsx isLive=true
import React from 'react';
import { Factory, NativeBaseProvider, Center } from 'native-base';
import { View } from 'react-native';

function FactoryViewExample() {
  const FactoryView = Factory(View, {
    baseStyle: {
      bg: 'cyan.300',
      borderRadius: 'md',
    },
  });
  return <FactoryView size={16} />;
}

// Example template which wraps component with NativeBaseProvider
export function Example() {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <FactoryViewExample />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Using mode in component theme

```jsx isLive=true
import React from 'react';
import { Factory, themeTools, NativeBaseProvider, Center } from 'native-base';
import { View } from 'react-native';

function FactoryViewModeExample() {
  const FactoryView = Factory(View, {
    baseStyle: (props) => {
      return {
        bg: themeTools.mode('rose.500', 'cyan.300')(props),
        borderRadius: 'md',
      };
    },
  });
  return <FactoryView size={16} />;
}

// Example template which wraps component with NativeBaseProvider
export function Example() {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <FactoryViewModeExample />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Using ref

```jsx isLive=true
import React from 'react';
import {
  Factory,
  Button,
  Stack,
  NativeBaseProvider,
  Center,
} from 'native-base';
import { TextInput } from 'react-native';

function FactoryViewRefExample() {
  const NBInput = Factory(TextInput);
  const inputRef = React.useRef(null);
  return (
    <Stack space={4}>
      <NBInput
        placeholder="Click on the button"
        ref={inputRef}
        p={2}
        border={1}
        borderColor="cyan.400"
        borderRadius="md"
      />
      <Button
        colorScheme="emerald"
        onPress={() => {
          inputRef.current.focus();
        }}
      >
        Set Focus
      </Button>
    </Stack>
  );
}

// Example template which wraps component with NativeBaseProvider
export function Example() {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <FactoryViewRefExample />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Params

| Name           | Type            | Description                                                                   | Default |
| -------------- | --------------- | ----------------------------------------------------------------------------- | ------- |
| component      | React component | Original component to be passed on which NativeBase props have to be applied. | -       |
| componentTheme | Object          | This object can include `baseStyle`, `sizes`, `variants`, `defaultProps`      | -       |
