import { Heading, Stack } from "@chakra-ui/react";
import { ISocialItem, ISocialList } from "../interfaces";
import { SocialItem } from "./SocialItem";

export const Social = ({ socialList }: ISocialList) => {
  const socialListToRender: ISocialItem[] = socialList.filter(
    (item: ISocialItem) => item.show
  );

  return (
    <Stack>
      <Heading size="sm">Social</Heading>
      <Stack direction="row" justifyContent="space-between">
        {socialListToRender.map((socialItem) => (
          <SocialItem key={socialItem.name} {...socialItem} />
        ))}
      </Stack>
    </Stack>
  );
};
