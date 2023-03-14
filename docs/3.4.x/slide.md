---
id: slide
title: Slide
---

Slide component provides a declarative API to add sliding transitions.

```jsx isShowcase
import React from 'react';
import {
  Slide,
  Button,
  Alert,
  VStack,
  Heading,
  Divider,
  Center,
  NativeBaseProvider,
} from 'native-base';
export const Example = () => {
  const [isOpenTop, setIsOpenTop] = React.useState(false);
  const str = `${isOpenTop ? 'Hide' : 'Check Internet Connection'}`;
  return (
    <Box h="32" w="300">
      <Slide in={isOpenTop} placement="top">
        <Alert justifyContent="center" status="error">
          <Alert.Icon />
          <Text color="error.600" fontWeight="medium">
            No Internet Connection
          </Text>
        </Alert>
      </Slide>
      <Button
        mt="auto"
        onPress={() => setIsOpenTop(!isOpenTop)}
        variant="unstyled"
        bg="coolGray.700:alpha.30"
      >
        {str}
      </Button>
    </Box>
  );
};
```

## Import

## Examples

### Slide

```ComponentSnackPlayer path=components,composites,Transitions,Slide.tsx

```

### Slide wrapped inside parent

```ComponentSnackPlayer path=components,composites,Transitions,SlideWrapped.tsx

```

### Slide Composition

```ComponentSnackPlayer path=components,composites,Transitions,SlideComposition.tsx

```

## Props

### Slide

| Name      | Type                             | Description                                            | Default  |
| --------- | -------------------------------- | ------------------------------------------------------ | -------- |
| in        | boolean                          | Show the component; triggers the enter or exit states. | -        |
| duration  | number                           | Duration of animation in mili second.                  | 500      |
| placement | `top` ,`bottom`, `left`, `right` | The direction to slide drawer from.                    | `bottom` |
