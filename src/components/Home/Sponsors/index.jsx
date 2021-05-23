import React from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';
import { SVGs } from './icons';
import axios from 'axios';
export function Sponsors() {
  const [sponsors, setSponsors] = React.useState([]);
  React.useEffect(() => {
    axios
      .post('https://api.opencollective.com/graphql/v2', {
        query: `query account($slug: String) {
          collective(slug: $slug) {
          id,
          contributors(roles: BACKER, limit: 100){
            nodes{
              id
              name
              collectiveSlug
              totalAmountDonated
              image
            }
          }
    }
         }`,
        variables: {
          slug: 'nativebase',
        },
      })
      .then((res) => {
        if (res && res.data && res.data.data)
          setSponsors(res.data.data.collective.contributors.nodes);
      })
      .catch((err) => {
        console.log('err', err);
      });
  }, []);

  const { isDarkTheme } = useThemeContext();
  const headingColor = !isDarkTheme ? 'text-gray-800' : 'text-gray-200';
  const subHeadingColor = !isDarkTheme ? 'text-gray-600' : 'text-gray-400';
  return (
    <section>
      <div className="relative px-6 md:px-0">
        <div className="">
          <div className="flex flex-col space-x-0 space-y-2 md:flex-row md:space-y-0  md:space-x-7 pb-12 md:pb-20">
            <div className="mt-1">
              <p className="w-12 h-12 items-center rounded-md flex justify-center bg-yellow-600">
                {SVGs.Logo}
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
              <ul className="flex max-w-4xl mt-20 flex-wrap pl-0 gap-x-4 gap-y-10">
                {sponsors.map((sponsor) => (
                  <div key={sponsor.id}>
                    <img
                      className="rounded-full w-24 h-24"
                      alt={sponsor.name}
                      src={sponsor.image}
                      loading="lazy"
                    ></img>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
