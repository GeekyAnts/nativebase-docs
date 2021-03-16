import React from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';

export function Web() {
  // const { isDarkTheme } = useThemeContext();
  // TODO: change this
  const foldBg = '';
  // const foldBg = !isDarkTheme ? 'bg-gray-100' : '';
  return (
    <section className="relative">
      <div
        className={'absolute inset-0 pointer-events-none ' + foldBg}
        aria-hidden="true"
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h2 mb-4 text-4xl">Now Available for Web</h1>
            <p className="text-xl">
              Follow your instincts and make accurate predictions for web,
              Android & iOS. Test and maintain code easily.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
