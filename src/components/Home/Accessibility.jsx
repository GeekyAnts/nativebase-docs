import React from 'react';

export function Accessibility() {
  return (
    <section className="relative">
      <div className="my-12 md:my-20">
        <div
          className="flex flex-col bg-primary-400 py-10 px-12 md:py-16 md:px-16 shadow-2xl text-left"
          data-aos="zoom-y-out"
        >
          <h3 className="h3 text-white text-4xl mb-0">
            Out of the Box Accessibility
          </h3>
          <a
            className="text-white text-lg mb-0"
            href="http://react-native-aria.geekyants.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by React Native ARIA
          </a>
          <p className="pt-4 mb-0 max-w-xl">
            React Native ARIA provides React hooks that enable you to build
            accessible design systems in no time.
          </p>
        </div>
      </div>
    </section>
  );
}
