import React, { useContext } from "react";
import { Box, Heading, ScrollView, Button } from "native-base";
import Link from "next/link";
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
import { AppContext } from "../AppContext";
import * as docComponents from "../components";
import { isLatestVersionSlug } from "../utils";
export default function MainContent(props: any) {
  const { content, tocArray, pages, frontMatter } = props;
  const { activeVersion } = useContext(AppContext);
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
    code: CodeBlock,
    ...docComponents,
  };

  return (
    <>
      <ScrollView>
        <Box px={{ base: "6", xl: "16" }} py="10">
          <Heading>
            {frontMatter && frontMatter.title
              ? frontMatter.title
              : pages.currentPage.title}
          </Heading>
          <MDXRemote {...content} components={components} />
          {pages.previousPage && (
            <Link
              passHref
              href={`${
                isLatestVersionSlug(activeVersion) ? "" : activeVersion + "/"
              }${pages.previousPage.id}`}
            >
              <Box p="4" mb="2" bg="cyan.200">
                {"< " + pages.previousPage.title}
              </Box>
            </Link>
          )}
          {pages.nextPage && (
            <Link
              passHref
              href={`${
                isLatestVersionSlug(activeVersion) ? "" : activeVersion + "/"
              }${pages.nextPage.id}`}
            >
              <Box p="4" bg="cyan.200">
                {pages.nextPage.title + "  >"}
              </Box>
            </Link>
          )}
        </Box>
      </ScrollView>
      <Box display={{ base: "none", lg: "flex" }}>
        <Toc tocArray={tocArray} />
      </Box>
    </>
  );
}
