/**
 * The internal imports
 */
import "./Button.css";

import { Link } from "react-router-dom";

export default function Button({ text, href, icon, download, type }) {

  if (type === "submit") {
    return (
      <button type="submit" className="btn mx-0">
        {text}
        {icon && <span className="icon">{icon}</span>}
      </button>
    )
  }

  if (download) {
    return (
      <a
      href={href}
      download={download}
      target="_blank"
      rel="noreferrer"
      icon={icon}
      className="btn scale-110 mt-10"
      >
        {text}
        {icon && <span className="icon">{icon}</span>}
      </a>
    );
  }

  return (
    <Link to={href} className="btn">
      {text}
      {icon && <span className="icon">{icon}</span>}
    </Link>
  );
}
