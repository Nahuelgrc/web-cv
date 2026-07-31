import type { Bullet as BulletType } from "../../types";

// Achievement bullet: optional bold prefix (highlight) + text.
export default function Bullet({ highlight, text }: BulletType) {
  return (
    <div className="bullet">
      <span className="bullet-dot">•</span>
      <span className="bullet-body">
        {highlight ? <span className="bullet-highlight">{highlight} </span> : null}
        {text}
      </span>
    </div>
  );
}
