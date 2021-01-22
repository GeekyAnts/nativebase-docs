---
id: responsive
title: Responsive
---

Nativebase V3 supports responsive styles out of the box. Instead of manually adding responsiveness to your apps, Nativebase V3 allows you provide object and array values to add responsive styles.

Responsive syntax relies on the breakpoints defined in the theme object.

```jsx
const breakpoints = {
  base: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1280,
};
```

To make styles responsive, you can use either the array or object syntax.

## The Array syntax

All style props that arrays as values for responsive styles.

For Example to make a `Box` width or w responsive using the array syntax, here's what you need to do:

```jsx
import React from "react";
import { Box } from "native-base";
export default () => {
  return (
    <Box bg="red.200" w={["100px", "400px", "560px"]}>
      This is a box
    </Box>
  );
};
```

## The Object syntax

You can also define responsive values with breakpoint aliases in an object. Any undefined alias key will define the base, non-responsive value.

For Example to make a `Text` fontSize responsive using the object syntax, here's what you need to do:

```jsx
import React from "react";
import { Text } from "native-base";
export default () => {
  return (
    <Text fontSize={{ base: "24px", md: "40px", lg: "56px" }}>
      This is responsive text
    </Text>
  );
};
```

## **More Examples**

This works for every style prop in the theme specification, which means you can change the style of most properties at a given breakpoint.

```jsx
import React from "react";
import { Box } from "native-base";
export default () => {
  return (
    <>
      <Box
        height={{
          base: "75%", // 0-768px
          md: "50%", // 768px-1280,
          xl: "25%", // 1280px+
        }}
        bg="teal.400"
        width={[
          "75%", // 0-480px
          "50%", // 480px-768px
          "25%", // 768px-992px
          "15%", // 992px+
        ]}
      />
      {/* responsive font size */}
      <Box fontSize={["sm", "md", "lg", "xl"]}>Font Size</Box>
      {/* responsive margin */}
      <Box mt={[2, 4, 6, 8]} width="100%" height="24px" bg="green.400" />
      {/* responsive padding */}
      <Box bg="red.200" p={[2, 4, 6, 8]}>
        Padding
      </Box>
    </>
  );
};
```

## **Demo**

Here's a simple example of a component that uses a stacked layout on small screens, and a side-by-side layout on larger screens :

```jsx
import React from "react";
import { Box, Text, Image, Link } from "native-base";
export default () => {
  return (
    <Box flexDir={{ base: "column", sm: "column", md: "row" }}>
      <Box flexShrink={0}>
        <Image
          rounded={10}
          width={40}
          height={40}
          source={{ uri: "https://bit.ly/2jYM25F" }}
          alt="Woman paying for a purchase"
        />
      </Box>
      <Box mt={{ base: 4, md: 0 }} ml={{ md: 2 }}>
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="sm"
          letterSpacing="wide"
          color="teal.600"
        >
          Marketing
        </Text>
        <Link mt={1} fontSize="lg" fontWeight="semibold" href="#">
          Finding customers for your new business
        </Link>
        <Text mt={2} color="gray.500">
          Getting a new business off the ground is a lot of hard work. Here are
          five ideas you can use to find your first customers.
        </Text>
      </Box>
    </Box>
  );
};
```
