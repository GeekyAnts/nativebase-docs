import React, { useEffect } from 'react';
import { Box, HStack, Input, SearchIcon } from 'native-base';

const HeaderLanding = () => {
  const [scrollPos, setScrollPos] = React.useState(0);
  const [navbarScrolled, setNavbarScrolled] = React.useState(true);

  useEffect(() => {
    const websiteScroll = document.getElementById('website-scroll');
    websiteScroll?.addEventListener('scroll', (e) => {
      setScrollPos((prev) => websiteScroll.scrollTop);
    });
  }, []);

  useEffect(() => {
    if (scrollPos > 400) {
      setNavbarScrolled(false);
    } else {
      setNavbarScrolled(true);
    }
  }, [scrollPos]);

  return (
    <Box
      position="sticky"
      top="0"
      left="0"
      right="0"
      zIndex="1"
      justifyContent="center"
      alignItems="center"
      bg="coolGray.900"
      // bg={navbarScrolled ? 'coolGray.900' : 'trueGray.100'}
    >
      <HStack
        w="full"
        maxW="1100px"
        h="16"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <img
            src="/img/topgeek-logo-white.svg"
            alt="topgeek-logo"
            height="20"
          />
        </Box>
        <HStack>
          <Input
            borderColor="gray.600"
            leftElement={<SearchIcon ml="2" />}
            placeholder="Search"
          />
        </HStack>
      </HStack>
    </Box>
  );
};

export default HeaderLanding;
