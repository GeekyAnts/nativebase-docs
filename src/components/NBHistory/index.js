import React from 'react';
export default function NBHistory() {
  return (
    <div className="border-0 border-l-4 border-gray-100 border-solid">
      <div className="flex items-center">
        <div
          className="w-5 h-5 bg-indigo-500 rounded-full"
          style={{ marginLeft: '-12px' }}
        ></div>
        <div
          className="ml-8 py-4 px-8 bg-indigo-600 shadow-xl rounded-md"
          style={{ maxWidth: '80%', width: '500px' }}
        >
          <h4>v3</h4>
          <span>
            NativeBase is a free and open source UI component library for React
            Native to build native mobile apps for iOS and Android platforms.
            NativeBase also supports web from version 2.4.1.
          </span>
        </div>
      </div>

      <div className="flex items-center mt-8">
        <div
          className="w-5 h-5 bg-gray-500 rounded-full"
          style={{ marginLeft: '-12px' }}
        ></div>
        <div
          className="ml-8 py-4 px-8 bg-gray-700 shadow-xl rounded-md"
          style={{ maxWidth: '80%', width: '500px' }}
        >
          <h4>v2</h4>
          <span>
            NativeBase is a free and open source UI component library for React
            Native to build native mobile apps for iOS and Android platforms.
            NativeBase also supports web from version 2.4.1.
          </span>
        </div>
      </div>

      <div className="flex items-center mt-8">
        <div
          className="w-5 h-5 bg-gray-500 rounded-full"
          style={{ marginLeft: '-12px' }}
        ></div>
        <div
          className="ml-8 py-4 px-8 bg-gray-700 shadow-xl rounded-md"
          style={{ maxWidth: '80%', width: '500px' }}
        >
          <h4>v1</h4>
          <span>
            NativeBase is a free and open source UI component library for React
            Native to build native mobile apps for iOS and Android platforms.
            NativeBase also supports web from version 2.4.1.
          </span>
        </div>
      </div>
    </div>
  );
}
