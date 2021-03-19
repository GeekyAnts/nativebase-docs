import React from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';

export function Web() {
  const { isDarkTheme } = useThemeContext();
  const foldBg = !isDarkTheme ? 'bg-green-50' : 'bg-green-200';

  return (
    <section className={'relative ' + foldBg}>
      <div
        className={'absolute inset-0 pointer-events-none '}
        aria-hidden="true"
      />
      {/* visible on sm */}
      <div className="block sm:hidden">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <div className="flex-1 flex flex-col justify-center p-4">
            <h1 className="h2 mb-4 text-3xl text-gray-800 text-center">
              Now Available for both Mobile & Web
            </h1>
            <p className="text-xl text-gray-600">
              Powered by{' '}
              <a
                className="span"
                target="_blank"
                rel="noopener noreferrer"
                href="https://necolas.github.io/react-native-web/"
              >
                React Native Web.{' '}
              </a>{' '}
              Build consistent UIs across Web, Android and iOS with ease.
            </p>
          </div>
          <div
            data-snack-id="@theankurkedia/card"
            data-snack-platform="web"
            data-snack-preview="true"
            data-snack-theme="dark"
            style={{
              overflow: 'hidden',
              background: '#212121',
              // border: '1px solid var(--color-border)',
              borderRadius: '4px',
              width: '100%',
              height: '500px',
            }}
          />
        </div>
      </div>
      {/* visible on md and above */}
      <div className="hidden md:block">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h2 mb-4 text-4xl text-gray-800">
              Now Available for both Mobile & Web
            </h1>
            <p className={'text-xl text-gray-600'}>
              Powered by{' '}
              <a
                className="span"
                target="_blank"
                rel="noopener noreferrer"
                href="https://necolas.github.io/react-native-web/"
              >
                React Native Web.{' '}
              </a>{' '}
              Build consistent UIs across Web, Android and iOS with ease.
            </p>
          </div>
          <div className="flex items-center">
            <div
              data-snack-id="@theankurkedia/card"
              data-snack-platform="web"
              data-snack-preview="true"
              data-snack-theme="dark"
              style={{
                overflow: 'hidden',
                background: '#212121',
                // border: '1px solid var(--color-border)',
                borderRadius: '4px',
                width: '100%',
                height: '500px',
              }}
            />
          </div>
          {/* <div className="mt-10">
            <ul className="list-none flex justify-center text-sm font-medium mb-0 pl-0">
              <li className="m-2">
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
          </div> */}
        </div>
      </div>
    </section>
  );
}
