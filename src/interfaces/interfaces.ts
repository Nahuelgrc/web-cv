export interface ISocialList {
  socialList: ISocialItem[];
}

export interface ISocialItem {
  show: boolean;
  name: string;
  url: string;
  logoName: string;
}

export interface ILanguageList {
  languageList: ILanguageItem[];
}

export interface ILanguageItem {
  name: string;
  level: string;
}
