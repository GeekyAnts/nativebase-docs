import React from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';

export default function NBHistory() {
  const { isDarkTheme } = useThemeContext();
  const textClassName = isDarkTheme ? '' : 'text-white';
  const lineColor = isDarkTheme ? 'border-blueGray-100' : 'border-blueGray-200';
  const bgColor = isDarkTheme ? 'bg-blueGray-600' : 'bg-blueGray-500';
  const activeBg = isDarkTheme ? 'bg-cyan-700' : 'bg-cyan-500';

  return (
    <div
      className={
        'border-0 border-l-4 border-solid ' + textClassName + ' ' + lineColor
      }
    >
      <div className="flex items-center">
        <div
          className="w-5 h-5 bg-gray-500 rounded-full"
          style={{ marginLeft: '-12px', flexShrink: 0 }}
        ></div>
        <div
          className={'ml-8 py-5 px-6 shadow-xl rounded-md ' + bgColor}
          style={{ maxWidth: '100%', width: '100%' }}
        >
          <h4>NativeBase v1.x</h4>
          <span>
            NativeBase started out as an open source framework that enabled
            developers to build high-quality mobile apps using React Native. The
            first version included UITabBar on iOS and Drawer on Android.
            NativeBase v1 was very well-received by the dev community.
          </span>
        </div>
      </div>

      <div className="flex items-center mt-8">
        <div
          className="w-5 h-5 bg-gray-500 rounded-full"
          style={{ marginLeft: '-12px', flexShrink: 0 }}
        ></div>
        <div
          className={'ml-8 py-5 px-6 shadow-xl rounded-md ' + bgColor}
          style={{ maxWidth: '100%', width: '100%' }}
        >
          <h4>NativeBase v2.x</h4>
          <span>
            The second version was released with new components, preset themes,
            unified icons & more. The main focus of v2 was to make components
            easy to theme with very few modifications. From v2.4.1 onwards,
            NativeBase also included support for the web.
          </span>
        </div>
      </div>

      <div className="flex items-center mt-8">
        <div
          className={'w-5 h-5 rounded-full ' + activeBg}
          style={{ marginLeft: '-12px', flexShrink: 0 }}
        ></div>
        <div
          className={'ml-8 py-5 px-6 shadow-xl rounded-md ' + activeBg}
          style={{ maxWidth: '100%', width: '100%' }}
        >
          <h4>NativeBase v3.x</h4>
          <span>
            We wanted to make NativeBase the go-to component library for anyone
            building with React Native and Web (in alpha). This version is
            accessible, highly customizable and consistent across android, iOS &
            web. That's not all though, read on for the full benefits of using
            v3.
          </span>
        </div>
      </div>
    </div>
  );
}
