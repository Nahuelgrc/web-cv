import type { Education } from "../../types";

// An education entry: degree + institution.
export default function EducationItem({ item }: { item: Education }) {
  return (
    <div className="edu-item">
      <p className="edu-degree">{item.degree}</p>
      <p className="edu-institution">{item.institution}</p>
    </div>
  );
}
