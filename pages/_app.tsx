import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ColorMode, NativeBaseProvider, StorageManager } from "native-base";
import { AppContext } from "../src/AppContext";
import { useEffect, useState } from "react";
import React from "react";
import { theme } from "../src/theme";

type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}

const colorModeManager: StorageManager = {
  get: async () => {
    let val = localStorage.getItem("@color-mode");
    return val === "dark" ? "dark" : "light";
  },
  set: async (value: ColorMode) => {
    let strValue = value ? value.toString() : "";
    localStorage.setItem("@color-mode", strValue);
  },
};

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
      <NativeBaseProvider isSSR theme={theme} config={config} colorModeManager={colorModeManager}>
        <Component {...pageProps} />
      </NativeBaseProvider>
    </AppContext.Provider>
  );
}

export default MyApp;
