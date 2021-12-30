import Head from "next/head";
import React, { useEffect, useContext, useState } from "react";
import {
  Box,
  Fab,
  HStack,
  Icon,
  IconButton,
  ScrollView,
  Stagger,
  useBreakpointValue,
  useColorModeValue,
  useDisclose,
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
import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import GitHub from "../src/icons/GithubIcon";
import FigmaIcon from "../src/icons/FigmaIcon";
import Discord from "../src/icons/DiscordIcon";

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
    document.getElementsByTagName("body")[0].scrollTop = 0;
  }, []);

  useEffect(() => {
    document.getElementsByTagName("body")[0].style.backgroundColor = bgColor;
  }, [bgColor]);
  const isLargeScreen = useBreakpointValue({
    base: false,
    lg: true,
  });
  const { isOpen, onToggle } = useDisclose();
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
                <Sidebar sidebar={sidebar} isMobile />
              </Box>
            </>
          )}
        </Box>
        <Box
          position="fixed"
          bottom="8"
          right="6"
          // display={{ base: "flex", lg: "none" }}
        >
          <Stagger
            visible={isOpen}
            initial={{
              opacity: 0,
              scale: 0,
              translateY: 34,
            }}
            animate={{
              translateY: 0,
              scale: 1,
              opacity: 1,
              transition: {
                type: "spring",
                mass: 0.8,
                stagger: {
                  offset: 30,
                  reverse: true,
                },
              },
            }}
            exit={{
              translateY: 34,
              scale: 0.5,
              opacity: 0,
              transition: {
                duration: 10,
                stagger: {
                  offset: 30,
                  reverse: true,
                },
              },
            }}
          >
            <IconButton
              mb="4"
              boxSize="10"
              justifyContent="center"
              alignItems="center"
              variant="unstyled"
              bg="coolGray.800"
              borderRadius="full"
              icon={<GitHub fill="white" size="8" />}
            />
            <IconButton
              mb="4"
              boxSize="10"
              justifyContent="center"
              alignItems="center"
              variant="unstyled"
              bg="coolGray.800"
              borderRadius="full"
              icon={<Discord fill="#5865F2" size="6" />}
            />
            <IconButton
              mb="4"
              boxSize="10"
              justifyContent="center"
              alignItems="center"
              variant="unstyled"
              bg="coolGray.800"
              borderRadius="full"
              _icon={{ color: "#1DA1F2" }}
              icon={<Icon as={AntDesign} size="6" name="twitter" />}
            />

            <IconButton
              mb="4"
              boxSize="10"
              justifyContent="center"
              alignItems="center"
              variant="unstyled"
              bg="coolGray.800"
              borderRadius="full"
              icon={<FigmaIcon size="6" />}
            />
          </Stagger>
          <IconButton
            boxSize="12"
            variant="unstyled"
            justifyContent="center"
            alignItems="center"
            rounded="full"
            bg="coolGray.50"
            onPress={onToggle}
            icon={<Icon color="black" as={MaterialIcons} name="more-vert" />}
          />
        </Box>
      </Box>
    </>
  );
}

export default Layout;
