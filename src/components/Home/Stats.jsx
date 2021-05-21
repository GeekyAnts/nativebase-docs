import React from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';

const SVGs = {
  Logo: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25.474"
      height="19.742"
      viewBox="0 0 25.474 19.742"
    >
      <path
        id="Path_386"
        data-name="Path 386"
        d="M22.439,75.853V61.62l1.468-1.468v2.493H25.4V57.6H20.358V59.1h2.493l-2.584,2.584-3.48-3.48L8.43,66.559,5.053,63.182.293,67.941,1.349,69,3.035,67.31v8.543H0v1.493H25.474V75.853ZM20.946,63.112V75.853H18.995V62.519l1.273,1.273ZM17.5,61.026V75.853h-2.3V61.894l1.582-1.582ZM11.761,75.853V65.338l1.952-1.952V75.853H11.761Zm-1.493-9.022v9.022h-2.3V68.212l.457.457ZM4.528,65.818l.525-.525L6.48,66.72v9.134H4.528Z"
        transform="translate(0 -57.604)"
        fill="#fff"
      />
    </svg>
  ),
};

const stats = [
  {
    name: 'Downloads',
    value: '38.2k',
    svg: '/img/SVG/Stats/Downloads.svg',
  },
  {
    name: 'GithubStars',
    value: '14.8k',
    svg: '/img/SVG/Stats/Github.svg',
  },
  {
    name: 'Contributions',
    value: '196',
    svg: '/img/SVG/Stats/Contributions.svg',
  },
  {
    name: 'Dependents',
    value: '53.6k',
    svg: '/img/SVG/Stats/Dependents.svg',
  },
];

export function Stats() {
  const [starCount, setStarCount] = React.useState(0);

  // React.useEffect(() => {
  //   fetch('https://api.github.com/repos/GeekyAnts/NativeBase')
  //     .then((response) => response.json())
  //     .then((data) => setStarCount(data.stargazers_count.toLocaleString()));

  //   fetch(
  //     'https://api.github.com/repos/Geekyants/nativebase/contributors?per_page=196'
  //   )
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // }, []);

  const { isDarkTheme } = useThemeContext();
  const foldBg = '';
  const headingColor = !isDarkTheme ? 'text-gray-800' : 'text-gray-200';
  const subHeadingColor = !isDarkTheme ? 'text-gray-600' : 'text-gray-400';
  const statsColor = !isDarkTheme ? 'text-gray-500' : 'text-gray-400';
  const ringColor = !isDarkTheme ? 'ring-white' : 'ring-secondary-800';

  return (
    <section className="relative">
      <div
        className={'absolute inset-0 pointer-events-none ' + foldBg}
        aria-hidden="true"
      />
      <div className="px-6 md:px-0">
        <div className="relative py-12 md:py-20">
          <div className="flex flex-col space-x-0 space-y-2 md:flex-row md:space-y-0  md:space-x-7">
            <div className="mt-2">
              <p className="w-10 h-10 items-center rounded-md flex justify-center bg-green-600">
                {SVGs['Logo']}
              </p>
            </div>
            <div className="w-full">
              <h2
                className={`leading-snug max-w-3xl text-3xl md:text-4xl ${headingColor}`}
              >
                <span>We are </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400">
                  growing
                </span>
              </h2>
              <p
                className={`text-lg md:text-xl mt-7 leading-normal ${subHeadingColor}`}
              >
                NativeBase is a popular component library among devs and we're
                constantly improving it.
              </p>
              <div className="w-full grid grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 mt-20 max-4xl">
                {stats.map((stat, idx) => {
                  return (
                    <div key={idx}>
                      <div
                        className={`ring-8 md:ring-10 ${ringColor} w-24 h-24 md:w-44 md:h-44 lg:h-48 lg:w-48 flex flex-col items-center justify-center rounded-full bg-green-600 text-white`}
                      >
                        <div>
                          <img
                            className="h-6 w-6 md:h-14 md:w-14"
                            src={stat.svg}
                            alt={stat.name}
                          />
                        </div>
                        <div className="font-bold text-sm md:text-3xl ">
                          {stat.value}
                        </div>
                      </div>
                      <p
                        className={`text-center md:ml-4 text-xs md:text-lg mt-2.5 font-semibold ${statsColor}`}
                      >
                        {stat.name}
                      </p>
                    </div>
                  );
                })}
                {/* <div className="">
                  <div className=" ring-10 ring-white w-20 h-20 md:w-36 md:h-36 lg:h-48 lg:w-48 flex flex-col items-center justify-center rounded-full bg-green-600 text-white">
                    <div className="">{SVGs['Downloads']}</div>
                    <div className="font-bold text-xl md:text-3xl ">38.2k</div>
                  </div>
                  <p
                    className={`text-center mt-2.5 font-semibold ${statsColor}`}
                  >
                    Downloads / week
                  </p>
                </div>
                <div className="-ml-2 lg:-ml-8">
                  <div className=" ring-10 ring-white w-20 h-20  md:w-36 md:h-36 lg:h-48 lg:w-48 flex flex-col items-center justify-center rounded-full bg-green-600 text-white">
                    <div className="">{SVGs['GithubStars']}</div>
                    <div className="font-bold text-2xl md:text-3xl ">14.8k</div>
                  </div>
                  <p
                    className={`text-center mt-2.5 font-semibold ${statsColor}`}
                  >
                    Github Stars
                  </p>
                </div>
                <div className="-ml-2 lg:-ml-8 ">
                  <div className="ring-10 ring-white w-20 h-20  md:w-36 md:h-36 lg:h-48 lg:w-48 flex flex-col items-center justify-center rounded-full bg-green-600 text-white ring-10 ring-white ">
                    <div className="flex items-center">
                      {SVGs['Contributors']}
                    </div>
                    <div className="font-bold mt-1 text-2xl md:text-3xl ">
                      196
                    </div>
                  </div>
                  <p
                    className={`text-center mt-2.5 font-semibold ${statsColor}`}
                  >
                    Contributions
                  </p>
                </div>
                <div className="-ml-2 -ml-2 lg:-ml-8 ">
                  <div className="w-20 h-20 ring-10 ring-white  md:w-36 md:h-36 lg:h-48 lg:w-48 flex flex-col items-center justify-center rounded-full bg-green-600 text-white">
                    <div className="">{SVGs['Dependents']}</div>
                    <div className="font-bold  text-2xl md:text-3xl">53.6k</div>
                  </div>
                  <p
                    className={`text-center mt-2.5 text-md font-semibold ${statsColor}`}
                  >
                    Dependents
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
