import { CalendarIcon } from "../icons";
import Bullet from "./Bullet";
import type { Experience } from "../../types";

// A work experience: role, company, dates, description and bullets.
export default function ExperienceItem({ item }: { item: Experience }) {
  return (
    <div className="exp-item">
      <p className="exp-role">{item.role}</p>
      <p className="exp-company">{item.company}</p>
      <div className="exp-date">
        <CalendarIcon size={11} />
        <span>{item.dateRange}</span>
      </div>
      {item.description ? <p className="exp-desc">{item.description}</p> : null}
      {item.bullets.map((b, i) => (
        <Bullet key={i} highlight={b.highlight} text={b.text} />
      ))}
    </div>
  );
}
