---
id: avatar
title: Avatar
---

import { ComponentTheme } from '../src/components';

`Avatar` component is used to represent a user and it can display a profile picture, initials or a fallback icon.

```jsx isShowcase
import React from "react"
import { Avatar, HStack, Center, NativeBaseProvider } from "native-base"
export const Example = () => {
  return (
    <HStack space={2}>
      <Avatar
        shadow={2}
        bg="green.500"
        source={{
          uri: "https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg",
        }}
      >
        SS
      </Avatar>
      <Avatar
        shadow={2}
        bg="cyan.500"
        source={{
          uri: "https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg",
        }}
      >
        GG
      </Avatar>
      <Avatar
        shadow={2}
        bg="indigo.500"
        source={{
          uri: "https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg",
        }}
      >
        RS
      </Avatar>
      <Avatar
        shadow={2}
        bg="amber.500"
        source={{
          uri: "https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg",
        }}
      >
        AK
      </Avatar>
    </HStack>
  )
}
```

## Import

NativeBase exports 3 avatar-related components:

- `Avatar`: An image that represents the user.
- `Avatar.Badge`: A wrapper that displays its content on the bottom right corner of the avatar.
- `Avatar.Group`: A wrapper to stack multiple avatars together.

```jsx
import { Avatar } from 'native-base';
```

## Examples

### Basic

```ComponentSnackPlayer path=components,composites,Avatar,usage.tsx

```

### Sizes

```ComponentSnackPlayer path=components,composites,Avatar,size.tsx

```

### Fallbacks

```ComponentSnackPlayer path=components,composites,Avatar,Fallback.tsx

```

### Avatar Badge

```ComponentSnackPlayer path=components,composites,Avatar,AvatarBadge.tsx

```

### Avatar Group

```ComponentSnackPlayer path=components,composites,Avatar,AvatarGroup.tsx

```

## Props

### Avatar

```ComponentPropTable path=composites,Avatar,Avatar.tsx

```

### Avatar.Group

```ComponentPropTable path=composites,Avatar,Group.tsx

```

### Avatar.Badge

```ComponentPropTable path=composites,Avatar,Badge.tsx

```

## Styling

<ComponentTheme name="avatar" />
