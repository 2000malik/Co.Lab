import { Button as ChakraUIButton, ButtonProps } from '@chakra-ui/react';

type ButtonComponentProps = ButtonProps & {
  handleOnClick?: () => void;
};
export const Button = ({ handleOnClick, children, ...props }: ButtonComponentProps) => {
  return (
    <ChakraUIButton
      variant='solid'
      size='lg'
      bg='button'
      color='white'
      textAlign='center'
      borderRadius='40px'
      _hover={{
        bg: 'footerBackground',
        color: 'white',
      }}
      onClick={handleOnClick}
      {...props}
    >
      {children}
    </ChakraUIButton>
  );
};
