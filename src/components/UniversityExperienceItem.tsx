import { Stack, Text, Box } from "@chakra-ui/react";
import { IUniversityExperience } from "../interfaces";

export const UniversityExperienceItem = ({
  universityName,
  endYear,
  degree,
}: IUniversityExperience) => {
  const endDate = endYear ? endYear : "Current";

  return (
    <Box fontSize="md">
      <Stack direction="row">
        <Text as="b">{universityName}</Text>
        <Text> - ({endDate})</Text>
      </Stack>
      <Text>{degree}</Text>
    </Box>
  );
};
