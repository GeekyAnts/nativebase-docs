import React from "react";
import {
  Box,
  Link as NBLink,
  Stagger,
  useDisclose,
  IconButton,
  Icon,
} from "native-base";
import GitHub from "../icons/GithubIcon";
import Discord from "../icons/DiscordIcon";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import FigmaIcon from "../icons/FigmaIcon";
import TwitterIcon from "../icons/TwitterIcon";

export const SocialMediaStagger = (props: any) => {
  const { isOpen, onClose, onToggle } = useDisclose();

  return (
    <Box
      position="sticky"
      bottom="8"
      display={{ base: "flex", lg: "none" }}
      right="30px"
      ml="auto"
      mt="-220"
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
        <NBLink href="https://github.com/GeekyAnts/nativebase" isExternal>
          <IconButton
            mb="4"
            boxSize="10"
            justifyContent="center"
            alignItems="center"
            variant="unstyled"
            bg="coolGray.800"
            borderRadius="full"
            onPress={onClose}
            icon={<GitHub fill="white" size="8" />}
          />
        </NBLink>
        <NBLink href="/discord" isExternal>
          <IconButton
            mb="4"
            boxSize="10"
            justifyContent="center"
            alignItems="center"
            variant="unstyled"
            bg="coolGray.800"
            borderRadius="full"
            onPress={onClose}
            icon={<Discord fill="#5865F2" size="6" />}
          />
        </NBLink>
        <NBLink href="https://twitter.com/nativebase" isExternal>
          <IconButton
            mb="4"
            boxSize="10"
            justifyContent="center"
            alignItems="center"
            variant="unstyled"
            bg="coolGray.800"
            borderRadius="full"
            onPress={onClose}
            icon={<TwitterIcon fill="#1DA1F2" size="6" />}
          />
        </NBLink>

        <NBLink
          href="https://www.figma.com/@nativebase?utm_source=HomePage&utm_medium=header&utm_campaign=NativeBase_figma"
          isExternal
        >
          <IconButton
            mb="4"
            boxSize="10"
            justifyContent="center"
            alignItems="center"
            variant="unstyled"
            bg="coolGray.800"
            borderRadius="full"
            onPress={onClose}
            icon={<FigmaIcon size="6" />}
          />
        </NBLink>
      </Stagger>
      <IconButton
        right="4px"
        boxSize="12"
        variant="unstyled"
        justifyContent="center"
        alignItems="center"
        rounded="full"
        bg="coolGray.50"
        onPress={onToggle}
        icon={
          <Icon
            size="7"
            color="black"
            as={MaterialIcons}
            name={isOpen ? "close" : "more-vert"}
          />
        }
      />
    </Box>
  );
};
