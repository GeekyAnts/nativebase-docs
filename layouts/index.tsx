import Head from "next/head";
import { useState, useEffect, useContext } from "react";
import styles from "./layout.module.css";
import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import { Box, HStack, Menu, Pressable, ScrollView } from "native-base";
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

  const sidebarArray = [
    {
      type: "heading",
      title: "Overview",
      pages: [
        {
          type: "page",
          id: "test",
          title: "Introduction",
          path: "/3.2.2/test",
          status: "deprecated",
        },
        {
          type: "page",
          id: "test1",
          title: "Getting Started",
          path: "/3.2.2/test1",
          status: "coming soon",
        },
        {
          type: "page",
          id: "test2",
          title: "Styling",
          path: "/3.2.2/test2",
        },
        {
          type: "page",
          id: "test2",
          title: "Animation",
          path: "/3.2.2/test2",
        },
        {
          type: "page",
          id: "test2",
          title: "Accessibility",
          path: "/3.2.2/test2",
        },
        {
          type: "page",
          id: "test2",
          title: "Server Side Rendering",
          path: "/3.2.2/test2",
        },
        {
          type: "page",
          id: "test2",
          title: "Releases",
          path: "/3.2.2/test2",
        },
      ],
    },
    {
      type: "heading",
      title: "Components",
      pages: [
        {
          type: "page",
          id: "test",
          title: "Accordion",
          path: "/3.2.2/test",
        },
        {
          type: "page",
          id: "test1",
          title: "Alert Dialog",
          path: "/3.2.2/test1",
        },
        {
          type: "page",
          id: "test2",
          title: "Aspect Ratio",
          path: "/3.2.2/test2",
        },
        {
          type: "page",
          id: "test",
          title: "Avatar",
          path: "/3.2.2/test",
        },
        {
          type: "page",
          id: "test1",
          title: "Carousel",
          path: "/3.2.2/test1",
        },
        {
          type: "page",
          id: "test2",
          title: "Checkbox",
          path: "/3.2.2/test2",
        },
        {
          type: "page",
          id: "test",
          title: "Collapsible",
          path: "/3.2.2/test",
        },
        {
          type: "page",
          id: "test1",
          title: "Context menu",
          path: "/3.2.2/test1",
        },
        {
          type: "page",
          id: "test2",
          title: "Dialog",
          path: "/3.2.2/test2",
        },
        {
          type: "page",
          id: "test",
          title: "DropdownMenu",
          path: "/3.2.2/test",
        },
        {
          type: "page",
          id: "test1",
          title: "Hover card",
          path: "/3.2.2/test1",
        },
        {
          type: "page",
          id: "test2",
          title: "Hover menu",
          path: "/3.2.2/test2",
        },
        {
          type: "page",
          id: "test1",
          title: "Label",
          path: "/3.2.2/test1",
        },
        {
          type: "page",
          id: "test2",
          title: "Menu bar",
          path: "/3.2.2/test2",
        },
        {
          type: "page",
          id: "test",
          title: "Popover",
          path: "/3.2.2/test",
        },
        {
          type: "page",
          id: "test1",
          title: "Progress",
          path: "/3.2.2/test1",
        },
        {
          type: "page",
          id: "test2",
          title: "Radiogroup",
          path: "/3.2.2/test2",
        },
        {
          type: "page",
          id: "test2",
          title: "Select Area",
          path: "/3.2.2/test2",
        },
        {
          type: "page",
          id: "test",
          title: "Select",
          path: "/3.2.2/test",
        },
        {
          type: "page",
          id: "test1",
          title: "Separator",
          path: "/3.2.2/test1",
        },
        {
          type: "page",
          id: "test2",
          title: "Slider",
          path: "/3.2.2/test2",
        },
      ],
    },
  ];
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

  return (
    <>
      <Head>
        <title>Layouts Example</title>
      </Head>
      <Box h="100vh">
        <Navbar versionList={versionList} />
        <HStack flex="1">
          <Sidebar sidebar={sidebar} versionList={versionList} />
          <MainContent content={content} />
        </HStack>
      </Box>
    </>
  );
}

export default Layout;
