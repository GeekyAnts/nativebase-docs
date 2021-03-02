---
id: theme
title: How to use NativeBase theme
---

There will be times when you want to access the theme object itself. Well no worries NativeBase provides [`useTheme`](/useTheme.md) hook to solve your problem.

## useTheme

```SnackPlayer name=useTheme%20Demo
import React from 'react';
import { ScrollView } from 'react-native';
import { NativeBaseProvider, useColorModeValue, Button, useTheme, SimpleGrid, Center } from 'native-base';

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
          >
            {colorKey[0]}
          </Button>
        );
    }
    return temp.reverse();
  };

  return (
    <ScrollView>
      <SimpleGrid columns={3} spacing={4}>
        {template()}
      </SimpleGrid>
    </ScrollView>
  );
}
  export default function () {
    return (
      <NativeBaseProvider>
        <Center flex={1} p={3}>
          <ColorPalete />
        </Center>
      </NativeBaseProvider>
    );
  }
```

## useToken

Don't want the entire object, instead something vary specific? No problem we have a solution for that too with our [`useToken`](/useToken.md) hook. Let’s see an example.

```SnackPlayer name=useToken%20Demo
import React from 'react';
import { useToken, Box, SimpleGrid, NativeBaseProvider, Center } from 'native-base';

function Tokens () {
  const colors = useToken('colors', 'amber');
  const template = () => {
    let temp = [];
    for (const colorKey in colors) {
      temp.push(<Box p={5} bg={`amber.${colorKey}`} />);
    }
    return temp;
  };

  return <SimpleGrid columns={5}>{template()}</SimpleGrid>;
}
export default function () {
    return (
      <NativeBaseProvider>
        <Center flex={1}>
          <Tokens />
        </Center>
      </NativeBaseProvider>
    );
  }
```
