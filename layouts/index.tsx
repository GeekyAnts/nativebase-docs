import Head from "next/head";
import { useState, useContext } from "react";
import styles from "./layout.module.css";
import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import { Box, Menu, Pressable } from "native-base";
import router, { Router, useRouter } from "next/router";
import path from "path";
import { AppContext } from "../src/AppContext";

function Layout({
  children: content,
  version: currentVersion,
  versionList,
}: any) {
  const { activeVersion, setActiveVersion } = useContext(AppContext);
  const Router = useRouter();
  const updateActiveVersion = (version: string, versions: string[]) => {
    const currentPathArray = window?.location.href.split("/");
    let pathArray: string[] = [];
    currentPathArray.map((val, ind) => {
      ind < 3 ? null : pathArray.push(val);
    });
    let path = "";
    if (versions.includes(pathArray[0])) {
      pathArray[0] = version;
    } else {
      pathArray = [version, ...pathArray];
    }
    pathArray.map((val) => {
      path += "/" + val;
    });
    router.push(path);
  };
  return (
    <>
      <Head>
        <title>Layouts Example</title>
      </Head>
      <Link href="/box">Box</Link>
      <Link href="/button">Button</Link>
      <Link href={`/${currentVersion}/box`}>Migration Button</Link>
      <Box>Hello world</Box>
      <Box  alignItems="flex-start">
      <Menu
        trigger={(triggerProps) => {
          return (
            <Pressable accessibilityLabel="More options menu" {...triggerProps} w="40">
              <Box>{activeVersion}</Box>
            </Pressable>
          );
        }}
      >
        <Menu.Item
          // @ts-ignore
          onPress={() => {
            setActiveVersion("next");
            updateActiveVersion("next", versionList);
          }}
          bg={"next" === activeVersion ? "coolGray.200" : "coolGray.50"}
        >
          next
        </Menu.Item>
        {versionList.map((version: string) => {
          return (
            <Menu.Item
              // @ts-ignore
              onPress={() => {
                setActiveVersion(version);
                updateActiveVersion(version, versionList);
              }}
              bg={version === activeVersion ? "coolGray.200" : "coolGray.50"}
            >
              {version}
            </Menu.Item>
          );
        })}
      </Menu></Box>
      <MDXRemote {...content} />
    </>
  );
}

export default Layout;
