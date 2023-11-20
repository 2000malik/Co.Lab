import { project } from '@/helpers/constants';
import {
  Avatar,
  Box,
  CardBody,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { Fragment } from 'react';
import { Card } from './Card';
import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';

export const PortfolioSection = () => {
  return (
    <Fragment>
      <Heading mb='50px' textAlign='center'>
        Some of the projects I have worked on{' '}
      </Heading>
      <Flex flexWrap='wrap' justifyContent='space-between'>
        {project.map((portfolio) => (
          <PortfolioCard
            key={portfolio.name}
            logo={portfolio.logo}
            name={portfolio.name}
            link={portfolio.link}
            industry={portfolio.industry}
            solution={portfolio.solutions}
          />
        ))}
      </Flex>
    </Fragment>
  );
};
type PortfolioCardProps = {
  logo: string;
  name: string;
  link: string;
  industry: string;
  solution: string;
};
const PortfolioCard = ({ logo, name, link, industry, solution }: PortfolioCardProps) => {
  return (
    <Fragment>
      <Box w={{ base: 'full', md: '49.4%' }}>
        <Box
          bgImage={logo}
          bgRepeat='no-repeat'
          bgSize='clamp(300px, 100vh, 600px)'
          bgPosition='center'
          borderRadius='1'
          h='300px'
          mb='5'
          _hover={
            {
              // transition: 'transform .2s',
              // transform: 'scale(0.9)',
              // border: '1px solid',
              // borderColor: 'footerBackground',
            }
          }
        ></Box>
        <Link as={NextLink} href={link} isExternal _hover={{ textDecoration: 'none' }}>
          <Text textAlign='center' mb='3' color='subHeader' fontSize='sm' fontWeight='bold'>
            {link}{' '}
          </Text>
        </Link>
      </Box>

      {/* <Card
        borderRadius='1'
        h='300px'
        w={{ base: 'full', md: '49.4%' }}
        mb='5'
        _hover={{
          // transition: 'transform .2s',
          // transform: 'scale(0.9)',
          borderColor: 'footerBackground',
        }}
      >
        <CardBody display='flex'>
          <Avatar
            color='white'
            name={name}
            src={logo}
            size={{ base: 'lg', md: 'xl' }}
            boxShadow='2xl'
          />
          <Box
            minW={{ base: '100px', md: '200px' }}
            ml={{ base: '20px', md: '40px' }}
            fontSize='sm'
            fontWeight='bold'
            color='subHeader'
          >
            <UnorderedList>
              <ListItem aria-label={"company's name"}>
                <Text> {name}</Text>
              </ListItem>
              <ListItem aria-label={'link to project'}>
                <Link as={NextLink} href={link} isExternal>
                  {link}
                </Link>
              </ListItem>
              <ListItem aria-label={"company's industry"}>
                <Text> {industry}</Text>
              </ListItem>
              <ListItem aria-label={"company's solutions and services"}>
                <Text> {solution}</Text>
              </ListItem>
            </UnorderedList>
          </Box>
        </CardBody>
      </Card> */}
    </Fragment>
  );
};
