import { Flex, Heading, Image, Text, WrapItem } from '@chakra-ui/react';
import { FC } from 'react';
import { motion } from 'framer-motion';

interface HighlightProps {
  title: string;
  description: string;
  delay: number;
  img: {
    src: string;
    alt: string;
  };
}

const Highlight: FC<HighlightProps> = ({ title, description, img: { src, alt }, delay }) => (
  <WrapItem w={['100%', 'calc(80% - 10px)', 'calc(40% - 10px)', 'calc(33.333% - 35px)']}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: delay }}>
      <Flex
        minH="200px"
        h="100%"
        position="relative"
        flexDirection="column"
        borderRadius="lg"
        boxShadow="base"
        p={5}>
        <Image position="absolute" w={45} top="-5px" right="-5px" src={src} alt={alt} />
        <Heading fontSize={['xl', 'xl', 'xl', '2xl']} fontWeight="bold" pb={6}>
          {title}
        </Heading>
        <Text color="gray.700" fontSize={['md', 'md', 'md', 'lg']}>
          {description}
        </Text>
      </Flex>
    </motion.div>
  </WrapItem>
);

export default Highlight;
