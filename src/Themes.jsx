import { extendTheme } from '@chakra-ui/react'; // Use '@chakra-ui/react' for latest versions

const styles = {
  global: {
    body: {
      color: 'whiteAlpha.900', // Dark mode text color
      bg: '#242424', // Dark mode background color
    },
  },
};

const components = {
  Drawer: {
    baseStyle: {
      dialog: {
        bg: '#242424', // Dark mode background color for the drawer
      },
    },
  },
};

const theme = extendTheme({
  styles,
  components,
  config: {
    initialColorMode: 'dark', // Set the initial color mode to dark
    useSystemColorMode: false, // Optionally, disable system color mode
  },
});

export default theme;
