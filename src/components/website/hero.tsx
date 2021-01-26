import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import React, { FC, ReactElement } from 'react';

interface HeroProps {
  title: string;
  description: string;
  cta?: ReactElement;
}

const Hero: FC<HeroProps> = ({ title, description, cta = null }) => (
  <VStack spacing={[8, 10, 16, 16]} align="center" justify="Center">
    <Heading
      as="h1"
      fontWeight="black"
      fontSize={['6xl', '7xl', '8xl', '8xl']}
      textAlign="center"
      mt={[16, 16, 24, 24]}>
      {title}
    </Heading>
    <Text
      textAlign="center"
      fontSize={['2xl', ' 2xl', '3xl', '3xl']}
      maxWidth={[350, 400, 500, 750]}>
      {description}
    </Text>
    {cta && <Box pt={[8, 10, 8, 8]}>{cta}</Box>}
  </VStack>
);

export default Hero;
