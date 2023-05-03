import { Fragment, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { PageLayout } from '@/components/PageLayout';
import { Logo } from '@/components/Logo';
import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';
import { Nav } from '@/components/Nav';
import { HeroSection } from '@/components/HeroSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';
import { Hamburger } from '@/components/Icons/Hamburger';
import { ApiCall } from '@/components/ApiCall';

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  return (
    <Fragment>
      <Box bg='footerBackground' boxShadow='lg' pos='fixed' w='full' zIndex={1} top='0'>
        <header>
          <nav>
            <PageLayout>
              <Flex py={3} justifyContent='space-between'>
                <Link as={NextLink} href='/' sx={{ textDecoration: 'none !important' }}>
                  <Logo />
                </Link>
                <Box alignSelf='center' minW='30%' display={{ base: 'none', md: 'unset' }}>
                  <Nav />
                </Box>
                {/* Mobile menu start */}
                <Button
                  bg='unset'
                  variant='unstyled'
                  display={{ base: 'unset', md: 'none' }}
                  handleOnClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                  <Hamburger />
                </Button>
              </Flex>
              {showMobileMenu && (
                <Flex display={{ base: 'unset', md: 'none' }}>
                  <Nav flexDirection='column' color='white' overflowY='auto' p='3' />
                </Flex>
              )}
              {/* Mobile menu ends */}
            </PageLayout>
          </nav>
        </header>
      </Box>
      <main>
        <Box my={100} id='about'>
          <PageLayout>
            <HeroSection />
          </PageLayout>
        </Box>
        <Box bg='lightBackground' id='portfolio' py={5}>
          <PageLayout>
            <PortfolioSection />
          </PageLayout>
        </Box>
        <Box id='api' py={5}>
          <PageLayout>
            <ApiCall />
          </PageLayout>
        </Box>
        <Box bg='BI' id='contact'>
          <PageLayout>
            <Footer />
          </PageLayout>
        </Box>
      </main>
    </Fragment>
  );
}
