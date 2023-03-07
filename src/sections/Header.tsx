import { Heading, Image, Stack } from "@chakra-ui/react";
import { IHeader } from "../interfaces";

export const Header = ({ headerInformation, sizes }: IHeader) => {
  const { localPictureName, firstName, lastName, roleTitle } =
    headerInformation;

  const {
    leftWidthSize = "30%",
    rightWidthSize = "70%",
    spaceBetweenSizes = 6,
  } = sizes;
  return (
    <Stack direction={{ base: "column", md: "row" }} w="full">
      <Stack alignItems="center" w={{ base: "full", md: leftWidthSize }}>
        <Image
          borderRadius="full"
          boxSize="125px"
          src={`./images/${localPictureName}`}
          alt={`${firstName} ${lastName}`}
        />
      </Stack>
      <Stack
        alignItems={{ base: "center", md: "flex-start" }}
        justifyContent="center"
        w={{ base: "full", md: rightWidthSize }}
        pl={{ base: 0, md: spaceBetweenSizes }}
      >
        <Heading>{`${firstName} ${lastName}`}</Heading>
        <Heading size="md" fontFamily="Roboto Light" color="custom.100">
          {roleTitle}
        </Heading>
      </Stack>
    </Stack>
  );
};
