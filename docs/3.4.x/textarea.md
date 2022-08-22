---
id: textarea
title: TextArea
---

import { ComponentTheme } from '../src/components';

The `Textarea` component helps create multi-line text inputs.

```jsx isShowcase
import React from "react";
import { TextArea } from "native-base";

export const Example = () => {
  return (
    <TextArea
      shadow={2}
      h={20}
      placeholder="Text Area Placeholder"
      w="200"
      _light={{
        placeholderTextColor: "trueGray.700",
        bg: "coolGray.100",
        _hover: { bg: "coolGray.200" },
        _focus: { bg: "coolGray.200:alpha.70" },
      }}
      _dark={{
        bg: "coolGray.800",
        _hover: { bg: "coolGray.900" },
        _focus: { bg: "coolGray.900:alpha.70" },
      }}
    />
  );
};
```

## Examples

### Usage

```ComponentSnackPlayer path=components,primitives,TextArea,basic.tsx

```

### Invalid and Disabled TextArea

```ComponentSnackPlayer path=components,primitives,TextArea,invalid.tsx

```

### Value Controlled TextArea

```ComponentSnackPlayer path=components,primitives,TextArea,value.tsx

```

## Props

```ComponentPropTable path=primitives,TextArea,index.tsx

```

## Styling

<ComponentTheme name="textArea"  fileName="textarea" />
