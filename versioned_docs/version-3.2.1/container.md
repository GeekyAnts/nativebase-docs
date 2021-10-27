---
id: container
title: Container
---

The `Container` is used to constrain a content's width to the current breakpoint, while keeping it fluid.

## Implements

- [`Box`](box.md)

## Usage

To include content, wrap it in the Container component.

## Example

```SnackPlayer name=Container%20Example
import React from 'react';
import { Container, Text, Heading, NativeBaseProvider, Center } from 'native-base';
function ContainerComponent() {
  return (
   <Container>
      <Heading>
        A component library for the
        <Heading color="emerald.500"> React Ecosystem</Heading>
      </Heading>
      <Text mt="3" fontWeight="medium">
        NativeBase is a simple, modular and accessible component library that
        gives you building blocks to build you React applications.
      </Text>
    </Container>
  );
}

// Example template which wraps component with NativeBaseProvider
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <ContainerComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Props

**Container** implements **[Box](box.md)**, so all the Box Props can be passed to it.

### Container

| Name          | Type    | Description                                               | Default |
| ------------- | ------- | --------------------------------------------------------- | ------- |
| centerContent | boolean | It'll center child elements based on their content width. | true    |
