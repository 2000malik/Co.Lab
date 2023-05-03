import { Avatar, Flex, Text } from '@chakra-ui/react';

export const Logo = () => {
  return (
    <Flex alignItems='center'>
      <Avatar name='Malik Ojo' size='md' src='/assets/images/malik.jpeg' color='white' />
      <Text
        ml={3}
        color='white'
        fontSize='2xl'
        fontWeight='700'
        sx={{ webkitTextStroke: '2px #1c87c9' }}
      >
        MALIK
      </Text>
    </Flex>
  );
};
