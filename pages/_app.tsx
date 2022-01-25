import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NativeBaseProvider } from "native-base";
import { AppContext } from "../src/AppContext";
import { useEffect, useState } from "react";
import React from "react";
import { theme } from "../src/theme";

type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}

const config = {
  dependencies: {
    "linear-gradient": require("expo-linear-gradient").LinearGradient,
  },
};
function MyApp({ Component, pageProps }: AppProps) {
  const [activeVersion, setActiveVersion] = useState("/");
  const [activeSidebarItem, setActiveSidebarItem] = useState("");
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  useEffect(() => {
    document.getElementsByTagName("html")[0].setAttribute("data-theme", "dark");
  }, []);

  const updateActiveVersion = (version: string) => setActiveVersion(version);
  return (
    <AppContext.Provider
      value={{
        activeVersion,
        setActiveVersion: updateActiveVersion,
        activeSidebarItem,
        setActiveSidebarItem,
        setIsNavbarOpen,
        isNavbarOpen,
      }}
    >
      {/* @ts-ignore */}
      <NativeBaseProvider isSSR theme={theme} config={config}>
        <Component {...pageProps} />
      </NativeBaseProvider>
    </AppContext.Provider>
  );
}

export default MyApp;
