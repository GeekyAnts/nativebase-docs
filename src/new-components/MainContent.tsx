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

  // const tocArray = [
  //   {
  //     id: "1",
  //     title: "Installation",
  //   },
  //   {
  //     id: "2",
  //     title: "Anatomy",
  //   },
  //   {
  //     id: "3",
  //     title: "API Reference",
  //     topics: [
  //       { id: "5", title: "Root" },
  //       { id: "6", title: "Image" },
  //       { id: "7", title: "Fallback" },
  //     ],
  //   },
  //   {
  //     id: "4",
  //     title: "Examples",
  //     topics: [{ id: "2", title: "Clickable Avatar with tooltip" }],
  //   },
  // ];

  return (
    <>
      <ScrollView flexGrow="0">
        <Box>
          <MDXRemote {...content} />
        </Box>
      </ScrollView>
      <Toc tocArray={tocArray} />
    </>
  );
}
