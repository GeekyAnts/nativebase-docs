import { HStack, useColorModeValue } from 'native-base';
import React from 'react';

export default function NativebaseLogo() {
  const isLightMode = useColorModeValue(true, false);
  return (
    <HStack alignItems="center">
      {isLightMode ? (
        <img alt="topgeek logo" src="/img/topgeek-logo-dark.svg" width="120" />
      ) : (
        <img alt="topgeek logo" src="/img/topgeek-logo-white.svg" width="120" />
      )}
    </HStack>
  );
}
