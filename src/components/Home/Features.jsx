import React from "react";
import illustration from "../../img/Illustration.png";
import qrCode from "../../img/QR-code.png";
import expo from "../../img/expo.png";

export function Features() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4 text-4xl">
              NativeBase Kitchen Sink
            </h1>
            <p className="text-xl text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </p>
          </div>

          {/* Top image */}
          <div className="pb-12 md:pb-16">
            <img
              src={illustration}
              width="1104"
              height="325"
              alt="Features top"
            />
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-10 lg:col-span-8 md:mt-6"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8 flex flex-row items-center">
                <img src={qrCode} alt="QR Code" width="250" height="247" />
                <div className="ml-6">
                  <img src={expo} alt="expo" width="40" height="40" />
                  <p className="text-xl text-gray-600">
                    Scan with the Expo app on your android device to see the
                    demo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
