import { Box, BoxProps } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

type PageLayoutProps = BoxProps & {
  children: ReactNode;
};
export const PageLayout = ({ children }: PageLayoutProps) => {
  return <Box px={{ base: '30', lg: '100' }}>{children}</Box>;
};
