---
id: avatar
title: Avatar
---

The Avatar component is used to represent a user and it can display a profile picture, initials or a fallback icon.

## Import

NativeBase exports 3 avatar-related components:

- `Avatar`: An image that represents the user.
- `Avatar.Badge`: A wrapper that displays its content on the bottom right corner of the avatar.
- `Avatar.Group`: A wrapper to stack multiple avatars together.

```jsx
import { Avatar } from "native-base";
```

## Basic

```SnackPlayer name=Avatar%20Basic
import React from "react";
import { Avatar, HStack, NativeBaseProvider } from "native-base";

function AvatarComponent() {
  return (
    <HStack space={2}>
      <Avatar
        borderWidth={1}
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg',
        }}
      >
        SS
      </Avatar>
      <Avatar
        borderWidth={1}
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg',
        }}
      >
        GG
      </Avatar>
      <Avatar
        borderWidth={1}
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg',
        }}
      >
        RS
      </Avatar>
      <Avatar
        borderWidth={1}
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg',
        }}
      >
        AK
      </Avatar>
      <Avatar
        borderWidth={1}
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/983582580372004864/h9ccP0Ea_400x400.jpg',
        }}
      >
        SC
      </Avatar>
      <Avatar
        borderWidth={1}
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1320985200663293952/lE_Kg6vr_400x400.jpg',
        }}
      >
        MR
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

## Sizes

```SnackPlayer name=Avatar%20Sizes
import React from "react";
import { Avatar, HStack, NativeBaseProvider } from "native-base";

function AvatarComponent() {
  return (
    <HStack space={1}>
      <Avatar
        size="xs"
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg',
        }}
      >
        SS
      </Avatar>
      <Avatar
        size="sm"
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/929409889788510208/gRr2f7rZ_400x400.jpg',
        }}
      >
        HS
      </Avatar>
      <Avatar
        size="md"
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg',
        }}
      >
        RS
      </Avatar>
      <Avatar
        size="lg"
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg',
        }}
      >
        AK
      </Avatar>
      <Avatar
        size="xl"
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg',
        }}
      >
        GG
      </Avatar>
      <Avatar
        size="2xl"
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1320985200663293952/lE_Kg6vr_400x400.jpg',
        }}
      >
        RB
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

## Fallbacks

```SnackPlayer name=Avatar%20Fallbacks
import React from "react";
import { Avatar, HStack, NativeBaseProvider } from "native-base";

function AvatarComponent() {
  return (
    <HStack>
      <Avatar mr={1} source={{ uri: 'https://bit.ly/broken-link' }}>
        RS
      </Avatar>
      <Avatar source={{ uri: 'https://bit.ly/broken-link' }}>MR</Avatar>
      <Avatar source={{ uri: 'https://bit.ly/broken-link' }} />
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

## Avatar Badge

```SnackPlayer name=Avatar%20Avatar%20Badge
import React from "react";
import { Avatar, HStack, NativeBaseProvider } from "native-base";

function AvatarComponent() {
  return (
    <HStack>
      <Avatar
        source={{ uri: 'https://alpha.nativebase.io/img/native-base-icon.png' }}
      >
        NB
        <Avatar.Badge bg={'red.200'} />
      </Avatar>
      <Avatar
        source={{ uri: 'https://alpha.nativebase.io/img/native-base-icon.png' }}
      >
        NB
        <Avatar.Badge borderColor="papayawhip" bg="tomato" />
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

## Avatar Group

```SnackPlayer name=Avatar%20Avatar%20Group
import React from "react";
import { Avatar, NativeBaseProvider } from "native-base";

function AvatarComponent() {
  return (
    <Avatar.Group size="lg" max={4}>
      <Avatar
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg',
        }}
      >
        SS
      </Avatar>
      <Avatar
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg',
        }}
      >
        AK
      </Avatar>
      <Avatar
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg',
        }}
      >
        RS
      </Avatar>
      <Avatar
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1320985200663293952/lE_Kg6vr_400x400.jpg',
        }}
      >
        MR
      </Avatar>
      <Avatar source={{ uri: 'https://bit.ly/code-beast' }}>CB</Avatar>
      <Avatar
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg',
        }}
      >
        GG
      </Avatar>
    </Avatar.Group>
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

| Name   | Type                    | Description                     | Default |
| ------ | ----------------------- | ------------------------------- | ------- |
| size   | 2xl, lg, md, sm, xl, xs | The size of the avatar.         | md      |
| source | ImageSourcePropType     | The image source of the avatar. | -       |
| \_text | TextProps               | Text styling for fallback Text. | -       |
