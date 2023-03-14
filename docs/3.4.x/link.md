---
id: link
title: Link
---

import { ComponentTheme } from '../src/components';

`Links` are accessible elements used primarily for navigation. This component is styled to resemble a hyperlink.

```jsx isShowcase
import React from 'react';
import { Link } from 'native-base';

export const Example = () => {
  return (
    <Link mt={4} href="https://docs.nativebase.io" isExternal>
      Click here to open documentation.
    </Link>
  );
};
```

## Import

```jsx
import { Link } from 'native-base';
```

## Examples

### Basic

```ComponentSnackPlayer path=components,primitives,Link,Basic.tsx

```

### External Link

```ComponentSnackPlayer path=components,primitives,Link,ExternalLink.tsx

```

### Link with Underline

```ComponentSnackPlayer path=components,primitives,Link,UnderlineLink.tsx

```

### Link custom onPress

```ComponentSnackPlayer path=components,primitives,Link,CustomOnPress.tsx

```

### Link around containers

```ComponentSnackPlayer path=components,primitives,Link,CompositeLink.tsx

```

## Props

```ComponentPropTable path=primitives,Link,index.tsx

```

## Styling

<ComponentTheme name="link" />

## Accessibility

Adheres to the [Link WAI-ARIA design pattern.](https://www.w3.org/WAI/ARIA/apg/#link)
