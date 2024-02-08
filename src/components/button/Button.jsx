/**
 * The internal imports
 */
import "./Button.css";

import { Link } from "react-router-dom";

export default function Button({ text, href, icon, download, type, disabled }) {

  if (type === "submit") {
    return (
      <button
        type="submit"
        className={`btn absolute right-0 mx-0 my-9 whitespace-nowrap ${
          disabled && "opacity-50 pointer-events-none"
        }`}
      >
        {text}
        {icon && <span className="icon">{icon}</span>}
      </button>
    );
  }

  if (download) {
    return (
      <a
        href={href}
        download={download}
        target="_blank"
        rel="noreferrer"
        icon={icon}
        className="btn scale-110 mt-10 whitespace-nowrap"
      >
        {text}
        {icon && <span className="icon">{icon}</span>}
      </a>
    );
  }

  return (
    <Link to={href} className="btn ml-0 md:ml-10 whitespace-nowrap">
      {text}
      {icon && <span className="icon">{icon}</span>}
    </Link>
  );
}
