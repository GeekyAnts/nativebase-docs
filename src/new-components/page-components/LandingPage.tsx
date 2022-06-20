import React from 'react';
import { Box } from 'native-base';
import About from '../AboutDesign';
import HeaderLanding from '../HeaderLanding';
import Tabs from '../Tabs';
import HowToUseFold from '../HowToUseFold';
import DesignPrinciple from '../DesignPrinciple';
import ComponentsFold from '../ComponentsFold';
import DesignTokenFold from '../DesignTokenFold';
import AssetsFold from '../AssetsFold';
import Showcase from '../Showcase';
import FooterLanding from '../FooterLanding';
import Footer from '../Footer';

export const LandingPage = (props: any) => {
  return (
    <Box>
      <HeaderLanding />
      <Box bg="coolGray.50">
        <About />
        <Tabs />
        <HowToUseFold />
        <DesignPrinciple />
        <ComponentsFold />
        <DesignTokenFold />
        <AssetsFold />
        <Showcase />
        <Footer />
      </Box>
    </Box>
  );
};
