---
id: nativebase-factory
title: NativeBase Factory
---

NativeBase factory is a function that converts non-nativebase components to nativebase enabled components so you can pass style props to them.

```jsx
import { NBFactory } from 'native-base';
```

## Usage

```SnackPlayer name=NativeBase%20Factory%20Usage
import React from 'react';
import { NBFactory, NativeBaseProvider, Center } from 'native-base';
import { View } from 'react-native';

function NBFactoryViewExample () {
  const NBFactoryView = NBFactory(View);
  return (
      <NBFactoryView bg="teal.200" height={50} width={50} />
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <NBFactoryViewExample />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Defining component theme

```SnackPlayer name=NativeBase%20Factory%20Component%20Theme
import React from 'react';
import { NBFactory, NativeBaseProvider, Center } from 'native-base';
import { View } from 'react-native';

function NBFactoryViewExample () {
  const NBFactoryView = NBFactory(View, {
    baseStyle: {
      bg: 'cyan.300',
      borderRadius: 'md',
    },
  });
  return <NBFactoryView height={50} width={50} />;
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <NBFactoryViewExample />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Using mode in component theme

```SnackPlayer name=NativeBase%20Factory%20Component%20Theme
import React from 'react';
import { NBFactory, themeTools, NativeBaseProvider, Center } from 'native-base';
import { View } from 'react-native';

function NBFactoryViewModeExample () {
  const NBFactoryView = NBFactory(View, {
    baseStyle: (props) => {
      return {
        bg: themeTools.mode('rose.500', 'cyan.300')(props),
        borderRadius: 'md',
      };
    },
  });
  return <NBFactoryView height={50} width={50} />;
}

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <NBFactoryViewModeExample />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Using ref

```SnackPlayer name=NativeBase%20Factory%20Using%20Ref
import React from 'react';
import { NBFactory, Button, NativeBaseProvider,Center } from 'native-base';
import { TextInput } from 'react-native';

function NBFactoryViewRefExample () {
  const NBInput = NBFactory(TextInput);
  const inputRef = React.useRef(null);
  return (
    <>
      <NBInput ref={inputRef} height={10} border={1} borderColor="cyan.400" />
      <Button
        onPress={() => {
          inputRef?.current?.focus();
        }}
      >
        Set Focus
      </Button>
    </>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <NBFactoryViewRefExample />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Params:

•`component`: (React component). Original component to be passed on which nativebase props have to be applied.

• `componentTheme`: This object can include `baseStyle`, `sizes`, `variants`, `defaultProps`
