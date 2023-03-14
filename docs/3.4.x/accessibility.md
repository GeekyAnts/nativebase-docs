---
id: accessibility
title: Accessibility
---

NativeBase comes with the latest accessibility standards out of the box including aria and role attributes, focus management, and keyboard navigation.

## Accessible Roles

NativeBase uses [React Native ARIA](https://react-native-aria.geekyants.com/) to implement [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.2/) standards to its components. This is designed to provide meaning for controls that aren't built using components provided by the platform.

## Accessible Labels

When a view is marked as accessible, it is a good practice to set an `accessibilityLabel` on the view, so that people who use voice-over know what element they have selected. Voice-over will read this string when a user selects the associated element. NativeBase with the use of [React Native ARIA](https://react-native-aria.geekyants.com/) does this for you out of the box.

## Keyboard Navigation

Many complex components, like Tabs and Dialog, come with expectations from users on how to interact with their content using a keyboard or other non-mouse input modalities. NativeBase Primitives provide basic keyboard support in accordance with the [WAI-ARIA authoring practices](https://www.w3.org/WAI/ARIA/apg/).

## Focus Management

Proper keyboard navigation and good labelling often go hand-in-hand with managing focus. When a user interacts with a component and something changes as a result, it's often helpful to move focus with the interaction. And for screen reader users, moving focus often results in an announcement to convey the new context, which relies on proper labelling.

In many NativeBase Components, we move focus based on the interactions a user normally makes in a given component. For example, in `Modal`, when the modal is opened, the focus is programmatically moved to the `first focusable element` and trapped inside the modal to anticipate a response to the prompt.
