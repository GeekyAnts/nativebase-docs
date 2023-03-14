---
id: utility-props-specificity
title: Utility Props Specificity
---

- If we have two similar props for a particular component, the more specific prop will be applied when the component is rendered.

  ```jsx
  <Input px="2" p="0" />
  ```

  In the above example, we have two similar props for the Input component, but as you might have noticed `px="2"` is more specific than `p="0"` in terms of providing padding to the Input. This follows React Native's specificity precedence- while applying utility style props to a component, the order does not matter.So, `px="2"` will be applied when the Input component is rendered.

- If we have a similar prop which is also defined in the baseStyle of that component, the value of the prop will override the value of the prop defined in the baseStyle.

  Let's take an example of `Input` to understand better.

  ```jsx
  <Input p="0" />

  // baseStyle for Input component
      return {
          ...
          px: 4,
          py: 2,
          ...
      }
  ```

  As you can see, we have `px:2` and `py:2` defined in the baseStyle of Input component, but if we pass `p="0"` in the props of an Input, it will override the the baseStyle and apply `p="0"` to that component. **Similar happens with other utility props.**

Now, here is an example to analyze both the cases together:

```jsx
<Input px="3" p="0" />

// baseStyle for Input component
    return {
        ...
        px: 4,
        py: 2,
        ...
    }

```

In the above example, what do you think should be the padding of the rendered Input component?

Let's see.

We have `p="0"` which will override the value of padding coming from the baseStyle of Input component, then we have `px="3"` which is a more specific prop. So, the padding of the rendered Input will be `padding : { paddingTop:0, paddingRight:3, paddingBottom:0, paddingLeft:3 }`.
