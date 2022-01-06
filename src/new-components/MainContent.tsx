import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Heading,
  ScrollView,
  HStack,
  Text,
  VStack,
  Pressable,
} from "native-base";
import Link from "next/link";
import * as NBComponents from "native-base";
import { MDXRemote } from "next-mdx-remote";
import Toc from "./Toc";
import {
  Span,
  PText,
  Li,
  Ul,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Anchor,
  Img,
  Code,
  CodeBlock,
  Playground,
  TableBox,
  TableHead,
  TableHeadData,
  TableData,
  TableRow,
  Showcase,
  BlockQuote,
  InlineCode,
  Admonition,
} from "./markdown-components";
import { AppContext } from "../AppContext";
import * as docComponents from "../components";
import { isLatestVersionSlug } from "../utils";
import { ScrollContext } from "./ScrollContext";

export default function MainContent(props: any) {
  const { tocArray } = props;
  const [timestamp, setTimestamp] = useState("");
  return (
    <>
      <ScrollContext.Provider value={{ timestamp, setTimestamp }}>
        <Box h="calc(100% - 64px)" flex="1">
          <SubMainContent props={props} />
        </Box>
        {props.showToc && (
          <Box
            display={{ base: "none", xl: "flex" }}
            position="sticky"
            top="16"
            h="100vh"
            w="64"
          >
            <Toc tocArray={tocArray} />
          </Box>
        )}
      </ScrollContext.Provider>
    </>
  );
}
const SubMainContent = ({ props }: any) => {
  const { timestamp, setTimestamp } = useContext(ScrollContext);
  function handleScroll(e: any) {
    setTimestamp(e.timeStamp);
  }
  useEffect(() => {
    // @ts-ignore
    document.getElementById("scrollview-id").onscroll = (e) => {
      handleScroll(e);
    };
  }, []);

  return <SubMainContent2 props={props} />;
};

// eslint-disable-next-line react/display-name
const SubMainContent2 = React.memo(({ props }: any) => {
  const { content, pages, frontMatter } = props;
  const { activeVersion, setActiveSidebarItem } = useContext(AppContext);
  const components = {
    h1: Heading1,
    h2: Heading2,
    h3: Heading3,
    h4: Heading4,
    h5: Heading5,
    p: PText,
    admonition: Admonition,
    span: Span,
    ul: Ul,
    li: Li,
    blockquote: BlockQuote,
    img: Img,
    a: Anchor,
    code: ({ children, ...props }: any) => {
      if (props?.isLive) return <Playground {...props}>{children}</Playground>;
      else if (props?.isShowcase)
        return <Showcase {...props}>{children}</Showcase>;
      else return <CodeBlock>{children}</CodeBlock>;
    },
    table: TableBox,
    thead: TableHead,
    th: TableHeadData,
    tr: TableRow,
    td: TableData,
    inlineCode: InlineCode,
    ...docComponents,
    ...NBComponents,
    ListItem: Li,
  };
  return (
    <Box px={{ base: "6", xl: "16" }} py="10">
      <Box alignSelf="center" maxW={props.showToc ? "800" : "1056"} w="100%">
        <Heading mb="6" size="xl" _dark={{ color: "coolGray.50" }}>
          {frontMatter && frontMatter.title
            ? frontMatter.title
            : pages.currentPage.title}
        </Heading>

        <MDXRemote {...content} components={components} />
        <Box w="100%" />
        <HStack justifyContent="space-between" my="12">
          {pages.previousPage && (
            <Pressable
              mr="auto"
              onPress={() => setActiveSidebarItem(pages.previousPage.id)}
            >
              <Link
                passHref
                href={`${
                  isLatestVersionSlug(activeVersion) ? "" : activeVersion + "/"
                }${pages.previousPage.id}`}
              >
                <VStack>
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
            </Pressable>
          )}
          {pages.nextPage && (
            <Pressable
              ml="auto"
              onPress={() => setActiveSidebarItem(pages.nextPage.id)}
            >
              <Link
                passHref
                href={`${
                  isLatestVersionSlug(activeVersion) ? "" : activeVersion + "/"
                }${pages.nextPage.id}`}
              >
                <VStack>
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
            </Pressable>
          )}
        </HStack>
      </Box>
    </Box>
  );
});
