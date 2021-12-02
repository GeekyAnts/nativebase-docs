import React from "react";
import { Box, ScrollView } from "native-base";
import { MDXRemote } from "next-mdx-remote";
import Toc from "./Toc";
import Heading1 from "./markdown-components/Heading1";

export default function MainContent(props: any) {
  const { content, tocArray } = props;

  const components = {
    h2: Heading1,
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
