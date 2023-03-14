---
id: avatar
title: Avatar
---

import { ComponentTheme } from '../src/components';

The `Avatar` component can display profile pictures, initials, or a fallback icon to represent a user.

```jsx isShowcase
import React from 'react';
import { Avatar, HStack, Center, NativeBaseProvider } from 'native-base';
export const Example = () => {
  return (
    <HStack justifyContent="center" space={2}>
      <Avatar
        bg="green.500"
        source={{
          uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        }}
      >
        AJ
      </Avatar>
      <Avatar
        bg="cyan.500"
        source={{
          uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        }}
      >
        TE
      </Avatar>
      <Avatar
        bg="indigo.500"
        source={{
          uri: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        }}
      >
        JB
      </Avatar>
      <Avatar
        bg="amber.500"
        source={{
          uri: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        }}
      >
        TS
      </Avatar>
    </HStack>
  );
};
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
