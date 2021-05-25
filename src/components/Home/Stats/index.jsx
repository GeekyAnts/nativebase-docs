import React from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';
import { SVGs } from './icons';

export function Stats() {
  const [starCount, setStarCount] = React.useState('15k+');
  const [downloadsCount, setDowloadsCount] = React.useState('32K+');
  const [contributionsCount, setContributionsCount] = React.useState('200+');
  const [dependentsCount, setDependentsCount] = React.useState();

  const getTotalContributors = async () => {
    let totalContributors = 0;
    for (let page = 1; page < 5; page++) {
      const res = await fetch(
        `https://api.github.com/repos/Geekyants/nativebase/contributors?per_page=100&page=${page}&anon=true`
      );
      const resJson = await res.json();
      if (!resJson.length) break;
      totalContributors = totalContributors + resJson.length;
      if (resJson.length < 100) {
        break;
      }
    }
    if (totalContributors > 0) setContributionsCount(totalContributors);
  };

  React.useEffect(() => {
    fetch('https://api.github.com/repos/GeekyAnts/NativeBase')
      .then((response) => response.json())
      .then((data) => {
        if (data.stargazers_count > 0)
          setStarCount(formatData(data.stargazers_count));
      });
    const today = new Date();
    const date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();

    fetch(
      `https://api.npmjs.org/downloads/point/2016-04-01:${date}/native-base`
    )
      .then((response) => response.json())
      .then((data) => {
        setDependentsCount(formatData(data.downloads));
      });

    fetch('https://api.npmjs.org/downloads/point/last-week/native-base')
      .then((response) => response.json())
      .then((data) => {
        setDowloadsCount(formatData(data.downloads));
      });
    getTotalContributors();
  }, []);
  const formatData = (n) => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + 'K';
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + 'M';
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + 'B';
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + 'T';
  };

  const stats = [
    {
      name: 'Downloads',
      value: downloadsCount,
      svg: SVGs['Downloads'],
    },
    {
      name: 'GithubStars',
      value: starCount,
      svg: SVGs['Github'],
    },
    {
      name: 'Contributors',
      value: contributionsCount,
      svg: SVGs['Contributions'],
    },
    {
      name: 'Dependents',
      value: '50K+',
      svg: SVGs['Dependents'],
    },
  ];

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
              <div className="w-12 h-12 items-center rounded-md flex justify-center bg-green-600">
                {SVGs.Logo}
              </div>
            </div>
            <div className="w-full">
              <h2
                className={`leading-snug max-w-3xl  text-3xl md:text-4xl ${headingColor}`}
              >
                <span>We are </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400">
                  growing
                </span>
              </h2>
              <p
                className={`text-lg max-w-3xl font-medium md:text-xl mt-7 leading-normal ${subHeadingColor}`}
              >
                NativeBase is a popular component library among devs and we're
                constantly improving it.
              </p>
              <div className="w-full grid grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 mt-20 max-4xl">
                {stats.map((stat, idx) => {
                  return (
                    <div key={idx}>
                      <div
                        className={`ring-4 md:ring-8 ${ringColor} w-20 h-20 md:w-44 md:h-44 lg:h-48 lg:w-48 flex flex-col items-center justify-center rounded-full bg-green-600 text-white`}
                      >
                        <div>{stat.svg}</div>
                        <div className="font-bold text-xs md:text-3xl ">
                          {stat.value}
                        </div>
                      </div>
                      <p
                        className={`text-center md:ml-4 text-xxs md:text-lg mt-2.5 font-semibold ${statsColor}`}
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
