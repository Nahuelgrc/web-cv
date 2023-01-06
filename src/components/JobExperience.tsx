import { Stack, Heading, Box } from "@chakra-ui/react";
import { IJobExperience } from "../interfaces";
import { JobExpecienceItem } from "./JobExpecienceItem";

export const JobExperience = ({ jobExperienceList }: any) => {
  return (
    <Stack pb={3}>
      <Stack bg="#F4F4F4" px={5} py={2} boxShadow="2xl">
        <Heading fontSize="md" color="custom.100">
          Work Experience
        </Heading>
        {jobExperienceList.map((jobExperience: IJobExperience) => (
          <JobExpecienceItem
            key={jobExperience.companyName}
            {...jobExperience}
          />
        ))}
      </Stack>
    </Stack>
  );
};
