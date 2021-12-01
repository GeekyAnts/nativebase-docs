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
import { MDXRemote } from "next-mdx-remote";
import NativebaseLogo from "./NativebaseLogo";
import Toc from "./Toc";

export default function MainContent(props: any) {
  const { content, tocArray } = props;

  return (
    <>
      <ScrollView flexGrow="0">
        <Box>
          <MDXRemote {...content} />
        </Box>
      </ScrollView>
      <Box display={{ base: "none", lg: "flex" }}>
        <Toc tocArray={tocArray} />
      </Box>
    </>
  );
}
