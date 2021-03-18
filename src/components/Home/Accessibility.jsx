import React from 'react';

export function Accessibility() {
  return (
    <section className="relative">
      <div className="my-12 md:my-20">
        <div
          className="bg-primary-400 justify-center flex w-full shadow-2xl "
          data-aos="zoom-y-out"
        >
          <div
            style={{ maxWidth: 1440 }}
            className="flex flex-col w-full text-left  py-10 px-12 md:py-16 mg:px-24 lg:px-36"
          >
            <h3 className="h3 text-white text-4xl mb-0">
              Out of the Box Accessibility
            </h3>
            <p className="text-white text-lg mb-0">
              Powered by{' '}
              <a
                className="span text-white"
                target="_blank"
                rel="noopener noreferrer"
                href="https://react-native-aria.geekyants.com/"
              >
                React Native ARIA.
              </a>
            </p>
            <p className="pt-4 mb-0 max-w-xl">
              React Native ARIA provides React hooks that enable you to build
              accessible design systems in no time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
