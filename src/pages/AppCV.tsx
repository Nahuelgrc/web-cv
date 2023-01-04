import { Heading, Image, Stack, Text, Box, Flex } from "@chakra-ui/react";
import { Information } from "../../data";
import { Social, Languages } from "../components";

export const AppCV = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      h="100vh"
      w="full"
      bgColor="#FFFFFF"
      px={6}
      py={[0, 6, 6]}
    >
      <Stack direction="column" id="left">
        <Stack alignItems="center">
          <Image
            borderRadius="full"
            boxSize="125px"
            src={Information.localPictureName}
            alt={`${Information.firstName} ${Information.lastName}`}
          />
        </Stack>
        <Stack>
          <Box mt={3}>
            <Heading size="sm">Email</Heading>
            <Text size="sm">{Information.email}</Text>
          </Box>
          <Box>
            <Heading size="sm">Location</Heading>
            <Text size="sm">{Information.location}</Text>
          </Box>
          <Social socialList={Information.socialList} />
          <Languages languageList={Information.languagesList} />
        </Stack>
      </Stack>
      <Stack direction="column" id="right" ml={12}>
        <Stack justifyContent="center">
          <Heading>{`${Information.firstName} ${Information.lastName}`}</Heading>
          <Heading size="md" fontFamily="Roboto Light" color="custom.100">
            {Information.roleTitle}
          </Heading>
        </Stack>
        <Stack></Stack>
        <Stack></Stack>
      </Stack>
    </Flex>
  );
};
