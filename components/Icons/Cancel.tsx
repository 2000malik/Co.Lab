import { Icon, IconProps } from '@chakra-ui/react';

export const Cancel = (props: IconProps) => {
  return (
    <Icon
      width='50px'
      height='50px'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g id='Menu / Close_SM'>
        <path
          id='Vector'
          d='M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16'
          stroke='#fff'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </g>
    </Icon>
  );
};
