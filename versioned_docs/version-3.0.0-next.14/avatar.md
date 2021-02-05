---
id: avatar
title: Avatar
---

The Avatar component is used to represent a user and it can display a profile picture, initials or a fallback icon.

## Import

NativeBase exports 3 avatar-related components:

- `Avatar`: An image that represents the user.
- `AvatarBadge`: A wrapper that displays its content on the bottom right corner of the avatar.
- `AvatarGroup`: A wrapper to stack multiple avatars together.

```jsx
import { Avatar, AvatarBadge } from 'native-base';
```

## Example

```SnackPlayer name=Avatar%20Example
import React from "react";
import { Avatar, HStack, NativeBaseProvider } from "native-base";

function AvatarComponent() {
  return (
    <HStack space={2}>
      <Avatar
        name="Sanket Sahu"
        source={{
          uri:
            "https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg",
        }}
      />
      <Avatar
        name="Gaurav Guha"
        source={{
          uri:
            "https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg",
        }}
      />
      <Avatar
        name="Rohit Singh"
        source={{
          uri:
            "https://pbs.twimg.com/profile_images/1260766060401188864/ySJfMIbZ_400x400.jpg",
        }}
      />
      <Avatar
        name="Ankur Kedia"
        source={{
          uri:
            "https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg",
        }}
      />
      <Avatar
        name="Suraj Ahmed"
        source={{
          uri:
            "https://pbs.twimg.com/profile_images/983582580372004864/h9ccP0Ea_400x400.jpg",
        }}
      />
      <Avatar
        name="Rehman Baig"
        source={{
          uri:
            "https://pbs.twimg.com/profile_images/1320985200663293952/lE_Kg6vr_400x400.jpg",
        }}
      />
    </HStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <AvatarComponent />
    </NativeBaseProvider>
  );
}
```

## Example (Sizes)

```SnackPlayer name=Avatar%20Example(Sizes)
import React from "react";
import { Avatar, HStack, NativeBaseProvider } from "native-base";

function AvatarComponent() {
  return (
    <HStack space={1}>
      <Avatar
        size="xs"
        name="Sanket Sahu"
        source={{
          uri:
            "https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg",
        }}
      />
      <Avatar
        size="sm"
        name="Himanshu Satija"
        source={{
          uri:
            "https://pbs.twimg.com/profile_images/929409889788510208/gRr2f7rZ_400x400.jpg",
        }}
      />
      <Avatar
        size="md"
        name="Rohit Singh"
        source={{
          uri:
            "https://pbs.twimg.com/profile_images/1260766060401188864/ySJfMIbZ_400x400.jpg",
        }}
      />
      <Avatar
        size="lg"
        name="Ankur Kedia"
        source={{
          uri:
            "https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg",
        }}
      />
      <Avatar
        size="xl"
        name="Gaurav Guha"
        source={{
          uri:
            "https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg",
        }}
      />
      <Avatar
        size="2xl"
        name="Rehman Baig"
        source={{
          uri:
            "https://pbs.twimg.com/profile_images/1320985200663293952/lE_Kg6vr_400x400.jpg",
        }}
      />
    </HStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <AvatarComponent />
    </NativeBaseProvider>
  );
}
```

## Example (Fallbacks)

```SnackPlayer name=Avatar%20Example(Fallbacks)
import React from "react";
import { Avatar, HStack, NativeBaseProvider } from "native-base";

function AvatarComponent() {
  return (
    <HStack>
      <Avatar
        mr={1}
        name="Rohit"
        source={{ uri: "https://bit.ly/broken-link" }}
      />
      <Avatar name="Rehman" source={{ uri: "https://bit.ly/broken-link" }} />
      <Avatar source={{ uri: "https://bit.ly/broken-link" }} />
    </HStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <AvatarComponent />
    </NativeBaseProvider>
  );
}
```

## Example (Avatar Badge)

```SnackPlayer name=Avatar%20Example(Avatar Badge)
import React from "react";
import { Avatar, HStack, AvatarBadge, NativeBaseProvider } from "native-base";

function AvatarComponent() {
  return (
    <HStack>
      <Avatar
        source={{ uri: "https://nativebase.io/assets/img/front-page-icon.png" }}
        name={"Native Base"}
      >
        <AvatarBadge bg={"red.200"} />
      </Avatar>
      <Avatar
        source={{ uri: "https://nativebase.io/assets/img/front-page-icon.png" }}
        name={"Native Base"}
      >
        <AvatarBadge borderColor="papayawhip" bg="tomato" />
      </Avatar>
    </HStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <AvatarComponent />
    </NativeBaseProvider>
  );
}
```

## Example (Avatar Group)

```SnackPlayer name=Avatar%20Example(Avatar Group)
import React from "react";
import { Avatar, AvatarGroup, NativeBaseProvider } from "native-base";

function AvatarComponent() {
  return (
    <AvatarGroup size="lg" max={4}>
      <Avatar
        name="Sanket Sahu"
        source={{
          uri:
            "https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg",
        }}
      />
      <Avatar
        name="Ankur Kedia"
        source={{
          uri:
            "https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg",
        }}
      />
      <Avatar
        name="Rohit Singh"
        source={{
          uri:
            "https://pbs.twimg.com/profile_images/1260766060401188864/ySJfMIbZ_400x400.jpg",
        }}
      />
      <Avatar
        name="Rehman Baig"
        source={{
          uri:
            "https://pbs.twimg.com/profile_images/1320985200663293952/lE_Kg6vr_400x400.jpg",
        }}
      />
      <Avatar
        name="Christian Nwamba"
        source={{ uri: "https://bit.ly/code-beast" }}
      />
      <Avatar
        name="Gaurav Guha"
        source={{
          uri:
            "https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg",
        }}
      />
    </AvatarGroup>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <AvatarComponent />
    </NativeBaseProvider>
  );
}
```

## Props

### Avatar

| Name      | Type                    | Description                         | Default |
| --------- | ----------------------- | ----------------------------------- | ------- |
| size      | 2xl, lg, md, sm, xl, xs | The size of the avatar.             | md      |
| name      | string                  | The name of the user in the avatar. | -       |
| source    | ImageSourcePropType     | The image source of the avatar.     | -       |
| Component |                         |                                     |         |
