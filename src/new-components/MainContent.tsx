import React from "react";
import Link from "next/link";
import {
  HStack,
  Button,
  AddIcon,
  IconButton,
  SunIcon,
  Box,
  ScrollView,
  Hidden,
  Fab,
  InfoIcon,
} from "native-base";
import * as docComponents from "../components";
import { MDXRemote } from "next-mdx-remote";
import NativebaseLogo from "./NativebaseLogo";
import Toc from "./Toc";

export default function MainContent(props: any) {
  const { content, tocArray } = props;
  const components = {
    ...docComponents,
    // img: ({ src, alt }: any) => {
    //   return (
    //     <p>
    //       <img alt={alt} src={require(__dirname+src).default} />
    //     </p>
    //   );
    // },
  };
  return (
    <>
      <ScrollView flexGrow="0">
        <Box>
          <MDXRemote {...content} components={{ ...components }} />
        </Box>
      </ScrollView>
      <Box display={{ base: "none", lg: "flex" }}>
        <Toc tocArray={tocArray} />
      </Box>
    </>
  );
}
