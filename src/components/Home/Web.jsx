import React from 'react';
import { CodeComponent } from './CodeComponent';
import useThemeContext from '@theme/hooks/useThemeContext';

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
  const { isDarkTheme } = useThemeContext();
  const foldBg = !isDarkTheme ? 'bg-green-50' : 'bg-green-200';
  const [activePlatform, setActivePlatform] = React.useState('android');
  return (
    <section className={'relative ' + foldBg}>
      <div
        className={'absolute inset-0 pointer-events-none '}
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
            {activePlatform === 'web' ? (
              <img
                className="rounded-sm"
                style={{
                  zIndex: 1,
                  position: 'absolute',
                  left: '25%',
                  bottom: '25.5%',
                }}
                src={'/src/img/web-example.png'}
                height="300"
                alt="Web Example"
              />
            ) : (
              <img
                className="rounded-3xl"
                style={{ zIndex: 1 }}
                src={'/src/img/kitchensink-ios.gif'}
                width="223"
                height="478"
                alt="Kitchen Sink iOS"
              />
            )}
          </div>
          <div className="flex-1 flex flex-col justify-center pl-4">
            <h1 className="h2 mb-4 text-4xl text-gray-800">
              Now Available for both Mobile & Web
            </h1>
            <p className="text-xl text-gray-800">
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
            <li className="m-2 ml-4">
              <button
                className={
                  activePlatform === 'android'
                    ? 'inline-flex text-center py-2 px-4 rounded-full bg-transparent hover:bg-purple-100 transition duration-150 ease-in-out  border-purple-300 border-2 border-solid bg-purple-400 text-gray-100 hover:bg-purple-800'
                    : 'inline-flex text-center py-2 px-4 rounded-full bg-transparent hover:bg-purple-100 transition duration-150 ease-in-out  border-purple-300 border-2 border-solid text-purple-400'
                }
                href="#0"
                onClick={() => {
                  setActivePlatform('android');
                }}
              >
                Android
              </button>
            </li>
            <li className="m-2">
              <button
                className={
                  activePlatform === 'ios'
                    ? 'inline-flex text-center py-2 px-4 rounded-full bg-transparent hover:bg-purple-100 transition duration-150 ease-in-out  border-purple-300 border-2 border-solid bg-purple-400 text-gray-100 hover:bg-purple-800'
                    : 'inline-flex text-center py-2 px-4 rounded-full bg-transparent hover:bg-purple-100 transition duration-150 ease-in-out  border-purple-300 border-2 border-solid text-purple-400'
                }
                href="#0"
                onClick={() => {
                  setActivePlatform('ios');
                }}
              >
                iOS
              </button>
            </li>
            <li className="m-2">
              <button
                className={
                  activePlatform === 'web'
                    ? 'inline-flex text-center py-2 px-4 rounded-full bg-transparent hover:bg-purple-100 transition duration-150 ease-in-out  border-purple-300 border-2 border-solid bg-purple-400 text-gray-100 hover:bg-purple-800'
                    : 'inline-flex text-center py-2 px-4 rounded-full bg-transparent hover:bg-purple-100 transition duration-150 ease-in-out  border-purple-300 border-2 border-solid text-purple-400'
                }
                href="#0"
                onClick={() => {
                  setActivePlatform('web');
                }}
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
