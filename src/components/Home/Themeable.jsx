import React from 'react';
import { CodeComponent } from './CodeComponent';

const exampleCode = `
<>
  <Alert variant="left-accent" status="success">
    <Alert.Icon />
    <Alert.Title>Success</Alert.Title>
  </Alert>
  <Alert variant="solid" status="warning">
    <Alert.Icon />
    <Alert.Title>Warning</Alert.Title>
  </Alert>
  <Alert variant="top-accent" status="error">
    <Alert.Icon />
    <Alert.Title>Error</Alert.Title>
  </Alert>
  <Alert  variant="outline" status="info">
    <Alert.Icon />
    <Alert.Title>Ingo</Alert.Title>
  </Alert>
</>
`.trim();

export function Themeable() {
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
          <h1 className="h2 mb-4 text-4xl">Themeable</h1>
          <p className="text-xl">
            Themeability is one of the core elements of NativeBase. Customise
            your app theme and component styles to your heart's content.
          </p>
        </div>
        <div
          className="flex flex-row rounded-md shadow-xl"
          // style={{ border: '1px solid black' }}
        >
          <div
            className="flex-1 bg-gray-700 w-1 overflow-hidden rounded-lg"
            style={{ zIndex: 1, maxHeight: '39rem' }}
          >
            <CodeComponent code={exampleCode} />
          </div>
          <div className="max-w-3xl mx-auto text-center flex-1 flex justify-center items-center pt-12 md:pt-20 py-10 px-8 md:py-16 md:px-12">
            <img
              className="rounded-3xl"
              src={'/img/home/themeable.png'}
              width="223"
              height="478"
              alt="NativeBase Themeable"
            />
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
              <circle cx="300" cy="260" r="200" opacity="0.3" />
              {/* <circle cx="155" cy="443" r="64" opacity="0.3" /> */}
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
