import React from 'react';
export default function SizingTheme() {
  return (
    <div style={{ fontSize: '10px' }}>
      <div className="flex w-10/12 pl-0 text-gray-900 md:pl-36 overflow-hidden">
        <table className="table-auto sizing-theme border-none p-0">
          <thead className="border-none">
            <tr className="border-none">
              <th className="border-none">Value</th>
              <th className="border-none text-left px-6">Pixels</th>
              <th className="border-none">Representation</th>
            </tr>
          </thead>
          <tbody className="border-none">
            <tr className="border-none py-0">
              <td className="border-none py-2">1</td>
              <td className="flex border-none px-6 py-2 space-x-4 items-center">
                <span className="w-6">4px</span>
                <div
                  className="h-3 bg-purple-800"
                  style={{ width: '4px' }}
                ></div>
              </td>
              <td className="border-none px-4 py-2"></td>
            </tr>
            <tr className="bg-white border-b-1 border-gray-200">
              <td className="border-none py-2 ">2</td>
              <td className="flex border-none  px-6 py-2 space-x-4 items-center">
                <span className="w-6">8px</span>
                <div
                  className="h-3 bg-purple-800"
                  style={{ width: '8px' }}
                ></div>
              </td>
              <td className="border-none py-2"></td>
            </tr>
            <tr className="border-1 border-gray-200 bg-white">
              <td className="border-none py-2">3</td>
              <td className="flex border-none px-6 py-2  space-x-4 items-center">
                <span className="w-6">12px</span>
                <div
                  className="h-3 bg-purple-800"
                  style={{ width: '12px' }}
                ></div>
              </td>
              <td className="border-none py-2"></td>
            </tr>
            <tr className="border-b-1 border-gray-200 bg-white">
              <td className="border-none py-2">4</td>
              <td className="flex border-none px-6 py-2 space-x-4 items-center">
                <span className="w-6">16px</span>
                <div
                  className="h-3 bg-purple-800"
                  style={{ width: '16px' }}
                ></div>
              </td>
              <td className="border-none"></td>
            </tr>
            <tr className="border-b-1 border-gray-200 bg-white">
              <td className="border-none py-2">5</td>
              <td className="flex border-none px-6 py-2 space-x-4 items-center">
                <span className="w-6">20px</span>
                <div
                  className="h-3 bg-purple-800"
                  style={{ width: '20px' }}
                ></div>
              </td>
              <td className="border-none py-2"></td>
            </tr>
            <tr className="border-b-1 border-gray-200 bg-white">
              <td className="border-none py-2">6</td>
              <td className="flex px-6 py-2 border-none space-x-4 items-center">
                <span className="w-6">24px</span>
                <div
                  className="h-3 bg-purple-800 "
                  style={{ width: '24px' }}
                ></div>
              </td>
              <td className="border-none py-2 bg-white"></td>
            </tr>
            <tr className="border-b-1 border-gray-200">
              <td className="border-none py-2">7</td>
              <td className="flex px-6 py-2 border-none  space-x-4 items-center">
                <span className="w-6">28px</span>
                <div
                  className="h-3 bg-purple-800"
                  style={{ width: '28px' }}
                ></div>
              </td>
              <td className="border-none py-2"></td>
            </tr>
            <tr className="border-b-1 border-gray-200 bg-white">
              <td className="border-none py-2">8</td>
              <td className="flex border-none py-2 px-6  space-x-4 items-center">
                <span className="w-6">32px</span>
                <div
                  className="h-3 bg-purple-800"
                  style={{ width: '32px' }}
                ></div>
              </td>
              <td className="border-none py-2"></td>
            </tr>
            <tr className="border-b-1 border-gray-200 bg-white">
              <td className="border-none py-2">9</td>
              <td className="flex border-none py-2 px-6  space-x-4 items-center">
                <span className="w-6">36px</span>
                <div
                  className="h-3 bg-purple-800"
                  style={{ width: '36px' }}
                ></div>
              </td>
              <td className="border-none py-2"></td>
            </tr>
            <tr className="border-1 border-gray-200 bg-white">
              <td className="border-none py-2">10</td>
              <td className="flex border-none py-2 px-6  space-x-4 items-center">
                <span className="w-6">40px</span>
                <div
                  className="h-3 bg-purple-800"
                  style={{ width: '40px' }}
                ></div>
              </td>
              <td className="border-none py-2"></td>
            </tr>
            <tr className="border-1  border-gray-200 bg-white">
              <td className="border-none py-2">12</td>
              <td className="flex px-6 border-none py-2 space-x-4 items-center">
                <span className="w-6">48px</span>
                <div
                  className="h-3 bg-purple-800"
                  style={{ width: '48px' }}
                ></div>
              </td>
              <td className="border-none py-2"></td>
            </tr>
            <tr className="border-1 border-gray-200 bg-white">
              <td className="border-none py-2">16</td>
              <td className="flex border-none py-2 px-6  space-x-4 items-center">
                <span className="w-6">64px</span>
                <div
                  className="h-3 bg-purple-800"
                  style={{ width: '64px' }}
                ></div>
              </td>
              <td className="border-none py-2"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
