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
      <Stack spacing={1} direction="row">
        {/* <Text as="b">{companyName}</Text>
        <Text>
          ({startDate} - {endDate})
        </Text> */}
        <Text>
          <Text as="b">{companyName}</Text> ({startDate} - {endDate})
        </Text>
      </Stack>
      <Text as="u">{roleTitle}</Text>
      <Text>{description}</Text>
    </Box>
  );
};
// noOfLines={[1, 2, 3]}
