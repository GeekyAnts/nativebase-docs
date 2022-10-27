import "../styles/globals.css";
import type { AppProps } from "next/app";
import colors from "native-base/src/theme/base/colors";
import { ColorMode, NativeBaseProvider, StorageManager } from "native-base";
import { AppContext } from "../src/AppContext";
import { useEffect, useState } from "react";
import React from "react";
import { getNativeBaseTheme, theme } from "../src/theme";

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
  enableRem: true,
};
function MyApp({ Component, pageProps }: AppProps) {
  const [activeVersion, setActiveVersion] = useState("/");
  const [activeSidebarItem, setActiveSidebarItem] = useState("");
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [colorMode, setColorMode] = useState<ColorMode>(null);
  const [mounted, setMounted] = useState(false);

  React.useEffect(async () => {
    const currColorMode = await colorModeManager.get();
    document
      .getElementsByTagName("html")[0]
      .setAttribute("data-theme", currColorMode);
    setColorMode(currColorMode);
    setMounted(true);
  }, []);

  const currTheme = getNativeBaseTheme(colorMode);

  const updateActiveVersion = (version: string) => setActiveVersion(version);

  const body = (
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
      <NativeBaseProvider
        isSSR
        theme={currTheme}
        config={config}
        colorModeManager={colorModeManager}
      >
        <Component {...pageProps} />
      </NativeBaseProvider>
    </AppContext.Provider>
  );

  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{body}</div>;
  }

  return body;
}

export default MyApp;
