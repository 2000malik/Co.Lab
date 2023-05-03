import { Icon, IconProps } from '@chakra-ui/react';

export const Hamburger = (props: IconProps) => {
  return (
    <Icon
      width='50px'
      height='50px'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g id='Menu / Hamburger_MD'>
        <path
          id='Vector'
          d='M5 17H19M5 12H19M5 7H19'
          stroke='#fff'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </Icon>
  );
};
