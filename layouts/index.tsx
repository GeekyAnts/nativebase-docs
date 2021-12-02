import Head from "next/head";
import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  HStack,
  Menu,
  Pressable,
  ScrollView,
  Hidden,
  useDisclose,
  Fab,
  Icon,
  InfoIcon,
  VStack,
  SunIcon,
  Actionsheet,
  Text,
  Button,
  IconButton,
  CloseIcon,
  HamburgerIcon,
  Slide,
} from "native-base";
import router, { Router, useRouter } from "next/router";
import path from "path";
import Sidebar from "../src/new-components/Sidebar";
import Navbar from "../src/new-components/Navbar";
import MobileNavbar from "../src/new-components/MobileNavbar";

import { AppContext } from "../src/AppContext";
import MainContent from "../src/new-components/MainContent";
import MobileSidebar from "../src/new-components/MobileSidebar";

function Layout({
  children: content,
  version: currentVersion,
  tocArray,
  sidebar,
  versionList,
  frontMatter,
}: any) {
  // console.log("Sidebar", sidebar);
  const { activeVersion, setActiveVersion } = useContext(AppContext);
  const router = useRouter();
  const [isSlideOpen, setSlideOpen] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);
  const { activeSidebarItem, setActiveSidebarItem } = useContext(AppContext);

  useEffect(() => {
    window.document.body.addEventListener("click", () => {
      setSlideOpen(false);
    });

    const currentPathArray = window?.location.href.split("/");

    // console.log(currentPathArray);

    let pathArray: string[] = [];
    currentPathArray.map((val, ind) => {
      ind < 3 ? null : pathArray.push(val);
    });
    // console.log(pathArray);

    let actVersion = currentVersion;
    if ([...versionList, "next"].includes(pathArray[0])) {
      actVersion = pathArray[0];
    } else {
      actVersion = "";
    }
    // console.log("actVersion", actVersion);
    setActiveVersion(actVersion);

    if (pathArray[0] === actVersion) {
      console.log(
        path.join(...pathArray.splice(0, 1)).split("#")[0],
        "buffalo"
      );
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
            : "NativeBase"
        }`}</title>
      </Head>

      <Box
        h="100vh"
        _light={{ bg: "backgroundLight" }}
        _dark={{ bg: "backgroundDark" }}
      >
 
        <Box display={{ base: "flex", lg: "none" }} zIndex="1">
          <MobileNavbar />
        </Box>
        <Box display={{ base: "none", lg: "flex" }}>
          <Navbar />
        </Box>

        <HStack flex="1">
          {/* leftsidebar only show on big devices */}
          <Box display={{ base: "none", lg: "flex" }}>
            <Sidebar sidebar={sidebar} />
          </Box>

          <MainContent content={content} tocArray={tocArray} />

          {/* fab se actionsheet khul k daalskte h sidebar */}
          <Box display={{ base: "flex", lg: "none" }}>
            <MobileSidebar sidebar={sidebar} />
          </Box>
        </HStack>
      </Box>
    </>
  );
}

export default Layout;
