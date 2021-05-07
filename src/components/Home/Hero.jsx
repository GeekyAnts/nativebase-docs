import React from 'react';
import GitHub from '../../img/GitHub';
import Star from '../../img/Star';
import useThemeContext from '@theme/hooks/useThemeContext';

export function Hero() {
  const [starCount, setStarCount] = React.useState(0);
  React.useEffect(() => {
    fetch('https://api.github.com/repos/GeekyAnts/NativeBase')
      .then((response) => response.json())
      .then((data) => setStarCount(data.stargazers_count.toLocaleString()));
  }, []);
  const { isDarkTheme } = useThemeContext();
  const headColor = !isDarkTheme ? 'text-gray-900' : 'text-gray-400';
  const subHeadColor = !isDarkTheme ? 'text-gray-800' : 'text-gray-400';
  return (
    <section>
      {/* Illustration behind hero content */}

      <div className="w-full md:w-7/12">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-20 px-4 md:px-0 md:pb-20">
          {/* Section header */}
          <div className="pb-12 text-center md:text-left space-y-3 md:px-0 md:space-y-2 md:pb-16">
            <h1
              className={`font-inter text-5xl leading-tighter max-w-3xl md:leading-snug tracking-normal mb-0 ${headColor}`}
            >
              Mobile first accessible <br /> components for {''}
              {/* A Complete <br /> Component Library for <br /> the{' '} */}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-400">
                React{' '}
                <span className="hidden lg:inline">
                  <br />
                </span>
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-700 to-blue-700">
                Native & Web.
              </span>
            </h1>
            <div>
              <div
                className={`text-2xl max-w-3xl w-full md:w-10/12  ${subHeadColor}`}
              >
                An accessible & utility-first component library to build your
                design system for all the platforms{' '}
                {/* <span className="hidden lg:inline">
                  <br />
                </span> */}
                (web in alpha).
              </div>
            </div>
            <div className="flex justify-center md:justify-start">
              {/* <p
                className="text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Our landing page template works on all devices, so you only have
                to set it up once, and get beautiful results forever.
              </p> */}
              <div className="max-w-xs pt-4 sm:max-w-none flex w-full flex-col md:flex-row items-center">
                <a
                  className="btn text-white bg-blue-400 font-semibold w-full md:w-48 justify-center md:px-10 mb-4 sm:mb-0 rounded py-3 no-underline flex"
                  href="docs/nativebase"
                >
                  Get Started
                </a>

                <a
                  className="btn max-w-xs font-bold bg-white text-gray-500 border no-underline w-full sm:ml-4 rounded py-3 md:w-48 justify-center md:px-5 items-center flex"
                  href="https://github.com/GeekyAnts/nativebase"
                  style={{ border: '1px solid rgba(209, 213, 219,1)' }}
                >
                  <GitHub fill="#6e6969" className="mr-2" />
                  {starCount}
                  <span className="ml-1"></span>Stars
                  {/* <Star className="ml-2" fill="#6e6969" /> */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="invisible md:visible w-6/12 -top-28 md:-right-20 lg:-right-40 2xl:right-1/4 2xl:-top-44 absolute 2xl:w-2/12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="auto"
          height="681.729"
          viewBox="0 0 602.339 681.729"
        >
          <g
            id="Group_403"
            data-name="Group 403"
            transform="translate(14575 1918.542)"
          >
            <path
              id="Path_1"
              data-name="Path 1"
              d="M488.722,0A45.161,45.161,0,0,1,527.83,22.576L675.676,278.584a45.162,45.162,0,0,1,0,45.171L527.83,579.763a45.162,45.162,0,0,1-39.108,22.576H193.008A45.162,45.162,0,0,1,153.9,579.763L6.053,323.755a45.162,45.162,0,0,1,0-45.171L153.9,22.576A45.162,45.162,0,0,1,193.008,0Z"
              transform="translate(-13972.661 -1918.542) rotate(90)"
              fill="#356290"
            />
            <path
              id="Path_252"
              data-name="Path 252"
              d="M401.1,0A60.816,60.816,0,0,1,453.77,30.405L567.2,226.844a60.816,60.816,0,0,1,0,60.82L453.77,484.1A60.816,60.816,0,0,1,401.1,514.509H174.241A60.816,60.816,0,0,1,121.575,484.1L8.149,287.665a60.816,60.816,0,0,1,0-60.82L121.575,30.405A60.816,60.816,0,0,1,174.241,0Z"
              transform="translate(-14016.576 -1865.281) rotate(90)"
              fill="#1784b2"
            />
            <path
              id="Path_251"
              data-name="Path 251"
              d="M345.81,0a36.573,36.573,0,0,1,31.674,18.288L480.566,196.856a36.573,36.573,0,0,1,0,36.569L377.484,411.993a36.573,36.573,0,0,1-31.674,18.288H139.655a36.572,36.572,0,0,1-31.674-18.288L4.9,233.425a36.573,36.573,0,0,1,0-36.569L107.981,18.288A36.573,36.573,0,0,1,139.655,0Z"
              transform="translate(-14058.69 -1820.41) rotate(90)"
              fill="#50bfc3"
            />
            <path
              id="_x3C__x2F__x3E_"
              d="M187.066,335.455V297.993l-65.272-21.949,65.272-22.523V216.059L81,259.5v32.521Zm38.726,29.3L286.123,174H256.7l-60.33,190.759Zm72.052-29.3,106.066-43.783V259.267L297.844,216.059V254.44l59.3,23.328-59.3,19.421Z"
              transform="translate(-14516.286 -1846.988)"
              fill="#fff"
            />
          </g>
        </svg>
      </div>
    </section>
  );
}
