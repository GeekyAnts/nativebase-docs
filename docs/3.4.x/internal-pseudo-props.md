---
id: internal-pseudo-props
title: 'Internal Pseudo Props'
---

NativeBase uses internal pseudo props to get more customizable components.

## Use of internal pseudo props

Let’s take an example of `Actionsheet` component,

- Actionsheet has the following internal pseudo props: `_dragIndicator` , `_dragIndicatorWrapper` and `_dragIndicatorWrapperOffSet`

<Image
source={{
    uri: "https://user-images.githubusercontent.com/44310861/161695222-50c1b265-a799-4242-8a14-018be2c32210.png",
  }}
width="100%"
height={300}
alt="actionsheet pseudo props"
/>
<br />

- \_dragIndicator - Using `_dragIndicator` internal pseudo prop, we can customize the style of Actionsheet indicator.

```jsx title="_dragIndicator example isLive=true
import React from 'react';
import {
  Button,
  Actionsheet,
  useDisclose,
  Text,
  Box,
  Center,
} from 'native-base';

export function Example() {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <Center>
      <Button onPress={onOpen}>Actionsheet</Button>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content _dragIndicator={{ bg: 'blue.500' }}>
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Text fontSize="16" color="gray.500" _dark={{ color: 'gray.300' }}>
              Albums
            </Text>
          </Box>
          <Actionsheet.Item>Delete</Actionsheet.Item>
          <Actionsheet.Item>Share</Actionsheet.Item>
          <Actionsheet.Item>Play</Actionsheet.Item>
          <Actionsheet.Item>Favourite</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </Center>
  );
}
```

- \_dragIndicatorWrapper - Using `_dragIndicatorWrapper` internal pseudo props, we can customize the style of wrapper around drag indicator.

```jsx title="_dragIndicatorWrapper example" isLive=true
import React from 'react';
import {
  Button,
  Actionsheet,
  useDisclose,
  Text,
  Box,
  Center,
} from 'native-base';

export function Example() {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <Center>
      <Button onPress={onOpen}>Actionsheet</Button>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content
          _dragIndicatorWrapper={{ bg: 'blue.500', py: '4' }}
        >
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Text fontSize="16" color="gray.500" _dark={{ color: 'gray.300' }}>
              Albums
            </Text>
          </Box>
          <Actionsheet.Item>Delete</Actionsheet.Item>
          <Actionsheet.Item>Share</Actionsheet.Item>
          <Actionsheet.Item>Play</Actionsheet.Item>
          <Actionsheet.Item>Favourite</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </Center>
  );
}
```

- \_dragIndicatorWrapperOffset - Using `_dragIndicatorWrapperOffset` internal pseudo prop, we can customize styling of scrollable area above `Actionsheet.Content`.

```jsx title="_dragIndicatorWrapperOffset example" isLive=true
import React from 'react';
import {
  Button,
  Actionsheet,
  useDisclose,
  Text,
  Box,
  Center,
} from 'native-base';

export function Example() {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <Center>
      <Button onPress={onOpen}>Actionsheet</Button>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content _dragIndicatorWrapperOffSet={{ py: '10' }}>
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Text fontSize="16" color="gray.500" _dark={{ color: 'gray.300' }}>
              Albums
            </Text>
          </Box>
          <Actionsheet.Item>Delete</Actionsheet.Item>
          <Actionsheet.Item>Share</Actionsheet.Item>
          <Actionsheet.Item>Play</Actionsheet.Item>
          <Actionsheet.Item>Favourite</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </Center>
  );
}
```

## List of internal pseudo props:

NativeBase uses following pseudo props in different components.

| Internal Pseudo Props        | Use Case                                             |
| ---------------------------- | ---------------------------------------------------- |
| \_dragIndicator              | Drag indicator in actionsheet.                       |
| \_dragIndicatorWrapperOffSet | Scrollable area above Actionsheet.Content.           |
| \_dragIndicatorWrapper       | Wrapper around drag indicator.                       |
| \_icon                       | Used to style icons.                                 |
| \_backdrop                   | Backdrop in Modal, Menu and AlertDialog.             |
| \_backdropFade               | Animation prop for backdrop.                         |
| \_fade                       | Animation prop used in Modal and AlertDialog.        |
| \_slide                      | Animation prop used in Modal and AlertDialog.        |
| \_image                      | Used to style image in Avatar.                       |
| \_avatar                     | Used to style avatar in AvatarGroup.                 |
| \_hiddenAvatarPlaceholder    | Used to style hidden avatar in AvatarGroup.          |
| \_text                       | Used to style Text.                                  |
| \_stack                      | Used to style Stack.                                 |
| \_astrick                    | Used to style astrick in FormControl.                |
| \_overlay                    | Used To style Overlay.                               |
| \_presenceTransition         | Animation prop in Menu.                              |
| \_title                      | Used to style title of MenuGroup and Toast.          |
| \_scrollView                 | Used to style ScrollView.                            |
| \_line                       | Used to style text line in SkeletonText.             |
| \_description                | Used to style description in Toast.                  |
| \_closeIcon                  | Used to style CloseIcon.                             |
| \_spinner                    | Used to style Spinner.                               |
| \_interactionBox             | Used to style interaction box in Checkbox and Radio. |
| \_checkbox                   | Used to style checkbox in CheckboxGroup.             |
| \_alt                        | Used to style alt text in Image.                     |
| \_input                      | Used to style Input.                                 |
| \_radio                      | Used to style radio in RadioGroup.                   |
| \_item                       | Used to style SelectItem in Select.                  |
| \_selectedItem               | Used to style selected item in Select.               |
| \_actionSheetContent         | Used to style actionsheet content in Select.         |
| \_actionsheetBody            | Used to style actionsheet content in Select.         |
| \_actionSheetContent         | Used to style actionsheet body in Select.            |
| \_pressable                  | Used to style Pressable.                             |
