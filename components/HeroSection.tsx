import { Box, Flex, Heading, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { Button } from './Button';
import { Email } from './Icons/Email';

export const HeroSection = () => {
  return (
    <Flex direction={{ base: 'column', md: 'row' }} justifyContent='space-between'>
      <Box w={{ lg: '50%' }}>
        <Text mb='20px' fontSize='md'>
          Hi, my name is
        </Text>
        <Box
          fontSize='5xl'
          fontWeight='900'
          lineHeight='60px'
          color='heading'
          textTransform='uppercase'
        >
          <Heading as='h2'>Malik Ojo.</Heading>
          <Heading textTransform='capitalize'>Front-end Engineer | Freelancer.</Heading>
        </Box>
        <Text lineHeight='taller' fontSize='xl' color='heading' my='10'>
          A front-end engineer and freelancer from Lagos, Nigeria. I have been a front-end engineer
          for over two years. Developing web application solutions for enterprises and businesses
          that align with their digital vision, and most importantly, considering the end users of
          the web applications during the development process.
        </Text>
        <Text>Here are a few technologies{" I've"} been working with recently:</Text>
        <UnorderedList mb={{ base: '30px' }}>
          <ListItem>Figma</ListItem>
          <ListItem>Chakra UI</ListItem>
          <ListItem>React JS</ListItem>
          <ListItem>Next JS</ListItem>
          <ListItem>Jira ( Project Management tool )</ListItem>
        </UnorderedList>
        {/* show on medium screen upwards */}
        <Button
          alignItems='center'
          justifyContent='center'
          leftIcon={<Email />}
          mt={5}
          display={{ base: 'none', md: 'flex' }}
        >
          <a href='mailto:kojomalik2000@gmail.com'>Email</a>
        </Button>
        {/* show on medium screen upwards */}
      </Box>
      <Box alignSelf='center'>
        <Image
          alt="malik's image"
          src='/assets/images/malik2.jpeg'
          borderRadius='12'
          objectFit='cover'
          boxSize='350px'
        />
      </Box>
      {/* show on small device screen only */}
      <Button leftIcon={<Email />} my='2' display={{ base: 'flex', md: 'none' }} alignSelf='center'>
        <a href='mailto:kojomalik2000@gmail.com'>Email</a>
      </Button>
      {/* show on small device screen only */}
    </Flex>
  );
};
