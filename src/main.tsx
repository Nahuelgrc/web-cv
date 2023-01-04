import { ChakraProvider, Container, Stack } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { AppCV } from "./pages";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Stack bgColor="#F4F4F4">
        <Container maxW="container.xl" py={6} px={48}>
          <AppCV />
        </Container>
      </Stack>
    </ChakraProvider>
  </React.StrictMode>
);
