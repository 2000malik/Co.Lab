import { Box, Flex, Text } from '@chakra-ui/react';
import { Email } from './Icons/Email';
import { Instagram } from './Icons/Instagram';
import { LinkedIn } from './Icons/LinkedIn';
import { Twitter } from './Icons/Twitter';

export const Footer = () => {
  return (
    <Box py='20px'>
      <Flex align='center' justifyContent='center' flexDirection={{ base: 'column', md: 'unset' }}>
        <Text>Love to connect with me : </Text>
        <Flex
          align='center'
          w={{ base: 'full', md: '30%', lg: '12%' }}
          justifyContent='space-evenly'
        >
          <a href='mailto:kojomalik2000@gmail.com'>
            <Email fill='#ffa029' width='25px' height='25px' />
          </a>

          <a href='linkedin.com/in/malik-ojo-4b8107168' target='_blank'>
            <LinkedIn fill='#ffa029' width='20px' height='20px' />
          </a>

          <a href='https://www.instagram.com/ojomaleek/' target='_blank'>
            <Instagram fill='#ffa029' width='20px' height='20px' />
          </a>

          <a href='https://twitter.com/Malik_OKM' target='_blank'>
            <Twitter fill='#ffa029' width='20px' height='20px' />
          </a>
        </Flex>
      </Flex>
    </Box>
  );
};
