import { ChakraProvider, Container, Stack } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { AppCV } from "./pages";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Stack bgColor="#F4F4F4">
        <Container
          maxW={{ base: "container.sm", md: "container.xl" }}
          py={{ base: 3, sm: 6 }}
          px={{ base: 3, sm: 6, md: 12, lg: 48 }}
        >
          <AppCV />
        </Container>
      </Stack>
    </ChakraProvider>
  </React.StrictMode>
);
