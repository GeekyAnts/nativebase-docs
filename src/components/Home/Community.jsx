import React from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';

const SVGs = {
  DiscordIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="h-10 w-10 flex-no-shrink"
      viewBox="0 0 48 35"
    >
      <defs>
        <clipPath id="clipPath">
          <rect
            id="Rectangle_280"
            data-name="Rectangle 280"
            width="48"
            height="35"
            transform="translate(0 0)"
            fill="white"
          />
        </clipPath>
      </defs>
      <g id="Discord-Logo-Color" clipPath="url(#clipPath)">
        <path
          id="Path_415"
          data-name="Path 415"
          d="M40.288,3.238A41.1,41.1,0,0,0,30.6.414a.15.15,0,0,0-.156.069,25.07,25.07,0,0,0-1.206,2.329,38.526,38.526,0,0,0-10.88,0A23.016,23.016,0,0,0,17.134.483a.156.156,0,0,0-.156-.069A40.986,40.986,0,0,0,7.291,3.238a.137.137,0,0,0-.064.051C1.058,11.952-.632,20.4.2,28.747a.151.151,0,0,0,.062.1A40.5,40.5,0,0,0,12.142,34.5a.16.16,0,0,0,.167-.051A26.283,26.283,0,0,0,14.74,30.73a.139.139,0,0,0-.083-.2,26.759,26.759,0,0,1-3.712-1.663.139.139,0,0,1-.015-.238c.249-.176.5-.359.737-.543a.155.155,0,0,1,.154-.02,29.781,29.781,0,0,0,23.918,0,.154.154,0,0,1,.156.018c.238.185.488.369.739.545a.139.139,0,0,1-.013.238,25.112,25.112,0,0,1-3.714,1.661.14.14,0,0,0-.081.2,29.51,29.51,0,0,0,2.429,3.715.156.156,0,0,0,.167.053,40.37,40.37,0,0,0,11.9-5.646.142.142,0,0,0,.062-.1A35.821,35.821,0,0,0,40.35,3.291.119.119,0,0,0,40.288,3.238ZM15.9,23.666a4.411,4.411,0,0,1-4.277-4.508A4.387,4.387,0,0,1,15.9,14.65a4.362,4.362,0,0,1,4.277,4.508A4.387,4.387,0,0,1,15.9,23.666Zm15.814,0a4.411,4.411,0,0,1-4.277-4.508,4.283,4.283,0,1,1,8.554,0A4.375,4.375,0,0,1,31.717,23.666Z"
          transform="translate(0.167 -0.352)"
          fill="white"
        />
      </g>
    </svg>
  ),
  Logo: (
    <p className="w-10 h-10 items-center rounded-md flex justify-center bg-blue-400">
      <svg
        id="connect"
        xmlns="http://www.w3.org/2000/svg"
        width="27.145"
        height="27.145"
        viewBox="0 0 27.145 27.145"
      >
        <path
          id="Path_387"
          data-name="Path 387"
          d="M36.355,3.25a10.682,10.682,0,0,1,11.254,0,3.207,3.207,0,1,0,.4-1.6,12.33,12.33,0,0,0-12.061,0,3.166,3.166,0,1,0,.4,1.6Zm0,0"
          transform="translate(-28.409)"
          fill="#fff"
        />
        <path
          id="Path_388"
          data-name="Path 388"
          d="M202.362,244.181a3.181,3.181,0,1,0-3.181,3.181A3.184,3.184,0,0,0,202.362,244.181Zm0,0"
          transform="translate(-185.608 -228.223)"
          fill="#fff"
        />
        <path
          id="Path_389"
          data-name="Path 389"
          d="M22.374,120a4.777,4.777,0,0,0-4.772,4.772v2.439a.8.8,0,0,0,.8.8h5.268a10.332,10.332,0,0,1-6.019,7.094,4.734,4.734,0,0,0-8.147,0,10.332,10.332,0,0,1-6.019-7.094H8.748a.8.8,0,0,0,.8-.8v-2.439a4.772,4.772,0,1,0-9.543,0v2.439a.8.8,0,0,0,.8.8H1.857A11.906,11.906,0,0,0,8.9,136.57a4.78,4.78,0,0,0-.1.979v2.439a.8.8,0,0,0,.8.8h7.953a.8.8,0,0,0,.8-.8v-2.439a4.78,4.78,0,0,0-.1-.979,11.906,11.906,0,0,0,7.047-8.564H26.35a.8.8,0,0,0,.8-.8v-2.439A4.777,4.777,0,0,0,22.374,120Zm0,0"
          transform="translate(0 -113.638)"
          fill="#fff"
        />
      </svg>
    </p>
  ),
  StackOverflow: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 flex-no-shrink"
      viewBox="0 0 47.158 55.721"
    >
      <g
        id="Group_687"
        data-name="Group 687"
        transform="translate(-4161.465 -2834)"
      >
        <path
          id="Icon_simple-stackoverflow"
          data-name="Icon simple-stackoverflow"
          d="M42.564,50.764V35.9h4.954V55.721H2.766V35.9H7.711V50.764ZM12.673,45.809H37.605V40.848H12.673Zm.6-11.265,24.331,5.082,1.047-4.806L14.326,29.743l-1.052,4.8Zm3.155-11.738L38.961,33.323l2.1-4.527L18.523,18.279l-2.094,4.495v.033Zm6.3-11.109L41.81,27.612l3.155-3.761L25.89,7.94l-3.134,3.754-.023,0ZM35.054,0,31,3,45.871,22.98l4.054-3L35.049,0Z"
          transform="translate(4158.699 2834)"
          fill="white"
        />
        <path
          id="Icon_simple-stackoverflow-2"
          data-name="Icon simple-stackoverflow"
          d="M9.167,45.809H34.1V40.848H9.167Zm.6-11.265L34.1,39.627l1.047-4.806L10.82,29.743l-1.052,4.8Zm3.155-11.738L35.455,33.323l2.1-4.527L15.017,18.279l-2.094,4.495v.033Zm6.3-11.109L38.3,27.612l3.155-3.761L22.384,7.94,19.25,11.694l-.023,0ZM31.548,0,27.494,3,42.364,22.98l4.054-3L31.543,0h0Z"
          transform="translate(4162.205 2834)"
          fill="white"
        />
      </g>
    </svg>
  ),
  Github: (
    <svg
      id="Group_638"
      data-name="Group 638"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 flex-no-shrink"
      viewBox="0 0 67.727 67.727"
    >
      <path
        id="Path_382"
        data-name="Path 382"
        d="M0,0H67.727V67.727H0Z"
        fill="none"
      />
      <path
        id="github"
        d="M33.282.5C14.894.5,0,15.144,0,33.2a32.759,32.759,0,0,0,22.756,31.03c1.664.308,2.274-.7,2.274-1.573,0-.777-.028-2.834-.042-5.561-9.258,1.972-11.21-4.388-11.21-4.388-1.514-3.775-3.7-4.784-3.7-4.784-3.015-2.027.233-1.986.233-1.986,3.342.227,5.1,3.37,5.1,3.37,2.968,5,7.791,3.556,9.693,2.721a6.925,6.925,0,0,1,2.108-4.374c-7.391-.818-15.16-3.63-15.16-16.161a12.5,12.5,0,0,1,3.425-8.775,11.443,11.443,0,0,1,.291-8.656s2.787-.876,9.152,3.353a31.91,31.91,0,0,1,16.641,0c6.324-4.23,9.111-3.353,9.111-3.353A11.759,11.759,0,0,1,51,22.724,12.546,12.546,0,0,1,54.413,31.5c0,12.564-7.78,15.329-15.185,16.133,1.165.982,2.246,2.987,2.246,6.052,0,4.377-.042,7.893-.042,8.956,0,.857.582,1.88,2.288,1.553A32.66,32.66,0,0,0,66.563,33.2C66.563,15.144,51.661.5,33.282.5Z"
        transform="translate(0.582 1.397)"
        fill="white"
      />
    </svg>
  ),
  Facebook: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 flex-no-shrink"
      viewBox="0 0 19.281 36"
    >
      <path
        id="Icon_awesome-facebook-f"
        data-name="Icon awesome-facebook-f"
        d="M19.627,20.25l1-6.515H14.375V9.507c0-1.782.873-3.52,3.673-3.52h2.842V.44A34.658,34.658,0,0,0,15.846,0C10.7,0,7.332,3.12,7.332,8.769v4.965H1.609V20.25H7.332V36h7.043V20.25Z"
        transform="translate(-1.609)"
        fill="white"
      />
    </svg>
  ),
  Twitter: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 flex-no-shrink"
      viewBox="0 0 50 50"
    >
      <g id="Group_777" data-name="Group 777" transform="translate(-527 -447)">
        <path
          id="Icon_awesome-twitter"
          data-name="Icon awesome-twitter"
          d="M42.786,13.033c.03.424.03.847.03,1.271,0,12.92-9.834,27.808-27.808,27.808A27.619,27.619,0,0,1,0,37.724a20.219,20.219,0,0,0,2.36.121A19.574,19.574,0,0,0,14.494,33.67a9.791,9.791,0,0,1-9.138-6.778,12.325,12.325,0,0,0,1.846.151,10.337,10.337,0,0,0,2.572-.333,9.775,9.775,0,0,1-7.837-9.592V17a9.843,9.843,0,0,0,4.418,1.241A9.788,9.788,0,0,1,3.328,5.166,27.781,27.781,0,0,0,23.481,15.393a11.033,11.033,0,0,1-.242-2.239A9.783,9.783,0,0,1,40.153,6.467a19.242,19.242,0,0,0,6.2-2.36,9.747,9.747,0,0,1-4.3,5.386A19.593,19.593,0,0,0,47.688,7.98a21.009,21.009,0,0,1-4.9,5.053Z"
          transform="translate(527 448.315)"
          fill="#fff"
        />
        <rect
          id="Rectangle_276"
          data-name="Rectangle 276"
          width="50"
          height="50"
          transform="translate(527 447)"
          fill="none"
        />
      </g>
    </svg>
  ),
  Discord: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="194.266"
      height="40"
      viewBox="0 0 194.266 53.091"
    >
      <path
        id="Path_393"
        data-name="Path 393"
        d="M78.265,36.9H42.388A5.5,5.5,0,0,0,36.9,42.388V78.265a5.5,5.5,0,0,0,5.488,5.489H72.749l-1.419-4.9,3.427,3.159L78,84.985l5.783,5.007v-47.6A5.536,5.536,0,0,0,78.265,36.9ZM67.93,71.571s-.964-1.151-1.767-2.142a8.489,8.489,0,0,0,4.846-3.159,15.32,15.32,0,0,1-3.079,1.58A19.2,19.2,0,0,1,64.048,69a18.755,18.755,0,0,1-6.934-.027,20.383,20.383,0,0,1-3.936-1.151,15.689,15.689,0,0,1-1.954-.91c-.08-.054-.161-.08-.241-.134-.054-.027-.08-.054-.107-.054-.482-.268-.75-.455-.75-.455A8.368,8.368,0,0,0,54.811,69.4c-.8,1.017-1.794,2.2-1.794,2.2-5.917-.187-8.166-4.043-8.166-4.043A35.349,35.349,0,0,1,48.707,52.08,13.268,13.268,0,0,1,56.2,49.3l.268.321A17.566,17.566,0,0,0,49.457,53.1s.589-.321,1.58-.75a20.978,20.978,0,0,1,6.078-1.687,2.638,2.638,0,0,1,.455-.054,22.653,22.653,0,0,1,5.408-.054A22.256,22.256,0,0,1,71.036,53.1a17.581,17.581,0,0,0-6.667-3.373l.375-.428a13.212,13.212,0,0,1,7.5,2.784A35.349,35.349,0,0,1,76.1,67.555C76.1,67.528,73.847,71.384,67.93,71.571Zm40.427-23.212H99.469v9.986l5.917,5.328V53.981h3.159c2.008,0,3,.964,3,2.517v7.416c0,1.553-.937,2.6-3,2.6h-9.1V72.16h8.889c4.766.027,9.237-2.356,9.237-7.818V56.364C117.594,50.8,113.123,48.359,108.358,48.359Zm46.585,15.984V56.15c0-2.945,5.3-3.614,6.907-.669l4.9-1.981a8.814,8.814,0,0,0-8.353-5.462c-4.766,0-9.478,2.758-9.478,8.112v8.193c0,5.408,4.712,8.112,9.371,8.112a9.56,9.56,0,0,0,8.567-5.328l-5.248-2.41c-1.285,3.293-6.667,2.49-6.667-.375Zm-16.2-7.068c-1.847-.4-3.079-1.071-3.159-2.222.107-2.758,4.364-2.865,6.854-.214l3.936-3.025a9.765,9.765,0,0,0-8.112-3.8c-4.364,0-8.594,2.463-8.594,7.122,0,4.525,3.48,6.961,7.309,7.55,1.954.268,4.123,1.044,4.07,2.383-.161,2.543-5.408,2.41-7.791-.482l-3.8,3.561a10.422,10.422,0,0,0,8.086,4.31c4.364,0,9.21-2.517,9.4-7.122.268-5.81-3.962-7.282-8.193-8.059ZM120.807,72.133h6V48.359h-6ZM221.929,48.359h-8.889v9.986l5.917,5.328V53.981h3.159c2.008,0,3,.964,3,2.517v7.416c0,1.553-.937,2.6-3,2.6h-9.1V72.16h8.915c4.766.027,9.237-2.356,9.237-7.818V56.364C231.166,50.8,226.695,48.359,221.929,48.359Zm-43.613-.321c-4.926,0-9.826,2.677-9.826,8.166v8.112c0,5.435,4.926,8.166,9.879,8.166,4.926,0,9.826-2.731,9.826-8.166V56.2C188.2,50.742,183.242,48.038,178.316,48.038Zm3.855,16.278c0,1.713-1.928,2.6-3.829,2.6-1.928,0-3.855-.83-3.855-2.6V56.2c0-1.74,1.874-2.677,3.748-2.677,1.954,0,3.936.83,3.936,2.677Zm27.55-8.112c-.134-5.569-3.936-7.818-8.835-7.818h-9.5V72.16h6.078V64.61h1.071l5.515,7.55h7.5l-6.479-8.166C207.927,63.084,209.721,60.594,209.721,56.2Zm-8.728,3.213h-3.534V53.981h3.534A2.72,2.72,0,1,1,200.993,59.416Z"
        transform="translate(-36.9 -36.9)"
        fill="#7289da"
      />
    </svg>
  ),
};
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
    svg: SVGs['StackOverflow'],
    color: '#F48024',
  },
  {
    name: 'Discord',
    svg: SVGs['DiscordIcon'],
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
            <div className="mt-2">{SVGs['Logo']}</div>
            <div className="w-full">
              <h2 className={`max-w-3xl leading-snug text-4xl ${headingColor}`}>
                <span>Our</span>{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                  Community
                </span>
              </h2>
              <p
                className={`max-w-3xl text-xl mt-7 leading-normal ${subHeadingColor}`}
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
                    {SVGs['Discord']}
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
            >
              {SVGs['StackOverflow']}
            </a>
            <a
              href="https://github.com/GeekyAnts/NativeBase"
              className="h-16 w-16 flex items-center justify-center rounded-full shadow-xl bg-white"
            >
              {SVGs['Github']}
            </a>
            <a
              href="https://twitter.com/nativebaseio?lang=en"
              className="h-16 w-16 flex items-center justify-center rounded-full shadow-xl bg-white"
            >
              {SVGs['Twitter']}
            </a>
            <a
              href="https://www.facebook.com/nativebaseio/"
              className="h-16 w-16 flex items-center justify-center rounded-full shadow-xl bg-white"
            >
              {SVGs['Facebook']}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
