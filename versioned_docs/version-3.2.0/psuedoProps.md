---
id: psuedo-props
title: Psuedo Props 101
---

Before getting into details of all the common Psuedo Props NativeBase has to offer let's check some key points that these psuedo props follow.

## Nesting psuedo props:

In versions before 3.2.0 there was a set order in which psuedo props can be nested, but it had a steep learning curve therefore we decided to remove it now. Any psuedo prop can be now nested to any level. With one small thing to keep in mind.

Example: So assume you want to change the text color of a button on its hover state.

### Do's

```jsx
<Button
  _hover={{
    _text: { color: 'secondary.400' },
  }}
>
  Change My Color
</Button>
```

### Dont's

```jsx
<Button
  _text={{
    _hover: { color: 'secondary.400' },
  }}
>
  Change My Color
</Button>
```

The above thing translates to a Text(not Button) when hovered changes its color to `secondary.400` .

## Precedence Order for Psuedo Props:

Now all the psuedo props follows a specific order that defines which psuedo prop can override the other psuedo prop. You can find the precedence values associated with each psuedo prop.

```jsx
_disabled(100);

_pressed(70);
_hover(60);
_focus(50);
_focusVisible(55);

_active(30);
_checked(30);
_readOnly(40);
_invalid(40);

_web(10);
_android(10);
_ios(10);

_light(10);
_dark(10);
```
