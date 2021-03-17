import React from 'react';
import { CodeComponent } from './CodeComponent';

const exampleCode = `
import React, { useState } from "react";

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
`.trim();

export function Responsive() {
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
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="h2 mb-4 text-4xl">Responsive</h1>
          <p className="text-xl">
            Create responsive apps from the get-go. Save precious time and
            effort in developing and maintaining your code.
          </p>
        </div>
        <div
          className="flex flex-row rounded-md shadow-xl"
          // style={{ border: '1px solid black' }}
        >
          <div className="max-w-3xl mx-auto text-center flex-1">
            <div className="flex justify-center items-center pt-12 md:pt-20 py-10 px-8 md:py-16 md:px-12">
              <img
                className="rounded-3xl"
                style={{ zIndex: 1 }}
                src={'/src/img/kitchensink-ios.gif'}
                width="223"
                height="478"
                alt="Kitchen Sink iOS"
              />
            </div>
          </div>
          <div className="flex-1 bg-gray-700">
            <CodeComponent code={exampleCode} />
          </div>
        </div>
        {/* Circle part*/}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
          aria-hidden="true"
          style={{ zIndex: 0 }}
        >
          <svg
            width="1360"
            height="578"
            viewBox="0 0 1360 578"
            xmlns="http://www.w3.org/2000/svg"
            id="hithere"
          >
            <defs>
              <linearGradient x1="1" y1=".5" x2="0" y2="1" id="illustration-02">
                <stop stopColor="#34d399" offset="0%" />
                <stop stopColor="#818cf8" offset="100%" />
              </linearGradient>
            </defs>
            <g fill="url(#illustration-02)" fillRule="evenodd">
              <circle cx="280" cy="180" r="200" opacity="0.3" />
              {/* <circle cx="155" cy="443" r="64" opacity="0.3" /> */}
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
