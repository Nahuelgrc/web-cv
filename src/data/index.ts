// -----------------------------------------------------------------------------
// data/index.ts
// Takes the REAL data.json (without modifying it) and transforms it into the
// shape consumed by the CV components. Nothing is hardcoded: skills, language
// dots, date ranges and bullets are all derived from the JSON itself.
// -----------------------------------------------------------------------------
import raw from "./data.json";
import photo from "./Picture.png";
import type {
  Bullet,
  Education,
  Experience,
  Language,
  ResumeData,
  Social,
} from "../types";

// --- Raw shape of data.json ------------------------------------------------
interface RawProject {
  projectName?: string;
  stack?: string;
  keyActivities?: string[];
}
interface RawJob {
  roleTitle: string;
  companyName: string;
  startMonth?: string;
  startYear?: string;
  endMonth?: string;
  endYear?: string;
  projects?: RawProject[];
}
interface RawUniversity {
  degree: string;
  universityName: string;
}
interface RawLanguage {
  name: string;
  level: string;
}
interface RawSocial {
  name: string;
  url: string;
  show?: boolean;
}
interface RawData {
  firstName: string;
  lastName: string;
  roleTitle: string;
  email: string;
  location: string;
  jobExperienceList?: RawJob[];
  universityExperienceList?: RawUniversity[];
  languagesList?: RawLanguage[];
  socialList?: RawSocial[];
}

const rawData = raw as unknown as RawData;

const MONTHS: Record<string, string> = {
  "01": "01", "02": "02", "03": "03", "04": "04", "05": "05", "06": "06",
  "07": "07", "08": "08", "09": "09", "10": "10", "11": "11", "12": "12",
};

// "11" + "2022" -> "11/2022"
function fmtDate(month?: string, year?: string): string {
  if (!year) return "";
  const m = month ? `${MONTHS[month] || month}/` : "";
  return `${m}${year}`;
}

// Builds "11/2022 - Present" or "08/2018 - 11/2020"
function buildDateRange(job: RawJob): string {
  const start = fmtDate(job.startMonth, job.startYear);
  const end = job.endYear ? fmtDate(job.endMonth, job.endYear) : "Present";
  return start ? `${start} - ${end}` : end;
}

// A keyActivity may come as "<strong>Label:</strong> text..." or plain text.
// We split it into { highlight, text } without any HTML library.
function parseBullet(activity: string): Bullet {
  const match = activity.match(/^\s*<strong>(.*?)<\/strong>\s*(.*)$/s);
  if (match) {
    return { highlight: match[1].trim(), text: match[2].trim() };
  }
  return { highlight: "", text: activity.trim() };
}

// Derives the skills list from each experience's "stack".
// Normalizes entries like "AWS (SQS, EC2)" -> "AWS" and dedupes while keeping
// the first order of appearance.
function deriveSkills(jobs: RawJob[]): string[] {
  const seen = new Map<string, string>(); // lowercase key -> original label
  for (const job of jobs) {
    for (const project of job.projects || []) {
      if (!project.stack) continue;
      // First remove parentheses and their content ("AWS (SQS, EC2)" -> "AWS")
      // BEFORE splitting on commas, so the parenthesized group isn't split.
      const cleanStack = project.stack.replace(/\([^)]*\)/g, "");
      for (let token of cleanStack.split(",")) {
        token = token.replace(/\.$/, "").trim(); // strip trailing dot and spaces
        if (!token) continue;
        const key = token.toLowerCase();
        if (!seen.has(key)) seen.set(key, token);
      }
    }
  }
  return [...seen.values()];
}

// Derives the number of dots (0-5) from the language's textual level.
function levelToDots(level = ""): number {
  const l = level.toLowerCase();
  if (l.includes("native")) return 5;
  const cefr: Record<string, number> = { c2: 5, c1: 4, b2: 3, b1: 2, a2: 1, a1: 1 };
  const m = l.match(/\b([abc][12])\b/);
  if (m && cefr[m[1]]) return cefr[m[1]];
  if (l.includes("professional")) return 4;
  if (l.includes("intermediate")) return 3;
  if (l.includes("basic")) return 2;
  return 3;
}

export const resumeData: ResumeData = {
  personalInfo: {
    name: `${rawData.firstName} ${rawData.lastName}`,
    title: rawData.roleTitle,
    email: rawData.email,
    location: rawData.location,
    photoUrl: photo,
  },

  experience: (rawData.jobExperienceList || []).map((job): Experience => {
    const project = (job.projects && job.projects[0]) || {};
    return {
      role: job.roleTitle,
      company: job.companyName,
      dateRange: buildDateRange(job),
      description: project.projectName || "",
      stack: project.stack || "",
      bullets: (project.keyActivities || []).map(parseBullet),
    };
  }),

  education: (rawData.universityExperienceList || []).map((u): Education => ({
    degree: u.degree,
    institution: u.universityName,
  })),

  skills: deriveSkills(rawData.jobExperienceList || []),

  languages: (rawData.languagesList || []).map((lang): Language => ({
    name: lang.name,
    level: lang.level,
    dots: levelToDots(lang.level),
  })),

  social: (rawData.socialList || [])
    .filter((s) => s.show !== false)
    .map((s): Social => ({
      platform: s.name,
      // label "linkedin.com/in/nahuelgrc" derived from the URL
      label: s.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""),
      url: s.url,
    })),
};

export default resumeData;
