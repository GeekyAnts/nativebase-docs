import Head from "next/head";
import React, { useEffect, useContext } from "react";
import {
  Box,
  HStack,
  ScrollView,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useToken,
} from "native-base";
import path from "path";
import Sidebar from "../src/new-components/Sidebar";
import Navbar from "../src/new-components/Navbar";
import MobileNavbar from "../src/new-components/MobileNavbar";

import { AppContext } from "../src/AppContext";
import MainContent from "../src/new-components/MainContent";

import { MobileSidebarVersionDropdown } from "../src/new-components/MobileSidebarVersionDropdown";
import { SocialMediaStagger } from "../src/new-components/SocialMediaStagger";
import NativebaseIconLogo from "../src/new-components/NativebaseIconLogo";

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
  const [isOpenSidebar, setIsOpenSidebar] = React.useState(false);
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
    // @ts-ignore
    document.getElementById("scrollview-id").scrollTop = 0;
  }, [content]);

  useEffect(() => {
    document.getElementsByTagName("body")[0].style.backgroundColor = bgColor;
  }, [bgColor]);

  const isLargeScreen = useBreakpointValue({
    base: false,
    lg: true,
  });
  useEffect(() => {
    if (isLargeScreen) {
      setIsOpenSidebar(false);
    }
  }, [isLargeScreen]);
  return (
    <>
      <Head>
        <title>{`${
          frontMatter && frontMatter.title
            ? frontMatter.title + " | NativeBase"
            : pages?.currentPage?.title + " | NativeBase"
        }`}</title>
        <meta
          name="keywords"
          content="Universal Components for React and React Native"
        />
        {/* og meta links */}
        <meta
          property="og:title"
          content="Universal Components for React and React Native"
        />
        <meta
          property="og:description"
          content="NativeBase 3.0 enables you to build a consistent design system across android, iOS & web. It is powered by React Native ARIA and Styled System. Rich, highly themeable and responsive."
        />
        <meta property="og:url" content="https://docs.nativebase.io" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="NativeBase" />
        <meta
          name="twitter:image:alt"
          content="NativeBase 3.0 enables you to build a consistent design system across android, iOS & web. It is powered by React Native ARIA and Styled System. Rich, highly themeable and responsive."
        />
        <meta property="og:image" content="/img/nativebase-og.png" />
        <meta name="twitter:image" content="/img/nativebase-og.png"></meta>
        <meta name="twitter:site" content="@nativebase" />

        <meta
          name="description"
          content="NativeBase 3.0 enables you to build a consistent design system across android, iOS & web. It is powered by React Native ARIA and Styled System. Rich, highly themeable and responsive."
        />
        <link rel="icon" href="/img/nativebaselogo.svg" />
      </Head>
      <Box
        w="100%"
        h={{ base: "100%", md: "100vh" }}
        _light={{ bg: "backgroundLight" }}
        _dark={{ bg: "backgroundDark" }}
        alignItems="center"
        nativeID={useColorModeValue(
          "nativebase-body-light",
          "nativebase-body-dark"
        )}
      >
        <ScrollView w="100%" nativeID="scrollview-id">
          <Box h="100%" w="100%">
            <Box
              display={{ base: "none", lg: "flex" }}
              w="100%"
              position="sticky"
              top="0"
              zIndex={99}
              _light={{ bg: "backgroundLight" }}
              _dark={{ bg: "backgroundDark:alpha.50" }}
              // @ts-ignore
              style={{ backdropFilter: "blur(10px)" }}
            >
              <Navbar />
            </Box>
            <Box
              display={{ base: "flex", lg: "none" }}
              position="sticky"
              top="0"
              zIndex={99}
              _light={{ bg: "backgroundLight" }}
              _dark={{ bg: "backgroundDark" }}
              w="100%"
            >
              <MobileNavbar
                isOpenSidebar={isOpenSidebar}
                setIsOpenSidebar={setIsOpenSidebar}
              />
            </Box>
            {!isOpenSidebar ? (
              <HStack>
                <Box
                  position="sticky"
                  top="16"
                  h="calc(100vh - 64px)"
                  display={{ base: "none", lg: "flex" }}
                >
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
            ) : (
              <>
                <Box h="100%" w="100%" display={{ base: "flex", lg: "none" }}>
                  <MobileSidebarVersionDropdown
                    setIsOpenSidebar={setIsOpenSidebar}
                  />
                  <Sidebar
                    sidebar={sidebar}
                    isMobile
                    setIsOpenSidebar={setIsOpenSidebar}
                  />
                </Box>
              </>
            )}
          </Box>
          <SocialMediaStagger />
        </ScrollView>
        <Box
          position="fixed"
          bottom="8"
          right={{ base: "auto", lg: "30px" }}
          left={{ base: "30px", lg: "auto" }}
          mr="auto"
          _light={{ bg: "coolGray.50" }}
          _dark={{ bg: "coolGray.800" }}
          h="36px"
          w="185"
          rounded="4"
          overflow="hidden"
        >
          <Box position="absolute" left="-90px" top="-85px">
            <NativebaseIconLogo width="125" height="130" />
          </Box>

          <Text
            pl="6"
            _light={{ color: "black" }}
            _dark={{ color: "coolGray.50" }}
            m="auto"
            fontSize="sm"
          >
            MadeWithNativeBase
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default Layout;
