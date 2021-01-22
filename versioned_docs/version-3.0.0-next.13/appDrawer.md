---
id: appDrawer
title: Making App drawer
---

Creating an app drawer like layout is very common and with NativeBase's SimpleGrid make this extremely simple while still keeping it extremely customisable. Here is an example to illustrate it.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/57b6426c-012b-4a18-a96f-a93d505a4f72/Screenshot_2021-01-19_at_6.35.50_PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/57b6426c-012b-4a18-a96f-a93d505a4f72/Screenshot_2021-01-19_at_6.35.50_PM.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/231b210c-f72c-47cb-81ba-ea7a9c0be590/Screenshot_2021-01-19_at_6.35.46_PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/231b210c-f72c-47cb-81ba-ea7a9c0be590/Screenshot_2021-01-19_at_6.35.46_PM.png)

```tsx
import React from "react";
import { IconButton, SimpleGrid, Icon } from "native-base";

export default function () {
  const icons = [
    "bolt",
    "build",
    "cloud",
    "delivery-dining",
    "favorite",
    "music-note",
    "invert-colors-on",
    "navigation",
    "settings",
    "sports-esports",
    "shield",
    "photo-camera",
    "network-wifi",
    "nightlight-round",
    "flight",
    "extension",
    "duo",
    "album",
    "access-alarm",
    "forum",
  ];
  return (
    <SimpleGrid columns={5} spacingY={4} spacingX={4}>
      {icons.map((icon) => (
        <IconButton
          borderRadius="full"
          colorScheme="indigo"
          variant="solid"
          p={4}
          icon={<Icon name={icon} type="MaterialIcons" size={6} />}
        />
      ))}
    </SimpleGrid>
  );
}
```
