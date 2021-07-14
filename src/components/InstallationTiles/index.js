import React from 'react';
import TileLink from '../TileLink';
import useThemeContext from '@theme/hooks/useThemeContext';

export default function InstallationTiles() {
  const { isDarkTheme } = useThemeContext();
  const bgColor = isDarkTheme ? 'bg-blueGray-700' : 'bg-gray-600';

  return (
    <>
      <div className="row -m-2">
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
          title="Install in React Native project"
          url="install-rn"
          description="Follow this guide to install NativeBase in your existing or new React Native inititiated project"
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
      <div className="mt-2 -m-2 row">
        <TileLink
          title="Install in Next.js project"
          url="install-next"
          description="Follow this guide to install NativeBase in your existing or new Next.js project"
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
          description="Follow this guide to install NativeBase in your existing or new React project"
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
