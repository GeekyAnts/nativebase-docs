---
id: theme
title: How to use Nativebase theme
---

There will be time when you want to access the theme object itself. Well np worries Nativebase provides with the `useTheme` hook to solve that problem.

But why we need the theme object? Maybe show of the your color pallets 😁

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/03b86b10-10f8-4b5e-9ef6-251977282274/Screenshot_2021-01-19_at_5.24.12_PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/03b86b10-10f8-4b5e-9ef6-251977282274/Screenshot_2021-01-19_at_5.24.12_PM.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0b9efc1b-4234-4305-b5cb-9c38f7a23023/Screenshot_2021-01-19_at_5.24.18_PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0b9efc1b-4234-4305-b5cb-9c38f7a23023/Screenshot_2021-01-19_at_5.24.18_PM.png)

```tsx
import React from "react";
import { useColorModeValue, Button, useTheme, SimpleGrid } from "native-base";

export default function () {
  const { colors } = useTheme();
  const template = () => {
    let temp = [];
    for (const colorKey in colors) {
      // skipping singleton colors
      if (colorKey === "black" || colorKey === "white") {
      } else
        temp.push(
          <Button
            size="lg"
            colorScheme={colorKey}
            variant={useColorModeValue("solid", "outline")}
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
```

Don't want the entire object, instead something vary specific. Don't we got you covered with our `useToken` hook. Let’s see an example.

```tsx
import React from "react";
import { useToken, Box, SimpleGrid } from "native-base";

export default function () {
  const colors = useToken("colors", "amber");
  const template = () => {
    let temp = [];
    for (const colorKey in colors) {
      temp.push(<Box p={5} bg={`amber.${colorKey}`} />);
    }
    return temp;
  };

  return <SimpleGrid columns={10}>{template()}</SimpleGrid>;
}
```

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4b3f5de8-30a8-43ca-986d-c72e811298e6/Screenshot_2021-01-19_at_6.11.52_PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4b3f5de8-30a8-43ca-986d-c72e811298e6/Screenshot_2021-01-19_at_6.11.52_PM.png)
