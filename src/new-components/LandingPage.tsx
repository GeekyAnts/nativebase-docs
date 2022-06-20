import React from 'react';
import { Box } from 'native-base';
import MarkdownRemote from './MarkdownRemote';

export const LandingPage = (props: any) => {
  return (
    <Box>
      <MarkdownRemote {...props} />
    </Box>
  );
};
