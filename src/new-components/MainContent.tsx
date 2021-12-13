import React, { useContext } from "react";
import {
  Box,
  Heading,
  ScrollView,
  Button,
  HStack,
  Text,
  VStack,
} from "native-base";
import Link from "next/link";
import * as NBComponents from 'native-base';
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
  const {Tabs,...RemNBComponents} = NBComponents;
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
    ...RemNBComponents,
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
          <HStack justifyContent="space-between" my="12">
            {pages.previousPage && (
              <Link
                passHref
                href={`${
                  isLatestVersionSlug(activeVersion) ? "" : activeVersion + "/"
                }${pages.previousPage.id}`}
              >
                <VStack mr="auto">
                  <Text
                    _light={{ color: "pageNavigationHeadingLight" }}
                    _dark={{ color: "pageNavigationHeadingDark" }}
                  >
                    Previous
                  </Text>
                  <Text
                    fontSize="lg"
                    _light={{ color: "pageNavigationMainTitleLight" }}
                    _dark={{ color: "pageNavigationMainTitleDark" }}
                  >
                    {pages.previousPage.title}
                  </Text>
                </VStack>
              </Link>
            )}
            {pages.nextPage && (
              <Link
                passHref
                href={`${
                  isLatestVersionSlug(activeVersion) ? "" : activeVersion + "/"
                }${pages.nextPage.id}`}
              >
                <VStack ml="auto">
                  <Text
                    _light={{ color: "pageNavigationHeadingLight" }}
                    _dark={{ color: "pageNavigationHeadingDark" }}
                  >
                    Next
                  </Text>
                  <Text
                    fontSize="lg"
                    _light={{ color: "pageNavigationMainTitleLight" }}
                    _dark={{ color: "pageNavigationMainTitleDark" }}
                  >
                    {pages.nextPage.title}
                  </Text>
                </VStack>
              </Link>
            )}
          </HStack>
        </Box>
      </ScrollView>
      {/* <Box display={{ base: "none", lg: "flex" }}>
        <Toc tocArray={tocArray} />
      </Box> */}
    </>
  );
}
