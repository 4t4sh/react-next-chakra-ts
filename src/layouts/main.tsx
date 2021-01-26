import { Box, Flex } from '@chakra-ui/react';
import Footer from 'components/website/footer';
import Navbar from 'components/website/navbar';
import { NextPage } from 'next';
import React from 'react';

const MainLayout: NextPage = ({ children }) => (
  <Flex flexDirection="column" w="100%" h="100vh" justifyContent="flex-start" alignContent="center">
    <Navbar />
    <Box w="100%" maxW={[320, 500, 750, 1200]} margin="0 auto">
      {children}
    </Box>
    <Footer />
  </Flex>
);

export default MainLayout;
