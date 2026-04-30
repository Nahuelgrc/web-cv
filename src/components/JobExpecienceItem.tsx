import { Box, Text, UnorderedList, ListItem } from "@chakra-ui/react";
import { IJobExperience } from "../interfaces";

export const JobExpecienceItem = ({
  companyName,
  roleTitle,
  startMonth,
  startYear,
  endMonth,
  endYear,
  description,
  bullets,
  projects,
}: IJobExperience) => {
  const startDate = startMonth + "/" + startYear;
  const endDate = endMonth && endYear ? endMonth + "/" + endYear : "Present";

  return (
    <Box fontSize="md" pb={6}>
      <Text fontWeight="bold" mb={2}>
        {companyName} ({startDate} &ndash; {endDate})
      </Text>
      <Text fontWeight="bold" mb={4}>{roleTitle}</Text>
      
      {description && description !== "-" && <Text mb={4}>{description}</Text>}
      
      {bullets && bullets.length > 0 && (
        <UnorderedList mb={4} pl={4} spacing={2}>
          {bullets.map((bullet, index) => (
            <ListItem key={index}>{bullet}</ListItem>
          ))}
        </UnorderedList>
      )}

      {projects && projects.length > 0 && projects.map((project, idx) => (
        <Box key={idx} mb={4}>
          <Text fontWeight="bold" mb={2}>
            Project: {project.projectName}
          </Text>
          <UnorderedList pl={4} spacing={3}>
            {project.client && (
              <ListItem>
                <strong>Client:</strong> <span dangerouslySetInnerHTML={{ __html: project.client }} />
              </ListItem>
            )}
            {project.description && (
              <ListItem>
                <strong>Description:</strong> <span dangerouslySetInnerHTML={{ __html: project.description }} />
              </ListItem>
            )}
            {project.stack && (
              <ListItem>
                <strong>Stack:</strong> <span dangerouslySetInnerHTML={{ __html: project.stack }} />
              </ListItem>
            )}
            {project.keyActivities && project.keyActivities.length > 0 && (
              <ListItem>
                <strong>Key Activities:</strong>
                <UnorderedList mt={2} pl={4} spacing={2}>
                  {project.keyActivities.map((activity, actIdx) => (
                    <ListItem key={actIdx} dangerouslySetInnerHTML={{ __html: activity }} />
                  ))}
                </UnorderedList>
              </ListItem>
            )}
          </UnorderedList>
        </Box>
      ))}
    </Box>
  );
};
