import { SocialIcon } from "../icons";
import type { Social } from "../../types";

// A social platform: icon + name, and the URL as a clickable link.
export default function SocialItem({ item, last }: { item: Social; last: boolean }) {
  return (
    <div className={last ? "social-item last" : "social-item"}>
      <div className="social-head">
        <SocialIcon platform={item.platform} size={14} />
        <span className="social-name">{item.platform}</span>
      </div>
      <a className="social-url" href={item.url} target="_blank" rel="noreferrer">
        {item.label}
      </a>
    </div>
  );
}
