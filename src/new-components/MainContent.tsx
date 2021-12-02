import React from "react";
import { Box, ScrollView } from "native-base";

import { MDXRemote } from "next-mdx-remote";
import Toc from "./Toc";
import {
  Span,
  PText,
  Li,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Anchor,
  Img,
  Code,
  CodeBlock,
} from "./markdown-components";

import * as docComponents from "../components";

export default function MainContent(props: any) {
  const { content, tocArray } = props;

  const components = {
    h1: Heading1,
    h2: Heading2,
    h3: Heading3,
    h4: Heading4,
    h5: Heading5,
    p: PText,
    span: Span,
    li: Li,
    img: Img,
    a: Anchor,
    pre: CodeBlock,
    ...docComponents,
  };

  return (
    <>
      <ScrollView>
        <Box px={{ base: "6", xl: "16" }} py="10">
          <MDXRemote {...content} components={components} />
        </Box>
      </ScrollView>
      <Box display={{ base: "none", lg: "flex" }}>
        <Toc tocArray={tocArray} />
      </Box>
    </>
  );
}
