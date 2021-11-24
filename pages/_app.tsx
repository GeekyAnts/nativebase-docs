import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NativeBaseProvider } from "native-base";
import { AppContext } from "../src/AppContext";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [activeVersion, setActiveVersion] = useState("/");
  const updateActiveVersion = (version: string) => setActiveVersion(version);
  return (
    <AppContext.Provider
      value={{ activeVersion, setActiveVersion: updateActiveVersion }}
    >
      <NativeBaseProvider>
        <Component {...pageProps} />
      </NativeBaseProvider>
    </AppContext.Provider>
  );
}

export default MyApp;
