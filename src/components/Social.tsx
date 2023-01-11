import { Heading, Stack } from "@chakra-ui/react";
import { ISocialItem } from "../interfaces";
import { SocialItem } from "./";

export const Social = ({ socialList }: any) => {
  const socialListToRender: ISocialItem[] = socialList.filter(
    (item: ISocialItem) => item.show
  );

  if (socialListToRender.length === 0) {
    return <></>;
  }

  return (
    <Stack mt={3} maxW="200px" w="full" pb={1}>
      <Heading fontSize="md">Socials</Heading>
      <Stack direction="row" justifyContent="space-between">
        {socialListToRender.map((socialItem) => (
          <SocialItem key={socialItem.name} {...socialItem} />
        ))}
      </Stack>
    </Stack>
  );
};
