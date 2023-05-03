import { CardBody, Flex, Heading, Text } from '@chakra-ui/react';
import { Card } from './Card';
export const AboutSection = () => {
  return (
    <Flex direction={{ base: 'column', md: 'row' }} justifyContent='space-between'>
      <Card bg='background' w={{ base: 'unset', lg: '40%' }}>
        <CardBody>
          <Text>Hi, my name is</Text>
          <Heading as='h1' fontSize='5xl'>
            Malik Ojo.
          </Heading>
          <Heading fontSize='5xl'>Front-end Engineer</Heading>
        </CardBody>
      </Card>
      <Card w={{ base: 'unset', lg: '40%' }}>
        <CardBody>
          <Text>
            ---- Malik, dolor sit amet consectetur adipisicing elit. Itaque soluta deleniti
            quisquam! Accusantium soluta maiores odit doloribus. Inventore autem doloribus saepe,
            quo quia, et fugit, consequatur corporis velit corrupti nihil. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Adipisci quos aut laudantium repellat tempora
            reiciendis nesciunt ipsum voluptate neque a obcaecati quibusdam sint dolorem consequatur
            autem in libero, distinctio molestiae?
          </Text>
          <Text>
            ---- Malik, dolor sit amet consectetur adipisicing elit. Itaque soluta deleniti
            quisquam! Accusantium soluta maiores odit doloribus. Inventore autem doloribus saepe,
            quo quia, et fugit, consequatur corporis velit corrupti nihil. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Adipisci quos aut laudantium repellat tempora
            reiciendis nesciunt ipsum voluptate neque a obcaecati quibusdam sint dolorem consequatur
            autem in libero, distinctio molestiae?
          </Text>
        </CardBody>
      </Card>
    </Flex>
  );
};
