---
id: changelog
title: Changelog
---

## Features

- Added `useContrastText`, which gives a constrasting color to text based in the background color.
- Accessibility:
  - Menu
  - Modal
  - Radio
  - Checkbox

## API Changes

- Added `_text`/`_alt`/`_label` or similar related props to all the components which render string child.
- Changed the following components to compound components. For example, `AlertTitle` is now `Alert.Title`.
  - Actionsheet
  - Checkbox
  - Menu
  - Alert
  - Typeahead
  - Tag
  - Popover
  - Stat
  - Breadcumb
  - IconButton
  - FormControl
  - Input
  - PinInput
  - Badge
  - Avatar
  - Skeleton
  - Modal
  - Accordion

## Bug Fixes

- Modal close button size.
- Fixes for Image rerender on change of source.
- forwardRef fixes:
  - AspectRatio
  - FAB
  - Wrap
  - Divider
  - Stack, VStack, ZStack, Row, Column
  - Container
  - KBD
  - CloseButton

For more details. Visit [releases](https://github.com/GeekyAnts/NativeBase/releases/tag/v3.0.0-next.24).
