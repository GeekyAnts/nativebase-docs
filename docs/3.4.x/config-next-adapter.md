---
id: config-next-adapter
title: Configuration of NativeBase next-adapter
---

## config parameter is an object with 3 keys

- ** `Dependencies` ** : List of dependencies which are transpiled using [next-transpile-modules](https://github.com/martpie/next-transpile-modules) .

```jsx
const { withNativebase } = require('@native-base/next-adapter');

module.exports = withNativebase({
  dependencies: [
    '@expo/next-adapter',
    'react-native-vector-icons',
    'react-native-vector-icons-for-web',
  ],
});
```

- ** `Plugins` **: It is an array containing all plugins and their configuration.

```jsx
const { withNativebase } = require('@native-base/next-adapter');
const sass = require('@zeit/next-sass');

module.exports = withNativebase({
  plugins: [[sass]],
});
```

- ** `nextConfig` **: Configuration for the plugin. You can also overwrite specific configuration keys for a phase:

```jsx
const { withNativebase } = require('@native-base/next-adapter');

module.exports = withNativebase({
  nextConfig: {
    projectRoot: __dirname,
    webpack: (config, options) => {
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        'react-native$': 'react-native-web',
        '@expo/vector-icons': 'react-native-vector-icons',
      };
      config.resolve.extensions = [
        '.web.js',
        '.web.ts',
        '.web.tsx',
        ...config.resolve.extensions,
      ];
      return config;
    },
  },
});
```

## Phase

If the plugin should only be applied in specific phases, you can specify them here. You can use all phases [next.js provides](https://github.com/zeit/next.js/blob/canary/packages/next/next-server/lib/constants.ts#L1-L4).

```jsx
const { withNativebase } = require('@native-base/next-adapter');
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants');
const sass = require('@zeit/next-sass');

module.exports = withNativebase([
  [
    sass,
    {
      cssModules: true,
      cssLoaderOptions: {
        localIdentName: '[path]___[local]___[hash:base64:5]',
      },
    },
    [PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD],
  ],
]);
```
