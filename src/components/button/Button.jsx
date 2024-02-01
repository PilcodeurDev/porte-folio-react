/**
 * The external imports
 */

/**
 * The internal imports
 */
import "./Button.css";

import { Link } from "react-router-dom";

export default function Button({ text, href, icon }) {
  return (
    <Link to={href} className="btn">
      {text}
      {icon && <span className="icon">{icon}</span>}
    </Link>
  );
}
