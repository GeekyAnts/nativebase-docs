import React from 'react';
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
} from './markdown-components';
import { LandingPage } from './page-components';
import { MDXRemote } from 'next-mdx-remote';
import * as NBComponents from 'native-base';
import * as docComponents from '../components';
import { SnackPlayer } from './markdown-components/CodeBlock/SnackPlayer';

const MarkdownRemote = (props: any) => {
  const { content } = props;

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
      else if (props?.isSnackPlayer)
        return <SnackPlayer {...props}>{children}</SnackPlayer>;
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
    LandingPage: LandingPage,
  };
  return <MDXRemote {...content} components={components} />;
};

export default MarkdownRemote;
