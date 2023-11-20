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
        ></Box>
        <Link as={NextLink} href={link} isExternal _hover={{ textDecoration: 'none' }}>
          <Text textAlign='center' mb='3' color='subHeader' fontSize='sm' fontWeight='bold'>
            {link}{' '}
          </Text>
        </Link>
      </Box>
    </Fragment>
  );
};
