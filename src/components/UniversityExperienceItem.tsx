import { Stack, Text, Box } from "@chakra-ui/react";
import { IUniversityExperience } from "../interfaces";

export const UniversityExperienceItem = ({
  universityName,
  endYear,
  degree,
}: IUniversityExperience) => {
  const endDate = endYear ? endYear : "Current";

  return (
    <Box fontSize="md" pb={2}>
      <Stack spacing={0} direction={{ base: "column", md: "row" }}>
        <Text>
          <Text as="b">{universityName}</Text> ({endDate})
        </Text>
      </Stack>
      <Text>{degree}</Text>
    </Box>
  );
};
