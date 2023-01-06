import { Heading, Stack } from "@chakra-ui/react";
import { IUniversityExperience } from "../interfaces";
import { UniversityExperienceItem } from "./UniversityExperienceItem";

export const UniversityExperience = ({ universityExperienceList }: any) => {
  return (
    <Stack pb={3}>
      <Stack bg="#F4F4F4" px={5} py={2} boxShadow="md">
        <Heading fontSize="md" color="custom.100">
          Education
        </Heading>
        {universityExperienceList.map(
          (universityExperience: IUniversityExperience) => (
            <UniversityExperienceItem
              key={universityExperience.degree}
              {...universityExperience}
            />
          )
        )}
      </Stack>
    </Stack>
  );
};
