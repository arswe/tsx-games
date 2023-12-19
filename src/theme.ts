import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: '#eff2f6',
      100: '#d1d7de',
      200: '#b3bcc9',
      300: '#93a1b6',
      400: '#7486a2',
      500: '#5a6c89',
      600: '#46546a',
      700: '#333c4b',
      800: '#1f242d',
      900: '#090c10',
    },
  },
});

export default theme;
