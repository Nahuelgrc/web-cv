import { Link, Image } from "@chakra-ui/react";
import { ISocialItem } from "../interfaces";

export const SocialItem = ({ name, url, logoName }: ISocialItem) => {
  return (
    <Link href={url} isExternal>
      <Image boxSize="35px" src={`src/assets/${logoName}`} alt={name} />
    </Link>
  );
};
