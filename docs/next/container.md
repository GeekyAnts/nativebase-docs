---
id: container
title: Container
---

The `Container` is used to constrain a content's width to the current breakpoint, while keeping it fluid.

```jsx isShowcase
import React from "react";
import { Container, Text, Heading } from "native-base";
export const Example = () => {
  return (
    <Container centerContent>
      <Heading>Benefits</Heading>
      <Text>
        There are many benefits to a joint design and development system. Not
        only does it bring benefits to the design team, but it also brings
        benefits to engineering teams. It makes sure that our experiences have a
        consistent look and feel, not just in our design specs, but in
        production
      </Text>
    </Container>
  );
};
```

## Implements

- [`Box`](box.md)

## Usage

To include content, wrap it in the Container component.

## Example

```ComponentSnackPlayer path=components,composites,Container,usage.tsx

```

## Props

**Container** implements **[Box](box.md)**, so all the Box Props can be passed to it.

### Container

| Name          | Type    | Description                                               | Default |
| ------------- | ------- | --------------------------------------------------------- | ------- |
| centerContent | boolean | It'll center child elements based on their content width. | true    |
