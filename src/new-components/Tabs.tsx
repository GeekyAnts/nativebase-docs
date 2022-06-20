import React, { useEffect } from 'react';
import { Box, HStack, Pressable, Text } from 'native-base';
import Link from 'next/link';

const tabs = [
  { name: 'Home', id: '/' },
  { name: 'How to use', id: 'how-to-use/designers/designpage' },
  { name: 'Design Principles', id: 'design-principles/building-card' },
  { name: 'Components', id: 'components/alert-dialog' },
  { name: 'Design Tokens', id: 'design-tokens/accessibility' },
  { name: 'Assets', id: 'assets/avatar' },
  { name: 'About', id: 'about/breakpoints' },
];
const Tabs = () => {
  const [selectedTab, setSelectedTab] = React.useState(tabs[0]);

  return (
    <Box justifyContent="center" alignItems="center">
      <HStack
        py="8"
        w="full"
        maxW="1100px"
        justifyContent="space-between"
        alignItems="center"
      >
        {tabs.map((tab) => (
          <Link href={tab.id} key={tab.id} passHref>
            <Pressable>
              {({ isHovered }: any) => (
                <Text
                  color={
                    isHovered || selectedTab.name === tab.name
                      ? 'primary.500'
                      : 'muted.800'
                  }
                  fontSize="md"
                >
                  {tab.name}
                </Text>
              )}
            </Pressable>
          </Link>
        ))}
      </HStack>
    </Box>
  );
};

export default Tabs;
