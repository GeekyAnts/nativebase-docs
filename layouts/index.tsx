import Head from "next/head";
import React, { useEffect, useContext } from "react";
import {
  Box,
  HStack,
  ScrollView,
  useColorModeValue,
  useToken,
} from "native-base";
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
  showToc,
}: any) {
  // console.log("Sidebar", sidebar);
  const {
    isNavbarOpen,
    activeSidebarItem,
    setActiveVersion,
    setActiveSidebarItem,
  } = useContext(AppContext);

  const bgColor = useColorModeValue(
    useToken("colors", "backgroundLight"),
    useToken("colors", "backgroundDark")
  );

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
      pathArray.splice(0, 1);
      setActiveSidebarItem(path.join(...pathArray).split("#")[0]);
    } else {
      setActiveSidebarItem(path.join(...pathArray).split("#")[0]);
    }
    document.getElementsByTagName("body")[0].scrollTop = 0;
  }, []);

  useEffect(() => {
    document.getElementsByTagName("body")[0].style.backgroundColor = bgColor;
  }, [bgColor]);
  return (
    <>
      <Head>
        <title>{`${
          frontMatter && frontMatter.title
            ? frontMatter.title + " | NativeBase"
            : pages?.currentPage?.title + " | NativeBase"
        }`}</title>
      </Head>
      <Box
        w="100%"
        h="100%"
        _light={{ bg: "backgroundLight" }}
        _dark={{ bg: "backgroundDark" }}
        alignItems="center"
        nativeID={useColorModeValue(
          "nativebase-body-light",
          "nativebase-body-dark"
        )}
      >
        <Box h="100%" w="100%">
          <Box
            display={{ base: "none", lg: "flex" }}
            w="100%"
            position="sticky"
            top="0"
            zIndex={99}
            _light={{ bg: "backgroundLight" }}
            _dark={{ bg: "backgroundDark" }}
          >
            <Navbar />
          </Box>
          <HStack>
            <Box position="sticky" top="16" h="calc(100vh - 64px)">
              <Sidebar sidebar={sidebar} />
            </Box>
            <MainContent
              pages={pages}
              frontMatter={frontMatter}
              content={content}
              tocArray={tocArray}
              showToc={showToc}
            />
          </HStack>
        </Box>
      </Box>
    </>
  );
}

export default Layout;
