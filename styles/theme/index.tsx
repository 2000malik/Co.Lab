import { extendTheme } from '@chakra-ui/react';
import { colors } from './colors';
import { typography } from './typography';

export const theme = extendTheme({
  typography,
  colors,
});
