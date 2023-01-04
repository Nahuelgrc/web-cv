import { Text } from "@chakra-ui/react";
import { ILanguageItem } from "../interfaces";

export const LanguageItem = ({ name, level }: ILanguageItem) => (
  <Text>
    {name}: {level}
  </Text>
);
