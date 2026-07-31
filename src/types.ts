// -----------------------------------------------------------------------------
// types.ts
// Shared types used by the CV components. The shape matches what data/index.ts
// produces from the real data.json.
// -----------------------------------------------------------------------------

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  location: string;
  photoUrl: string;
}

export interface Bullet {
  highlight: string;
  text: string;
}

export interface Experience {
  role: string;
  company: string;
  dateRange: string;
  description: string;
  stack: string;
  bullets: Bullet[];
}

export interface Education {
  degree: string;
  institution: string;
}

export interface Language {
  name: string;
  level: string;
  dots: number;
}

export interface Social {
  platform: string;
  label: string;
  url: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  experience: Experience[];
  education: Education[];
  skills: string[];
  languages: Language[];
  social: Social[];
}
