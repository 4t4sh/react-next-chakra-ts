import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import NextLink from 'next/link';
import { Button, VStack, Wrap, Box } from '@chakra-ui/react';
import Hero from 'components/website/hero';
import Highlight from 'components/website/highlight';
import MainLayout from 'layouts/main';

const HomePage: NextPage = () => (
  <MainLayout>
    <Head>
      <title>Boiler | ReactJS + NextJS + ChakraUI + TS</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Box>
      <VStack spacing={[16, 16, 24, 24]} align="center" as="main">
        <Hero
          title="Enterprise-Grade Boilerplate "
          description="Production ready solution using ReactJS, NextJS, ChakraUI and TypeScript."
          cta={
            <NextLink href="https://github.com/4t4sh/react-next-chakra-ts">
              <Button size="lg">
                <span role="img" aria-label="Rocket emoji">
                  Get the code 🚀
                </span>
              </Button>
            </NextLink>
          }
        />

        <Wrap justify="center" align="center" spacing="30px">
          <Highlight
            delay={0}
            title="NextJS"
            description="Next.js gives you the best developer experience with all the features you need for production."
            img={{
              src: 'images/nextjs-logo.png',
              alt: 'Accesible'
            }}
          />
          <Highlight
            delay={0.3}
            title="ChakraUI"
            description="Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications."
            img={{
              src: 'images/chakraui-logo.png',
              alt: 'Monetizable'
            }}
          />
          <Highlight
            delay={0.6}
            title="TypeScript"
            description="TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions."
            img={{
              src: 'images/typescript-logo.png',
              alt: 'Sin limites'
            }}
          />
        </Wrap>
      </VStack>
    </Box>
  </MainLayout>
);

export default HomePage;
