import { Box, Flex, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import React, { FC } from 'react';

const Navbar: FC = () => (
  <Box as="header" w="100%" px={[5, 5, 10, 20]} py={[5, 5, 10, 10]}>
    <Flex as="nav" flexDirection="row" justifyContent="space-between">
      <Flex
        justifyContent="center"
        alignItems="center"
        _hover={{
          cursor: 'pointer'
        }}>
        <NextLink href="/">
          <Text fontWeight="bold" fontSize="xl">
            @4t4sh/react-next-chakra-ts
          </Text>
        </NextLink>
      </Flex>
    </Flex>
  </Box>
);

export default Navbar;
