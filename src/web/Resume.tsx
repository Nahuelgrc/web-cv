// -----------------------------------------------------------------------------
// web/Resume.tsx
// The CV as a web page (HTML). Composes the header and the sections from the
// components in ./components. The design lives in styles.css.
// -----------------------------------------------------------------------------
import Header from "./components/Header";
import ExperienceItem from "./components/ExperienceItem";
import EducationItem from "./components/EducationItem";
import LanguageBar from "./components/LanguageBar";
import SocialItem from "./components/SocialItem";
import resumeData from "../data";
import type { ResumeData } from "../types";

export default function Resume({ data = resumeData }: { data?: ResumeData }) {
  const { personalInfo, experience, education, skills, languages, social } = data;

  return (
    <div className="sheet">
      <Header info={personalInfo} />

      <div className="columns">
        {/* Main column: Experience */}
        <div className="col-left">
          <section className="section s-exp">
            <h2 className="section-title">Experience</h2>
            {experience.map((exp, i) => (
              <ExperienceItem key={i} item={exp} />
            ))}
          </section>
        </div>

        {/* Sidebar */}
        <div className="col-right">
          <section className="section s-edu">
            <h2 className="section-title">Education</h2>
            {education.map((edu, i) => (
              <EducationItem key={i} item={edu} />
            ))}
          </section>

          <section className="section s-skills">
            <h2 className="section-title">Skills</h2>
            <div className="chips">
              {skills.map((s, i) => (
                <span className="chip" key={i}>{s}</span>
              ))}
            </div>
          </section>

          <section className="section s-lang">
            <h2 className="section-title">Languages</h2>
            {languages.map((l, i) => (
              <LanguageBar key={i} item={l} />
            ))}
          </section>

          <section className="section s-find">
            <h2 className="section-title">Find me online</h2>
            {social.map((s, i) => (
              <SocialItem key={i} item={s} last={i === social.length - 1} />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
