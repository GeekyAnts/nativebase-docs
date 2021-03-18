import React from 'react';
import Discord from '../../img/Discord';

export function Cta() {
  return (
    <section className="relative">
      {/* visible on sm */}
      <div className="block sm:hidden">
        <div
          className="absolute -left-6 -bottom-0 pointer-events-none"
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 80 80"
          >
            <defs>
              <linearGradient
                id="linear-gradient"
                x1="1"
                y1="0.5"
                x2="0"
                y2="0.5"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0" stopColor="#34d399" />
                <stop offset="1" stopColor="#818cf8" />
              </linearGradient>
            </defs>
            <circle
              id="Oval"
              cx="40"
              cy="40"
              r="40"
              opacity="0.3"
              fill="url(#linear-gradient)"
            />
          </svg>
        </div>
        <div
          className="absolute -right-36 -top-24 pointer-events-none"
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="256"
            height="256"
            viewBox="0 0 256 256"
          >
            <defs>
              <linearGradient
                id="linear-gradient"
                x1="1"
                y1="0.5"
                x2="0"
                y2="0.5"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0" stopColor="#34d399" />
                <stop offset="1" stopColor="#818cf8" />
              </linearGradient>
            </defs>
            <circle
              id="Oval"
              cx="128"
              cy="128"
              r="128"
              opacity="0.3"
              fill="url(#linear-gradient)"
            />
          </svg>
        </div>

        <div>
          <div className="pb-12 md:pb-20">
            <div
              className="flex flex-row justify-around items-center bg-primary-400 py-10 px-2 md:py-16 md:px-16 shadow-2xl"
              data-aos="zoom-y-out"
            >
              <div className="p-4 rounded-full flex justify-center items-center bg-indigo-400">
                <Discord fill="white" height={40} width={40} />
              </div>
              <div>
                <div className="text-center">
                  <h3 className="h3 text-white text-lg mb-3">
                    Chat with us on Discord
                  </h3>
                </div>
                <div>
                  <a
                    className="btn text-primary-700 bg-white rounded-md py-3 px-3 text-sm"
                    href="https://discord.com/invite/TSgCw2UPmb"
                  >
                    Join the #NativeBase Discord!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* visible on md and above */}
      <div className="hidden md:block">
        <div
          className="absolute -left-6 -bottom-0 pointer-events-none"
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 80 80"
          >
            <defs>
              <linearGradient
                id="linear-gradient"
                x1="1"
                y1="0.5"
                x2="0"
                y2="0.5"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0" stopColor="#34d399" />
                <stop offset="1" stopColor="#818cf8" />
              </linearGradient>
            </defs>
            <circle
              id="Oval"
              cx="40"
              cy="40"
              r="40"
              opacity="0.3"
              fill="url(#linear-gradient)"
            />
          </svg>
        </div>
        <div
          className="absolute -right-36 -top-24 pointer-events-none"
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="256"
            height="256"
            viewBox="0 0 256 256"
          >
            <defs>
              <linearGradient
                id="linear-gradient"
                x1="1"
                y1="0.5"
                x2="0"
                y2="0.5"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0" stopColor="#34d399" />
                <stop offset="1" stopColor="#818cf8" />
              </linearGradient>
            </defs>
            <circle
              id="Oval"
              cx="128"
              cy="128"
              r="128"
              opacity="0.3"
              fill="url(#linear-gradient)"
            />
          </svg>
        </div>

        <div>
          <div className="pb-12 md:pb-20 ">
            <div
              className="bg-primary-400 justify-center flex w-full shadow-2xl"
              data-aos="zoom-y-out"
            >
              <div
                style={{ maxWidth: 1440 }}
                className="flex flex-row justify-around items-center w-full py-10 px-12 md:py-16 md:px-16 "
              >
                <div className="p-4 rounded-full h-28 w-28 flex justify-center items-center bg-indigo-400">
                  <Discord fill="white" height={56} width={56} />
                </div>
                <div className="text-center">
                  <h3 className="h3 text-white text-3xl mb-0">
                    Chat with us on Discord
                  </h3>
                </div>
                <div>
                  <a
                    className="btn text-primary-700 bg-white rounded-md py-3 px-5 text-lg no-underline"
                    href="https://discord.com/invite/TSgCw2UPmb"
                  >
                    Join the #NativeBase Discord!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
