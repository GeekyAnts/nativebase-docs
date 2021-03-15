import React from 'react';
import { SVGs } from '../SVGs';

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
    html_url: '"https://github.com/makkarMeenu',
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

const styles = {
  contributorList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: '940px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  contributorImage: {
    borderRadius: '100px',
    margin: '10px 13px',
  },
};

const peoples = () => {
  return creators.map((contributor, idx) => (
    <a key={contributor.id} href={contributor.html_url} target="_blank">
      <img
        alt={contributor.login}
        src={contributor.avatar_url}
        loading="lazy"
        height="114px"
        style={styles.contributorImage}
      ></img>
    </a>
  ));
};

function Product({ product, link }) {
  return (
    <div className={'col col--3'}>
      <a href={link} style={{ textDecorationLine: 'none' }} target="_blank">
        <div
          className="text-center max-h-sm flex justify-center align-center"
          style={{
            minHeight: '130px',
          }}
        >
          {SVGs[product]}
        </div>
        <div className={'text-center pt-6'}>
          <h3>{product}</h3>
        </div>
      </a>
    </div>
  );
}
export function Creators() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 text-4xl">Meet The Creators</h2>
          </div>
          <ul style={styles.contributorList}>
            {creators.map((contributor, idx) => (
              <a
                key={contributor.id}
                href={contributor.html_url}
                target="_blank"
              >
                <img
                  alt={contributor.login}
                  src={contributor.avatar_url}
                  loading="lazy"
                  height="114px"
                  style={styles.contributorImage}
                ></img>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
