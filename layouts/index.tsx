import Head from "next/head";
import { useState, useEffect, useContext } from "react";
import styles from "./layout.module.css";
import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import { Box, Menu, Pressable, Heading, HStack } from "native-base";
import { useRouter } from "next/router";
import path from "path";
import { AppContext } from "../src/AppContext";

function Layout({
  children: content,
  version: currentVersion,
  sidebar,
  versionList,
}: any) {
  // console.log("Sidebar", sidebar);

  const { activeVersion, setActiveVersion } = useContext(AppContext);
  const router = useRouter();
  function isLatestVersionSlug(version: string) {
    // if slug has no version or next version in params. eg: localhost/box or localhost/migration/button
    if (!versionList.includes(version) && version !== "next") {
      return true;
    }
    return false;
  }
  function isLatestVersion(version: string) {
    // if slug has no version or next version in params. eg: localhost/box or localhost/migration/button
    if (versionList[0] === version) {
      return true;
    }
    return false;
  }
  
  const updateActiveVersion = (version: string, versions: string[]) => {
    const currentPathArray = window?.location.href.split("/");
    let pathArray: string[] = [];
    currentPathArray.map((val, ind) => {
      ind < 3 ? null : pathArray.push(val);
    });
    let path = "";
    // console.log("latestVer", isLatestVersion(version) ? "" : version);

    if ([...versions, "next"].includes(pathArray[0])) {
      pathArray[0] = version;
    } else {
      pathArray = [version, ...pathArray];
    }

    pathArray.map((val) => {
      path += "/" + val;
    });
    // console.log("path", path);
    router.push(path);
  };

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
        <HStack space="3">
          <Box>
            {sidebar.map((elem: any) => {
              return (
                <>
                  {elem.type === "heading" && <Heading>{elem.title}</Heading>}
                  {
                    <>
                      {elem.pages.map((page: any) => {
                        // console.log(
                        //   `${
                        //     isLatestVersionSlug(activeVersion)
                        //       ? ""
                        //       : activeVersion + "/"
                        //   }${page.id}`
                        // );

                        // return null;
                        return (
                          <Link
                            href={`${
                              isLatestVersionSlug(activeVersion)
                                ? ""
                                : activeVersion + "/"
                            }${page.id}`}
                          >
                            {page.title}
                          </Link>
                        );
                      })}
                    </>
                  }
                </>
              );
            })}
          </Box>
          <Box alignItems="flex-start">
            <Menu
              trigger={(triggerProps) => {
                return (
                  <Pressable
                    bg="coolGray.300"
                    p="2"
                    accessibilityLabel="More options menu"
                    {...triggerProps}
                    w="40"
                  >
                    <Box>{isLatestVersion(activeVersion) ? versionList[0] : activeVersion}</Box>
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
                      setActiveVersion(isLatestVersion(version) ? "" : version);
                      updateActiveVersion(isLatestVersion(version) ? "" : version, versionList);
                    }}
                    bg={
                      version === activeVersion ? "coolGray.200" : "coolGray.50"
                    }
                  >
                    {version}
                  </Menu.Item>
                );
              })}
            </Menu>
            <MDXRemote {...content} />
          </Box>
        </HStack>
      </Box>
    </>
  );
}

export default Layout;
