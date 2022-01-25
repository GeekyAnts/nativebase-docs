---
id: avatar
title: Avatar
---

import { ComponentTheme } from '../../src/components';

`Avatar` component is used to represent a user and it can display a profile picture, initials or a fallback icon.

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
