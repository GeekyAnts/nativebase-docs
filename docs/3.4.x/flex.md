---
id: flex
title: Flex
---

`Flex` provides helpful style shorthand and is a [`Box`](box.md) with `display: flex`.

```jsx isShowcase
import React from "react";
import {
  Flex,
  Center,
  Heading,
  ScrollView,
  VStack,
  Divider,
  Box,
  useColorModeValue,
} from "native-base";

export function Example() {
  const bgShade100 = useColorModeValue("primary.100", "primary.400");
  const bgShade200 = useColorModeValue("primary.200", "primary.500");
  const bgShade300 = useColorModeValue("primary.300", "primary.600");
  const bgShade400 = useColorModeValue("primary.400", "primary.700");
  return (
    <Box flex="1" safeAreaTop>
      <ScrollView
        _contentContainerStyle={{
          h: "40",
          px: "20px",
          mb: "4",
          minW: "72",
        }}
      >
        <VStack space={2.5} w="100%" px="3">
          {/* flexDirection -> row */}
          <Heading size="md">row</Heading>
          <Flex
            direction="row"
            mb="2.5"
            mt="1.5"
            _text={{
              color: "coolGray.800",
            }}
          >
            <Center size="16" bg={bgShade100}>
              100
            </Center>
            <Center size="16" bg={bgShade200}>
              200
            </Center>
            <Center size="16" bg={bgShade300}>
              300
            </Center>
            <Center size="16" bg={bgShade400}>
              400
            </Center>
          </Flex>
          <Divider />
          {/* flexDirection -> column */}
          <Heading size="md">column</Heading>

          <Flex
            direction="column"
            mb="2.5"
            mt="1.5"
            _text={{
              color: "coolGray.800",
            }}
          >
            <Center size="16" bg={bgShade100}>
              100
            </Center>
            <Center size="16" bg={bgShade200}>
              200
            </Center>
            <Center size="16" bg={bgShade300}>
              300
            </Center>
            <Center size="16" bg={bgShade400}>
              400
            </Center>
          </Flex>
          <Divider />
          {/* flexDirection -> row-reverse */}
          <Heading size="md">row-reverse</Heading>
          <Flex
            direction="row-reverse"
            mb="2.5"
            mt="1.5"
            _text={{
              color: "coolGray.800",
            }}
          >
            <Center size="16" bg={bgShade100}>
              100
            </Center>
            <Center size="16" bg={bgShade200}>
              200
            </Center>
            <Center size="16" bg={bgShade300}>
              300
            </Center>
            <Center size="16" bg={bgShade400}>
              400
            </Center>
          </Flex>
          <Divider />
          {/* flexDirection -> column-reverse */}
          <Heading size="md">column-reverse</Heading>
          <Flex
            direction="column-reverse"
            mb="2.5"
            mt="1.5"
            _text={{
              color: "coolGray.800",
            }}
          >
            <Center size="16" bg={bgShade100}>
              100
            </Center>
            <Center size="16" bg={bgShade200}>
              200
            </Center>
            <Center size="16" bg={bgShade300}>
              300
            </Center>
            <Center size="16" bg={bgShade400}>
              400
            </Center>
          </Flex>
          <Divider />
        </VStack>
      </ScrollView>
    </Box>
  );
}
```

## Import

```jsx
import { Flex, Spacer } from "native-base";
```

- `Flex`: a **[Box](box.md)** with `display: flex`
- `Spacer`: creates an adjustable, empty space that can be used to tune the spacing between child elements within `Flex`

## Usage

Flex components come with some helpful shorthand props:

- `flexDirection` is `direction`
- `flexWrap` is `wrap`
- `alignItems` is `align`
- `justifyContent` is `justify`

While you can pass the verbose props, using the shorthand can save you some time.

## Example

```ComponentSnackPlayer path=components,primitives,Flex,basic.tsx

```

### Using the Spacer

You can pass Spacer to add Space between Flex items.

```ComponentSnackPlayer path=components,primitives,Flex,spacer.tsx

```

## Props

**Flex** implements **[Box](box.md)**, so all the Box Props can be passed to it, i.e. [`color`](utility-props#color-and-background-color), [`space`](utility-props#margin-and-padding), [`layout`](utility-props#layout-width-and-height), [`flexbox`](utility-props#flexbox) & [`border`](utility-props#borders) props from [style-system](utility-props).
