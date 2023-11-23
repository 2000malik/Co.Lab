import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { Email } from './Icons/Email';
import { Instagram } from './Icons/Instagram';
import { LinkedIn } from './Icons/LinkedIn';
import { Twitter } from './Icons/Twitter';
import { Button } from './Button';

export const Footer = () => {
  return (
    <Box h='400px' display='flex' alignItems='center' justifyContent='center'>
      <Stack>
        <Heading mb='30px' textAlign='center'>
          Get In Touch
        </Heading>
        <Text textAlign='center'>
          {
            "I'm currently open to opportunities if you'd like to get in touch, send an email, and let's talk."
          }
        </Text>
        <Box display='flex' alignItems='center' justifyContent='center'>
          <Button bg='footerBackground' leftIcon={<Email />} my={5}>
            <a href='mailto:kojomalik2000@gmail.com'>Email</a>
          </Button>
        </Box>
        <Flex
          // align='center'
          w={{ base: 'full', md: '30%', lg: '12%' }}
          justifyContent='space-evenly'
        >
          <a href='https://www.linkedin.com/in/malik-ojo-4b8107168/' target='_blank'>
            <LinkedIn fill='#ffa029' width='20px' height='20px' />
          </a>

          <a href='https://www.instagram.com/ojomaleek/' target='_blank'>
            <Instagram fill='#ffa029' width='20px' height='20px' />
          </a>

          <a href='https://twitter.com/Malik_OKM' target='_blank'>
            <Twitter fill='#ffa029' width='20px' height='20px' />
          </a>
        </Flex>
      </Stack>
    </Box>
  );
};
