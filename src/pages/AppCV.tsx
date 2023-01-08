import { Flex } from "@chakra-ui/react";
import { Header, PersonalInformation } from "../sections";
import { Information } from "../../data";
import { ILanguageItem, ISizes } from "../interfaces";

export const AppCV = () => {
  const Sizes: ISizes = {
    leftWidthSize: "30%",
    rightWidthSize: "70%",
    spaceBetweenSizes: 6,
  };

  return (
    <Flex
      direction="column"
      h="full"
      w="full"
      bgColor="#FFFFFF"
      px={6}
      py={[3, 6]}
    >
      <Header
        headerInformation={{
          firstName: Information.firstName,
          lastName: Information.lastName,
          localPictureName: Information.localPictureName,
          roleTitle: Information.roleTitle,
        }}
        sizes={Sizes}
      />
      <PersonalInformation
        contactInformation={{
          email: Information.email,
          location: Information.location,
          socialList: Information.socialList,
        }}
        languageList={Information.languagesList as ILanguageItem[]}
        sizes={Sizes}
        jobExperienceList={Information.jobExperienceList}
        universityExperienceList={Information.universityExperienceList}
      />
    </Flex>
  );
};
