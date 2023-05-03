import { Card as ChakraUICard, CardProps as ChakraUICardProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

type CardProps = ChakraUICardProps & { children?: ReactNode };

export const Card = ({ children, bg, size, maxW, ...props }: CardProps) => {
  return (
    <ChakraUICard
      borderRadius='20'
      borderColor='transparent'
      py='1'
      px='1'
      bg={bg || props.bgColor || 'white'}
      size={size}
      variant='outline'
      maxW={maxW}
      {...props}
    >
      {children}
    </ChakraUICard>
  );
};
