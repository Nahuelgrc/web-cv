import { EmailIcon, LocationIcon } from "../icons";
import type { PersonalInfo } from "../../types";

// Header: name, title and contact on the left; photo centered on the right.
export default function Header({ info }: { info: PersonalInfo }) {
  return (
    <div className="header">
      <div className="header-left">
        <h1 className="name">{info.name}</h1>
        <p className="job-title">{info.title}</p>
        <div className="contact-row">
          <span className="contact-item">
            <EmailIcon size={12} />
            <span>{info.email}</span>
          </span>
          <span className="contact-item">
            <LocationIcon size={12} />
            <span>{info.location}</span>
          </span>
        </div>
      </div>
      <div className="header-right">
        {info.photoUrl ? (
          <img className="photo" src={info.photoUrl} alt={info.name} />
        ) : null}
      </div>
    </div>
  );
}
