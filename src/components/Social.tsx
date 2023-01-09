import { Heading, Stack } from "@chakra-ui/react";
import { ISocialItem } from "../interfaces";
import { SocialItem } from "./";

export const Social = ({ socialList }: any) => {
  const socialListToRender: ISocialItem[] = socialList.filter(
    (item: ISocialItem) => item.show
  );

  return (
    <Stack mt={3} maxW="200px" w="full">
      <Heading fontSize="md">Social</Heading>
      <Stack direction="row" justifyContent="space-between">
        {socialListToRender.map((socialItem) => (
          <SocialItem key={socialItem.name} {...socialItem} />
        ))}
      </Stack>
    </Stack>
  );
};
