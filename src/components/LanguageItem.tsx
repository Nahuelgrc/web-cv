import { Text } from "@chakra-ui/react";
import { ILanguageItem } from "../interfaces";

export const LanguageItem = ({ name, level }: ILanguageItem) => (
  <Text fontSize="md">
    {name}: {level}
  </Text>
);
