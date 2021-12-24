---
id: slide
title: Slide
---

Slide component provides a declarative API to add sliding transitions.

```jsx isShowcase
import React from "react"
import {
  Slide,
  Button,
  Alert,
  VStack,
  Heading,
  Divider,
  Center,
  NativeBaseProvider,
} from "native-base"
export const Example = () => {
  const [isOpenBottom, setIsOpenBottom] = React.useState(false)
  const [isOpenTop, setIsOpenTop] = React.useState(false)
  const str1 = `${isOpenTop ? "Hide" : "Show"}`
  const str2 = `${isOpenBottom ? "Hide" : "Show"}`
  return (
    <>
      <Slide in={isOpenBottom} placement="bottom">
        <Alert justifyContent="center" mx="4" mt="auto" mb="4" status="success">
          <Alert.Icon />
          <Alert.Description
            _text={{
              _light: {
                color: "success.600",
              },
              _dark: {
                color: "success.100",
              },
              fontWeight: "medium",
            }}
          >
            Order placed successfully!
          </Alert.Description>
        </Alert>
      </Slide>
      <Slide in={isOpenTop} placement="top">
        <Alert justifyContent="center" mx="4" mt="4" status="error">
          <Alert.Icon />
          <Alert.Description
            _text={{
              _light: {
                color: "error.600",
              },
              _dark: {
                color: "error.100",
              },
              fontWeight: "medium",
            }}
          >
            No Internet Connection
          </Alert.Description>
        </Alert>
      </Slide>

      <VStack
        space={2.5}
        w={{
          base: "50%",
          md: "25%",
        }}
        alignItems="center"
      >
        <Center w="100%">
          <Heading textAlign="center" size="md" mb={4}>
            Top
          </Heading>
          <Button shadow={2} w="100" onPress={() => setIsOpenTop(!isOpenTop)} mb={5}>
            {str1}
          </Button>
          <Divider />
        </Center>
        <Center w="100%">
          <Heading textAlign="center" size="md" mb={4}>
            Bottom
          </Heading>
          <Button shadow={2} w="100" onPress={() => setIsOpenBottom(!isOpenBottom)}>
            {str2}
            {/* Click Me to {isOpenBottom ? "hide" : "show"} Bottom Slider */}
          </Button>
        </Center>
      </VStack>
    </>
  )
}
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
