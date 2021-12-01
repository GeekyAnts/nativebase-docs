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
import { AppContext } from "../src/AppContext";
import MainContent from "../src/new-components/MainContent";
import MobileSidebar from "../src/new-components/MobileSidebar";

function Layout({
  children: content,
  version: currentVersion,
  tocArray,
  sidebar,
  versionList,
}: any) {
  // console.log("Sidebar", sidebar);
  const { activeVersion, setActiveVersion } = useContext(AppContext);
  const router = useRouter();
  const [isSlideOpen, setSlideOpen] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

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
  }, []);

  return (
    <>
      <Head>
        <title>Layouts Example</title>
      </Head>
      <Box h="100vh">
        <Navbar />

        <IconButton
          icon={<HamburgerIcon size="7" />}
          // @ts-ignore
          onPress={() => setSlideOpen(!isSlideOpen)}
          accessibilityLabel="Mobile Menu"
          aria-controls="mobile-menu"
          aria-expanded="false"
          mr="2"
          // display={{ base: "flex", lg: "none" }}
        />

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
        <Slide
          in={isSlideOpen}
          placement="left"
          flex="1"
          height="100%"
          zIndex="2"
        >
          <Box
            zIndex="1"
            w="300px"
            height="100vh"
            bg={"black"}
            overflow="scroll"
            _web={{
              // @ts-ignore
              style: {
                "transition-property": "all",
                transitionDuration: ".3s",
                "transition-timing-function": "cubic-bezier(.4,0,.2,1)",
              },
            }}
          >
            <VStack px={{ base: "2", sm: "3" }} pt="2" pb="3" space="2">
              <HStack
                space="10"
                px="3"
                py="2"
                borderBottomWidth="1"
                borderBottomColor="gray.200"
                alignItems="center"
              >
                gekko
              </HStack>
              <Box pt="3">
                <Pressable
                  // className="flex justify-between px-3 py-1  rounded-md cursor-pointer text-gray-500 dark:text-gray-400"
                  rounded="md"
                  // @ts-ignore
                  onPress={() => {
                    setIsCollapsible(!isCollapsible);
                  }}
                >
                  <HStack justifyContent="space-between" px="3" py="1">
                    <Text
                      // @ts-ignore
                      accessibilityLabel="Versions"
                      fontSize="md"
                      fontWeight="medium"
                      color={"gray.400"}
                    >
                      Versions
                    </Text>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      transform={isCollapsible ? "rotate(90)" : ""}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="gray"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </HStack>
                </Pressable>
              </Box>
            </VStack>
          </Box>
        </Slide>
      </Box>
    </>
  );
}

export default Layout;
