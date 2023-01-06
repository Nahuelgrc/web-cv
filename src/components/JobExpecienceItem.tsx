import { Box, Stack, Text } from "@chakra-ui/react";
import { IJobExperience } from "../interfaces";

export const JobExpecienceItem = ({
  companyName,
  roleTitle,
  startMonth,
  startYear,
  endMonth,
  endYear,
  description,
}: IJobExperience) => {
  const startDate = startMonth + "/" + startYear;
  const endDate = endMonth && endYear ? endMonth + "/" + endYear : "Current";

  return (
    <Box fontSize="md">
      <Stack direction="row">
        <Text as="b">{companyName}</Text>
        <Text>
          ({startDate} - {endDate})
        </Text>
      </Stack>
      <Text as="i">{roleTitle}</Text>
      <Text>{description}</Text>
    </Box>
  );
};
