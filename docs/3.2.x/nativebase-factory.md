---
id: nativebase-factory
title: NativeBase Factory
---

NativeBase factory is a function that converts non-nativebase components to nativebase enabled components so you can pass style props to them.

```jsx
import { Factory } from 'native-base';
```

## Usage

```ComponentSnackPlayer path=components,composites,factory,usage.tsx

```

## Defining component theme

```ComponentSnackPlayer path=components,composites,factory,theme.tsx

```

## Using mode in component theme

```ComponentSnackPlayer path=components,composites,factory,modes.tsx

```

## Using ref

```ComponentSnackPlayer path=components,composites,factory,ref.tsx

```

## Params

| Name           | Type            | Description                                                                   | Default |
| -------------- | --------------- | ----------------------------------------------------------------------------- | ------- |
| component      | React component | Original component to be passed on which NativeBase props have to be applied. | -       |
| componentTheme | Object          | This object can include `baseStyle`, `sizes`, `variants`, `defaultProps`      | -       |
