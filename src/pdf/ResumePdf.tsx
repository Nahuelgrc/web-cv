// -----------------------------------------------------------------------------
// pdf/ResumePdf.tsx
// PDF document (real selectable text, ATS-friendly) with @react-pdf/renderer.
// Composes the header and the sections from ./components. Mirrors the design of
// web/Resume.tsx so the downloaded file looks the same as the page.
// -----------------------------------------------------------------------------
import { Document, Page, View } from "@react-pdf/renderer";
import Header from "./components/Header";
import SectionTitle from "./components/SectionTitle";
import SkillChip from "./components/SkillChip";
import ExperienceItem from "./components/ExperienceItem";
import EducationItem from "./components/EducationItem";
import LanguageBar from "./components/LanguageBar";
import SocialItem from "./components/SocialItem";
import { styles } from "./styles";
import resumeData from "../data";
import type { ResumeData } from "../types";

export default function ResumePdf({ data = resumeData }: { data?: ResumeData }) {
  const { personalInfo, experience, education, skills, languages, social } = data;

  return (
    <Document
      author={personalInfo.name}
      title={`CV - ${personalInfo.name}`}
      subject={personalInfo.title}
    >
      <Page size="A4" style={styles.page}>
        <Header info={personalInfo} />

        <View style={styles.columns}>
          {/* Main column: Experience */}
          <View style={styles.colLeft}>
            <View style={styles.section}>
              <SectionTitle>Experience</SectionTitle>
              {experience.map((exp, i) => (
                <ExperienceItem key={i} item={exp} />
              ))}
            </View>
          </View>

          {/* Sidebar */}
          <View style={styles.colRight}>
            <View style={styles.section}>
              <SectionTitle>Education</SectionTitle>
              {education.map((edu, i) => (
                <EducationItem key={i} item={edu} />
              ))}
            </View>

            <View style={styles.section}>
              <SectionTitle>Skills</SectionTitle>
              <View style={styles.chipWrap}>
                {skills.map((s, i) => (
                  <SkillChip key={i} label={s} />
                ))}
              </View>
            </View>

            <View style={styles.section}>
              <SectionTitle>Languages</SectionTitle>
              {languages.map((l, i) => (
                <LanguageBar key={i} item={l} />
              ))}
            </View>

            <View style={styles.section}>
              <SectionTitle>Find me online</SectionTitle>
              {social.map((s, i) => (
                <SocialItem key={i} item={s} last={i === social.length - 1} />
              ))}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}
