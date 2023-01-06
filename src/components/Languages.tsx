import { Stack, Heading, Box } from "@chakra-ui/react";
import { ILanguageItem } from "../interfaces";
import { LanguageItem } from "./";

export const Languages = ({ languageList }: any) => {
  return (
    <Stack pt={3}>
      <Heading fontSize="md">Languages</Heading>
      <Box>
        {languageList.map((languageItem: ILanguageItem) => (
          <LanguageItem key={languageItem.name} {...languageItem} />
        ))}
      </Box>
    </Stack>
  );
};
