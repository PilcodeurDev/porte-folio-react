/**
 * The internal imports
 */
import "./Button.css";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

export default function Button({ text, href, icon, download, type, disabled }) {
  if (type === "submit") {
    return (
      <button
        type="submit"
        className={`btn absolute right-0 mx-0 ${
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
        className="btn mt-10"
      >
        {text}
        {icon && <span className="icon">{icon}</span>}
      </a>
    );
  }

  return (
    <Link to={href} className="btn ml-0 lg:ml-12 ">
      {text}
      {icon && <span className="icon">{icon}</span>}
    </Link>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string,
  icon: PropTypes.element.isRequired,
  download: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};
