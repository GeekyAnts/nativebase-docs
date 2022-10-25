---
id: link
title: Link
---

import { ComponentTheme } from '../../src/components';

`Links` are accessible elements used primarily for navigation. This component is styled to resemble a hyperlink.

## Import

```jsx
import { Link } from 'native-base';
```

## Examples

### Basic

```ComponentSnackPlayer path=primitives,Link,Basic.tsx

```

### External Link

```ComponentSnackPlayer path=primitives,Link,ExternalLink.tsx

```

### Link with Underline

```ComponentSnackPlayer path=primitives,Link,UnderlineLink.tsx

```

### Link custom onPress

```ComponentSnackPlayer path=primitives,Link,CustomOnPress.tsx

```

### Link around containers

```ComponentSnackPlayer path=primitives,Link,CompositeLink.tsx

```

## Props

```ComponentPropTable path=primitives,Link,index.tsx

```

<!--
Link implements **[Box](box.md)**, so all the Box Props can be passed to it.

| Name       | Type     | Description                               | Default |
| ---------- | -------- | ----------------------------------------- | ------- |
| isExternal | boolean  | If true, the link will open in a browser. | -       |
| onClick    | function | Function called when the link is clicked. | -       | -->

## Styling

<ComponentTheme name="link" />

## Accessibility

Adheres to the [Link WAI-ARIA design pattern.](https://www.w3.org/WAI/ARIA/apg/#link)
