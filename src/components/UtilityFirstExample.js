import * as React from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';
import { NativeBaseProvider, Box } from 'native-base';

export function UtilityFirstExample() {
  const { isDarkTheme } = useThemeContext();
  const bgColor = isDarkTheme ? 'bg-gray-800' : 'bg-indigo-50';

  return (
    <NativeBaseProvider>
      <div className="tailwind">
        <div className={'p-8 text-center rounded-xl mb-8 ' + bgColor}>
          <img src="/img/ang-card.png" style={{ height: '200px' }} />
        </div>
      </div>
      <Box bg="cyan.500" p={3}>
        23
      </Box>
    </NativeBaseProvider>
  );
}
