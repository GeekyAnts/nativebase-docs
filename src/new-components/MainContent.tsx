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
} from "native-base";
import { MDXRemote } from "next-mdx-remote";
import NativebaseLogo from "./NativebaseLogo";
import Toc from "./Toc";

export default function MainContent(props: any) {
  const { content } = props;
  console.log(content, "content");
  const tocArray = [
    {
      id: "1",
      title: "Installation",
    },
    {
      id: "2",
      title: "Anatomy",
    },
    {
      id: "3",
      title: "API Reference",
      topics: [
        { id: "5", title: "Root" },
        { id: "6", title: "Image" },
        { id: "7", title: "Fallback" },
      ],
    },
    {
      id: "4",
      title: "Examples",
      topics: [{ id: "2", title: "Clickable Avatar with tooltip" }],
    },
  ];
  // const anchors = React.Children.toArray(children)
  //   .filter(
  //     (child) =>
  //       child.props?.mdxType && ["h2", "h3"].includes(child.props.mdxType)
  //   )
  //   .map((child) => {
  //     const idText = getHeadingIds(child.props.children);
  //     return {
  //       url: "#" + idText,
  //       depth:
  //         (child.props?.mdxType &&
  //           parseInt(child.props.mdxType.replace("h", ""), 0)) ??
  //         0,
  //       text: child.props.children,
  //     };
  //   });
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
