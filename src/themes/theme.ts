import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
}

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: '#ecf2fe',
      100: '#d3d8e1',
      200: '#b8bec7',
      300: '#9da5af',
      400: '#828b97',
      500: '#68717d',
      600: '#505862',
      700: '#383f47',
      800: '#1f262d',
      900: '#000f15',
    },
  },
})

export default theme
