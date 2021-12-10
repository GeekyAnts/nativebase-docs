import React from "react";
import Link from "next/link";
import {
  HStack,
  Button,
  AddIcon,
  IconButton,
  SunIcon,
  Menu,
  Text,
  View,
  ChevronDownIcon,
  Pressable,
  useColorMode,
  HamburgerIcon,
  Box,
} from "native-base";
import NativebaseLogo from "./NativebaseLogo";
import { isLatestVersion, isLatestVersionSlug } from "../utils";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { useRouter } from "next/router";
import versions from "../../versions.json";

const footerItems = [
  {
    type: "heading",
    title: "Docs",
    pages: [
      {
        id: "introduction",
        title: "Introduction",
        link: "/",
        linkType: "internal",
      },
      {
        id: "examples",
        title: "Examples",
        link: "/todo-example",
        linkType: "internal",
      },
    ],
  },
  {
    type: "heading",
    title: "Community",
    pages: [
      {
        id: "introduction",
        title: "Twitter",
        link: "/",
        linkType: "internal",
      },
      {
        id: "examples",
        title: "StackOverflow",
        link: "/todo-example",
        linkType: "internal",
      },
      {
        id: "introduction",
        title: "Discord",
        link: "/",
        linkType: "internal",
      },
      {
        id: "examples",
        title: "VS Code Extension",
        link: "/todo-example",
        linkType: "internal",
      },
    ],
  },
  {
    type: "heading",
    title: "More",
    pages: [
      {
        id: "introduction",
        title: "Github",
        link: "/",
        linkType: "internal",
      },
      {
        id: "examples",
        title: "Contribution Guidelines",
        link: "/todo-example",
        linkType: "internal",
      },
      {
        id: "introduction",
        title: "Privacy Policy",
        link: "/",
        linkType: "internal",
      },
      {
        id: "examples",
        title: "Cookie Policy",
        link: "/todo-example",
        linkType: "internal",
      },
    ],
  },
];

export default function Footer(props: any) {
  return <Box></Box>;
}
