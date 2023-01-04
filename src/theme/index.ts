import { theme as base, extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  colors: {
    custom: {
      100: "#799A59",
    },
  },
  fonts: {
    heading: `Roboto, Courier New, ${base.fonts?.heading}`,
    body: `Inter, ${base.fonts?.body}`,
  },
});

export default theme;
