---
id: theme
title: How to use NativeBase theme
---

There will be time when you want to access the theme object itself. Well np worries NativeBase provides with the `useTheme` hook to solve that problem.

But why we need the theme object? Maybe show you the color palettes 😁

## useColorModeValue

```SnackPlayer name=Box%20Example
import React from 'react';
import { NativeBaseProvider, useColorModeValue, Button, useTheme, SimpleGrid } from 'native-base';

function ColorPalete() {
  const { colors } = useTheme();
  const template = () => {
    let temp = [];
    for (const colorKey in colors) {
      // skipping singleton colors
      if (colorKey === 'black' || colorKey === 'white') {
      } else
        temp.push(
          <Button
            size='lg'
            colorScheme={colorKey}
            variant={useColorModeValue('solid', 'outline')}
          >
            {colorKey[0]}
          </Button>
        );
    }
    return temp.reverse();
  };

  return (
    <SimpleGrid columns={5} spacing={4}>
      {template()}
    </SimpleGrid>
  );
}
  export default function () {
    return (
      <NativeBaseProvider>
        <ColorPalete />
      </NativeBaseProvider>
    );
  }
```

Don't want the entire object, instead something vary specific. Don't we got you covered with our `useToken` hook. Let’s see an example.

```SnackPlayer name=useToken
import React from 'react';
import { useToken, Box, SimpleGrid,NativeBaseProvider } from 'native-base';

function Tokens () {
  const colors = useToken('colors', 'amber');
  const template = () => {
    let temp = [];
    for (const colorKey in colors) {
      temp.push(<Box p={5} bg={`amber.${colorKey}`} />);
    }
    return temp;
  };

  return <SimpleGrid columns={10}>{template()}</SimpleGrid>;
}
export default function () {
    return (
      <NativeBaseProvider>
        <ColorPalete />
      </NativeBaseProvider>
    );
  }
```
