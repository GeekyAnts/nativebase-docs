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
        <Navbar versionList={versionList} />
        <HStack flex="1">
          {/* leftsidebar only show on big devices */}
          <Hidden till="lg">
            <Sidebar sidebar={sidebar} versionList={versionList} />
          </Hidden>
          <>
            <MainContent content={content} />

            {/* fab se actionsheet khul k daalskte h sidebar */}
            <Hidden from="lg">
              <>
                <Fab
                  borderRadius="full"
                  placement="bottom-right"
                  icon={<HamburgerIcon />}
                  // label="Quick Start"
                  // @ts-ignore
                  onPress={onOpen}
                />
                <Actionsheet isOpen={isOpen} onClose={onClose}>
                  <Actionsheet.Content roundedTop="0" overflow="auto">
                    <Actionsheet.Item>Delete</Actionsheet.Item>
                    <Actionsheet.Item>Share</Actionsheet.Item>
                    <Actionsheet.Item>Play</Actionsheet.Item>
                    <Actionsheet.Item>Favourite</Actionsheet.Item>
                    <Actionsheet.Item>Cancel</Actionsheet.Item>
                    <Actionsheet.Item>Delete</Actionsheet.Item>
                    <Actionsheet.Item>Share</Actionsheet.Item>
                    <Actionsheet.Item>Play</Actionsheet.Item>
                    <Actionsheet.Item>Favourite</Actionsheet.Item>
                    <Actionsheet.Item>Cancel</Actionsheet.Item>
                    <Actionsheet.Item>Delete</Actionsheet.Item>
                    <Actionsheet.Item>Share</Actionsheet.Item>
                    <Actionsheet.Item>Play</Actionsheet.Item>
                    <Actionsheet.Item>Favourite</Actionsheet.Item>
                    <Actionsheet.Item>Cancel</Actionsheet.Item>
                    <Actionsheet.Item>Delete</Actionsheet.Item>
                    <Actionsheet.Item>Share</Actionsheet.Item>
                    <Actionsheet.Item>Play</Actionsheet.Item>
                    <Actionsheet.Item>Favourite</Actionsheet.Item>
                    <Actionsheet.Item>Cancel</Actionsheet.Item>
                  </Actionsheet.Content>
                  <IconButton
                    variant="solid"
                    position="absolute"
                    bottom="10"
                    size="lg"
                    px="4"
                    right="10"
                    // @ts-ignore
                    onPress={onClose}
                    icon={<CloseIcon size="xs" />}
                  />
                </Actionsheet>
              </>
            </Hidden>
          </>
        </HStack>
      </Box>
    </>
  );
}

export default Layout;
