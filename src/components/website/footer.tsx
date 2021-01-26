import { Divider, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import NextLink from 'next/link';

const Footer: FC = () => (
  <Box as="footer" w="100%" px={[5, 5, 10, 20]} py={[5, 5, 10, 10]}>
    <Divider marginBottom="1.5rem" />
    <Flex
      justifyContent="center"
      alignItems="center"
      _hover={{
        cursor: 'pointer'
      }}>
      <NextLink href="/">
        <Text fontWeight="bold" fontSize="md">
          @4t4sh/react-next-chakra-ts
        </Text>
      </NextLink>
    </Flex>
  </Box>
);

export default Footer;
