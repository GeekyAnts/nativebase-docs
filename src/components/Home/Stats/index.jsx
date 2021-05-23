import React from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';
import { SVGs } from './icons';

const stats = [
  {
    name: 'Downloads',
    value: '38.2k',
    svg: SVGs['Downloads'],
  },
  {
    name: 'GithubStars',
    value: '14.8k',
    svg: SVGs['Github'],
  },
  {
    name: 'Contributions',
    value: '196',
    svg: SVGs['Contributions'],
  },
  {
    name: 'Dependents',
    value: '53.6k',
    svg: SVGs['Dependents'],
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
      <div className="max-w-6xl mx-auto px-6 md:px-10 xl:px-0">
        <div className="relative py-12 md:py-20">
          <div className="flex flex-col space-x-0 space-y-2 md:flex-row md:space-y-0  md:space-x-7">
            <div className="mt-2">
              <p className="w-12 h-12 items-center rounded-md flex justify-center bg-green-600">
                {SVGs.Logo}
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
                        <div>{stat.svg}</div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
