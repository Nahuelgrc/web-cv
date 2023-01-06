import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import {
  JobExperience,
  Languages,
  Social,
  UniversityExperience,
} from "../components";
import { IPersonalInformation } from "../interfaces";

export const PersonalInformation = ({
  contactInformation,
  languageList,
  sizes,
  jobExperienceList,
  universityExperienceList,
}: IPersonalInformation) => {
  const { email, location, socialList } = contactInformation;
  const {
    leftWidthSize = "30%",
    rightWidthSize = "70%",
    spaceBetweenSizes = 6,
  } = sizes;

  return (
    <Stack direction="row" w="full" mt={3}>
      <Stack w={leftWidthSize}>
        <Box>
          <Heading fontSize="md">Email</Heading>
          <Text fontSize="md">{email}</Text>
        </Box>
        <Box mt={3}>
          <Heading fontSize="md">Location</Heading>
          <Text fontSize="md">{location}</Text>
        </Box>
        <Social socialList={socialList} />
        <Languages languageList={languageList} />
      </Stack>
      <Box w={rightWidthSize} pl={spaceBetweenSizes}>
        <JobExperience jobExperienceList={jobExperienceList} />
        <UniversityExperience
          universityExperienceList={universityExperienceList}
        />
      </Box>
    </Stack>
  );
};