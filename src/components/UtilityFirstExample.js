import * as React from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';

export function UtilityFirstExample() {
  const { isDarkTheme } = useThemeContext();
  const bgColor = isDarkTheme ? 'bg-gray-800' : 'bg-indigo-50';

  return (
    <div className="tailwind">
      <div className={'p-8 text-center rounded-xl mb-8 ' + bgColor}>
        <img src="/img/ang-card.png" style={{ height: '200px' }} />
      </div>
    </div>
  );
}
