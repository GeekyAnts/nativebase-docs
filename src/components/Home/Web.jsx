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
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="flex items-center">
          <div
            className="flex-1 bg-gray-700 flex flex-col justify-center"
            style={{ height: 420 }}
          >
            <CodeComponent code={exampleCode} />
          </div>
          <div className="flex flex-1 items-center">
            <img
              className="rounded-3xl"
              style={{ zIndex: 1 }}
              src={'/src/img/kitchensink-ios.gif'}
              width="223"
              height="478"
              alt="Kitchen Sink iOS"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center pl-4">
            <h1 className="h2 mb-4 text-4xl">
              Now Available for both Mobile & Web
            </h1>
            <p className="text-xl">
              NativeBase 3.0 I powered by React Native Web. Build consistent UIs
              across Web, Android and iOS with ease.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <ul className="list-none flex justify-center text-sm font-medium mb-0 ml-3">
            <li className="m-2">
              <button
                className="inline-flex text-center py-2 px-4 rounded-full border-2 border-solid invisible"
                href="#0"
              >
                Empty
              </button>
            </li>
            <li className="m-2">
              <button
                className="inline-flex text-center text-gray-100 py-2 px-4 rounded-full bg-purple-400 hover:bg-purple-800 transition duration-150 ease-in-out border-purple-300 border-2 border-solid"
                href="#0"
              >
                Android
              </button>
            </li>
            <li className="m-2">
              <button
                className="inline-flex text-center py-2 px-4 rounded-full bg-transparent hover:bg-purple-100  transition duration-150 ease-in-out text-purple-400 border-purple-300 border-2 border-solid"
                href="#0"
              >
                iOS
              </button>
            </li>
            <li className="m-2">
              <button
                className="inline-flex text-center py-2 px-4 rounded-full bg-transparent hover:bg-purple-100 transition duration-150 ease-in-out text-purple-400 border-purple-300 border-2 border-solid"
                href="#0"
              >
                Web
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
