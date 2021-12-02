---
id: alert
title: Alert
---

import { ComponentTheme } from '../../src/components';

`Alerts` are used to communicate a state that affects a system, feature or page.

## Import

NativeBase exports 5 Alert related components:

- `Alert`: The wrapper for alert components.
- `Alert.Icon`: The visual icon for the alert that changes based on the `status` prop.
  <!-- - `Alert.Title`: The title of the alert to be announced by screen readers. -->
  <!-- - `Alert.Description`: The description of the alert to be announced by screen readers. -->

```jsx
import { Alert } from 'native-base';
```

## Examples

### Basic

```ComponentSnackPlayer path=components,composites,Alert,usage.tsx

```

### Status

```ComponentSnackPlayer path=components,composites,Alert,status.tsx

```

### Variant

```ComponentSnackPlayer path=components,composites,Alert,variant.tsx

```

### Composition

```ComponentSnackPlayer path=components,composites,Alert,composition.tsx

```

### Action

```ComponentSnackPlayer path=components,composites,Alert,action.tsx

```

## Props

### Alert

```ComponentPropTable path=composites,Alert,Alert.tsx

```

### Alert.Icon

```ComponentPropTable path=composites,Alert,AlertIcon.tsx

```

### Alert.Title

```ComponentPropTable path=composites,Alert,AlertTitle.tsx

```

### Alert.Description

```ComponentPropTable path=composites,Alert,AlertDescription.tsx

```

## Styling

<ComponentTheme name="alert" />

## Accessibility

Alert has `role` set to `alert`.
