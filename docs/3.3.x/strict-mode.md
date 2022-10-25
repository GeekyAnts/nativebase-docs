---
id: strict-mode
title: Strict Mode
---

NativeBase comes with its very own Strict Mode that lets you control the level of strictness for your App and Dev environment. A really handy tool to maintain best practices throughout your codebase.

## What it does?

Strict Mode is a config that you pass into NativeBase config. It takes 3 values `error`, `warn` and `off` by default it is set to `warn`. Based on your chosen option it checks for every prop in your project if you have used proper `token values` from theme and you are only passing `string values` to the props and if not then it throws an error or warning or does nothing.

## Levels of Strictness

- **error** - Choosing this mode will show an error indicating the cause of the error.
- **warn** - Choosing this mode will show a warning indicating the issue.
- **off** - Choosing this mode simply means you want to go rogue and not follow the design system and best practices.

## How to change the mode?

To change the `strictMode` create a `config object` like below and choose you `strictMode` value from `error`, `warn` and `off` which ever suits your use-case :

```jsx
import { INativebaseConfig, NativeBaseProvider } from 'native-base';

// ignore the INativebaseConfig if you are not using typescript

const config: INativebaseConfig = {
  // rest of the config keys like dependencies can go here
  strictMode: 'warn',
};
```

and pass this as a prop in your App `NativeBaseProvider`

```jsx
<NativeBaseProvider config={config}>
  <App />
</NativeBaseProvider>
```
