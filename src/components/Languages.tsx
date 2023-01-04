import { Stack, Heading } from "@chakra-ui/react";
import { ILanguageList } from "../interfaces";
import { LanguageItem } from "./LanguageItem";

export const Languages = ({ languageList }: ILanguageList) => {
  return (
    <Stack mt="100px">
      <Heading size="sm">Languages</Heading>
      {languageList.map((languageItem) => (
        <LanguageItem key={languageItem.name} {...languageItem} />
      ))}
    </Stack>
  );
};
