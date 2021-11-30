import Head from "next/head";
import { useState, useEffect, useContext } from "react";
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
  SunIcon,
  Actionsheet,
  Text,
  Button,
  IconButton,
  CloseIcon,
  HamburgerIcon,
} from "native-base";
import router, { Router, useRouter } from "next/router";
import path from "path";
import Sidebar from "../src/new-components/Sidebar";
import Navbar from "../src/new-components/Navbar";
import { AppContext } from "../src/AppContext";
import MainContent from "../src/new-components/MainContent";
import React from "react";
import MobileSidebar from "../src/new-components/MobileSidebar";

function Layout({
  children: content,
  version: currentVersion,
  sidebar,
  versionList,
}: any) {
  // console.log("Sidebar", sidebar);

  const { activeVersion, setActiveVersion } = useContext(AppContext);
  const router = useRouter();

  useEffect(() => {
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
  }, []);
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <>
      <Head>
        <title>Layouts Example</title>
      </Head>
      <Box h="100vh">
        <Navbar />
        <HStack flex="1">
          {/* leftsidebar only show on big devices */}
          <Box display={{ base: "none", lg: "flex" }}>
            <Sidebar sidebar={sidebar} />
          </Box>

          <MainContent content={content} />
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
