import React from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';
import { SVGs } from './icons';

export function NewsLetter() {
  const { isDarkTheme } = useThemeContext();
  const subHeadingColor = !isDarkTheme ? 'text-gray-600' : 'text-gray-400';

  return (
    <section className={'relative '}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center pb-12 md:pb-20">
          <div className="relative bg-blue-500 overflow-hidden mt-20">
            <div className="max-w-2xl relative mx-auto h-full flex justify-center text-left px-10 py-16 flex-col">
              <h2 className="text-white text-3xl text-left font-bold">
                Join our Newsletter
              </h2>
              <p className="text-white text-left">
                Lorem ipsum is a placeholder text commonly used to demonstrate
              </p>
              <div className="text-left mt-5 flex h-10">
                <div>
                  <input
                    type="text"
                    className=" w-72 md:w-96 outline-none text-gray-800 placeholder-gray-400 px-3  border-0 h-full"
                    placeholder="Email Address"
                  ></input>
                </div>
                <a className="btn flex items-center justify-center border-0 bg-green-600 w-10 h-full">
                  {SVGs.RightIcon}
                </a>
              </div>
              <div className="right-0 -bottom-8 md:-bottom-12 absolute">
                {SVGs['Email']}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
