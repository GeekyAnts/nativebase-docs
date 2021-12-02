import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import {
  HStack,
  IconButton,
  Text,
  Pressable,
  VStack,
  Box,
  HamburgerIcon,
  Slide,
} from "native-base";
import NativebaseLogo from "./NativebaseLogo";
import { useRouter } from "next/router";

export default function MobileNavbar(props: any) {
  const [isSlideOpen, setSlideOpen] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);
  const router = useRouter();

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
        duration={100}
      >
        <Box
          flexDirection="column"
          w="300px"
          height="100vh"
          bg={"gray.100"}
          overflow="scroll"
        >
          <VStack px={{ base: "2", sm: "3" }} pt="2" pb="3" space="2">
            <HStack
              space="10"
              px="3"
              py="2"
              borderBottomWidth="1"
              borderBottomColor="gray.200"
              alignItems="center"
            ></HStack>
            <Box pt="3">
              <Pressable
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
