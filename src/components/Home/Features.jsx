import React from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';
import illustration from '../../img/Illustration.png';
import qrCode from '../../img/QR-code.png';
import expo from '../../img/expo.png';

export function Features() {
  const { isDarkTheme } = useThemeContext();
  const foldBg = !isDarkTheme ? 'bg-gray-100' : '';
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className={'absolute inset-0 pointer-events-none ' + foldBg}
        aria-hidden="true"
      />
      {/* <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div> */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h2 mb-4 text-4xl">Now Available for Web</h1>
            <p className="text-xl">
              Follow your instincts and make accurate predictions for web,
              Android & iOS. Test and maintain code easily.
            </p>
          </div>
        </div>
      </div>
      {/* <div
        className={
          'my-16 md:my-20 p-8 rounded-md relative max-w-6xl mx-auto px-4 sm:px-6'
        }
      >
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col justify-center">
            <h1 className="h2 mb-4 text-4xl ">Now Available for Web</h1>
            <p className="text-xl ">
              Follow your instincts and make accurate predictions for web,
              Android & iOS. Test and maintain code easily.
            </p>
          </div>
          <div className="col-span-2">
            <div
              data-snack-id="@theankurkedia/alert-status"
              data-snack-platform="web"
              data-snack-preview="true"
              data-snack-theme="dark"
              style={{
                overflow: 'hidden',
                background: '#212121',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                width: '100%',
                height: '500px',
              }}
            />
          </div>
        </div>
      </div> */}

      <div
        className={
          'my-16 md:my-20 p-8 rounded-md relative max-w-6xl mx-auto px-4 sm:px-6'
        }
      >
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <div
              data-snack-id="@theankurkedia/accessible"
              data-snack-platform="web"
              data-snack-preview="true"
              data-snack-theme="dark"
              style={{
                overflow: 'hidden',
                background: '#212121',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                width: '100%',
                height: '500px',
              }}
            />
          </div>
          <div className="flex flex-col justify-center text-right">
            <h1 className="h2 mb-4 text-4xl">Accessible</h1>
            <p className="text-xl">
              Maximise user experience for your apps. Build in accordance with
              the latest accessibility standards.
            </p>
          </div>
        </div>
      </div>
      <div
        className={
          'my-16 md:my-20 p-8 rounded-md relative max-w-6xl mx-auto px-4 sm:px-6'
        }
      >
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col justify-center">
            <h1 className="h2 mb-4 text-4xl">Responsive</h1>
            <p className="text-xl">
              Create responsive apps from the get-go. Save precious time and
              effort in developing and maintaining your code.
            </p>
          </div>
          <div className="col-span-2">
            <div
              data-snack-id="@theankurkedia/3e80eb"
              data-snack-platform="web"
              data-snack-preview="true"
              data-snack-theme="dark"
              style={{
                overflow: 'hidden',
                background: '#212121',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                width: '100%',
                height: '500px',
              }}
            />
          </div>
        </div>
      </div>
      <div
        className={
          'my-16 md:my-20 p-8 rounded-md relative max-w-6xl mx-auto px-4 sm:px-6'
        }
      >
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <div
              data-snack-id="@theankurkedia/customizing-variants"
              data-snack-platform="web"
              data-snack-preview="true"
              data-snack-theme="dark"
              style={{
                overflow: 'hidden',
                background: '#212121',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                width: '100%',
                height: '500px',
              }}
            />
          </div>
          <div className="flex flex-col justify-center text-right">
            <h1 className="h2 mb-4 text-4xl">Themeable</h1>
            <p className="text-xl">
              Customise your app theme and component styles. Personalise for
              your brand voice and target audience.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="mb-12 md:mb-16 mt-10">
          <ul className="list-none flex flex-wrap justify-center text-sm font-medium -m-2">
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
        </div> */}
    </section>
  );
}
