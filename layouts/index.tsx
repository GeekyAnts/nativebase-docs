import Head from "next/head";
import React, { useEffect, useContext } from "react";
import { Box, HStack, useColorModeValue } from "native-base";
import path from "path";
import Sidebar from "../src/new-components/Sidebar";
import Navbar from "../src/new-components/Navbar";
import MobileNavbar from "../src/new-components/MobileNavbar";

import { AppContext } from "../src/AppContext";
import MainContent from "../src/new-components/MainContent";
import MobileSidebar from "../src/new-components/MobileSidebar";
import Footer from "../src/new-components/Footer";

function Layout({
  children: content,
  version: currentVersion,
  tocArray,
  sidebar,
  versionList,
  frontMatter,
  pages,
}: any) {
  // console.log("Sidebar", sidebar);
  const { isNavbarOpen, setActiveVersion, setActiveSidebarItem } =
    useContext(AppContext);

  useEffect(() => {
    const currentPathArray = window?.location.href.split("/");

    let pathArray: string[] = [];
    currentPathArray.map((val, ind) => {
      ind < 3 ? null : pathArray.push(val);
    });

    let actVersion = currentVersion;
    if ([...versionList, "next"].includes(pathArray[0])) {
      actVersion = pathArray[0];
    } else {
      actVersion = "";
    }
    setActiveVersion(actVersion);

    if (pathArray[0] === actVersion) {
      setActiveSidebarItem(path.join(...pathArray.splice(0, 1)).split("#")[0]);
    } else {
      setActiveSidebarItem(path.join(...pathArray).split("#")[0]);
    }
  }, []);
  return (
    <>
      <Head>
        <title>{`${
          frontMatter && frontMatter.title
            ? frontMatter.title + " | NativeBase"
            : pages?.currentPage?.title + " | NativeBase"
        }`}</title>
      </Head>
      <div
        id={useColorModeValue("nativebase-body-light", "nativebase-body-dark")}
      >
        <Box
          h="100vh"
          _light={{ bg: "backgroundLight" }}
          _dark={{ bg: "backgroundDark" }}
        >
          {/* implement this using usebreakpoint value hook */}
          <Box display={{ base: "flex", lg: "none" }} zIndex="1">
            <MobileNavbar />
          </Box>
          <Box display={{ base: "none", lg: "flex" }}>
            <Navbar />
          </Box>

          <HStack
            flex="1"
            _light={{
              bg: { base: isNavbarOpen ? "black:alpha.30" : "", lg: "" },
            }}
            _dark={{
              bg: { base: isNavbarOpen ? "black:alpha.70" : "", lg: "" },
            }}
          >
            {/* leftsidebar only show on big devices */}
            <Box display={{ base: "none", lg: "flex" }}>
              <Sidebar sidebar={sidebar} />
            </Box>

            <MainContent
              pages={pages}
              frontMatter={frontMatter}
              content={content}
              tocArray={tocArray}
            />

            {/* fab se actionsheet khul k daalskte h sidebar */}
            <Box display={{ base: "flex", lg: "none" }}>
              <MobileSidebar sidebar={sidebar} />
            </Box>
          </HStack>
        </Box>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
