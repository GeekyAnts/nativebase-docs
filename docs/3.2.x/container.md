---
id: container
title: Container
metaTitle: Container | NativeBase
metaDescription: The Container in NativeBase restricts a content width according to the current breakpoint while keeping the size fluid. More on Container usage with examples.
---

The `Container` restricts a content's width according to current breakpoint, while keeping the size fluid.

## Implements

- [`Box`](box.md)

## Usage

To include content, wrap it in the Container component.

## Example

```ComponentSnackPlayer path=components,composites,Container,usage.tsx

```

## Props

**Container** implements **[Box](box.md)**, so all the Box Props can be passed to it.

### Container

| Name          | Type    | Description                                               | Default |
| ------------- | ------- | --------------------------------------------------------- | ------- |
| centerContent | boolean | It'll center child elements based on their content width. | true    |
