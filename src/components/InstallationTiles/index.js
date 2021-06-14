import React from 'react';
import TileLink from '../TileLink';
import useThemeContext from '@theme/hooks/useThemeContext';

export default function InstallationTiles() {
  const { isDarkTheme } = useThemeContext();
  const bgColor = isDarkTheme ? 'bg-gray-800' : 'bg-gray-600';

  return (
    <>
      <div className="row">
        <TileLink
          title="Install in Expo project"
          url="install-expo"
          description="Follow this guide to install NativeBase in your existing or new Expo project"
          className={'mt-2 ' + bgColor}
          imgSrc="/img/expo.svg"
          imgStyle={{
            top: 50,
            right: -310,
            width: 400,
            height: 400,
            opacity: 0.1,
          }}
        />
        <TileLink
          title="Install in React Native CLI project"
          url="install-rn"
          description="Follow this guide to install NativeBase in your existing or new React Native CLI inititiated project"
          className={'mt-2 ' + bgColor}
          imgSrc="/img/react-native.svg"
          imgStyle={{
            bottom: -50,
            right: -40,
            height: 140,
            width: 140,
            opacity: 0.1,
          }}
        />
      </div>
      <div className="row mt-2">
        <TileLink
          title="Install in NextJS project"
          url="install-next"
          description="Follow this guide to install NativeBase in your existing or new React Native CLI inititiated project"
          className={'mt-2 ' + bgColor}
          imgSrc="/img/next.svg"
          imgStyle={{
            bottom: -180,
            right: -90,
            height: 260,
            width: 260,
            opacity: 0.1,
          }}
        />
        <TileLink
          title="Install in Create React App project"
          url="install-cra"
          description="Follow this guide to install NativeBase in your existing or new React Native CLI inititiated project"
          className={'mt-2 ' + bgColor}
          imgSrc="/img/cra.svg"
          imgStyle={{
            bottom: -62,
            right: -45,
            height: 165,
            width: 165,
            opacity: 0.1,
          }}
        />
      </div>
    </>
  );
}
