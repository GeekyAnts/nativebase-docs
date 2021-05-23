import React from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';
import { SVGs } from './icons';
const experts = {
  sanket: 'https://avatars.githubusercontent.com/u/1733433?v=4',
  atul: 'https://avatars.githubusercontent.com/u/1733436?v=4',
};
const articles = [
  {
    name:
      'Notifications on React Native using Firebase Cloud Messaging with Notifee.',
    link:
      'https://blog.geekyants.com/notifications-on-react-native-using-firebase-cloud-messaging-with-notifee-b9a1bd47177f',
    src: 'https://miro.medium.com/max/4800/1*hFL8YOVEMRVznTHcgUNstA.jpeg',
  },
  {
    name: 'React Hooks vs Class Component',
    link:
      'https://blog.geekyants.com/react-hooks-vs-class-component-f13ec94505f8',
    src: 'https://miro.medium.com/max/2000/1*Q7reyHNWLUXi3LcOs-bjjw.jpeg',
  },
  {
    name: 'React & React Native Virtual Meetup #16',
    link:
      'https://blog.geekyants.com/react-react-native-virtual-meetup-16-c0030f48a8f1',
    src: 'https://miro.medium.com/max/3000/1*GLDQpQCYMUs3DPa7-6F5fQ.png',
  },
];
const socialsHandles = [
  {
    name: 'Github',
    svg: SVGs['Github'],
    color: '#333333',
  },
  {
    name: 'Stackoverflow',
    svg: SVGs['Stackoverflow'],
    color: '#F48024',
  },
  {
    name: 'Discord',
    svg: SVGs['Discord'],
    color: '#5865F2',
  },
  {
    name: 'Twitter',
    svg: SVGs['Twitter'],
    color: '#1DA1F2',
  },
  {
    name: 'Facebook',
    svg: SVGs['Facebook'],
    color: '#4267B2',
  },
];
export function Community() {
  const { isDarkTheme } = useThemeContext();
  const headingColor = !isDarkTheme ? 'text-gray-800' : 'text-gray-200';
  const subHeadingColor = !isDarkTheme ? 'text-gray-600' : 'text-gray-400';
  return (
    <section>
      <div className="">
        <div className="py-12 px-6 md:px-0 md:pt-20 md:pb-20">
          <div className="flex flex-col space-x-0 space-y-2 md:flex-row md:space-y-0  md:space-x-7">
            <div className="mt-2">
              <span className="w-12 h-12 items-center rounded-md flex justify-center bg-blue-400">
                {SVGs.Logo}
              </span>
            </div>
            <div className="w-full">
              <h2 className={`max-w-3xl leading-snug text-4xl ${headingColor}`}>
                <span>Our</span>{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                  Community
                </span>
              </h2>
              <p
                className={`max-w-3xl font-medium text-xl mt-7 leading-normal ${subHeadingColor}`}
              >
                We have a lively community built on our shared love for React &
                React Native. Join us!
              </p>
              <section className="py-10 w-full grid grid-cols-1 gap-0.5 md:grid-cols-2 lg:grid-cols-3">
                {socialsHandles.map((handle, idx) => {
                  return (
                    <div
                      key={idx}
                      className={`px-8 py-8 h-40`}
                      style={{ backgroundColor: handle.color }}
                    >
                      <p>{handle.svg}</p>
                      <p className="text-white font-semibold">{handle.name}</p>
                    </div>
                  );
                })}
              </section>
            </div>
          </div>

          <div className="pb-20 hidden flex flex-col  items-center">
            <div className="max-w-3xl w-full  mx-auto">
              <div className="flex justify-center">
                <div className="h-16 w-16 md:w-32 md:h-32 lg:h-40 lg:w-40 bg-gray-200 rounded-full"></div>
                <div className="h-16 w-16 md:w-32 md:h-32 lg:h-40 lg:w-40 -ml-2  bg-gray-200 lg:-ml-8 rounded-full"></div>
                <div className="h-16 w-16 md:w-32 border-none md:h-32 lg:h-40 lg:w-40 -ml-2 -mr-2  bg-gray-200 ring-8 ring-white  bg-red-500 lg:-ml-8 lg:-mr-8 z-30 rounded-full">
                  <img
                    className=" w-full rounded-full h-full object-cover"
                    src={experts['sanket']}
                    target="_blank"
                    width="352"
                    height="198"
                    alt="sanket"
                    objectfit="cover"
                  />
                </div>
                <div className="h-16 w-16 md:w-32 md:h-32 lg:h-40 lg:w-40 -mr-2 lg:-mr-8 z-20 rounded-full">
                  <img
                    className=" w-full rounded-full h-full object-cover"
                    src={experts['atul']}
                    width="352"
                    height="198"
                    alt="atul"
                    objectfit="cover"
                  />
                </div>
                <div className="h-16 w-16 md:w-32 md:h-32 lg:h-40 lg:w-40 bg-gray-200 rounded-full"></div>
              </div>
              <div className="mt-8 text-center">
                <h1 className="inline  font-black text-3xl">
                  Join our Experts on
                </h1>
                <div className="inline-block align-middle -ml-2">
                  <a className="" href="https://discord.com/invite/TSgCw2UPmb">
                    {/* {SVGs['Discord']} */}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Articles list */}
          <div className="max-w-sm hidden mx-auto md:max-w-none px-0 lg:px-14">
            <div className="grid gap-2 md:gap-12 md:grid-cols-3 md:col-gap-4 md:row-gap-6 items-start">
              {articles.map(({ name, link, src }, idx) => {
                return (
                  <div className="bg-blue-900 h-48 rounded-md" key={idx}></div>
                  // <article
                  //   className="flex flex-col h-full"
                  //   data-aos="zoom-y-out"
                  // >
                  //   <header>
                  //     <a
                  //       href={link}
                  //       className="block mb-6"
                  //       target="_blank"
                  //       rel="noopener noreferrer"
                  //     >
                  //       <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded mx-2">
                  //         <img
                  //           className="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out"
                  //           src={src}
                  //           width="352"
                  //           height="198"
                  //           alt={name}
                  //           objectfit="cover"
                  //         />
                  //       </figure>
                  //       <h3 className="text-lg leading-snug tracking-tight font-normal px-3">
                  //         {name}
                  //       </h3>
                  //     </a>
                  //   </header>
                  // </article>
                );
              })}
            </div>
          </div>
          <div className="mt-20 hidden flex flex-wrap justify-center gap-x-10 gap-y-5">
            <a
              href="https://stackoverflow.com/questions/tagged/native-base"
              className="h-16 w-16 flex items-center justify-center rounded-full shadow-xl bg-white"
            ></a>
            <a
              href="https://github.com/GeekyAnts/NativeBase"
              className="h-16 w-16 flex items-center justify-center rounded-full shadow-xl bg-white"
            ></a>
            <a
              href="https://twitter.com/nativebaseio?lang=en"
              className="h-16 w-16 flex items-center justify-center rounded-full shadow-xl bg-white"
            ></a>
            <a
              href="https://www.facebook.com/nativebaseio/"
              className="h-16 w-16 flex items-center justify-center rounded-full shadow-xl bg-white"
            >
              {/* {SVGs['Facebook']} */}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
