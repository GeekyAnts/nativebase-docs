import React from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';
// TODO: When dynamically fetching the creators.
// const [creators, setCreators] = React.useState(0);
// React.useEffect(() => {
//   fetch('https://api.github.com/repos/geekyants/nativebase/contributors')
//     .then((response) => response.json())
//     .then((data) => setStarCount(data));
// }, []);

const Logo = (
  <svg
    id="money"
    xmlns="http://www.w3.org/2000/svg"
    width="27.336"
    height="27.336"
    viewBox="0 0 27.336 27.336"
  >
    <g id="Group_706" data-name="Group 706" transform="translate(0 16.124)">
      <g id="Group_705" data-name="Group 705">
        <path
          id="Path_397"
          data-name="Path 397"
          d="M2.456,302H.8a.8.8,0,0,0-.8.8v9.61a.8.8,0,0,0,.8.8H2.456a2.4,2.4,0,0,0,2.4-2.4V304.4A2.4,2.4,0,0,0,2.456,302Z"
          transform="translate(0 -302)"
          fill="#fff"
        />
      </g>
    </g>
    <g id="Group_708" data-name="Group 708" transform="translate(9.717)">
      <g id="Group_707" data-name="Group 707">
        <path
          id="Path_398"
          data-name="Path 398"
          d="M190.81,0A8.8,8.8,0,0,0,184,14.384a7.148,7.148,0,0,1,2.755,1.506.63.63,0,0,0,.4.128h2.851a3.124,3.124,0,0,1,2.643,1.41A8.811,8.811,0,0,0,190.81,0Zm.817,12.67h-.016v.945a.8.8,0,0,1-1.6,0V12.67a3.177,3.177,0,0,1-1.458-1.041.8.8,0,0,1,1.217-1.025c.433.513.913.7,1.313.561a.8.8,0,0,0-.272-1.554A2.4,2.4,0,0,1,189.881,5c.032-.016.08-.016.128-.032V4a.8.8,0,0,1,1.6,0v.961a3.15,3.15,0,0,1,1.185.7.8.8,0,0,1-1.121,1.153,1.083,1.083,0,0,0-1.169-.352.8.8,0,0,0,.3,1.538,2.4,2.4,0,0,1,.817,4.661Z"
          transform="translate(-182)"
          fill="#fff"
        />
      </g>
    </g>
    <g id="Group_710" data-name="Group 710" transform="translate(6.46 15.817)">
      <g id="Group_709" data-name="Group 709">
        <path
          id="Path_399"
          data-name="Path 399"
          d="M141.636,298.107a1.467,1.467,0,0,0-.368-.4,1.587,1.587,0,0,0-2.162.16l-3.636,4.2-.112.128a2.363,2.363,0,0,1-1.762.769h-6.268a.8.8,0,1,1,0-1.6h4.939a1.606,1.606,0,0,0,1.6-1.6v-.016a1.6,1.6,0,0,0-1.6-1.586h-2.953a2.2,2.2,0,0,1-1.41-.529,5.613,5.613,0,0,0-6.9-.368v9.851a18.488,18.488,0,0,0,4.869.657h7.2a5.614,5.614,0,0,0,4.485-2.242L141.4,300.4A2.121,2.121,0,0,0,141.636,298.107Z"
          transform="translate(-121 -296.246)"
          fill="#fff"
        />
      </g>
    </g>
  </svg>
);
const creators = [
  {
    id: 15001759,
    login: 'theankurkedia',
    avatar_url: 'https://avatars.githubusercontent.com/u/15001759?v=4',
    html_url: 'https://github.com/theankurkedia',
  },
  {
    id: 25659255,
    login: 'MD-REHMAN',
    avatar_url: 'https://avatars.githubusercontent.com/u/25659255?v=4',
    html_url: 'https://github.com/MD-REHMAN',
  },
  {
    id: 36300815,
    login: 'rayan1810',
    avatar_url: 'https://avatars.githubusercontent.com/u/36300815?v=4',
    html_url: 'https://github.com/rayan1810',
  },
  {
    id: 23293248,
    login: 'intergalacticspacehighway',
    avatar_url: 'https://avatars.githubusercontent.com/u/23293248?v=4',
    html_url: 'https://github.com/intergalacticspacehighway',
  },
  {
    id: 47877976,
    login: 'vidhi499',
    avatar_url: 'https://avatars.githubusercontent.com/u/47877976?v=4',
    html_url: 'https://github.com/vidhi499',
  },
  {
    id: 15103616,
    login: 'himanshu-satija',
    avatar_url: 'https://avatars.githubusercontent.com/u/15103616?v=4',
    html_url: 'https://github.com/himanshu-satija',
  },
  {
    id: 54400869,
    login: 'makkarMeenu',
    avatar_url: 'https://avatars.githubusercontent.com/u/54400869?v=4',
    html_url: 'https://github.com/makkarMeenu',
  },
  {
    id: 48080578,
    login: 'Ajamuar',
    avatar_url: 'https://avatars.githubusercontent.com/u/48080578?v=4',
    html_url: 'https://github.com/Ajamuar',
  },
  {
    id: 1733433,
    login: 'sanketsahu',
    avatar_url: 'https://avatars.githubusercontent.com/u/1733433?v=4',
    html_url: 'https://github.com/sanketsahu',
  },
  {
    id: 19682624,
    login: 'gauravguha',
    avatar_url: 'https://avatars.githubusercontent.com/u/19682624?v=4',
    html_url: 'https://github.com/gauravguha',
  },
];

export function Sponsors() {
  // const [creators, setCreators] = React.useState(0);
  // React.useEffect(() => {
  //   fetch('https://api.github.com/repos/geekyants/nativebase/contributors')
  //     .then((response) => response.json())
  //     .then((data) => setStarCount(data));
  // }, []);
  const { isDarkTheme } = useThemeContext();
  const headingColor = !isDarkTheme ? 'text-gray-800' : 'text-gray-200';
  const subHeadingColor = !isDarkTheme ? 'text-gray-600' : 'text-gray-400';
  return (
    // <section>
    //   <div className="px-6 md:px-0">
    //     <div className="py-12 md:py-20">
    //       <div className="max-w-3xl flex flex-col space-x-0 space-y-2 md:flex-row md:space-y-0  md:space-x-7 pb-12 md:pb-20">
    //         <div className="mt-2">
    //           <p className="w-10 h-10 items-center rounded-md flex justify-center bg-yellow-600">
    //             {Logo}
    //           </p>
    //         </div>
    //         <div>
    //           <h2 className={`leading-snug text-4xl ${headingColor}`}>
    //             <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
    //               Our Sponsors
    //             </span>
    //           </h2>
    //           <p className={`text-xl mt-7 leading-normal  ${subHeadingColor}`}>
    //             We are very grateful to those who believe in what we do. Here's
    //             to all our wonderful sponsors!
    //           </p>
    //         </div>
    //       </div>
    //       {/* <a href="https://opencollective.com/NativeBase">
    //         <img src="https://opencollective.com/NativeBase/individuals.svg?width=890" />
    //       </a> */}
    //       <ul className="flex flex-wrap justify-center max-w-4xl pl-0 mx-auto">
    //         {creators.map((contributor) => (
    //           <a
    //             key={contributor.id}
    //             href={contributor.html_url}
    //             target="_blank"
    //           >
    //             <img
    //               className="rounded-full m-3.5"
    //               alt={contributor.login}
    //               src={contributor.avatar_url}
    //               loading="lazy"
    //               height="114px"
    //             ></img>
    //           </a>
    //         ))}
    //       </ul>
    //     </div>
    //   </div>
    // </section>
    <section>
      <div className="relative px-6 md:px-0">
        <div className="">
          <div className="flex flex-col space-x-0 space-y-2 md:flex-row md:space-y-0  md:space-x-7 pb-12 md:pb-20">
            <div className="mt-2">
              <p className="w-10 h-10 items-center rounded-md flex justify-center bg-yellow-600">
                {Logo}
              </p>
            </div>
            <div>
              <h2 className={`leading-snug text-4xl ${headingColor}`}>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
                  Our Sponsors
                </span>
              </h2>
              <p
                className={`text-lg max-w-3xl  md:text-xl mt-7 leading-normal  ${subHeadingColor}`}
              >
                We are very grateful to those who believe in what we do. Here's
                to all our wonderful sponsors!
              </p>
              <p className="mt-7">
                <a
                  className="no-underline border-0 text-yellow-600 border-b-2 border-solid hover:border-yellow-600 font-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://react-native-aria.geekyants.com/"
                >
                  Become a sponsor
                </a>
              </p>
              <ul className="flex max-w-4xl mt-20 flex-wrap justify-center pl-0 gap-x-4 gap-y-10">
                {creators.map((contributor) => (
                  <a
                    key={contributor.id}
                    href={contributor.html_url}
                    target="_blank"
                  >
                    <img
                      className="rounded-full"
                      alt={contributor.login}
                      src={contributor.avatar_url}
                      loading="lazy"
                      height="114px"
                    ></img>
                  </a>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
