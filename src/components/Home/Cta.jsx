import React from "react";

export function Cta() {
  return (
    <section className="relative">
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
              <stop offset="0" stopColor="#6186f4" />
              <stop offset="1" stopColor="#6246e4" />
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
              <stop offset="0" stopColor="#6186f4" />
              <stop offset="1" stopColor="#6246e4" />
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* CTA box */}
          <div
            className="bg-primary-400 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl"
            data-aos="zoom-y-out"
          >
            <div className="flex flex-col lg:flex-row justify-between items-center">
              {/* CTA content */}
              <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left">
                <h3 className="h3 text-white mb-2 text-3xl">
                  Chat with us on Discord
                </h3>
                <p className="text-white text-lg opacity-75">
                  We have a generous free tier available to get you started
                  right away.
                </p>
              </div>

              {/* CTA button */}
              <div>
                <a
                  className="btn text-primary-600 bg-white rounded-md py-3 px-5"
                  href="https://discord.com/invite/TSgCw2UPmb"
                >
                  Join Discord
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
