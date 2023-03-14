---
id: stack
title: Stack
---

`Stack` aligns items vertically or horizontally based on the `direction` prop.

```jsx isShowcase
//@ts-nocheck
import React from 'react';
import {
  Box,
  Stack,
  Center,
  Heading,
  ScrollView,
  VStack,
  Divider,
} from 'native-base';

export function Example() {
  return (
    <Box flex="1">
      <ScrollView
        _contentContainerStyle={{
          h: '40',
          px: '20px',
          mb: '4',
          minW: '72',
        }}
      >
        <VStack space="2.5" mt="4" px="8">
          <Heading size="md">row</Heading>
          <Stack direction="row" mb="2.5" mt="1.5" space={3}>
            <Center
              size="16"
              bg="primary.400"
              rounded="sm"
              _text={{
                color: 'warmGray.50',
                fontWeight: 'medium',
              }}
              shadow={'3'}
            >
              Box 1
            </Center>
            <Center
              bg="primary.500"
              size="16"
              rounded="sm"
              _text={{
                color: 'warmGray.50',
                fontWeight: 'medium',
              }}
              shadow={'3'}
            >
              Box 2
            </Center>
            <Center
              size="16"
              bg="primary.700"
              rounded="sm"
              _text={{
                color: 'warmGray.50',
                fontWeight: 'medium',
              }}
              shadow={'3'}
            >
              Box 3
            </Center>
          </Stack>
          <Divider />
          <Heading size="md">column</Heading>
          <Stack mb="2.5" mt="1.5" direction="column" space={3}>
            <Center
              size="16"
              bg="primary.400"
              rounded="sm"
              _text={{
                color: 'warmGray.50',
                fontWeight: 'medium',
              }}
              shadow={'3'}
            >
              Box 1
            </Center>
            <Center
              bg="primary.500"
              size="16"
              rounded="sm"
              _text={{
                color: 'warmGray.50',
                fontWeight: 'medium',
              }}
              shadow={'3'}
            >
              Box 2
            </Center>
            <Center
              size="16"
              bg="primary.700"
              rounded="sm"
              _text={{
                color: 'warmGray.50',
                fontWeight: 'medium',
              }}
              shadow={'3'}
            >
              Box 3
            </Center>
          </Stack>
          <Divider />
          <Heading size="md">row-reverse</Heading>
          <Stack mb="2.5" mt="1.5" direction="row" reversed space={3}>
            <Center
              size="16"
              bg="primary.400"
              rounded="sm"
              _text={{
                color: 'warmGray.50',
                fontWeight: 'medium',
              }}
              shadow={'3'}
            >
              Box 1
            </Center>
            <Center
              bg="primary.500"
              size="16"
              rounded="sm"
              _text={{
                color: 'warmGray.50',
                fontWeight: 'medium',
              }}
              shadow={'3'}
            >
              Box 2
            </Center>
            <Center
              size="16"
              bg="primary.700"
              rounded="sm"
              _text={{
                color: 'warmGray.50',
                fontWeight: 'medium',
              }}
              shadow={'3'}
            >
              Box 3
            </Center>
          </Stack>
          <Divider />
          <Heading size="md">column-reverse</Heading>
          <Stack mb="2.5" mt="1.5" direction="column-reverse" space={3}>
            <Center
              size="16"
              bg="primary.400"
              rounded="sm"
              _text={{
                color: 'warmGray.50',
                fontWeight: 'medium',
              }}
              shadow={'3'}
            >
              Box 1
            </Center>
            <Center
              bg="primary.500"
              size="16"
              rounded="sm"
              _text={{
                color: 'warmGray.50',
                fontWeight: 'medium',
              }}
              shadow={'3'}
            >
              Box 2
            </Center>
            <Center
              size="16"
              bg="primary.700"
              rounded="sm"
              _text={{
                color: 'warmGray.50',
                fontWeight: 'medium',
              }}
              shadow={'3'}
            >
              Box 3
            </Center>
          </Stack>
          <Divider />
        </VStack>
      </ScrollView>
    </Box>
  );
}
```

## Example

```ComponentSnackPlayer path=components,primitives,Stack,basic.tsx

```

## Props

```ComponentPropTable path=primitives,Stack,Stack.tsx

```
