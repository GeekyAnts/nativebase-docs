import React from "react";
import { Box, ScrollView } from "native-base";
import * as docComponents from "../components";
import { MDXRemote } from "next-mdx-remote";
import Toc from "./Toc";
import Heading1 from "./markdown-components/Heading1";

export default function MainContent(props: any) {
  const { content, tocArray } = props;

  const components = {
    ...docComponents,
    h2: Heading1,
    img: ({ src, alt }: any) => {
      return (
        <p>
          <img alt={alt} src={src} />
        </p>
      );
    },
  };

  return (
    <>
      <ScrollView flexGrow="0">
        <Box px="10" py="8">
          <MDXRemote {...content} components={components} />
        </Box>
      </ScrollView>
      <Box display={{ base: "none", lg: "flex" }}>
        <Toc tocArray={tocArray} />
      </Box>
    </>
  );
}
