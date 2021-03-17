import React from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';

export function WatchTalk() {
  const { isDarkTheme } = useThemeContext();
  const foldBg = !isDarkTheme ? 'bg-green-50' : 'bg-green-200';
  return (
    <section className={'relative mb-20 ' + foldBg}>
      <div
        className={'absolute inset-0 pointer-events-none '}
        aria-hidden="true"
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 min-h-6xl">
        <center>
          <h1 className="h2 mb-10 text-gray-800 text-4xl">Watch the talk</h1>
          <iframe
            className="mx-auto"
            width="70%"
            height="400"
            src="https://www.youtube.com/embed/qHNb0rTSSJA"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </center>
      </div>
      <div
        className="absolute left-1/3 transform -translate-x-1/2 top-1/4  pointer-events-none"
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
    </section>
  );
}
