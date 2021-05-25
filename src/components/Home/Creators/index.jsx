import React from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';
import { SVGs } from './icons';
// TODO: When dynamically fetching the creators.
// const [creators, setCreators] = React.useState(0);
// React.useEffect(() => {
//   fetch('https://api.github.com/repos/geekyants/nativebase/contributors')
//     .then((response) => response.json())
//     .then((data) => setStarCount(data));
// }, []);

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

export function Creators() {
  const { isDarkTheme } = useThemeContext();
  const headingColor = !isDarkTheme ? 'text-gray-800' : 'text-gray-200';
  const subHeadingColor = !isDarkTheme ? 'text-gray-600' : 'text-gray-400';
  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-6 md:px-10 xl:px-0">
        <div className="py-12 md:py-20">
          <div className="flex flex-col space-x-0 space-y-2 md:flex-row md:space-y-0 md:space-x-7">
            <div className="mt-1">{SVGs.Logo}</div>
            <div className="max-w-3xl">
              <h2
                className={`leading-snug text-3xl md:text-4xl ${headingColor}`}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
                  Meet the Creators
                </span>
              </h2>
              <p
                className={`text-lg font-medium md:text-xl mt-7 leading-normal  ${subHeadingColor}`}
              >
                NativeBase 3.0 has come to fruition only due to the amazing team
                that worked tirelessly on it. Here are our creators:
              </p>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-10 md:mt-20 gap-y-3">
                {creators.map((contributor) => (
                  <div className="list-none" key={contributor.id}>
                    <a href={contributor.html_url} target="_blank">
                      <img
                        className="rounded-full h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32"
                        alt={contributor.login}
                        src={contributor.avatar_url}
                        loading="lazy"
                      ></img>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
