import React from 'react';

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

export function Sponsors() {
  const [creators, setCreators] = React.useState(0);
  React.useEffect(() => {
    fetch('https://api.github.com/repos/geekyants/nativebase/contributors')
      .then((response) => response.json())
      .then((data) => setStarCount(data));
  }, []);
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 text-4xl text-gray-800">Our Sponsors</h2>
            <p className="text-xl text-gray-600">
              We are very grateful to those who believe in what we do. Here's to
              all our wonderful sponsors!
            </p>
          </div>
          <a href="https://opencollective.com/NativeBase">
            <img src="https://opencollective.com/NativeBase/individuals.svg?width=890" />
          </a>
          {/* <ul className="flex flex-wrap justify-center max-w-4xl pl-0 mx-auto">
            {creators.map((contributor) => (
              <a
                key={contributor.id}
                href={contributor.html_url}
                target="_blank"
              >
                <img
                  className="rounded-full m-3.5"
                  alt={contributor.login}
                  src={contributor.avatar_url}
                  loading="lazy"
                  height="114px"
                ></img>
              </a>
            ))}
          </ul> */}
        </div>
      </div>
    </section>
  );
}
