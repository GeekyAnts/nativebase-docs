import React from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';

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
export function Community() {
  const { isDarkTheme } = useThemeContext();
  const headingColor = !isDarkTheme ? 'text-gray-800' : 'text-gray-200';
  const subHeadingColor = !isDarkTheme ? 'text-gray-600' : 'text-gray-400';
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className={`h2 text-3xl md:text-4xl ${headingColor}`}>
              Join our Community
            </h2>
            <p className={`text-lg md:text-xl ${subHeadingColor}`}>
              We have a lively community built on our shared love for React &
              React Native. Check out our recent blog posts and come join us!
            </p>
          </div>

          {/* Articles list */}
          <div className="max-w-sm mx-auto md:max-w-none">
            <div className="grid gap-2 md:gap-12 md:grid-cols-3 md:col-gap-4 md:row-gap-6 items-start">
              {articles.map(({ name, link, src }) => {
                return (
                  <article
                    className="flex flex-col h-full"
                    data-aos="zoom-y-out"
                  >
                    <header>
                      <a
                        href={link}
                        className="block mb-6"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded mx-2">
                          <img
                            className="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out"
                            src={src}
                            width="352"
                            height="198"
                            alt={name}
                            objectFit="cover"
                          />
                        </figure>
                        <h3 className="text-lg leading-snug tracking-tight font-normal px-3">
                          {name}
                        </h3>
                      </a>
                    </header>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
