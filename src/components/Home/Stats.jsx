import React from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';

export function Stats() {
  const { isDarkTheme } = useThemeContext();
  const headingColor = !isDarkTheme ? 'text-gray-800' : 'text-gray-200';

  return (
    <section>
      <div
        className="rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl pb-12 md:pb-20 max-w-6xl mx-auto px-4 sm:px-6"
        data-aos="zoom-y-out"
      >
        <h1 className={`h2 mb-6 text-4xl text-center ${headingColor}`}>
          We are growing
        </h1>
        <div class="grid grid-cols-2 gap-4">
          <div className="max-w-3xl mx-auto text-left">
            <p className="mb-0 text-6xl text-indigo-400 font-semibold">38.2k</p>
            <p className="text-xl">Downloads per week</p>
          </div>
          <div className="max-w-3xl mx-auto text-left">
            <p className="mb-0 text-6xl text-indigo-400 font-semibold">14.8k</p>
            <p className="text-xl">Github stars</p>
          </div>
          <div className="max-w-3xl mx-auto text-left ">
            <p className="mb-0 pr-20 text-6xl text-indigo-400 font-semibold">
              196
            </p>
            <p className="text-xl">Contributors</p>
          </div>
          <div className="max-w-3xl mx-auto text-left">
            <p className="mb-0 text-6xl text-indigo-400 font-semibold">53.6k</p>
            <p className="text-xl">Dependents</p>
          </div>
        </div>
      </div>
    </section>
  );
}
