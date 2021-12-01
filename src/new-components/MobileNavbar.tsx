import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import {
  HStack,
  Button,
  AddIcon,
  IconButton,
  Menu,
  Text,
  View,
  ChevronDownIcon,
  Pressable,
  useColorMode,
  useDisclose,
  Fab,
  Icon,
  VStack,
  Box,
  SunIcon,
  CloseIcon,
  HamburgerIcon,
  Slide,
} from "native-base";
import NativebaseLogo from "./NativebaseLogo";
import { isLatestVersion, isLatestVersionSlug } from "../utils";
import { AppContext } from "../AppContext";
import { useRouter } from "next/router";
import versions from "../../versions.json";

export default function MobileNavbar(props: any) {
  const { activeVersion, setActiveVersion } = useContext(AppContext);
  const [isSlideOpen, setSlideOpen] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  const updateActiveVersion = (version: string, versions: string[]) => {
    const currentPathArray = window?.location.href.split("/");
    let pathArray: string[] = [];
    currentPathArray.map((val, ind) => {
      ind < 3 ? null : pathArray.push(val);
    });
    let path = "";

    if ([...versions, "next"].includes(pathArray[0])) {
      pathArray[0] = version;
    } else {
      pathArray = [version, ...pathArray];
    }

    pathArray.map((val) => {
      path += "/" + val;
    });
    router.push(path);
  };
  useEffect(() => {
    window.document.body.addEventListener("click", () => {
      setSlideOpen(false);
    });
  });
  return (
    <HStack w="100%" borderBottomWidth="1" borderColor="gray.100" px="6" h="16">
      <IconButton
        icon={<HamburgerIcon size="7" />}
        // @ts-ignore
        onPress={() => setSlideOpen(!isSlideOpen)}
        accessibilityLabel="Mobile Menu"
        aria-controls="mobile-menu"
        aria-expanded="false"
        mr="2"
      />
      <NativebaseLogo />
      <Slide
        in={isSlideOpen}
        placement="left"
        flex="1"
        height="100%"
        zIndex="2"
        duration={100}
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
              transitionProperty: "all",
              transitionTimingFunction: "cubic-bezier(.4,0,.2,1)",
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
    </HStack>
  );
}
