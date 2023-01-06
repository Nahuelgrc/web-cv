// START - HEADER

export interface IHeader {
  headerInformation: IPersonalHeader;
  sizes: ISizes;
}

export interface IPersonalHeader {
  localPictureName: string;
  firstName: string;
  lastName: string;
  roleTitle: string;
}

// END - HEADER

// START - PERSONAL INFORMATION

export interface IPersonalInformation {
  contactInformation: IContactInformation;
  languageList: ILanguageItem[];
  sizes: ISizes;
  jobExperienceList: IJobExperience[];
  universityExperienceList: IUniversityExperience[];
}

export interface IContactInformation {
  email: string;
  location: string;
  socialList: ISocialItem[];
}

export interface ISocialItem {
  show: boolean;
  name: string;
  url: string;
  logoName: string;
}

export interface ILanguageItem {
  name: string;
  level: string;
}

// END - PERSONAL INFORMATION

// START - JOB EXPERIENCE

export interface IJobExperience {
  companyName: string;
  roleTitle: string;
  startMonth: string;
  startYear: string;
  endMonth?: string;
  endYear?: string;
  description: string;
}

// END - JOB EXPERIENCE

// START - UNIVERSITY EXPERIENCE

export interface IUniversityExperience {
  universityName: string;
  endMonth?: string;
  endYear?: string;
  degree: string;
}

// END - UNIVERSITY EXPERIENCE

export interface ISizes {
  leftWidthSize: string;
  rightWidthSize: string;
  spaceBetweenSizes: number;
}

export interface IEducation {}
