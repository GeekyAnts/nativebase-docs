---
id: form-control
title: FormControl
---

import { ComponentTheme } from '../src/components';

`FormControl` is used to form elements by providing context such as `isInvalid`, `isDisabled`, and `isRequired`.

```jsx isShowcase gradient="3"
import React from 'react';
import {
  FormControl,
  Input,
  Stack,
  WarningOutlineIcon,
  Box,
  Center,
  NativeBaseProvider,
} from 'native-base';

const Example = () => {
  return (
    <Box w="100%">
      <FormControl isRequired>
        <Stack mx="4">
          <FormControl.Label>Password</FormControl.Label>
          <Input
            _light={{ bg: 'coolGray.100' }}
            _dark={{ bg: 'coolGray.800' }}
            _hover={{ bg: 'coolGray.200' }}
            shadow={2}
            type="password"
            defaultValue="12345"
            placeholder="password"
          />
          <FormControl.HelperText>
            Must be atleast 6 characters.
          </FormControl.HelperText>
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Atleast 6 characters are required.
          </FormControl.ErrorMessage>
        </Stack>
      </FormControl>
    </Box>
  );
};
```

## Examples

### Basic

```ComponentSnackPlayer path=components,composites,FormControl,Usage.tsx

```

### Custom Style

```ComponentSnackPlayer path=components,composites,FormControl,CustomStyle.tsx

```

## Props

### FormControl

```ComponentPropTable path=composites,FormControl,FormControl.tsx

```

### FormControl.Label

```ComponentPropTable path=composites,FormControl,FormControlLabel.tsx

```

### FormControl.ErrorMessage

```ComponentPropTable path=composites,FormControl,FormControlErrorMessage.tsx

```

### FormControl.HelperText

```ComponentPropTable path=composites,FormControl,FormControlHelperText.tsx

```

## Styling

<ComponentTheme name="formControl" fileName="form-control" />
